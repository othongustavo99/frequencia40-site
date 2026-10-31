# Frequência40 — Fase 4: revisão de publicação

Esta atualização parte da **Fase 3 já aplicada**. Mantém as demonstrações conceituais, o catálogo em destaque, o design preto e dourado e os 12 serviços.

## Novidades

- **Página `/orcamento/`** com formulário que monta uma mensagem localmente no navegador e abre o WhatsApp. Não salva os campos em banco, não exige backend e não envia o formulário por rede. Os serviços da home agora levam ao formulário com a categoria preenchida.
- **Página `/privacidade/`** explicando o fluxo de contato e o possível processamento de registros técnicos pela hospedagem.
- **Página 404 personalizada**, sem indexação.
- **SEO por página:** títulos e descrições próprios, Open Graph e Twitter Card, dados estruturados na home e URLs canônicas condicionais ao domínio real.
- **Prévia de link em PNG** 1200 × 630, gerada da arte da marca; ícone para atalhos em dispositivos Apple.
- **SEO só com URL confirmada:** o sitemap é criado automaticamente no pós-build quando `SITE_URL` recebe uma origem HTTPS verdadeira. Sem ela, o projeto compila, não inventa URLs e mantém as páginas com `noindex` para evitar indexação acidental de versões de teste.
- **Melhorias acessíveis:** menu móvel fecha ao clicar fora, foco de teclado reforçado, rolagem lateral evitada e animações respeitando movimento reduzido.
- **Cabeçalhos opcionais de segurança e cache:** `public/_headers` para serviços compatíveis, como Cloudflare Pages e Netlify.

## Atualização no Windows

1. Extraia o ZIP `Frequencia40_Fase04_Arquivos_Atualizados.zip`.
2. Copie o conteúdo de `frequencia40-site` para o projeto, mantendo as pastas e sobrescrevendo arquivos de mesmo nome.
3. Rode no terminal PowerShell:

```powershell
npm install
npm run build
npm run dev
```

Abra `/`, `/solucoes/`, `/orcamento/` e `/privacidade/` em `http://localhost:4321/`.

## Publicação em Cloudflare Pages ou Netlify

### Antes de escolher domínio

- Conecte um repositório Git ao provedor.
- Comando de build: `npm run build`
- Pasta de saída: `dist`
- Node.js: 22.23.4 ou superior, de preferência 24 LTS.
- Não preencha `SITE_URL` com endereço imaginário. O site funciona sem essa variável.

### Depois de definir o endereço real

1. Registre/associe o domínio ao projeto e ative HTTPS.
2. No painel de variáveis de ambiente **de build**, defina `SITE_URL` com a URL oficial, por exemplo `https://dominio-que-voce-possui.com.br` (substitua pelo endereço realmente adquirido). **Sem barra depois do domínio.**
3. Refaça o deploy. O Astro emitirá canonical/OG absolutos e o pós-build gerará `dist/sitemap.xml` e a linha `Sitemap:` em `dist/robots.txt`.
4. Abra o endereço em desktop e Android; teste todos os botões, `https://DOMINIO/sitemap.xml`, a imagem de prévia e a página 404.
5. **Somente após a URL definitiva estar funcionando** gere o QR Code para imprimir no cartão.

Para testar localmente o build com um endereço que você já controla:

```powershell
$env:SITE_URL = 'https://SEU-DOMINIO-REAL.com.br'
npm run build
Remove-Item Env:SITE_URL
```

`SITE_URL` precisa ser uma origem HTTPS válida, sem caminho nem parâmetros. Esta configuração não cria um domínio nem publica os arquivos automaticamente.

## Privacidade e limites

- O formulário organiza informações no navegador. O envio somente ocorre quando a pessoa confirma no WhatsApp.
- Não instalamos Google Analytics, pixels ou cookies de rastreamento.
- A hospedagem poderá manter logs de acesso; a política deve ser revisada quando o provedor e quaisquer novas integrações forem definidos.
- Exemplos visuais são ilustrações com dados fictícios; não representam clientes ou sistemas já implantados.
- O catálogo é o produto próprio em finalização; demais categorias são serviços sob demanda.

## Teste final recomendado

```powershell
npm run build
npm run preview
```

Abrir o preview, percorrer menu no celular, usar o formulário de orçamento, conferir navegação por teclado e testar numa conexão 4G. Antes de declarar uma nota de desempenho, rode Lighthouse/PageSpeed na **URL publicada**: não é possível garantir pontuação sem medir.
