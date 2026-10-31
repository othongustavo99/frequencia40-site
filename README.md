# Frequência40 — Site institucional

**Fase 5 — Pronto para implantação via GitHub + Cloudflare Pages**

Site responsivo da Frequência40 Desenvolvimento e Tecnologia, construído em Astro + TypeScript + CSS/SVG. Identidade visual preta, branca e dourada. Apresenta 12 serviços para o comércio local, exemplos conceituais e um catálogo digital como produto próprio em finalização.

## Rodar no computador

Requer Node.js compatível com `.node-version` (`24.11.0`), npm e VS Code.

```powershell
npm install
npm run dev
```

Abra `http://localhost:4321/`. Para compilar e visualizar o resultado estático:

```powershell
npm run build
npm run preview
```

`npm run build` executa a compilação Astro, pós-build para SEO e a auditoria de páginas obrigatórias. Os arquivos de publicação ficam em `dist/`.

## Páginas

- `/` — início, catálogo em destaque e as 12 áreas de serviços.
- `/solucoes/` — demonstrações comerciais e conceituais.
- `/orcamento/` — formulário que prepara mensagem para WhatsApp, sem backend.
- `/privacidade/` — informações sobre privacidade e contato.
- `404.html` — página personalizada.

## Publicação

**Leia `FASE-05.md` antes de publicar.** O arquivo contém as instruções completas para criar o repositório GitHub, implantar via Cloudflare Pages, configurar o domínio e verificar a URL definitiva.

Configuração Cloudflare Pages: branch `main`, comando `npm run build`, pasta `dist`, raiz do repositório. O Node é fixado via `.node-version`.

Sem um domínio oficial (`SITE_URL`), os metadados canônicos e o sitemap permanecem desativados, e o site é marcado `noindex`. Depois de adicionar o domínio no painel Cloudflare, configure `SITE_URL` na **produção** e faça novo deploy.

Teste remoto opcional:

```powershell
npm run verify:live -- https://ENDERECO-REAL.pages.dev
# Quando tiver domínio próprio e SITE_URL ativo:
npm run verify:live -- https://DOMINIO-OFICIAL.com.br --production
```

## Conteúdo e alterações futuras

- Dados comerciais e 12 serviços: `src/data/site.ts`.
- Layouts e páginas: `src/pages/`, `src/layouts/`.
- Menus e componentes: `src/components/`.
- Identidade visual: `src/styles/global.css`.
- Imagens locais: `public/images/`.
- Validações: `scripts/`.

Todos os mockups são **exemplos conceituais** e não capturas de clientes. Os serviços além do catálogo digital são propostas sob demanda. Não existem nesta fase login, banco de dados, pagamentos, analytics, cookies de publicidade ou coleta direta de formulários.
