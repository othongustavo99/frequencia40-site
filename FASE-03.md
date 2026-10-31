# Frequência40 — Fase 3: demonstrações conceituais profissionais

## Escopo desta entrega

A Fase 2 é a base. Esta etapa acrescenta **uma página pública `/solucoes/`** com quatro demonstrações conceituais detalhadas, geradas em Astro/HTML/CSS, sem prints e sem bibliotecas de animação:

1. **Catálogo e loja digital:** apresentação de uma vitrine fictícia em desktop + celular, com produtos de exemplo;
2. **Painel gerencial:** dados fictícios, gráfico demonstrativo, lista de produtos e pedidos;
3. **Atendimento e automação:** fluxo conceitual de consulta ao catálogo, integração e encaminhamento; chat fictício de demonstração;
4. **Agendamento:** calendário e disponibilidade simulados.

Cada exemplo explica cenários de uso, funcionalidades possíveis, público-alvo e oferece um CTA contextual para solicitar orçamento no WhatsApp.

A nova página também mostra as **12 categorias de serviços** em um índice comercial e contém perguntas frequentes, incluindo uma explicação transparente de que os exemplos **não são produtos prontos nem projetos de clientes**.

## Arquivos adicionados

- `src/components/ConceptPreview.astro` — quatro mockups de interface originais feitos em HTML/CSS/SVG, sem bibliotecas de UI;
- `src/pages/solucoes/index.astro` — página de demonstrações com os quatro cenários;
- `FASE-03.md` — orientações desta entrega.

## Arquivos atualizados

- `src/components/BrandLogo.astro` — logotipo volta corretamente à home também nas subpáginas;
- `src/components/Header.astro` — menu com caminho absoluto para as seções da home e a nova página;
- `src/components/Footer.astro` — links corretos entre páginas;
- `src/components/ExperienceShowcase.astro` — convite à página com interfaces em detalhe;
- `src/pages/index.astro` — link para a nova demonstração junto aos serviços;
- `src/styles/global.css` — margem de rolagem de âncoras para cabeçalho + subnavegação;
- `README.md` — instruções e mapa do site atualizados.

## Aplicação no Windows

1. Descompacte `Frequencia40_Fase03_Arquivos_Atualizados.zip`.
2. Abra a pasta `frequencia40-site` **dentro do ZIP** e copie seu conteúdo por cima de `C:\Users\othon\Documents\frequencia40-site`.
3. Confirme a substituição dos arquivos. **Não apague** `node_modules` nem seu `.git`.
4. Execute:

```powershell
npm run build
npm run dev
```

5. Abra `http://localhost:4321` e depois `http://localhost:4321/solucoes/`.

Nenhuma nova dependência é exigida e o `package.json` permanece igual. O ZIP completo não contém `node_modules`, `dist` ou arquivos `.git`.

## Verificação sugerida

- Desktop: clicar em **Demonstrações** no menu, percorrer os quatro exemplos e voltar pelo logo;
- Android/celular: abrir o menu, ir à nova página e conferir que a vitrine, dashboard, chat e calendário cabem sem rolagem horizontal;
- Abrir links de orçamento de um exemplo e verificar a mensagem pré-preenchida no WhatsApp;
- Conferir os 12 serviços, links para a home e navegação por âncoras;
- Com `prefers-reduced-motion`, ver conteúdo sem animações necessárias para compreender as informações.

## Observações de escopo

- **Todos os nomes, produtos, gráficos, valores, datas, mensagens e indicadores nas interfaces desta fase são fictícios**. Não devem ser apresentados comercialmente como resultados de clientes nem como sistemas já implantados.
- O aplicativo de catálogo é nosso **produto real em finalização**, mas a interface exibida no site continua conceitual por escolha do projeto.
- Automações do WhatsApp, gestão de dados e integrações dependerão de requisitos, permissões e orçamento aprovados para cada cliente.
- Esta fase ainda **não registra solicitações em banco de dados**, não publica o site e não configura domínio, analytics ou QR Code. O contato abre o WhatsApp do cartão.
- Antes de imprimir o QR Code definitivo, publicar o site e confirmar o domínio de produção.

## Validação desta entrega

- Verificada a sintaxe dos nove arquivos `.astro` com `@astrojs/astro2tsx`, sem erros de parsing.
- Verificado que os assets locais referenciados existem e que os 12 serviços continuam no arquivo de conteúdo.
- Não foi possível executar `npm run build` completo neste ambiente com uma instalação íntegra de Astro e uma versão de Node que satisfaça o projeto; **o build em seu Windows é a validação final**.
