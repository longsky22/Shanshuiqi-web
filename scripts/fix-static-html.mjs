import fs from 'node:fs';

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.error('fix-static-html: missing file', file);
  process.exit(1);
}

let html = fs.readFileSync(file, 'utf8');

// Normalize any ".../assets/" prefix to root "/assets/"
html = html.replace(/((?:src|href)=["'])([^"']*\/)?assets\//g, '$1/assets/');

const replacements = {
  appName: '山东山水齐建设工程有限公司',
  appDescription: '机电安装与建筑环境系统服务商',
  appAvatar: '/logo.svg',
  appId: '',
  userId: '',
  tenantId: '',
  userName: '',
  csrfToken: '',
  environment: 'online',
  basename: '/',
};

// Replace {{{key}}} then {{key}}
for (const [key, value] of Object.entries(replacements)) {
  html = html.replaceAll(`{{{${key}}}}`, value);
  html = html.replaceAll(`{{${key}}}`, value);
}

// Absolute safety: wipe any leftover mustache tokens
html = html.replace(/\{\{\{?[^}]+\}\}\}?/g, '');

const marker = 'data-ssq-static-placeholder-fix';
const patch = `<script ${marker}>window.__BASENAME__="/";window.appId=window.appId||"";window.ENVIRONMENT=window.ENVIRONMENT||"online";document.title=document.title&&document.title.trim()?document.title:"山东山水齐建设工程有限公司";</script>`;

if (!html.includes(marker)) {
  html = html.replace('</head>', `${patch}</head>`);
}

if (!html.includes('<title>')) {
  html = html.replace('<head>', '<head><title>山东山水齐建设工程有限公司</title>');
}

fs.writeFileSync(file, html);
console.log('Fixed static HTML:', file);
