/**
 * Auditoria pós-build: confirma que as páginas essenciais e o SEO esperado
 * estão presentes em dist/ antes de enviar os arquivos para a hospedagem.
 * Executado automaticamente por `npm run build`.
 */
import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const requiredFiles = [
  'index.html', 'solucoes/index.html', 'orcamento/index.html',
  'privacidade/index.html', '404.html', 'favicon.svg',
  'images/social-preview.png', '_headers', 'robots.txt',
];
const errors = [];
const checkFile = async (name) => {
  try { await access(join(dist, name)); }
  catch { errors.push(`Arquivo ausente: dist/${name}`); }
};
await Promise.all(requiredFiles.map(checkFile));

let home = '';
try { home = await readFile(join(dist, 'index.html'), 'utf8'); }
catch { /* Já registrado acima */ }
if (home && !home.includes('lang="pt-BR"')) errors.push('Página inicial sem lang="pt-BR".');
if (home && !home.includes('Frequência40')) errors.push('Página inicial sem nome da marca.');

const siteRaw = process.env.SITE_URL?.trim();
if (siteRaw && home) {
  const origin = new URL(siteRaw).origin;
  if (!home.includes(`rel="canonical" href="${origin}/"`) &&
      !home.includes(`href="${origin}/" rel="canonical"`)) {
    errors.push('Canonical da home não aponta para SITE_URL.');
  }
  if (/content="noindex, nofollow"/.test(home)) errors.push('Home está noindex apesar de SITE_URL configurado.');
  await checkFile('sitemap.xml');
  try {
    const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
    for (const pathname of ['/', '/solucoes/', '/orcamento/', '/privacidade/']) {
      if (!sitemap.includes(`<loc>${origin}${pathname}</loc>`)) {
        errors.push(`Sitemap sem ${pathname}`);
      }
    }
    const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
    if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push('robots.txt não aponta para sitemap.');
  } catch { /* Capturado por checkFile */ }
} else if (home && !/content="noindex, nofollow"/.test(home)) {
  errors.push('Sem SITE_URL a home deve permanecer noindex até a URL oficial estar definida.');
}

if (errors.length) {
  console.error('\n[Publicação] Problemas encontrados:');
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exitCode = 1;
} else {
  console.log(`[Publicação] OK: ${requiredFiles.length} arquivos essenciais verificados.`);
  console.log(siteRaw
    ? '[Publicação] SEO de produção ativo: canonical e sitemap conferidos.'
    : '[Publicação] Modo de pré-publicação: sem domínio definitivo, noindex ativo.');
}
