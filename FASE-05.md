# Frequência40 — Fase 5: publicação com GitHub + Cloudflare Pages

**Objetivo:** publicar o site estático sem comprometer o visual, a velocidade e os exemplos conceituais das fases anteriores. O domínio e o QR Code impresso só serão definidos quando o endereço oficial estiver ativo.

## 1. Atualizar o projeto no Windows

Copie os arquivos deste ZIP **sobre o projeto existente**, preservando a árvore de pastas. Depois, no PowerShell dentro de `C:\Users\othon\Documents\frequencia40-site`:

```powershell
npm install
npm run build
npm run preview
```

O `npm run build` agora compila, gera `robots.txt` e sitemap quando houver domínio, e audita as páginas obrigatórias. Se algum teste falhar, não publique. O `preview` usa o resultado compilado. Feche com `Ctrl+C`.

## 2. Criar um repositório próprio no GitHub

Crie um **repositório vazio** chamado `frequencia40-site` em sua conta GitHub. Não marque criação automática de README, `.gitignore` ou licença, pois o projeto já contém arquivos próprios.

Execute no diretório raiz do projeto (aquele que contém `package.json`):

```powershell
git init
git branch -M main
git add .
git commit -m "feat: site Frequência40 pronto para publicação"
git remote add origin https://github.com/othongustavo99/frequencia40-site.git
git push -u origin main
```

**Atenção:** se o repositório já possui um remoto configurado, verifique `git remote -v` antes de executar `git remote add origin`. Não use `git push --force`; ele pode apagar histórico remoto. Os arquivos `node_modules/`, `dist/`, `.astro/` e `.env*` são ignorados. Antes do commit, pode verificar com `git status` se há arquivos indevidos.

Opcional: mantenha o repositório **privado**, se preferir. Cloudflare Pages aceita repositórios privados com autorização à conta. A automação `.github/workflows/build.yml` verifica o build em cada push e em pull requests para a branch principal.

## 3. Publicar no Cloudflare Pages

1. Entre em `https://dash.cloudflare.com/`.
2. Vá a **Workers & Pages** e escolha criar uma aplicação **Pages** conectada ao **GitHub**. Os rótulos podem variar ligeiramente no painel.
3. Autorize o acesso ao repositório `frequencia40-site` e escolha-o.
4. Configure:

| Campo | Valor |
| --- | --- |
| Branch de produção | `main` |
| Framework | `Astro` (ou preset vazio) |
| Comando de build | `npm run build` |
| Diretório de saída | `dist` |
| Diretório raiz | raiz do repositório, sem subpasta |
| Versão do Node | `.node-version` fixa `24.11.0` |
| `SITE_URL` | **NÃO** configurar por enquanto |

5. Salve e publique. A Cloudflare informa uma URL inicial `https://<nome-disponivel>.pages.dev/` definida pela plataforma.
6. Teste a home, `/solucoes/`, `/orcamento/` e `/privacidade/` pela URL pública. Sem `SITE_URL`, as páginas ficam temporariamente com `noindex` — de propósito, para não indexar o endereço de teste.

Para conferir a URL provisória, no seu terminal:

```powershell
npm run verify:live -- https://SEU-PROJETO.pages.dev
```

Troque `SEU-PROJETO` pelo nome real informado pela Cloudflare; **não adivinhe** o endereço. Para atualizações futuras, basta repetir `git add .`, `git commit` e `git push`.

## 4. Domínio definitivo e SEO

1. Escolha e registre um domínio próprio (por exemplo, uma alternativa sob `.com.br`, **sem presumir disponibilidade**).
2. Dentro do projeto no Cloudflare Pages, abra **Custom domains / Domínios personalizados**, adicione o domínio e siga as instruções de DNS. Para domínio raiz (`exemplo.com.br`), a Cloudflare exige administrar a zona DNS com seus nameservers; para subdomínio, geralmente é possível apontar via CNAME.
3. Confirme que o domínio já abre o site via **HTTPS**, sem alerta de certificado.
4. No painel do projeto, em **Settings > Environment variables**, cadastre **somente no ambiente de produção**:

   `SITE_URL` = `https://DOMINIO-OFICIAL-QUE-VOCE-REGISTROU.com.br`

   Use a origem real, sem barra final, caminho ou parâmetros. Não inclua `www` a menos que essa seja a URL canônica escolhida.
5. **Refaça a publicação** (redeploy da branch principal): as variáveis de build entram em vigor numa nova compilação.
6. Confira `/sitemap.xml`, `/robots.txt`, a imagem `/images/social-preview.png` e se a home tem canonical e não está mais `noindex`.

Rode a verificação de produção com seu endereço verdadeiro:

```powershell
npm run verify:live -- https://SEU-DOMINIO-REAL.com.br --production
```

**Importante:** a URL temporária `pages.dev` pode continuar acessível mesmo após associar domínio. Para concentrar tráfego no domínio oficial, configure o redirecionamento indicado em `https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/`, se desejar.

## 5. Verificação final antes do cartão

- [ ] URL oficial abre com HTTPS no computador e no smartphone.
- [ ] Menu, links, demonstrações e 12 serviços funcionam.
- [ ] Formulário abre o WhatsApp com mensagem adequada, sem enviar automaticamente.
- [ ] Páginas `/solucoes/`, `/orcamento/`, `/privacidade/` funcionam.
- [ ] Sitemap e canonical contêm **a mesma URL oficial**.
- [ ] Medidas de desempenho reais verificadas no PageSpeed Insights (mobile e desktop).
- [ ] QR Code será gerado para **a URL definitiva exata** e testado com câmera antes da impressão.

Ainda **não** incluímos um QR Code final, pois não há domínio confirmado. Não imprima o código existente no cartão sem verificar a URL de destino. Quando informar o endereço real, poderemos gerar um QR Code de alta resolução e versão vetorial para impressão, com a margem de segurança adequada.

## Arquivos adicionados nesta fase

- `.node-version` — fixa uma versão do Node compatível com Astro e Cloudflare Pages.
- `.github/workflows/build.yml` — verifica a compilação em novos commits/PRs.
- `scripts/verify-release.mjs` — auditoria local automática da pasta `dist`.
- `scripts/check-live.mjs` — verificação da URL publicada.
- `FASE-05.md` — este guia de implantação.

Modificados: `package.json` e `README.md`. **Nenhuma dependência nova**, nenhum serviço pago obrigatório para a primeira publicação e nenhuma alteração no layout da Fase 4.
