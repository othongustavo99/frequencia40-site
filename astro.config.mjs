import { defineConfig } from 'astro/config';

/**
 * SITE_URL deve ser informado somente após escolher o endereço público real.
 * Sem essa variável, o site compila normalmente, mas não emite URLs canônicas
 * falsas nem um sitemap com domínio fictício.
 *
 * PowerShell: $env:SITE_URL='https://SEU-DOMINIO-REAL.com.br'; npm run build
 */
const rawSite = process.env.SITE_URL?.trim();
let site;
if (rawSite) {
  const url = new URL(rawSite);
  if (url.protocol !== 'https:' || !url.hostname || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL deve ser uma origem HTTPS sem caminho, por exemplo https://seudominio.com.br');
  }
  site = url.origin;
}

export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'always',
  ...(site ? { site } : {}),
});
