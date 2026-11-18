export interface Company {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string[];
  icon: "radar" | "truck" | "wrench" | "leaf" | "blocks" | "building" | "trees";
  highlights: string[];
  units?: string[];
  products?: {
    name: string;
    spec: string;
    usage: string;
  }[];
  externalLinks?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
  tutorials?: {
    title: string;
    description: string;
    href: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  paragraphs: string[];
  sourceUrl?: string;
}

export interface LibraryItem {
  slug: string;
  title: string;
  category: "Certificações ambientais" | "Legislação, normas e decretos";
  excerpt: string;
  paragraphs: string[];
  pdfUrl?: string;
  externalUrl?: string;
  externalLabel?: string;
}

export interface ContactUnit {
  unit: string;
  person: string;
  email: string;
  phone?: string;
}

export const SITE_INFO = {
  name: "Grupo Vollary",
  tagline: "Parceiro ecologicamente correto",
  email: "grupovollary@grupovollary.com.br",
  year: 2026,
  founder: "Cláudio Santos",
};

export interface SocialLink {
  name: "Instagram" | "LinkedIn" | "YouTube" | "WhatsApp";
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    label: "Instagram do Grupo Vollary",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    label: "LinkedIn do Grupo Vollary",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    label: "YouTube do Grupo Vollary",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5514998094664",
    label: "WhatsApp Grupo Vollary",
  },
];

export interface SolutionProfile {
  id: string;
  label: string;
  headline: string;
  description: string;
  benefits: string[];
  recommendedSlugs: string[];
}

export const SOLUTION_PROFILES: SolutionProfile[] = [
  {
    id: "construtora",
    label: "Construtora / Obra",
    headline: "Reduza custos e garanta conformidade ambiental no canteiro",
    description:
      "Atendemos obras de todos os portes com coleta rastreada de entulho, fornecimento de agregados reciclados testados em laboratório e execução de obras sustentáveis.",
    benefits: [
      "Destinação legalizada com emissão de CTR digital",
      "Economia com pedrisco, brita, bica corrida e rachão reciclados",
      "Apoio à certificação ambiental (AQUA / LEED)",
    ],
    recommendedSlugs: [
      "vollary-transportes",
      "vollary-produtos",
      "vollary-construcoes",
    ],
  },
  {
    id: "prefeitura",
    label: "Prefeitura / Governo",
    headline: "Gestão integrada de resíduos para municípios e órgãos públicos",
    description:
      "Implantação de centrais de reciclagem, processamento in loco ou em usinas externas e controle digital de caçambas para eliminar descartes irregulares.",
    benefits: [
      "Adequação à Política Nacional de Resíduos Sólidos (PNRS)",
      "Monitoramento completo de transportadores e caçambas",
      "Preservação de aterros e redução de passivos ambientais",
    ],
    recommendedSlugs: ["vollary-ambiental", "vollary-rastreamento"],
  },
  {
    id: "transportador",
    label: "Transportador",
    headline: "Controle total das caçambas em tempo real via Vollary CTR",
    description:
      "Plataforma web pioneira no monitoramento de resíduos da construção civil desde a retirada na obra até a destinação final legalizada.",
    benefits: [
      "Rastreamento online em tempo real",
      "Cadastro simplificado de locatários e motoristas",
      "Manual completo e tutoriais disponíveis online",
    ],
    recommendedSlugs: ["vollary-rastreamento", "vollary-transportes"],
  },
  {
    id: "rural",
    label: "Proprietário Rural / ESG",
    headline: "Transforme terras inativas em florestas produtivas e carbono",
    description:
      "Parcerias florestais de longo prazo com fornecimento de tecnologia, infraestrutura e recursos para plantio de eucalipto e geração de créditos de carbono.",
    benefits: [
      "Conformidade integral com a legislação florestal",
      "Renda recorrente para proprietários em terras arrendadas",
      "Geração de créditos de carbono para neutralização de emissões",
    ],
    recommendedSlugs: ["vollary-reflorestamento", "vollary-ambiental"],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona o sistema da Vollary Rastreamento (Vollary CTR)?",
    answer:
      "A plataforma monitora as caçambas desde a origem na obra até a área de destinação legalizada, garantindo rastreabilidade em tempo real e conformidade com exigências municipais e a legislação ambiental.",
  },
  {
    question: "Quais materiais reciclados a Vollary Produtos fornece?",
    answer:
      "Produzimos agregados reciclados com eficácia comprovada em laboratório: Pedrisco reciclado (0 a 9,5 mm), Brita reciclada (9,5 a 19 mm), Bica corrida reciclada (0 a 38 mm) e Rachão reciclado (> 38 mm).",
  },
  {
    question: "A Vollary Ambiental atende prefeituras e projetos regionais?",
    answer:
      "Sim. A Vollary Ambiental atua no gerenciamento completo de resíduos para prefeituras e governos, com unidades em Osvaldo Cruz/SP, Assis/SP e São Paulo/SP, além de modelo de representação regional.",
  },
  {
    question: "Como funciona a parceria da Vollary Reflorestamento?",
    answer:
      "Atuamos principalmente em terras arrendadas, fornecendo tecnologia, infraestrutura e recursos para plantio e colheita de florestas certificadas de eucalipto, gerando renda ao parceiro e créditos de carbono.",
  },
];

export const EMPRESAS: Company[] = [
  {
    slug: "vollary-rastreamento",
    name: "Vollary Rastreamento",
    shortName: "Rastreamento",
    summary:
      "Rastreamento online em tempo real de resíduos da construção civil.",
    description: [
      "Os serviços da Vollary Rastreamento partem do pressuposto de que para uma maior eficácia e credibilidade dos serviços de reciclagem dos resíduos da construção civil, que não podem ser descartados irregularmente, e sim encaminhados para áreas legalizadas onde serão triados e processados, é necessário o monitoramento das caçambas, desde a obra onde eles foram retirados até o local informado para sua destinação.",
      "Antes mesmo de todas as prefeituras do país contarem com leis obrigando os caçambeiros a implantarem os chips de rastreamento, a Vollary Rastreamento já vem prestando serviços de monitoramento das caçambas em tempo real por meio da plataforma Vollary CTR.",
    ],
    icon: "radar",
    highlights: [
      "Controle de Transporte de Resíduos (CTR) 100% digital",
      "Monitoramento em tempo real da obra até a destinação legalizada",
      "Acesso web para gestores, transportadores e locatários",
      "Documentação e manual completo em PDF disponíveis online",
    ],
    externalLinks: [
      {
        label: "Acesso ao Sistema Vollary Waste Tracking",
        href: "https://volary.herokuapp.com/users/sign_in",
        variant: "primary",
      },
      {
        label: "Acesso ao Sistema Vollary CTR — Usuário",
        href: "http://170.0.153.75:3051",
        variant: "secondary",
      },
      {
        label: "Baixar Manual do Sistema (PDF)",
        href: "https://grupovollary.com.br/help/VollaryCTR2.pdf",
        variant: "secondary",
      },
    ],
    tutorials: [
      {
        title: "Como realizar o cadastro de um locatário (cliente)",
        description:
          "Procedimento passo a passo para cadastrar um novo locatário/cliente na plataforma Vollary CTR.",
        href: "https://grupovollary.com.br/vollary-rastreamento/como-realizar-o-cadastro-de-um-locatario-cliente/",
      },
      {
        title: "Como realizar o cadastro de um transportador",
        description:
          "Orientações em vídeo para cadastrar um novo transportador no sistema.",
        href: "https://grupovollary.com.br/vollary-rastreamento/como-realizar-o-cadastro-de-um-transportador/",
      },
      {
        title: "Como realizar o login administrativo",
        description:
          "Guia de acesso administrativo com permissão a todos os módulos da plataforma.",
        href: "https://grupovollary.com.br/vollary-rastreamento/como-realizar-o-login-administrativo-com-acesso-a-todos-os-modulos/",
      },
    ],
  },
  {
    slug: "vollary-transportes",
    name: "Vollary Transportes",
    shortName: "Transportes",
    summary:
      "Serviços especializados de coletas e transporte de resíduos de obras e de materiais de construção.",
    description: [
      "Os serviços da Vollary Transportes preveem que a demanda por agregados e artefatos reciclados irá crescer a cada ano, uma vez que o meio ambiente já não suporta mais a poluição nem a extração predatória de recursos naturais.",
      "Por este motivo, desenvolve serviços especializados de transporte, não só dos resíduos coletados na obra e destinados às usinas de reciclagem, como também dos materiais de construção em que eles foram transformados, levando-os novamente até as obras ou às casas de materiais para construção onde serão comercializados.",
    ],
    icon: "truck",
    highlights: [
      "Coleta especializada de resíduos da construção civil",
      "Destinação certificada para usinas de reciclagem licenciadas",
      "Logística de entrega de agregados e artefatos reciclados",
      "Integração direta com monitoramento e CTR",
    ],
  },
  {
    slug: "vollary-metalurgica",
    name: "Vollary Metalúrgica",
    shortName: "Metalúrgica",
    summary:
      "Soluções metalúrgicas e suporte estrutural integrados às operações do Grupo Vollary.",
    description: [
      "A Vollary Metalúrgica integra o ecossistema industrial do Grupo Vollary, atuando no suporte técnico, fabricação e manutenção de estruturas e equipamentos metálicos voltados ao setor de gestão de resíduos e construção civil.",
      "Para mais informações comerciais ou especificações de atendimento, entre em contato diretamente com nossa equipe.",
    ],
    icon: "wrench",
    highlights: [
      "Integração com a cadeia operacional do Grupo Vollary",
      "Atendimento sob demanda para projetos e estruturas",
      "Suporte direto via canais oficiais do grupo",
    ],
  },
  {
    slug: "vollary-ambiental",
    name: "Vollary Ambiental",
    shortName: "Ambiental",
    summary:
      "Soluções no gerenciamento completo de resíduos para prefeituras e governos.",
    description: [
      "Depois de uma evolução que se iniciou nos anos 70, por iniciativa da Organização das Nações Unidas (ONU), a preocupação com o meio ambiente fez com que a Vollary Ambiental se alinhasse com a legislação em vigor no país para cuidar dos resíduos gerados com a construção civil desde a origem, processando-os in loco ou em usinas externas, para prevenir a degradação ambiental e preservar os recursos naturais.",
      "Nós comercializamos ecologia em forma de produtos para construção. Nossos produtos ecológicos são produzidos a partir da reciclagem de resíduos de obras e têm qualidade e resistência comprovadas. Realize suas obras com consumo consciente.",
    ],
    icon: "leaf",
    highlights: [
      "Gerenciamento completo de resíduos para prefeituras e governos",
      "Processamento in loco ou em usinas externas de reciclagem",
      "Adequação integral às normas ambientais vigentes",
      "Oportunidades de representação regional em todo o país",
    ],
    units: ["Osvaldo Cruz/SP", "Assis/SP", "São Paulo/SP"],
  },
  {
    slug: "vollary-produtos",
    name: "Vollary Produtos",
    shortName: "Produtos",
    summary:
      "Execute sua obra de forma sustentável com materiais de construção reciclados.",
    description: [
      "A Vollary Produtos considera que o agregado reciclado vem sendo encarado como novo material da construção civil, permitindo economia para a obra e preservação para o meio ambiente.",
      "Esta atividade se iniciou logo após a Segunda Guerra, com a necessidade de reconstrução de cidades cujos edifícios foram demolidos e a carência de materiais de construção, utilizando não só os agregados propriamente ditos, como também artefatos produzidos com material reciclado. Nos dias atuais, os produtos da Vollary Produtos têm eficácia comprovada por inúmeros testes realizados por laboratórios especializados na área.",
    ],
    icon: "blocks",
    highlights: [
      "Qualidade e resistência comprovadas em laboratório",
      "Redução de custos na obra com sustentabilidade",
      "Substituição consciente de agregados naturais",
    ],
    products: [
      {
        name: "Pedrisco Reciclado",
        spec: "0 mm a 9,5 mm",
        usage:
          "Indicado para concreto não estrutural, argamassas de assentamento, blocos e pavers.",
      },
      {
        name: "Brita Reciclada",
        spec: "9,5 mm a 19 mm",
        usage:
          "Aplicado em concreto não estrutural, sistemas de drenagem e sub-bases.",
      },
      {
        name: "Bica Corrida Reciclada",
        spec: "0 mm a 38 mm",
        usage:
          "Ideal para sub-bases viárias, terraplenagem, regularização e pavimentação.",
      },
      {
        name: "Rachão Reciclado",
        spec: "> 38 mm",
        usage:
          "Utilizado em gabiões, drenagem pesada, contenções e reforço de solo.",
      },
    ],
  },
  {
    slug: "vollary-construcoes",
    name: "Vollary Construções",
    shortName: "Construções",
    summary:
      "Realização de obras ecologicamente corretas e com responsabilidade ambiental.",
    description: [
      "Sem deixar de preservar suas origens, e com o propósito de atender seus clientes de quaisquer portes e segmentos, a Vollary Construções presta serviços na área da construção civil, atuando em edificações, reformas, ampliações, obras estruturais e de acabamento.",
      "Em cada projeto, cuida com zelo redobrado dos resíduos gerados e proporciona mais economia a quem constrói ou reforma, unindo eficiência executiva e responsabilidade ambiental.",
    ],
    icon: "building",
    highlights: [
      "Edificações, reformas, ampliações e obras estruturais",
      "Gestão rigorosa dos resíduos gerados no canteiro",
      "Economia inteligente com uso de materiais reciclados",
      "Atendimento a clientes de todos os portes e segmentos",
    ],
  },
  {
    slug: "vollary-reflorestamento",
    name: "Vollary Reflorestamento",
    shortName: "Reflorestamento",
    summary:
      "Parcerias no plantio sustentável e reflorestamento e geração de créditos de carbono.",
    description: [
      "Como a preservação do meio ambiente é uma das grandes preocupações do Grupo Vollary, a Vollary Reflorestamento cuida da mitigação do efeito estufa através do plantio de árvores, que no processo de fotossíntese são responsáveis pelo sequestro de carbono da atmosfera, dando oportunidade de lucro a proprietários de imóveis rurais inativos e, ao mesmo tempo, gerando crédito de carbono a empresas que precisem neutralizar suas emissões.",
      "Além de manter florestas próprias certificadas para o plantio de eucalipto, a Vollary trabalha com a modalidade de parceria florestal. Atualmente, perto de 100% do plantio da empresa é realizado em terras arrendadas, promovendo a divisão dos benefícios do negócio com os parceiros locais em um relacionamento de longo prazo.",
      "Antes de plantar nas terras arrendadas, é feito um trabalho para que estejam em conformidade com a legislação florestal, contribuindo para a preservação ambiental, aumento de renda dos parceiros e maior produtividade dessas áreas, com fornecimento completo de tecnologia, infraestrutura e recursos para plantio e colheita.",
    ],
    icon: "trees",
    highlights: [
      "Florestas certificadas e parcerias em terras arrendadas",
      "Geração de créditos de carbono e neutralização de emissões",
      "Conformidade integral com a legislação florestal",
      "Tecnologia, infraestrutura e recursos fornecidos pela Vollary",
    ],
  },
];

export const CLIENTES: string[] = [
  "Grupo Even",
  "Grupo Schahin",
  "Gafisa",
  "Exeto",
  "Goldfarb",
  "Porte Engenharia",
  "Tecco",
  "Odebrecht",
  "Patrimônio",
  "Edalco",
  "Econ",
  "Tecnisa",
  "IET",
  "M. Bigucci",
  "MPD",
  "Kallas",
];

export const QUEM_SOMOS = {
  origens: [
    "O Grupo Vollary originou-se nas atividades desempenhadas na área da construção civil, há mais de duas décadas, e vem ganhando corpo a cada ano, porque a indústria da construção civil vem sendo um dos grandes motores da economia, e atrelado a isto, vem aumentando a consciência de que o meio ambiente, com seus recursos naturais, é finito e precisa ser preservado.",
    "A partir do segmento da construção civil, a história do Grupo Vollary avançou para a área ambiental, com as atividades de processamento dos resíduos originados na construção civil, visando não poluir o meio ambiente, gerar economia para a obra e evitar a extração em grande escala dos recursos ambientais.",
    "Com o passar do tempo, e diante da demanda do mercado, surgiu a produção de artefatos de concreto, utilizando o agregado obtido com os resíduos processados.",
    "Na sequência, houve a necessidade de cuidar do transporte dos resíduos da construção civil que são gerados pela obra e precisam chegar até a usina de reciclagem, daí entrando a atividade de rastreamento.",
    "Depois de processados os resíduos, e quando for o caso, depois de produzidos os artefatos de concreto, entra em ação a atividade dos transportes, a fim de levá-los até o mercado consumidor.",
    "Por último, para fechar o ciclo da preocupação em manter o meio ambiente preservado e equilibrado, entrou em cena o plantio de eucaliptos, onde o Grupo Vollary contribui para a contenção do efeito estufa e a preservação da camada de ozônio.",
  ],
  fundador: {
    nome: "Cláudio Santos",
    bio: [
      "Nascido em Tupã, no interior de São Paulo, Cláudio começou a trabalhar com seu pai na construção civil. Com 5 anos de aprendizado, resolveu tomar a frente dos negócios e passou a ser responsável por prospectar clientes e comandar obras.",
      "Um ano após assumir a responsabilidade dos negócios, a empresa familiar começou a crescer e se estabelecer como uma construtora, tendo como principais clientes diversas prefeituras, a Fundação para o Desenvolvimento da Educação – FDE e a Companhia de Desenvolvimento Habitacional e Urbano – CDHU.",
      "Em 2007, Cláudio soube aproveitar o seu conhecimento e seu feeling e iniciou uma nova etapa no mercado da construção civil e reciclagem com a criação do Grupo Vollary.",
    ],
  },
  missao:
    "Criar soluções ecologicamente corretas no gerenciamento de resíduos da construção civil, visando a proteção ao meio ambiente e a sustentabilidade da construção civil.",
  visao:
    "Ser empresa de referência na gestão integrada e sustentabilidade na construção civil, garantindo o bem-estar socioambiental e a geração de valor para as empresas e para a sociedade.",
  valores: [
    "Sustentabilidade",
    "Inovação",
    "Eficiência",
    "Criatividade",
    "Credibilidade",
    "Comprometimento",
    "Competência",
    "Responsabilidade socioambiental",
    "Respeito",
    "Valorização do ser humano",
    "Simplicidade",
    "Organização",
    "Transparência",
    "Ética",
  ],
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "grupo-vollary",
    title: "Vídeo institucional do Grupo Vollary",
    date: "2018-02-16",
    category: "Institucional",
    excerpt:
      "Acompanhe neste vídeo institucional a apresentação do novo projeto arquitetônico do Grupo Vollary.",
    paragraphs: [
      "Acompanhe neste vídeo institucional a apresentação do novo projeto arquitetônico do Grupo Vollary.",
    ],
    sourceUrl:
      "https://grupovollary.com.br/wp-content/uploads/2018/02/GRUPO-VOLLARY.mp4",
  },
  {
    slug: "vollary-inicia-projeto-da-vollary-ambiental-em-osvaldo-cruz",
    title: "Vollary inicia projeto da Vollary Ambiental em Osvaldo Cruz",
    date: "2017-03-29",
    category: "Notícias",
    excerpt:
      "O Grupo Vollary iniciou o projeto de construção da central de reciclagem e resíduos da construção civil em Osvaldo Cruz/SP, ocupando uma área de 10.000 m².",
    paragraphs: [
      "O Grupo Vollary iniciou o projeto de construção de sua unidade da Vollary Ambiental na cidade de Osvaldo Cruz, no interior do estado de São Paulo.",
      "Esta unidade foi planejada como central de reciclagem de resíduos da construção civil para atender toda a região de Osvaldo Cruz, numa primeira etapa ocupando uma área total de 10.000 metros quadrados.",
      "O grande destaque fica para seu escritório, montado dentro de contêineres, seguindo os ideais de reciclagem e reaproveitamento pregados pelo Grupo Vollary, com projeções feitas pelo escritório André Lima Arquitetura.",
    ],
  },
  {
    slug: "secretario-de-meio-ambiente-interdita-aterro-sanitario-em-osvaldo-cruz",
    title: "Secretário de Meio Ambiente interdita aterro sanitário em Osvaldo Cruz",
    date: "2017-02-11",
    category: "Notícias",
    excerpt:
      "Autoridades da Secretaria de Estado de Meio Ambiente, Cetesb e Polícia Ambiental interditaram área irregular de depósito de restos de construção civil em Osvaldo Cruz.",
    paragraphs: [
      "Parte do aterro sanitário da cidade de Osvaldo Cruz foi interditada por autoridades da Secretaria de Estado de Meio Ambiente, com técnicos da Cetesb e Polícia Ambiental, especificamente no espaço reservado ao depósito de restos de construção civil.",
      "A medida reforçou a necessidade de áreas licenciadas e empresas especializadas no processamento e reciclagem adequada dos resíduos da construção civil, evitando passivos ambientais e custos elevados aos municípios.",
    ],
    sourceUrl:
      "http://www.ocnet.com.br/noticias/acontece/secretario-de-meio-ambiente-interdita-aterro-sanitario-em-oc/",
  },
  {
    slug: "vollary-planeja-construir-usina-de-reciclagem-em-tupasp",
    title: "Vollary planeja construir usina de reciclagem em Tupã/SP",
    date: "2017-01-27",
    category: "Notícias",
    excerpt:
      "O Grupo Vollary se reuniu com a Prefeitura de Tupã para apresentar projeto de usina de reciclagem de resíduos da construção civil com investimento estimado em R$ 1 milhão.",
    paragraphs: [
      "O Grupo Vollary, comandado pelos tupãenses Cláudio Santos e Percival Soares, reuniu-se com o prefeito Ricardo Raymundo e o vice-prefeito Caio Aoqui para apresentar o projeto de construção de uma usina de reciclagem de resíduos da construção civil em Tupã/SP.",
      "A proposta apresentada prevê investimento de cerca de R$ 1 milhão na construção de uma usina capaz de absorver e reciclar todo o entulho produzido nas obras executadas no município, reduzindo o descarte irregular e gerando renda, emprego e materiais reaproveitáveis.",
    ],
  },
  {
    slug: "vollary-busca-apoio-para-expansao-em-tupi-paulistasp",
    title: "Vollary busca apoio para expansão em Tupi Paulista/SP",
    date: "2017-01-11",
    category: "Notícias",
    excerpt:
      "A Vollary esteve em Tupi Paulista/SP para apresentar proposta de unidade voltada ao reaproveitamento de restos de construção civil, galhos e pneus.",
    paragraphs: [
      "A Vollary esteve na cidade de Tupi Paulista para conversar com o prefeito Alexandre Tassoni Antonio e a coordenadora municipal de meio ambiente, Lourdes Grassi, buscando parcerias para expandir sua área de atuação.",
      "Na ocasião, foi apresentada a proposta de reaproveitamento de materiais de restos de construção civil (para confecção de blocos e cimento para contrapiso), trituração de galhos de árvores (usados como adubo) e reaproveitamento de pneus usados na conservação e pavimentação asfáltica.",
    ],
  },
  {
    slug: "vollary-apresenta-projeto-para-construcao-da-primeira-usina-de-reciclagem-de-residuos-da-construcao-civil-no-tocantins",
    title:
      "Vollary apresenta projeto para construção da primeira usina de reciclagem de resíduos da construção civil no Tocantins",
    date: "2015-10-15",
    category: "Notícias",
    excerpt:
      "Grupo Vollary apresenta iniciativa pioneira no Tocantins para implantação de usina de reciclagem de resíduos da construção civil.",
    paragraphs: [
      "O Grupo Vollary apresentou projeto pioneiro para a construção da primeira usina de reciclagem de resíduos da construção civil no estado do Tocantins, levando sua experiência em gestão ambiental e reaproveitamento de entulho para novas regiões do país.",
    ],
  },
];

export const BIBLIOTECA_ITEMS: LibraryItem[] = [
  {
    slug: "certificacao-aqua-para-edificios-habitacionais",
    title: "Certificação AQUA para edifícios habitacionais",
    category: "Certificações ambientais",
    excerpt:
      "A Alta Qualidade Ambiental (AQUA) é um processo de gestão de projeto visando obter a qualidade ambiental de um empreendimento novo ou envolvendo reabilitação.",
    paragraphs: [
      "Um empreendedor promove a construção ou a adaptação de edifícios ou gerencia o seu uso. Estes, devido aos recursos consumidos e às emissões, aos efluentes e aos resíduos produzidos, causam impactos ao ambiente em qualquer fase da sua vida.",
      "A Alta Qualidade Ambiental (AQUA) estrutura-se no Sistema de Gestão do Empreendimento (SGE) e na Qualidade Ambiental do Edifício (QAE), orientando a redução de impactos ambientais e o conforto e saúde dos usuários.",
    ],
    pdfUrl:
      "https://grupovollary.com.br/wp-content/uploads/2016/10/certificacao_aqua_edificios_habitacionais.pdf",
  },
  {
    slug: "certificacao-aqua-para-escritorios-e-edificios-escolares",
    title: "Certificação AQUA para escritórios e edifícios escolares",
    category: "Certificações ambientais",
    excerpt:
      "Referencial técnico de certificação AQUA aplicado a edifícios corporativos, escritórios e instituições de ensino.",
    paragraphs: [
      "O empreendedor deve gerenciar suas funções internas e fornecedores (projetistas, construtoras, etc.) a fim de reduzir o impacto ambiental de seus empreendimentos e assegurar o conforto e a saúde das pessoas por eles afetadas.",
      "O referencial técnico de certificação estrutura-se no Sistema de Gestão do Empreendimento (SGE) e na Qualidade Ambiental do Edifício (QAE), permitindo controlar os processos operacionais desde a concepção até a realização da obra.",
    ],
    pdfUrl:
      "https://grupovollary.com.br/wp-content/uploads/2016/10/certificacao_aqua_escritorios_edificios_escolares.pdf",
  },
  {
    slug: "politica-nacional-de-residuos-solidos-pnrs-lei-12-305-de-2010",
    title: "Política Nacional de Resíduos Sólidos – PNRS – Lei 12.305 de 2010",
    category: "Legislação, normas e decretos",
    excerpt:
      "A Lei nº 12.305/10 institui a Política Nacional de Resíduos Sólidos (PNRS), estabelecendo princípios, objetivos, diretrizes e metas em todo o território nacional.",
    paragraphs: [
      "A aprovação da Lei nº 12.305/10 marcou o início de uma forte articulação institucional envolvendo União, Estados e Municípios, o setor produtivo e a sociedade civil na busca de soluções para os problemas causados pelos resíduos sólidos.",
      "A PNRS estabelece princípios, objetivos, diretrizes, metas e ações, compatibilizando crescimento econômico e preservação ambiental com desenvolvimento sustentável.",
    ],
    pdfUrl:
      "https://grupovollary.com.br/wp-content/uploads/2016/10/politica_nacional_residuos_solidos.pdf",
  },
  {
    slug: "resolucao-conama-307-de-5-de-julho-de-2002",
    title: "Resolução CONAMA 307, de 5 de Julho de 2002",
    category: "Legislação, normas e decretos",
    excerpt:
      "Estabelece diretrizes, critérios e procedimentos para a gestão dos resíduos da construção civil no Brasil.",
    paragraphs: [
      "A Resolução CONAMA nº 307/2002 disciplina as ações necessárias para minimizar os impactos ambientais gerados pelos resíduos oriundos da construção civil, classificando-os em Classes A, B, C e D.",
      "Define responsabilidades dos geradores, transportadores e áreas de destinação, priorizando a não geração, redução, reutilização, reciclagem e destinação ambientalmente adequada.",
    ],
  },
  {
    slug: "resolucao-conama-431-de-24-de-maio-de-2011",
    title: "Resolução CONAMA 431, de 24 de Maio de 2011",
    category: "Legislação, normas e decretos",
    excerpt:
      "Altera o artigo 3º da Resolução nº 307/2002 do CONAMA, estabelecendo nova classificação para o gesso como Classe B (reciclável).",
    paragraphs: [
      "Altera o artigo 3º da Resolução nº 307, de 5 de julho de 2002, do Conselho Nacional do Meio Ambiente – CONAMA, passando o gesso a integrar os resíduos Classe B — recicláveis para outras destinações.",
    ],
  },
  {
    slug: "nbr-151122004-areas-de-transbordo-e-triagem",
    title: "NBR 15112:2004 – Áreas de Transbordo e Triagem",
    category: "Legislação, normas e decretos",
    excerpt:
      "Diretrizes para projeto, implantação e operação de áreas de transbordo e triagem de resíduos da construção civil e resíduos volumosos.",
    paragraphs: [
      "Resíduos da construção civil e resíduos volumosos – Áreas de transbordo e triagem – Diretrizes para projeto, implantação e operação.",
      "Esta Norma fixa os requisitos exigíveis para projeto, implantação e operação de áreas de transbordo e triagem. Para obtê-la na íntegra, acesse o catálogo oficial da ABNT.",
    ],
    externalUrl: "http://www.abntcatalogo.com.br/norma.aspx?ID=343",
    externalLabel: "Consultar no Catálogo ABNT",
  },
  {
    slug: "nbr-151132004-aterros",
    title: "NBR 15113:2004 – Aterros",
    category: "Legislação, normas e decretos",
    excerpt:
      "Diretrizes para projeto, implantação e operação de aterros de resíduos sólidos da construção civil classe A e de resíduos inertes.",
    paragraphs: [
      "Resíduos sólidos da construção civil e resíduos inertes – Aterros – Diretrizes para projeto, implantação e operação.",
      "Fixa os requisitos mínimos exigíveis para projeto, implantação e operação de aterros classe A e resíduos inertes.",
    ],
    externalUrl: "http://www.abntcatalogo.com.br/norma.aspx?ID=347",
    externalLabel: "Consultar no Catálogo ABNT",
  },
  {
    slug: "nbr-151142004-areas-de-reciclagem",
    title: "NBR 15114:2004 – Áreas de reciclagem",
    category: "Legislação, normas e decretos",
    excerpt:
      "Diretrizes para projeto, implantação e operação de áreas de reciclagem de resíduos sólidos da construção civil classe A.",
    paragraphs: [
      "Resíduos sólidos da Construção civil – Áreas de reciclagem – Diretrizes para projeto, implantação e operação.",
      "Fixa os requisitos mínimos exigíveis para projeto, implantação e operação de áreas de reciclagem de resíduos sólidos da construção civil classe A.",
    ],
    externalUrl: "http://www.abntcatalogo.com.br/norma.aspx?ID=349",
    externalLabel: "Consultar no Catálogo ABNT",
  },
  {
    slug: "nbr-151152004-agregados-reciclados-execucao-de-camadas-de-pavimentacao",
    title:
      "NBR 15115:2004 – Agregados reciclados – Execução de camadas de pavimentação",
    category: "Legislação, normas e decretos",
    excerpt:
      "Critérios para execução de camadas de reforço do subleito, sub-base e base de pavimentos com agregado reciclado.",
    paragraphs: [
      "Agregados reciclados de resíduos sólidos da construção civil – Execução de camadas de pavimentação – Procedimentos.",
      "Estabelece os critérios para execução de camadas de reforço do subleito, sub-base e base de pavimentos, bem como camada de revestimento primário, com agregado reciclado.",
    ],
    externalUrl: "http://www.abntcatalogo.com.br/norma.aspx?ID=337",
    externalLabel: "Consultar no Catálogo ABNT",
  },
  {
    slug: "nbr-15116-agregados-reciclados-pavimentacao-e-concreto-sem-funcao-estrutural",
    title:
      "NBR 15116:2004 – Agregados reciclados – Pavimentação e concreto sem função estrutural",
    category: "Legislação, normas e decretos",
    excerpt:
      "Requisitos para o emprego de agregados reciclados de resíduos sólidos da construção civil em pavimentação e concreto sem função estrutural.",
    paragraphs: [
      "Agregados reciclados de resíduos sólidos da construção civil – Utilização em pavimentação e preparo de concreto sem função estrutural – Requisitos.",
      "Estabelece os requisitos para o emprego de agregados reciclados de resíduos sólidos da construção civil.",
    ],
    externalUrl: "http://www.abntcatalogo.com.br/norma.aspx?ID=434",
    externalLabel: "Consultar no Catálogo ABNT",
  },
];

export const CONTACTS: ContactUnit[] = [
  {
    unit: "Matriz",
    person: "Cláudio Santos",
    email: "claudio@grupovollary.com.br",
  },
  {
    unit: "Unidade Assis/SP",
    person: "Valdecir Val",
    email: "valdecir@grupovollary.com.br",
  },
  {
    unit: "Unidade Osvaldo Cruz/SP",
    person: "Arthur F. Santos",
    email: "arthur@grupovollary.com.br",
    phone: "(14) 99809-4664",
  },
];
