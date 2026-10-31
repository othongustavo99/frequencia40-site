/**
 * Verifica a publicação FINAL da Frequência40 no domínio oficial.
 * Sem dependências. Node.js 22+.
 *
 * npm run verify:domain -- https://SEU-DOMINIO.com.br
 * ou SITE_URL=https://SEU-DOMINIO.com.br npm run verify:domain
 */
const raw = process.argv[2] || process.env.SITE_URL;
if (!raw) {
  console.error('Uso: npm run verify:domain -- https://SEU-DOMINIO.com.br');
  process.exit(2);
}

let origin;
try {
  const target = new URL(raw);
  if (target.protocol !== 'https:' || !target.hostname || target.pathname !== '/' || target.search || target.hash || target.username || target.password) {
    throw new Error('O endereço deve ser a origem HTTPS, sem caminho, query ou fragmento.');
  }
  origin = target.origin;
} catch (error) {
  console.error(`[Domínio] URL inválida: ${error.message}`);
  process.exit(2);
}

const pages = ['/', '/solucoes/', '/orcamento/', '/privacidade/'];
const assets = ['/favicon.svg', '/robots.txt', '/sitemap.xml', '/images/social-preview.png'];
const failures = [];
const warnings = [];
const info = (message) => console.log(`[Domínio] ${message}`);

async function request(path) {
  const response = await fetch(new URL(path, origin), {
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
    headers: { 'user-agent': 'Frequencia40-Domain-Verification/1.0' },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  if (new URL(response.url).origin !== origin) {
    failures.push(`${path}: redirecionou para outro domínio (${response.url}).`);
  }
  return response;
}

info(`Validando ${origin}`);
for (const path of pages) {
  try {
    const response = await request(path);
    const html = await response.text();
    const canonical = new URL(path, origin).href;
    if (!html.includes(`href="${canonical}" rel="canonical"`) && !html.includes(`rel="canonical" href="${canonical}"`)) {
      failures.push(`${path}: canonical não corresponde a ${canonical}. Confira SITE_URL na configuração de BUILD.`);
    }
    if (/<meta\s+name="robots"\s+content="noindex[^\"]*"/i.test(html) || /<meta\s+content="noindex[^\"]*"\s+name="robots"/i.test(html)) {
      failures.push(`${path}: contém noindex; configure SITE_URL e faça novo deploy.`);
    }
    if (!html.includes('Frequência40')) warnings.push(`${path}: marca não encontrada no HTML.`);
    info(`OK ${path} (${response.status})`);
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}
for (const path of assets) {
  try {
    const response = await request(path);
    const body = await response.text();
    if (path === '/sitemap.xml') {
      for (const page of pages) {
        if (!body.includes(`<loc>${new URL(page, origin).href}</loc>`)) {
          failures.push(`${path}: faltou ${page} no sitemap.`);
        }
      }
    }
    if (path === '/robots.txt' && !body.includes(`Sitemap: ${origin}/sitemap.xml`)) {
      failures.push('robots.txt não aponta para o sitemap do domínio final.');
    }
    info(`OK ${path} (${response.status})`);
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

if (warnings.length) {
  console.warn('\n[Avisos]');
  warnings.forEach((warning) => console.warn(` - ${warning}`));
}
if (failures.length) {
  console.error('\n[Problemas encontrados]');
  failures.forEach((failure) => console.error(` - ${failure}`));
  process.exitCode = 1;
} else {
  info('VALIDAÇÃO CONCLUÍDA. Páginas, canonical, robots e sitemap conferidos.');
  info('Antes de imprimir o QR Code, abra o domínio manualmente no celular e teste os botões de WhatsApp.');
}
