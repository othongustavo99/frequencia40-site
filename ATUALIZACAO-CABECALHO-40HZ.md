# Frequência40 — Substituição da marca do cabeçalho (40Hz)

## O que muda
A marca usada **somente no cabeçalho** de todas as páginas passa a utilizar a arte enviada (40Hz + Frequência40 + Desenvolvimento e Tecnologia + Programando o Futuro), sem cortes e com adaptação à largura da tela. O logotipo do rodapé, o favicon, os serviços e as demais páginas não foram alterados.

## Aplicação do ZIP de atualização
1. Extraia o ZIP e abra a pasta `frequencia40-site`.
2. Copie a pasta `src` e a pasta `public` para `C:\Users\othon\Documents\frequencia40-site`, mantendo a estrutura e aceitando substituir `src/components/Header.astro`.
3. No PowerShell, execute:

```powershell
cd C:\Users\othon\Documents\frequencia40-site
npm run build
npm run dev
```

4. Verifique o cabeçalho no navegador, reduzindo a janela para conferir a apresentação mobile. Não é necessário executar `npm install` novamente.

## Publicação via GitHub / Cloudflare Workers
Quando estiver satisfeito:

```powershell
git add src/components/Header.astro public/images/marca-cabecalho-560.webp public/images/marca-cabecalho-1000.webp public/images/marca-cabecalho.jpg
git commit -m "style: atualizar cabeçalho com identidade 40Hz"
git push origin main
```

O push disparará a publicação do projeto no Cloudflare conforme a configuração já existente. Se estiver utilizando cache no navegador, faça atualização forçada após o deploy.

## Arquivos alterados
- `src/components/Header.astro`: substitui o logotipo do menu superior pela nova imagem responsiva.
- `public/images/marca-cabecalho-560.webp`: versão leve para telas menores.
- `public/images/marca-cabecalho-1000.webp`: versão leve para desktop e alta densidade.
- `public/images/marca-cabecalho.jpg`: imagem original fornecida, como fallback.

Não há novas dependências.
