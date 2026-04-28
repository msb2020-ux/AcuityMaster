const fs = require('fs');
const BASE = 'https://acuitymasters.com';
const today = new Date().toISOString().split('T')[0];
const priority = {
  'index.html':'1.0','features.html':'0.9','buy.html':'0.9',
  'trial.html':'0.8','requirements.html':'0.8','faq.html':'0.8',
  'accessories.html':'0.7','contact.html':'0.7','help.html':'0.6'
};
const freq = { 'index.html':'weekly' };

const files = fs.readdirSync('.').filter(f=>f.endsWith('.html')&&f!=='404.html').sort();
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + files.map(f=>{
    const slug = f==='index.html'?'/':'/'+f;
    return '  <url>\n    <loc>'+BASE+slug+'<\/loc>\n    <lastmod>'+today+'<\/lastmod>\n    <changefreq>'+(freq[f]||'monthly')+'<\/changefreq>\n    <priority>'+(priority[f]||'0.6')+'<\/priority>\n  <\/url>';
  }).join('\n')
  + '\n<\/urlset>';
fs.writeFileSync('sitemap.xml', xml);
console.log('sitemap.xml: '+files.length+' URLs written.');