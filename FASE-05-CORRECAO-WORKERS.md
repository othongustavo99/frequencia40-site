# Frequência40 — Correção de implantação no Cloudflare Workers

A Fase 5 foi projetada originalmente para Cloudflare Pages, mas a implantação foi criada no Cloudflare Workers (Workers Builds). A compilação Astro está concluindo; a falha ocorre na etapa de deploy por falta da configuração Wrangler dos arquivos estáticos.

## Alteração técnica

Adição de `wrangler.jsonc` na raiz do projeto (`ao lado de package.json`).

- `name`: `frequencia40-site`, nome confirmado pelo caminho do projeto mostrado no painel Cloudflare.
- `assets.directory`: `./dist`, onde o Astro gera o site estático.
- `assets.not_found_handling`: `404-page`, para utilizar a página de erro personalizada.
- `assets.html_handling`: `auto-trailing-slash`, compatível com os caminhos gerados pelo Astro (`/solucoes/`, `/orcamento/` etc.).

## Como aplicar

1. Extraia o ZIP de atualização e copie o arquivo `frequencia40-site/wrangler.jsonc` para `C:\Users\othon\Documents\frequencia40-site\wrangler.jsonc`. Não o coloque em `src/` nem em `public/`.
2. No PowerShell, dentro da pasta do projeto, execute:

```powershell
git add wrangler.jsonc
git commit -m "fix: configurar deploy estatico no Cloudflare Workers"
git push origin main
```

3. No painel Cloudflare, abra **Workers & Pages > frequencia40-site > Settings > Build**. Confirme:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Root directory: raiz do repositório
   - Branch: `main`
4. O novo push deve iniciar outra compilação e implantação. Se não iniciar, use a opção de Retry build ou Redeploy com as configurações atuais.
5. No resultado, confira a URL publicada fornecida pelo Cloudflare, e teste `/`, `/solucoes/`, `/orcamento/`, `/privacidade/`.

## Aviso SEO

A linha `[SEO] SITE_URL não informado` é apenas um aviso enquanto não existe domínio definitivo. Ela não deve bloquear o deploy. O site permanece marcado como `noindex` até cadastrar a variável real `SITE_URL` e reconstruir.

## Alternativa

Se desejar aderir à arquitetura original de hospedagem no Cloudflare Pages, crie um projeto Pages (não Worker) conectado ao mesmo repositório, com Build command `npm run build`, output `dist` e branch `main`. Nesta alternativa não é necessário Wrangler, mas o Worker existente fica separado.

Nenhum código de interface, arquivo de conteúdo ou serviço foi alterado nesta correção.
