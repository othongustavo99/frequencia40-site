import { services, type Service } from './site';

export type ServicePage = {
  slug: string;
  serviceId: string;
  eyebrow: string;
  headline: string;
  intro: string;
  promise: string;
  imageTitle: string;
  imageDescription: string;
  visual?: string;
  benefits: { title: string; text: string }[];
  applications: { name: string; text: string }[];
  steps: { title: string; text: string }[];
  capabilities: string[];
  faq: { q: string; a: string }[];
};

/** Páginas de apresentação: exemplos ilustrativos, sem promessas de resultados ou entregas já realizadas. */
export const servicePages: ServicePage[] = [
  {
    serviceId:'01', slug:'lojas-virtuais-e-aplicativos', eyebrow:'COMÉRCIO E EXPERIÊNCIA DIGITAL',
    headline:'Seu negócio mais próximo de cada cliente.',
    intro:'Uma loja virtual ou aplicativo reúne sua vitrine, os produtos, os pedidos e as informações que ajudam a operação a crescer. A experiência pode ser pensada para a marca, os canais de venda e a equipe que administra o negócio.',
    promise:'Do catálogo à gestão: uma experiência conectada para quem compra e para quem administra.',
    imageTitle:'Cliente e administração, no mesmo ecossistema',
    imageDescription:'Duas telas demonstrativas do aplicativo: vitrine do cliente e painel administrativo. Produtos e valores são fictícios.',
    benefits:[
      {title:'Vitrine sempre acessível',text:'Produtos, categorias e novidades organizados para consulta pelo celular.'},
      {title:'Pedidos organizados',text:'Uma jornada clara, adaptada ao atendimento e à forma de vender da empresa.'},
      {title:'Gestão na mesma solução',text:'Painel para produtos, estoque, clientes e andamento dos pedidos, conforme o projeto.'},
      {title:'Identidade própria',text:'Layout, cores, recursos e integrações definidos para a realidade da marca.'},
    ],
    applications:[
      {name:'Lojas e distribuidores',text:'Catálogos com variações, preços e disponibilidade.'},
      {name:'Mercados e comércios locais',text:'Pedidos por bairro, retirada ou entrega, quando viável.'},
      {name:'Prestadores de serviços',text:'Catálogo de serviços, pacotes e solicitação de atendimento.'},
    ],
    steps:[
      {title:'Entender a venda',text:'Mapeamos produtos, clientes, jornada de compra e rotina da equipe.'},
      {title:'Desenhar a experiência',text:'Definimos vitrine, pedidos, permissões e painel administrativo.'},
      {title:'Implantar por etapas',text:'Testamos fluxos, ajustamos e planejamos integrações e suporte.'},
    ],
    capabilities:['Catálogo de produtos e serviços','Categorias, busca e filtros','Pedidos e acompanhamento','Estoque e cadastros','Perfis de acesso','Integrações conforme viabilidade'],
    faq:[
      {q:'Preciso ter uma loja física?',a:'Não. A solução também pode atender marcas digitais, distribuidores e negócios de serviços.'},
      {q:'O aplicativo pode usar o nome da minha empresa?',a:'Sim. Identidade visual, funcionalidades, hospedagem e publicação são definidos na proposta.'},
      {q:'O sistema pode conversar com meu estoque?',a:'Podemos avaliar integração com o sistema atual, conforme a disponibilidade de API ou outras formas seguras de integração.'},
    ],
  },
  {
    serviceId:'02', slug:'automacao-para-whatsapp', eyebrow:'ATENDIMENTO E AUTOMAÇÃO',
    headline:'Atendimento organizado, mesmo nos dias mais movimentados.',
    intro:'A automação ajuda a responder perguntas recorrentes, direcionar solicitações e acompanhar conversas sem perder o toque humano. Desenhamos fluxos para a rotina real da empresa, respeitando as regras das plataformas utilizadas.',
    promise:'Menos etapas repetitivas e mais clareza no caminho entre a mensagem e o atendimento.',
    imageTitle:'Uma conversa com fluxo inteligente', imageDescription:'Conceito de triagem de mensagens, consulta ao catálogo e encaminhamento para uma pessoa.',
    benefits:[
      {title:'Primeiro contato orientado',text:'Menu ou perguntas rápidas para identificar o motivo da mensagem.'},
      {title:'Respostas consistentes',text:'Informações sobre horário, localização, serviços e dúvidas frequentes.'},
      {title:'Encaminhamento humano',text:'Fluxos com passagem para a equipe quando o caso exige atenção.'},
      {title:'Histórico útil',text:'Organização de solicitações e status quando a plataforma permitir.'},
    ],
    applications:[
      {name:'Clínicas e consultórios',text:'Orientações iniciais e direcionamento para agendamento.'},
      {name:'Oficinas e assistência',text:'Triagem de serviço e atualização do atendimento.'},
      {name:'Comércio e delivery',text:'Consulta de itens, disponibilidade e pedidos.'},
    ],
    steps:[
      {title:'Mapear perguntas',text:'Identificamos as dúvidas mais comuns e as etapas do atendimento.'},
      {title:'Desenhar os fluxos',text:'Criamos mensagens, regras de encaminhamento e condições de integração.'},
      {title:'Testar com a equipe',text:'Validamos respostas, escalonamentos e a operação antes de ativar.'},
    ],
    capabilities:['Menus e triagem','Mensagens informativas','Encaminhamento para atendente','Integração com CRM ou agenda','Eventos de pedido e atendimento','Respeito a consentimento e políticas da plataforma'],
    faq:[
      {q:'Pode substituir totalmente um atendente?',a:'A recomendação é automatizar etapas repetitivas e manter o atendimento humano para casos complexos.'},
      {q:'Funciona com qualquer número?',a:'É preciso avaliar a conta, o provedor e os requisitos da plataforma de mensagens, incluindo eventuais custos de API.'},
      {q:'Posso integrar com minha agenda?',a:'Sim, quando a ferramenta de agenda permitir integração segura. Isso é avaliado antes da proposta.'},
    ],
  },
  {
    serviceId:'03', slug:'sistemas-de-estoque-e-vendas', eyebrow:'CONTROLE OPERACIONAL',
    headline:'Mais controle sobre produtos, movimentações e vendas.',
    intro:'Organize entradas, saídas, cadastros e operações comerciais em um sistema pensado para a equipe. Com informações acessíveis, é mais fácil entender a disponibilidade e identificar situações que merecem atenção.',
    promise:'Visibilidade da operação para orientar decisões do dia a dia.',
    imageTitle:'Um painel para acompanhar a operação', imageDescription:'Visão conceitual de estoque, movimentações e pedidos por etapa.',
    benefits:[
      {title:'Produtos organizados',text:'Cadastro de itens, variantes e unidades em uma estrutura central.'},
      {title:'Movimentações registradas',text:'Controle de entradas, saídas, reservas e ajustes de estoque.'},
      {title:'Alertas úteis',text:'Listas de itens com reposição necessária ou inconsistências.'},
      {title:'Visão comercial',text:'Pedidos e informações de venda associados à operação, conforme o escopo.'},
    ],
    applications:[
      {name:'Lojas e depósitos',text:'Entrada de mercadorias e reposição de produtos.'},
      {name:'Oficinas',text:'Controle de peças e materiais utilizados em serviços.'},
      {name:'Pequenas distribuidoras',text:'Gestão de estoque em diferentes posições ou locais.'},
    ],
    steps:[
      {title:'Conhecer o fluxo',text:'Levantamos cadastros, movimentações, unidades e responsáveis.'},
      {title:'Configurar o controle',text:'Definimos permissões, regras de estoque, alertas e relatórios.'},
      {title:'Migrar e validar',text:'Planejamos importações, conferimos saldos e orientamos o uso.'},
    ],
    capabilities:['Produtos e categorias','Movimentações de entrada e saída','Reservas e ajustes','Alertas de estoque baixo','Relatórios operacionais','Integrações possíveis com vendas'],
    faq:[
      {q:'Preciso abandonar meu sistema atual?',a:'Não necessariamente. Primeiro avaliamos se podemos integrar ou complementar o processo existente.'},
      {q:'Consigo usar em mais de um dispositivo?',a:'Podemos projetar o acesso para diferentes usuários, com permissões e autenticação adequadas.'},
    ],
  },
  {
    serviceId:'04', slug:'cardapios-e-catalogos-digitais', eyebrow:'VITRINE E APRESENTAÇÃO',
    headline:'Informação clara para escolher, pedir ou entrar em contato.',
    intro:'Transforme o que sua empresa oferece em um catálogo compartilhável por link ou QR Code. Uma apresentação bonita e leve pode organizar produtos, serviços, preços, descrições e formas de solicitar atendimento.',
    promise:'Tudo o que o cliente precisa conhecer, em uma vitrine digital simples de acessar.',
    imageTitle:'Um catálogo digital pronto para apresentar', imageDescription:'Interface conceitual de categorias, itens e contato para uma empresa local.',
    benefits:[
      {title:'Acesso por QR Code',text:'Materiais impressos e balcões podem levar diretamente à vitrine.'},
      {title:'Conteúdo organizado',text:'Itens com fotos, descrições, opções e informações importantes.'},
      {title:'Atualização planejada',text:'Edição dos produtos conforme a forma de gestão contratada.'},
      {title:'Contato acessível',text:'Caminhos simples para pedir, reservar ou solicitar orçamento.'},
    ],
    applications:[
      {name:'Restaurantes e cafeterias',text:'Cardápios, categorias e opções de contato.'},
      {name:'Salões e estúdios',text:'Tabela de serviços, descrições e horários.'},
      {name:'Comércio e assistência técnica',text:'Catálogo de peças, produtos e serviços.'},
    ],
    steps:[
      {title:'Organizar o conteúdo',text:'Definimos categorias, informações e imagens necessárias.'},
      {title:'Montar a vitrine',text:'Criamos a experiência responsiva com identidade da empresa.'},
      {title:'Publicar e orientar',text:'Configuramos acesso e explicamos como manter o material atualizado.'},
    ],
    capabilities:['Categorias e filtros','Fotos e descrições','Links de contato','QR Code para divulgação','Design responsivo','Painel de edição, se necessário'],
    faq:[
      {q:'Precisa instalar um aplicativo?',a:'Não necessariamente. Muitos catálogos funcionam diretamente pelo navegador.'},
      {q:'Posso usar no balcão por QR Code?',a:'Sim. O QR Code pode apontar para a página hospedada da empresa.'},
    ],
  },
  {
    serviceId:'05', slug:'integracoes-entre-sistemas-e-apis', eyebrow:'SISTEMAS CONECTADOS',
    headline:'Seus sistemas podem trabalhar melhor juntos.',
    intro:'Quando dados de vendas, clientes, estoque e atendimento ficam espalhados, a equipe perde tempo repetindo informações. Analisamos como conectar ferramentas e automatizar o trânsito de dados de forma segura.',
    promise:'A informação certa chegando ao lugar certo, no momento adequado.',
    imageTitle:'Uma operação com menos retrabalho', imageDescription:'Fluxo conceitual ligando pedidos, estoque, atendimento e relatórios.',
    benefits:[
      {title:'Menos digitação repetida',text:'Eventos podem atualizar diferentes ferramentas sem duplicar tarefas.'},
      {title:'Informações coerentes',text:'Regras de sincronização ajudam a reduzir desencontros de dados.'},
      {title:'Fluxos rastreáveis',text:'Podemos registrar falhas e criar rotinas de acompanhamento.'},
      {title:'Estrutura gradual',text:'Integrações são implementadas conforme viabilidade técnica e prioridade.'},
    ],
    applications:[
      {name:'Comércio e distribuidores',text:'Pedidos e estoque conectados entre sistemas.'},
      {name:'Clínicas e escolas',text:'Cadastro, agenda e notificações dentro dos limites dos sistemas.'},
      {name:'Empresas de serviço',text:'Solicitações conectadas ao atendimento e ao financeiro.'},
    ],
    steps:[
      {title:'Auditar as ferramentas',text:'Verificamos APIs, permissões, documentação e fluxos atuais.'},
      {title:'Projetar a conexão',text:'Definimos eventos, campos, autenticação e tratamento de erros.'},
      {title:'Validar a sincronização',text:'Testamos cenários reais e monitoramos a estabilidade do fluxo.'},
    ],
    capabilities:['APIs REST e webhooks','Sincronização de cadastros','Integração de pedidos','Automação de eventos','Registros e monitoramento','Regras de segurança e autenticação'],
    faq:[
      {q:'Funciona com qualquer software?',a:'Depende de APIs, exportações e permissões disponíveis. Analisamos a viabilidade antes de assumir o escopo.'},
      {q:'A integração substitui os sistemas atuais?',a:'Em muitos casos, não. Ela complementa os sistemas e conecta o fluxo de informações.'},
    ],
  },
  {
    serviceId:'06', slug:'fidelidade-e-cashback', eyebrow:'RELACIONAMENTO COM CLIENTES',
    headline:'Crie motivos para o cliente voltar.',
    intro:'Programas de pontos, benefícios e recompensas ajudam a manter uma relação contínua com o público. Criamos regras simples de participação e experiências claras, ajustadas ao funcionamento de cada empresa.',
    promise:'Mais relacionamento, com regras transparentes para clientes e equipe.',
    imageTitle:'Benefícios fáceis de entender', imageDescription:'Cartão conceitual de fidelidade com pontos, progressão e recompensas.',
    benefits:[
      {title:'Regras claras',text:'Critérios de acúmulo, resgate e validade definidos no início.'},
      {title:'Experiência personalizada',text:'Identidade da marca e benefícios adequados ao negócio.'},
      {title:'Controle de resgates',text:'Registro de movimentações e elegibilidade de recompensas.'},
      {title:'Visão de participação',text:'Acompanhamento da adesão e uso do programa.'},
    ],
    applications:[
      {name:'Cafeterias e restaurantes',text:'Benefícios por visitas ou compras elegíveis.'},
      {name:'Salões e academias',text:'Incentivos por recorrência ou pacotes de serviços.'},
      {name:'Lojas e mercados',text:'Campanhas de pontos e recompensas definidas pela empresa.'},
    ],
    steps:[
      {title:'Definir o programa',text:'Estabelecemos regras, benefícios, validade e limitações.'},
      {title:'Criar a experiência',text:'Desenhamos a área do cliente e o controle administrativo.'},
      {title:'Acompanhar e ajustar',text:'Validamos resgates e indicadores conforme a operação.'},
    ],
    capabilities:['Pontos e recompensas','Cartão digital','Histórico de resgates','Campanhas e cupons','Controle administrativo','Regras de validade'],
    faq:[
      {q:'Preciso oferecer cashback em dinheiro?',a:'Não. Podemos desenvolver programas de pontos, vantagens ou crédito conforme o modelo escolhido e as regras aplicáveis.'},
      {q:'O cliente precisa instalar um app?',a:'Não necessariamente. Podemos avaliar um cartão digital ou área web de fidelidade.'},
    ],
  },
  {
    serviceId:'07', slug:'paineis-gerenciais-e-relatorios', eyebrow:'DADOS E DECISÕES',
    headline:'Transforme informações em uma visão do seu negócio.',
    intro:'Painéis organizam números relevantes para facilitar o acompanhamento de vendas, atendimentos, estoque, produtividade e outros indicadores. A prioridade é mostrar o que ajuda a decidir, sem excesso de gráficos.',
    promise:'Menos planilhas soltas. Mais contexto para acompanhar a operação.',
    imageTitle:'Indicadores em uma única visão', imageDescription:'Dashboard conceitual com métricas, gráficos e acompanhamento de tendências.',
    benefits:[
      {title:'Indicadores escolhidos',text:'Cada painel é desenhado a partir de objetivos e perguntas reais.'},
      {title:'Atualização planejada',text:'Dados importados ou sincronizados conforme a infraestrutura disponível.'},
      {title:'Visual simples',text:'Gráficos, tabelas e filtros legíveis inclusive no celular.'},
      {title:'Acesso por perfil',text:'Possibilidade de separar indicadores operacionais e gerenciais.'},
    ],
    applications:[
      {name:'Comércio',text:'Vendas, pedidos, produtos e desempenho por período.'},
      {name:'Clínicas e serviços',text:'Atendimentos, agenda, ocupação e indicadores internos.'},
      {name:'Empresas com equipes',text:'Fluxos, produtividade e prazos de execução.'},
    ],
    steps:[
      {title:'Definir perguntas',text:'Listamos decisões que o painel deve ajudar a tomar.'},
      {title:'Organizar os dados',text:'Identificamos fontes, regras de cálculo e permissões.'},
      {title:'Apresentar e validar',text:'Montamos visualizações e testamos valores com a operação.'},
    ],
    capabilities:['KPIs e cartões de resumo','Evolução por período','Filtros e comparações','Relatórios exportáveis','Integrações de dados','Permissões por usuário'],
    faq:[
      {q:'Já tenho planilhas. Ainda faz sentido?',a:'Sim. Podemos avaliar como centralizar ou visualizar melhor dados existentes, sem substituir tudo de início.'},
      {q:'Os dados são atualizados em tempo real?',a:'Isso depende das fontes e integrações disponíveis. A frequência de atualização é definida no projeto.'},
    ],
  },
  {
    serviceId:'08', slug:'agendamentos-e-reservas', eyebrow:'AGENDA E DISPONIBILIDADE',
    headline:'Uma agenda mais simples para a equipe e para o cliente.',
    intro:'Organize horários, profissionais, espaços e reservas de acordo com a capacidade da operação. Uma boa agenda reduz conflitos, orienta confirmações e facilita o dia de quem atende.',
    promise:'O cliente encontra disponibilidade. A empresa mantém o controle.',
    imageTitle:'Horários organizados em uma visão', imageDescription:'Agenda conceitual com calendário, horários disponíveis e reservas.',
    benefits:[
      {title:'Disponibilidade organizada',text:'Horários configuráveis por serviço, equipe ou recurso.'},
      {title:'Menos conflitos',text:'Validação de regras para evitar reservas simultâneas indevidas.'},
      {title:'Confirmações planejadas',text:'Mensagens e lembretes possíveis conforme os canais disponíveis.'},
      {title:'Gestão da rotina',text:'Visualização de agenda, cancelamentos e reagendamentos.'},
    ],
    applications:[
      {name:'Clínicas e consultórios',text:'Agenda por profissional e tipo de atendimento.'},
      {name:'Barbearias e salões',text:'Seleção de serviço, duração e horário.'},
      {name:'Oficinas e prestadores',text:'Reservas de visitas, instalações ou avaliações.'},
    ],
    steps:[
      {title:'Definir a disponibilidade',text:'Entendemos horários, duração e regras de atendimento.'},
      {title:'Criar fluxos de reserva',text:'Planejamos confirmação, remarcação e avisos.'},
      {title:'Testar casos reais',text:'Validamos conflitos, folgas e mudanças de agenda.'},
    ],
    capabilities:['Agenda por equipe ou sala','Horários disponíveis','Confirmação de reserva','Reagendamento e cancelamento','Lembretes integráveis','Controle de permissões'],
    faq:[
      {q:'Posso ter agendas para várias pessoas?',a:'Sim. Podemos estruturar por profissional, unidade, sala ou recurso.'},
      {q:'Os lembretes saem por WhatsApp?',a:'Podemos estudar a integração, sujeita às regras da plataforma e custos aplicáveis.'},
    ],
  },
  {
    serviceId:'09', slug:'gestao-de-entregas-locais', eyebrow:'LOGÍSTICA E PROXIMIDADE',
    headline:'Da saída à entrega, com mais organização.',
    intro:'Negócios que fazem entregas precisam coordenar pedidos, responsáveis, endereços e confirmações. Uma solução de gestão pode dar visibilidade ao andamento e melhorar a comunicação entre balcão, entregador e cliente.',
    promise:'Um fluxo claro para acompanhar cada entrega, do preparo à conclusão.',
    imageTitle:'Entregas acompanhadas por etapas', imageDescription:'Painel conceitual com etapas de preparação, saída, trajeto e entrega.',
    benefits:[
      {title:'Pedidos organizados',text:'Fila de entregas com informações essenciais e prioridades.'},
      {title:'Status de andamento',text:'Etapas visíveis para a equipe e, se previsto, para o cliente.'},
      {title:'Comunicação alinhada',text:'Atualizações de confirmação e ocorrências dentro do fluxo.'},
      {title:'Operação sob medida',text:'Regras para retirada, entrega própria ou parceiros, conforme o negócio.'},
    ],
    applications:[
      {name:'Restaurantes e mercados',text:'Pedidos locais e acompanhamento de entregadores.'},
      {name:'Farmácias e lojas',text:'Organização de rotas e confirmações.'},
      {name:'Assistência e serviços',text:'Coletas, entregas de equipamentos e visitas.'},
    ],
    steps:[
      {title:'Mapear a logística',text:'Identificamos pontos de saída, prazos e responsáveis.'},
      {title:'Estruturar status',text:'Definimos etapas, regras e notificações importantes.'},
      {title:'Implantar com a equipe',text:'Testamos atualizações e ajustamos a rotina de acompanhamento.'},
    ],
    capabilities:['Fila de entregas','Distribuição de responsáveis','Status de andamento','Registro de ocorrências','Confirmação de entrega','Integração com pedidos'],
    faq:[
      {q:'O sistema calcula rotas automaticamente?',a:'Podemos avaliar mapas e roteirização como recursos opcionais, dependendo das APIs e custos.'},
      {q:'Serve para quem faz poucas entregas?',a:'Sim. O fluxo pode começar simples e crescer conforme a necessidade.'},
    ],
  },
  {
    serviceId:'10', slug:'sites-e-landing-pages', eyebrow:'PRESENÇA DIGITAL',
    headline:'Uma presença digital que apresenta bem sua empresa.',
    intro:'Um site deve carregar rápido, funcionar no celular e explicar claramente o que a empresa oferece. Criamos páginas institucionais, portfólios e landing pages com design alinhado à marca e foco em contato.',
    promise:'Design que comunica, experiência leve e um caminho simples até o contato.',
    imageTitle:'Uma página que representa a marca', imageDescription:'Prévia conceitual de uma página institucional responsiva com serviços e chamada para contato.',
    benefits:[
      {title:'Visual consistente',text:'Tipografia, cores e conteúdo que traduzem a identidade da empresa.'},
      {title:'Desempenho em primeiro lugar',text:'Estrutura leve e adaptada a telas de diferentes tamanhos.'},
      {title:'Informações encontráveis',text:'Conteúdo, metadados e estrutura amigável a buscadores.'},
      {title:'Contato sem obstáculos',text:'Chamadas para orçamento, localização e canais de atendimento.'},
    ],
    applications:[
      {name:'Consultórios e escritórios',text:'Apresentação de áreas de atuação e equipe.'},
      {name:'Oficinas e prestadores',text:'Serviços, diferenciais e contato rápido.'},
      {name:'Empresas de qualquer porte',text:'Páginas de campanha, produto ou presença institucional.'},
    ],
    steps:[
      {title:'Definir a mensagem',text:'Entendemos público, posicionamento e informações essenciais.'},
      {title:'Criar design e conteúdo',text:'Estruturamos páginas, elementos visuais e navegação.'},
      {title:'Publicar e otimizar',text:'Configuramos domínio, SEO técnico e verificamos responsividade.'},
    ],
    capabilities:['Sites institucionais','Landing pages de campanha','Versões mobile e desktop','SEO técnico inicial','Domínio e hospedagem','Formulários e botões de contato'],
    faq:[
      {q:'Preciso ter domínio?',a:'Um domínio próprio é recomendado para transmitir profissionalismo; podemos orientar na configuração.'},
      {q:'É possível atualizar os textos depois?',a:'Sim. A forma de edição pode ser definida no projeto, com painel ou manutenção.'},
    ],
  },
  {
    serviceId:'11', slug:'hardware-e-software', eyebrow:'INFRAESTRUTURA E SUPORTE',
    headline:'Tecnologia funcionando para a rotina não parar.',
    intro:'Computadores, redes, impressoras e aplicativos fazem parte da operação diária. Ajudamos a organizar a infraestrutura, identificar necessidades e planejar suporte, instalação e melhorias conforme o ambiente.',
    promise:'Equipamentos e sistemas alinhados ao trabalho de cada equipe.',
    imageTitle:'Uma visão organizada da infraestrutura', imageDescription:'Ilustração conceitual de computadores, rede e periféricos com estados de verificação.',
    benefits:[
      {title:'Ambiente organizado',text:'Inventário de equipamentos e softwares relevantes.'},
      {title:'Instalação orientada',text:'Configuração de estações e ferramentas usadas na rotina.'},
      {title:'Diagnóstico prático',text:'Identificação de problemas e planejamento de correções.'},
      {title:'Cuidados preventivos',text:'Recomendações para atualizações, cópias de segurança e acesso.'},
    ],
    applications:[
      {name:'Lojas e caixas',text:'Estações de atendimento, impressoras e rede local.'},
      {name:'Escritórios e clínicas',text:'Computadores, periféricos e organização do ambiente.'},
      {name:'Pequenas empresas',text:'Instalação e configuração de softwares essenciais.'},
    ],
    steps:[
      {title:'Levantar o ambiente',text:'Mapeamos computadores, redes e necessidades da operação.'},
      {title:'Priorizar os ajustes',text:'Propomos intervenções e materiais conforme o diagnóstico.'},
      {title:'Executar e orientar',text:'Realizamos o serviço contratado e orientamos a equipe sobre uso e cuidados.'},
    ],
    capabilities:['Instalação de programas','Configuração de estações','Diagnóstico de equipamentos','Organização de rede local','Impressoras e periféricos','Orientações de backup e segurança'],
    faq:[
      {q:'Atendem presencialmente?',a:'O formato presencial ou remoto é avaliado conforme o tipo de serviço e a localização.'},
      {q:'Vocês vendem equipamentos?',a:'Podemos orientar sobre especificações e necessidades, mas aquisição e fornecimento dependem da proposta.'},
    ],
  },
  {
    serviceId:'12', slug:'assistentes-de-ia-personalizados', eyebrow:'INTELIGÊNCIA APLICADA',
    headline:'Inteligência artificial com utilidade no trabalho real.',
    intro:'Assistentes de IA podem apoiar atendimento, consulta de informações, organização de tarefas e acesso a documentos, sempre com limites e supervisão adequados. A prioridade é encontrar aplicações úteis e seguras para a rotina de cada negócio.',
    promise:'Uma ferramenta para apoiar pessoas — não uma promessa de automação sem limites.',
    imageTitle:'Um assistente conectado ao conhecimento da empresa', imageDescription:'Interface conceitual de assistente de IA consultando uma base de informações e propondo encaminhamentos.',
    benefits:[
      {title:'Respostas contextualizadas',text:'Consulta a informações aprovadas e organizadas para o uso.'},
      {title:'Apoio à equipe',text:'Sugestões de respostas, resumos e próximos passos.'},
      {title:'Integração gradual',text:'Possibilidade de conexão com sistemas conforme requisitos técnicos.'},
      {title:'Controle e revisão',text:'Limites, acessos e revisão humana para decisões importantes.'},
    ],
    applications:[
      {name:'Atendimento ao cliente',text:'Orientações iniciais com base em materiais autorizados.'},
      {name:'Equipes administrativas',text:'Consulta de procedimentos, documentos e políticas internas.'},
      {name:'Serviços e comércios',text:'Apoio à busca de informações e organização de solicitações.'},
    ],
    steps:[
      {title:'Identificar a tarefa',text:'Escolhemos processos em que a IA pode ajudar de verdade.'},
      {title:'Definir conhecimento e limites',text:'Organizamos fontes, permissões e regras de supervisão.'},
      {title:'Testar e acompanhar',text:'Avaliamos respostas e ajustamos o uso com a equipe.'},
    ],
    capabilities:['Assistentes para perguntas internas','Base de conhecimento autorizada','Resumo e classificação de mensagens','Apoio à redação e atendimento','Integrações conforme viabilidade','Supervisão e registros de uso'],
    faq:[
      {q:'A IA responde sempre corretamente?',a:'Não. Sistemas de IA podem errar. A solução deve ter limites, testes e revisão humana nos fluxos sensíveis.'},
      {q:'É possível usar documentos da empresa?',a:'Podemos avaliar uma base de conhecimento com controles de acesso, cuidados de privacidade e autorizações apropriadas.'},
    ],
  },
];

export type FullServicePage = ServicePage & { service: Service };
export const getServicePage = (slug: string): FullServicePage | undefined => {
  const page = servicePages.find((entry) => entry.slug === slug);
  const service = page && services.find((entry) => entry.id === page.serviceId);
  return page && service ? { ...page, service } : undefined;
};
export const serviceUrl = (slug: string): string => `/servicos/${slug}/`;
export const serviceUrlById = (id: string): string => {
  const page = servicePages.find((entry) => entry.serviceId === id);
  return page ? serviceUrl(page.slug) : '/#servicos';
};
