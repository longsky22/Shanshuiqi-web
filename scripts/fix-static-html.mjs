import fs from 'node:fs';

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.error('fix-static-html: missing file', file);
  process.exit(1);
}

let html = fs.readFileSync(file, 'utf8');

// Normalize any ".../assets/" prefix to root "/assets/"
html = html.replace(/((?:src|href)=["'])([^"']*\/)?assets\//g, '$1/assets/');

// Replace unresolved title placeholder for static hosts
html = html.replace(
  /<title>\{\{appName\}\}<\/title>/g,
  '<title>山东山水齐建设工程有限公司</title>',
);

const marker = 'data-ssq-static-placeholder-fix';
const patch = `<script ${marker}>(function(){function t(v){return typeof v==="string"&&v.indexOf("{{")!==-1;}if(t(window.__BASENAME__)||!window.__BASENAME__)window.__BASENAME__="/";if(t(window.appId))window.appId="";if(window._appInfo&&t(window._appInfo.name)){window._appInfo={name:"山东山水齐建设工程有限公司",avatar:"/logo.svg",description:"机电安装与建筑环境系统服务商"};}if(t(document.title)||!document.title)document.title="山东山水齐建设工程有限公司";})();</script>`;

if (!html.includes(marker)) {
  html = html.replace('</head>', `${patch}</head>`);
}

fs.writeFileSync(file, html);
console.log('Fixed static HTML:', file);
