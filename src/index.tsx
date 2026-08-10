import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AppContainer, ErrorRender } from "@lark-apaas/client-toolkit-lite";
import App from "./app";
import "./index.css";

declare global {
  interface Window {
    __BASENAME__?: string;
    appId?: string;
    _appInfo?: { name?: string; avatar?: string; description?: string };
  }
}

/** EdgeOne 等静态托管不会替换妙搭 HBS 占位符，需降级为可用默认值，否则 basename 错误会白屏 */
function sanitizeDeployPlaceholders() {
  const isTpl = (v: unknown) => typeof v === "string" && v.includes("{{");

  if (isTpl(window.__BASENAME__) || !window.__BASENAME__) {
    window.__BASENAME__ = "/";
  }
  if (isTpl(window.appId)) {
    window.appId = "";
  }
  if (window._appInfo && isTpl(window._appInfo.name)) {
    window._appInfo = {
      name: "山东山水齐建设工程有限公司",
      avatar: "/logo.svg",
      description: "机电安装与建筑环境系统服务商",
    };
  }
  if (isTpl(document.title) || !document.title.trim() || document.title === "应用标题") {
    document.title = "山东山水齐建设工程有限公司";
  }
}

function resolveBasename() {
  sanitizeDeployPlaceholders();
  const fromWindow = window.__BASENAME__;
  const fromEnv = process.env.CLIENT_BASE_PATH;
  const raw = fromWindow || fromEnv || "/";
  if (!raw || String(raw).includes("{{")) return "/";
  return raw;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={resolveBasename()}>
      <AppContainer>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorRender error={error} resetErrorBoundary={resetErrorBoundary} />
          )}
        >
          <App />
        </ErrorBoundary>
      </AppContainer>
    </BrowserRouter>
  </StrictMode>,
);
