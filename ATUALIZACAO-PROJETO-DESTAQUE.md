# Atualização — Projeto em destaque (duas telas)

Substituição da apresentação anterior do catálogo na seção `#catalogo` da página inicial por duas imagens fornecidas pelo usuário.

- **Vitrine do cliente**: `public/images/catalogo-vitrine-cliente.webp`
- **Painel administrativo**: `public/images/catalogo-painel-administrativo.webp`
- **Página atualizada**: `src/pages/index.astro`

Os dados da demonstração do painel são fictícios. As imagens mantêm sua proporção original e podem ser ampliadas abrindo-as em uma nova aba. Os demais componentes, inclusive o cabeçalho 40Hz, foram preservados.

## Aplicação da atualização

Copie o conteúdo de `frequencia40-site/` deste ZIP para a pasta homônima do seu projeto, confirmando substituição. Mantenha a estrutura de pastas.

```powershell
npm run build
npm run dev
```

Após conferir localmente, publique usando:

```powershell
git add .
git commit -m "style: atualizar telas do projeto em destaque"
git push origin main
```

O Cloudflare Workers publicará a atualização através do pipeline GitHub existente.
