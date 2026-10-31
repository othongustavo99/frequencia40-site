# FREQUÊNCIA40 — FASE 6
## Domínio oficial, SEO e validação para impressão do cartão

### Situação de partida
- O site já foi publicado no Cloudflare Workers, com o nome de Worker `frequencia40-site`.
- URL de homologação atual: `https://frequencia40-site.othon-gustavo92.workers.dev`.
- O site permanece em `noindex` enquanto `SITE_URL` não for informada durante o build. Isso é proposital.
- O QR Code do cartão não deve apontar para `workers.dev`, mas para o domínio escolhido e confirmado.

### 1. Registrar o domínio (ação externa)
1. Acesse https://registro.br/ e pesquise **frequencia40.com.br**.
2. Registre-o somente se o site OFICIAL indicar disponível. Nenhuma disponibilidade foi confirmada antecipadamente.
3. O Registro.br informa valor de referência de **R$ 40/ano** (confirme o valor exibido no momento da compra).
4. Defina CPF/CNPJ do titular e conclua cadastro e pagamento no site oficial. Não envie documentos, senhas ou dados de pagamento por mensagens.
5. Caso o domínio não esteja disponível, escolha uma alternativa e use **o nome realmente registrado** em todas as etapas abaixo.

### 2. Adicionar o domínio à conta Cloudflare
1. No painel https://dash.cloudflare.com/, vá ao início da conta (não à aba Domains do Worker).
2. Clique em **Add a domain / Onboard a domain** e informe o domínio adquirido (por exemplo, frequencia40.com.br).
3. Selecione o plano **Free**, se for o adequado.
4. O Cloudflare fornecerá **dois nameservers personalizados para SUA conta**. Não copie nameservers de tutoriais ou exemplos.
5. Na área de gerenciamento do domínio do Registro.br, altere os servidores DNS para os dois nomes recebidos.
6. Espere a zona aparecer como **Active** no Cloudflare. Se usar DNSSEC/DS no provedor anterior, trate esse estado seguindo a orientação oficial para evitar falhas de DNS.

Fontes: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/ e https://registro.br/ajuda/gerenciamento-de-conta

### 3. Conectar o domínio ao Worker existente
1. Em Cloudflare > Workers & Pages, abra o Worker **frequencia40-site**.
2. Entre em **Domains** > **Add Domain** (ou Settings > Domains & Routes > Add > Custom Domain).
3. Digite o domínio principal, por exemplo **frequencia40.com.br**.
4. Se houver escolha de ambiente, selecione **Production**.
5. Confirme e confira a emissão automática de certificado HTTPS e o vínculo com o Worker.
6. Não remova o endereço workers.dev enquanto estiver verificando o novo domínio.

OBS: use **Custom Domain**, não um Route `/*` manual. Para este site estático o próprio Worker é a origem.

Fonte: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/

### 4. Liberar indexação e sitemap — ETAPA OBRIGATÓRIA
Esta fase não altera o layout nem insere um endereço hipotético no código.

1. No Cloudflare, abra `frequencia40-site` > **Settings** > **Builds** > **Variables and secrets**.
2. Adicione uma variável de **build** (não apenas runtime):
   - Nome: `SITE_URL`
   - Valor: `https://SEU-DOMINIO-REAL.com.br` (sem barra final e sem `www` se o principal for o domínio raiz)
   - Ambiente: Production
3. Salve. Faça um novo build/implantação a partir do GitHub (um novo `git push` pode disparar automaticamente).
4. Confira no log: `[SEO] Sitemap: ...` e `[Publicação] SEO de produção ativo`.
5. A variável precisa estar presente **durante `npm run build`**. Um secret ou variável configurada somente no runtime não corrige metadados estáticos já construídos.

Se quiser fazer um build local com o domínio REAL:

```powershell
$env:SITE_URL="https://SEU-DOMINIO-REAL.com.br"
npm run build
Remove-Item Env:SITE_URL
```

### 5. Validar a publicação
Quando o domínio já abrir externamente e o último deploy tiver concluído, rode:

```powershell
npm run verify:domain -- https://SEU-DOMINIO-REAL.com.br
```

O verificador testa HTTPS, quatro páginas essenciais, canonical, ausência de `noindex`, `robots.txt`, `sitemap.xml`, favicon e imagem social.

Também faça os testes manuais:
- Página inicial, soluções, orçamento e privacidade no computador e no Android.
- Formulário de orçamento abre WhatsApp com mensagem correta.
- Menu mobile, navegação, fotos, legibilidade e links.
- Link de compartilhamento exibe prévia da Frequência40.

### 6. QR Code para impressão
Depois da validação:
- Use como destino o domínio principal com HTTPS (por exemplo, `https://frequencia40.com.br/` SOMENTE SE ele tiver sido registrado e estiver funcionando).
- Gere QR Code preferencialmente vetorial (`SVG` / PDF) e uma versão PNG de alta resolução.
- Preserve margem branca de leitura e contraste; valide a leitura com ao menos dois celulares antes de enviar o cartão para impressão.
- O QR Code não está neste ZIP porque o nome ainda não foi confirmado. Evitamos imprimir um QR Code com endereço errado.

### 7. Versão com www (opcional)
Se desejar `www`, adicione-o como hostname à zona Cloudflare e configure redirecionamento 301 para o domínio principal. Verifique o redirecionamento e não crie dois sites com canonicals conflitantes. Não configure `www` até ter o domínio principal funcionando.

### 8. Atualizações futuras
Após instalar esta fase, novos `git push origin main` continuam publicando pelo Cloudflare Workers. O layout e os 12 serviços não foram alterados.
