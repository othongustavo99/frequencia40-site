# Fase 7 — Páginas individuais dos 12 serviços

Esta etapa parte do ZIP `frequencia40-site(2).zip` recebido na conversa.

## Mudanças

- Os 12 cartões da página inicial são links completos para páginas de serviço próprias, em `/servicos/<slug>/`.
- As páginas trazem apresentação comercial, benefícios, aplicações em segmentos diferentes, demonstração visual, possibilidades de projeto, etapas de implementação, perguntas frequentes e botões de contato.
- Os links na lista de "Também desenvolvemos", na página de Demonstrações, também abrem estas páginas.
- Lojas virtuais e aplicativos usam exatamente as duas capturas reais do projeto (cliente e administrador) que já estavam no ZIP entregue.
- Os outros 11 serviços têm visuais conceituais próprios em SVG local; não são prints de sistemas já entregues.
- O botão de proposta de cada serviço aponta para o formulário existente e pré-seleciona esse serviço.
- O gerador de sitemap continua funcionando automaticamente. O script de verificação pós-build agora exige as 12 rotas.

## Arquivos modificados

- `src/pages/index.astro`
- `src/pages/solucoes/index.astro`
- `scripts/verify-release.mjs`

## Arquivos criados

- `src/pages/servicos/[slug].astro` (um template Astro cria as 12 rotas estáticas)
- `src/data/service-pages.ts` (todo o conteúdo editável das páginas)
- `public/images/servicos/*.svg` (11 ilustrações vetoriais próprias)
- `FASE-07-PAGINAS-DOS-SERVICOS.md`

## Instalação

1. Extraia o ZIP **de atualização** e copie seus arquivos para dentro da pasta raiz do projeto `frequencia40-site`, mantendo a estrutura.
2. Execute `npm run build` e confirme que 17 páginas de conteúdo ou mais, além do 404, foram geradas (as 12 novas ficam em `/servicos/`).
3. Execute `npm run dev` e teste um cartão na home. O link deve abrir o conteúdo do serviço, não o formulário.
4. Confira a navegação em Android e desktop; teste o botão "Solicitar proposta" nas páginas.
5. Faça `git add . && git commit -m "feat: paginas individuais para os 12 servicos" && git push origin main`.

## Publicação

O projeto deve continuar hospedado no Cloudflare Workers com `npm run build` / `npx wrangler deploy` e `SITE_URL=https://frequencia40.com.br` definidos no ambiente de build. A URL do QR Code do cartão não muda.

## Nota de transparência

As interfaces gráficas dos outros 11 serviços são ilustrações conceituais. Não são clientes ou resultados reais. Recursos sujeitos a escopo e análise de viabilidade.
