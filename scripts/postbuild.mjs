/**
 * Gera sitemap.xml e atualiza robots.txt somente se SITE_URL for real.
 * Evita publicar um endereço fictício enquanto o domínio não está escolhido.
 * Node.js padrão, sem dependências adicionais.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = process.env.SITE_URL?.trim();
if (!origin) {
  console.log('[SEO] SITE_URL não informado: sitemap/canonical serão ativados na publicação.');
  process.exit(0);
}
const url = new URL(origin);
if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('SITE_URL precisa ser uma origem HTTPS sem caminho.');
}

async function pagesIn(dir) {
  const results = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...await pagesIn(full));
    else if (entry.isFile() && entry.name === 'index.html') results.push(full);
  }
  return results;
}

const pages = (await pagesIn(dist)).map((full) => {
  const rel = relative(dist, full).split(sep).join('/').replace(/index\.html$/, '');
  const address = new URL(`/${rel}`, url).href;
  return `<url><loc>${address.replace(/&/g, '&amp;')}</loc></url>`;
}).sort();
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.join('\n')}\n</urlset>\n`;
await writeFile(join(dist, 'sitemap.xml'), xml, 'utf8');
const robotsPath = join(dist, 'robots.txt');
const prev = await readFile(robotsPath, 'utf8');
await writeFile(robotsPath, `${prev.trim()}\n\nSitemap: ${new URL('/sitemap.xml', url).href}\n`, 'utf8');
console.log(`[SEO] Sitemap: ${pages.length} página(s), origem: ${url.origin}`);
