export type Scheme = 'assunto' | 'publico' | 'tarefa';

export type SiteNode = {
  slug: string;
  title: string;
  description?: string;
  scheme?: Scheme;
  children?: SiteNode[];
};

export const siteNav: SiteNode[] = [
  {
    slug: 'servicos',
    title: 'Serviços',
    scheme: 'assunto',
    description: 'Consultoria, desenvolvimento e suporte para a sua operação de tecnologia.',
    children: [
      {
        slug: 'consultoria-ti',
        title: 'Consultoria em TI',
        description: 'Diagnóstico e planejamento estratégico de infraestrutura e serviços de TI.',
        children: [
          { slug: 'infraestrutura', title: 'Infraestrutura', description: 'Projeto e modernização de data centers, servidores e armazenamento.' },
          { slug: 'cloud-computing', title: 'Cloud Computing', description: 'Migração, arquitetura e gestão de ambientes em nuvem pública, privada e híbrida.' },
          { slug: 'seguranca-informacao', title: 'Segurança da Informação', description: 'Políticas, auditorias e implementação de controles para proteger dados corporativos.' },
          { slug: 'redes-conectividade', title: 'Redes e Conectividade', description: 'Projeto de redes corporativas, SD-WAN, Wi-Fi gerenciado e links dedicados.' },
        ],
      },
      {
        slug: 'desenvolvimento-software',
        title: 'Desenvolvimento de Software',
        description: 'Construção de soluções sob medida para o seu negócio.',
        children: [
          { slug: 'web', title: 'Sistemas Web', description: 'Aplicações web modernas, performáticas e seguras.' },
          { slug: 'mobile', title: 'Aplicativos Mobile', description: 'Apps nativos e multiplataforma para iOS e Android.' },
          { slug: 'integracoes', title: 'Integrações e APIs', description: 'Conectamos sistemas, parceiros e plataformas através de APIs robustas.' },
        ],
      },
      {
        slug: 'suporte-tecnico',
        title: 'Suporte Técnico',
        description: 'Operação assistida para manter o seu ambiente sempre disponível.',
        children: [
          { slug: 'help-desk', title: 'Help Desk', description: 'Atendimento multicanal com SLA definido para o usuário final.' },
          { slug: 'manutencao', title: 'Manutenção Preventiva', description: 'Rotinas periódicas para evitar falhas e aumentar a disponibilidade.' },
          { slug: 'treinamentos', title: 'Treinamentos', description: 'Capacitação de equipes técnicas e usuários em ferramentas corporativas.' },
        ],
      },
    ],
  },
  {
    slug: 'produtos',
    title: 'Produtos',
    scheme: 'assunto',
    description: 'Plataformas e licenças selecionadas para acelerar a operação.',
    children: [
      {
        slug: 'sistemas-gestao',
        title: 'Sistemas de Gestão',
        description: 'Sistemas que organizam processos e dados da empresa.',
        children: [
          { slug: 'erp', title: 'ERP', description: 'Gestão integrada de processos financeiros, fiscais, estoque e vendas.' },
          { slug: 'crm', title: 'CRM', description: 'Gestão de relacionamento com clientes e funil de vendas.' },
          { slug: 'financeiro', title: 'Financeiro', description: 'Controle financeiro, conciliação bancária e fluxo de caixa.' },
        ],
      },
      {
        slug: 'licencas',
        title: 'Licenças de Software',
        description: 'Revenda autorizada de software corporativo.',
        children: [
          { slug: 'microsoft', title: 'Microsoft 365', description: 'Pacote Microsoft 365 com Teams, Exchange, SharePoint e Office.' },
          { slug: 'adobe', title: 'Adobe Creative', description: 'Adobe Creative Cloud para equipes de design e marketing.' },
          { slug: 'antivirus', title: 'Antivírus Corporativo', description: 'Soluções de endpoint para proteção contra malware e ransomware.' },
        ],
      },
    ],
  },
  {
    slug: 'solucoes',
    title: 'Soluções por Segmento',
    scheme: 'publico',
    description: 'Combinações de serviços e produtos pensadas para o porte do seu negócio.',
    children: [
      { slug: 'pequenas-empresas', title: 'Pequenas Empresas', description: 'Pacotes essenciais com preço acessível para equipes de até 20 pessoas.' },
      { slug: 'medias-empresas', title: 'Médias Empresas', description: 'Soluções escaláveis para operações com dezenas a centenas de usuários.' },
      { slug: 'grandes-corporacoes', title: 'Grandes Corporações', description: 'Projetos personalizados com governança, SLA e integrações corporativas.' },
      { slug: 'autonomos', title: 'Profissional Autônomo', description: 'Ferramentas de produtividade e licenças individuais para liberais.' },
    ],
  },
  {
    slug: 'conteudo',
    title: 'Conteúdo',
    scheme: 'assunto',
    description: 'Materiais, cases e eventos para você se aprofundar.',
    children: [
      { slug: 'blog', title: 'Blog', description: 'Artigos semanais sobre tecnologia, gestão e tendências do setor.' },
      { slug: 'cases', title: 'Cases de Sucesso', description: 'Histórias reais de clientes que transformaram a operação com a TechHub.' },
      { slug: 'materiais', title: 'Materiais Ricos', description: 'E-books, whitepapers e planilhas gratuitas para download.' },
      { slug: 'eventos', title: 'Eventos e Webinars', description: 'Agenda de encontros presenciais e online com especialistas da casa.' },
    ],
  },
  {
    slug: 'institucional',
    title: 'Institucional',
    scheme: 'assunto',
    description: 'Conheça a TechHub, nossa história e nossa gente.',
    children: [
      { slug: 'quem-somos', title: 'Quem Somos', description: 'Empresa fundada em 2010 com atuação nacional em projetos de TI.' },
      { slug: 'missao-valores', title: 'Missão e Valores', description: 'Os princípios que guiam a nossa forma de trabalhar.' },
      { slug: 'equipe', title: 'Equipe', description: 'Os profissionais e lideranças que compõem a TechHub.' },
      { slug: 'certificacoes', title: 'Certificações', description: 'Parcerias e certificações que validam nossa expertise técnica.' },
    ],
  },
  {
    slug: 'atendimento',
    title: 'Atendimento',
    scheme: 'tarefa',
    description: 'Fale com a gente, solicite orçamento ou agende uma reunião.',
    children: [
      { slug: 'contato', title: 'Fale Conosco', description: 'Envie uma mensagem e retornaremos em até um dia útil.' },
      { slug: 'orcamento', title: 'Solicitar Orçamento', description: 'Preencha os dados do projeto e receba uma proposta personalizada.' },
      { slug: 'agendar', title: 'Agendar Reunião', description: 'Escolha uma data na agenda dos nossos consultores.' },
      { slug: 'faq', title: 'Perguntas Frequentes', description: 'Respostas rápidas para as dúvidas mais comuns dos nossos clientes.' },
    ],
  },
  {
    slug: 'area-cliente',
    title: 'Área do Cliente',
    scheme: 'tarefa',
    description: 'Acesso restrito ao portal de clientes TechHub.',
  },
];
