#!/bin/bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUTPUT="$ROOT/dist/output"
OUTPUT_RESOURCE="$ROOT/dist/output_resource"
OUTPUT_STATIC="$ROOT/dist/output_static"

# ── 路径策略（兼容 EdgeOne Pages 静态托管）────────────────────────────
# 1) 资源 CDN：仅当是 http(s) URL 时使用；否则强制 "/"
CDN_RAW="${MIAODA_RESOURCE_CDN_PREFIX-}"
if [[ "$CDN_RAW" =~ ^https?:// ]]; then
  export ASSETS_CDN_PATH="$CDN_RAW"
else
  export ASSETS_CDN_PATH="/"
fi

# 2) 路由 basename：EdgeOne 挂在站点根，默认不用 /app/<id>
if [ "${MIAODA_USE_APP_BASE:-0}" = "1" ] && [ -n "${MIAODA_APP_ID:-}" ]; then
  export CLIENT_BASE_PATH="/app/$MIAODA_APP_ID"
else
  export CLIENT_BASE_PATH=""
fi

export STATIC_ASSETS_BASE_URL="${MIAODA_STATIC_CDN_PREFIX-}"
export NODE_ENV="${NODE_ENV:-production}"

echo "Build env:"
echo "  ASSETS_CDN_PATH=$ASSETS_CDN_PATH"
echo "  CLIENT_BASE_PATH=${CLIENT_BASE_PATH:-/}"
echo "  node: $(node -v)"

rm -rf "$ROOT/dist"

# 1. Vite 构建（强制 base=/）
# 使用标准 Vite 6（rollup），不再依赖 rolldown 原生包 / 妙搭 preset
npx vite build --outDir "$ROOT/dist/client" --emptyOutDir --base /

# 2. HTML + public 静态文件 → dist/output/
mkdir -p "$OUTPUT"
find "$ROOT/dist/client" -maxdepth 1 \( -name '*.html' -o -name 'routes.json' \) -exec cp {} "$OUTPUT/" \;
find "$ROOT/dist/client" -maxdepth 1 -type f ! -name '*.html' ! -name 'routes.json' -exec cp {} "$OUTPUT/" \;
for d in "$ROOT/dist/client"/*/; do
  [ -d "$d" ] || continue
  name="$(basename "$d")"
  if [ "$name" != "assets" ]; then
    cp -R "$d" "$OUTPUT/"
  fi
done

# 3. assets 放到 output/assets（与 index.html 同级，EdgeOne 才能访问 /assets/*）
if [ -d "$ROOT/dist/client/assets" ]; then
  mkdir -p "$OUTPUT/assets" "$OUTPUT_RESOURCE"
  cp -R "$ROOT/dist/client/assets/." "$OUTPUT/assets/"
  cp -R "$ROOT/dist/client/assets" "$OUTPUT_RESOURCE/"
fi

# 4. 纠正 HTML 资源路径 + 静态托管占位符
node "$ROOT/scripts/fix-static-html.mjs" "$OUTPUT/index.html"

# 4.1 EdgeOne dropAdapt 只把 output/index.html 提升到 /index.html，
#     同时把 assets/logo 等提升到 dist 根，保证 /assets/*、/logo.svg 可访问
cp "$OUTPUT/index.html" "$ROOT/dist/index.html"
mkdir -p "$ROOT/dist/assets"
cp -R "$OUTPUT/assets/." "$ROOT/dist/assets/"
find "$OUTPUT" -maxdepth 1 -type f ! -name 'index.html' ! -name 'routes.json' -exec cp {} "$ROOT/dist/" \;
for d in "$OUTPUT"/*/; do
  [ -d "$d" ] || continue
  name="$(basename "$d")"
  if [ "$name" != "assets" ]; then
    rm -rf "$ROOT/dist/$name"
    cp -R "$d" "$ROOT/dist/$name"
  fi
done

# 5. shared/static
if [ -d "$ROOT/shared/static" ]; then
  mkdir -p "$OUTPUT_STATIC"
  find "$ROOT/shared/static" -type f \
    ! -name '*.ts' ! -name '*.tsx' ! -name '*.js' ! -name '*.jsx' \
    -print0 | while IFS= read -r -d '' file; do
      rel="${file#$ROOT/shared/static/}"
      mkdir -p "$OUTPUT_STATIC/$(dirname "$rel")"
      cp "$file" "$OUTPUT_STATIC/$rel"
    done
fi

# 6. capabilities
if [ -d "$ROOT/shared/capabilities" ]; then
  mkdir -p "$ROOT/dist/output_capabilities"
  cp -R "$ROOT/shared/capabilities/." "$ROOT/dist/output_capabilities/"
fi

rm -rf "$ROOT/dist/client"

echo "Build complete"
echo "  HTML+assets  → dist/output/"
[ -d "$OUTPUT_RESOURCE" ] && echo "  Resource     → dist/output_resource/" || true
[ -d "$OUTPUT_STATIC" ] && echo "  Static       → dist/output_static/" || true

if [ ! -f "$OUTPUT/index.html" ]; then
  echo "ERROR: missing dist/output/index.html" >&2
  exit 1
fi
if ! grep -q '/assets/' "$OUTPUT/index.html"; then
  echo "ERROR: no /assets/ references in index.html" >&2
  exit 1
fi
if ! ls "$OUTPUT/assets"/*.js >/dev/null 2>&1; then
  echo "ERROR: dist/output/assets missing js" >&2
  exit 1
fi
echo "  OK: output layout ready for EdgeOne"
