import fs from 'node:fs';

const html = fs.readFileSync('dist/output/index.html', 'utf8');
const re = /(?:src|href)="([^"]+)"/g;
let m;
const urls = [];
while ((m = re.exec(html))) {
  if (/assets|\.js|\.css/.test(m[1])) urls.push(m[1]);
}
console.log(urls.join('\n'));
console.log((html.match(/<title>.*?<\/title>/) || [])[0]);
console.log('patch=', html.includes('data-ssq-static-placeholder-fix'));
