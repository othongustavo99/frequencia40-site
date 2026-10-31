/**
 * Auditoria remota opcional depois do deploy.
 * Uso: npm run verify:live -- https://seu-site.pages.dev
 *      npm run verify:live -- https://seudominio.com.br --production
 * O teste de produção exige SEO ativo e sitemap; use apenas após definir SITE_URL.
 */
const input = process.argv.find((arg) => arg.startsWith('https://'));
const production = process.argv.includes('--production');
if (!input) {
  console.error('Informe uma URL real: npm run verify:live -- https://SEU-ENDERECO');
  process.exit(1);
}
const site = new URL(input);
if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash) {
  console.error('Informe a origem HTTPS, sem caminhos, parâmetros ou fragmentos.');
  process.exit(1);
}
const errors = [];
const paths = ['/', '/solucoes/', '/orcamento/', '/privacidade/', '/favicon.svg'];
for (const path of paths) {
  const url = new URL(path, site);
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(12000), redirect: 'follow' });
    const html = path.endsWith('/') ? await response.text() : '';
    if (!response.ok) errors.push(`${path}: HTTP ${response.status}`);
    if (html && !html.includes('Frequência40')) errors.push(`${path}: marca não localizada na página.`);
    if (production && html && path === '/') {
      if (/content="noindex, nofollow"/.test(html)) errors.push('SEO: página de produção está noindex.');
      if (!html.includes(`href="${site.origin}/"`)) errors.push('SEO: canonical da home não encontrado.');
    }
    console.log(`[Site] ${path}: HTTP ${response.status}`);
  } catch (error) { errors.push(`${path}: ${error.message}`); }
}
if (production) {
  const sitemap = new URL('/sitemap.xml', site);
  try {
    const response = await fetch(sitemap, { signal: AbortSignal.timeout(12000) });
    if (!response.ok) errors.push(`sitemap.xml: HTTP ${response.status}`);
    else {
      const xml = await response.text();
      if (!xml.includes(`<loc>${site.origin}/</loc>`)) errors.push('Sitemap sem URL principal.');
    }
    console.log(`[Site] /sitemap.xml: HTTP ${response.status}`);
  } catch (error) { errors.push(`sitemap.xml: ${error.message}`); }
}
if (errors.length) {
  errors.forEach((message) => console.error(`[FALHA] ${message}`));
  process.exitCode = 1;
} else console.log('[Site] Verificação remota concluída sem erros.');
