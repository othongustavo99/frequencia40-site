# Frequência40 — Correção dos layouts móveis

## Arquivos alterados

- `src/pages/index.astro`
  - Home (hero): reposicionamento da imagem horizontal da vitrine e da tela ADM, dentro da área visual, com selo e legenda separados.
  - Projeto em destaque: restauração das **duas telas verticais** (`catalogo-vitrine-cliente.webp` e `catalogo-painel-administrativo.webp`) com tamanhos alinhados, lado a lado, inclusive em celulares.
  - Proporção intrínseca correta da imagem horizontal (`1536 × 1152`) para evitar deslocamentos durante o carregamento.
- `src/components/Header.astro`
  - Fundo do cabeçalho móvel opaco para evitar vazamento visual do conteúdo enquanto a página rola.

## Imagens

Nenhuma imagem foi removida. A imagem horizontal `catalogo-vitrine-premium.png` continua sendo usada na apresentação principal da home. As capturas verticais já existentes no projeto foram recuperadas para o bloco “Projeto em destaque”.

## Aplicar

Copiar a estrutura de `src/` deste ZIP sobre a pasta do projeto, preservando os diretórios. Em seguida:

```powershell
npm run build
npm run dev
```

Para publicar após conferir a tela do celular:

```powershell
git add .
git commit -m "fix: ajustar composicao mobile e telas verticais do catalogo"
git push origin main
```

Verificar a home no celular com largura de 320 a 430 px e também no desktop, usando uma atualização forçada do navegador, se necessário.
