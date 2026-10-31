/** Conteúdo centralizado. Atualize aqui os dados comerciais sem mexer no layout. */
export const company = {
  name: 'Frequência40',
  legalDisplay: 'Frequência40 Desenvolvimento e Tecnologia',
  slogan: 'Programando o futuro',
  city: 'Bragança Paulista',
  region: 'Bragança Paulista e região',
  whatsappDisplay: '(11) 98840-2678',
  whatsappDigits: '5511988402678',
  description: 'Aplicativos, sistemas, automações e soluções tecnológicas sob medida para empresas e o comércio local de Bragança Paulista e região.',
} as const;

export const whatsappUrl = (subject?: string): string => {
  const message = subject
    ? `Olá! Conheci a Frequência40 pelo site e gostaria de conversar sobre: ${subject}.`
    : 'Olá! Conheci a Frequência40 pelo site e gostaria de solicitar um orçamento.';
  return `https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(message)}`;
};

export type ServiceIcon =
  | 'store' | 'messages' | 'boxes' | 'qr' | 'workflow' | 'gift'
  | 'chart' | 'calendar' | 'truck' | 'globe' | 'wrench' | 'sparkles';
export type Service = { id: string; name: string; summary: string; icon: ServiceIcon };

/** Ofertas de serviços: não são declarações de projetos já concluídos. */
export const services: Service[] = [
  { id: '01', name: 'Lojas virtuais e aplicativos', summary: 'Experiências de compra completas, catálogos, pedidos e painéis de gestão.', icon: 'store' },
  { id: '02', name: 'Automação para WhatsApp', summary: 'Atendimento mais ágil, organização de conversas e integração de pedidos.', icon: 'messages' },
  { id: '03', name: 'Sistemas de estoque e vendas', summary: 'Produtos, movimentações, controle comercial e indicadores em um só lugar.', icon: 'boxes' },
  { id: '04', name: 'Cardápios e catálogos digitais', summary: 'Vitrines acessíveis por link ou QR Code, rápidas e fáceis de compartilhar.', icon: 'qr' },
  { id: '05', name: 'Integrações entre sistemas e APIs', summary: 'Conexões inteligentes entre plataformas e menos tarefas repetitivas.', icon: 'workflow' },
  { id: '06', name: 'Fidelidade e cashback', summary: 'Experiências de recompensas que incentivam clientes a voltar.', icon: 'gift' },
  { id: '07', name: 'Painéis gerenciais e relatórios', summary: 'Informações organizadas para acompanhar resultados e tomar decisões.', icon: 'chart' },
  { id: '08', name: 'Agendamentos e reservas', summary: 'Horários, confirmações e gestão de atendimentos com praticidade.', icon: 'calendar' },
  { id: '09', name: 'Gestão de entregas locais', summary: 'Organização das entregas, acompanhamento e melhor comunicação.', icon: 'truck' },
  { id: '10', name: 'Sites e landing pages', summary: 'Presença digital profissional, responsiva, bonita e rápida.', icon: 'globe' },
  { id: '11', name: 'Hardware e software', summary: 'Configuração, manutenção, suporte e melhoria da infraestrutura.', icon: 'wrench' },
  { id: '12', name: 'Assistentes de IA personalizados', summary: 'Soluções de inteligência artificial aplicadas ao atendimento e à rotina.', icon: 'sparkles' },
];
