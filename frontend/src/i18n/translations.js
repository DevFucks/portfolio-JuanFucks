// Textos do site em PT / EN / ES.
// Fonte dos fatos: banco de conquistas + CV mestre. Não inventar número, cargo ou tecnologia.
// Ao mudar um idioma, mude os três.

export const translations = {
  pt: {
    meta: {
      title: "Juan de Sousa Fucks — Desenvolvedor Full Stack (React, React Native, Laravel)",
      description:
        "Desenvolvedor Full Stack com foco em frontend: React, Next.js, TypeScript, React Native e Laravel. Mais de 4 anos entregando live streaming, live commerce, digital signage e apps mobile em produção. Remoto, de Foz do Iguaçu.",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Stack",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      menu: "Abrir menu",
      language: "Idioma",
    },
    hero: {
      greeting: "// Olá, mundo. Eu sou",
      name: "Juan de Sousa Fucks",
      role: "Desenvolvedor Full Stack · foco em Frontend",
      tagline:
        "Mais de 4 anos colocando produtos web e mobile em produção com React, React Native e Laravel — de lives com mais de 2 mil pessoas simultâneas a um parque de mais de 1.000 telas digitais.",
      cta_primary: "Entrar em contato",
      cta_secondary: "Ver projetos",
      cta_cv: "Baixar CV",
      status: "Disponível · remoto · CLT ou PJ",
      scroll: "Role para descobrir",
      location: "Foz do Iguaçu, PR · remoto",
    },
    about: {
      label: "Sobre mim",
      title: "Do banco à interface, em produção.",
      p1: "Sou desenvolvedor full stack há mais de 4 anos, com o foco voltado para o frontend (UI/UX) em React, Next.js, TypeScript e React Native — e backend em PHP/Laravel quando o produto pede um sistema construído do zero.",
      p2: "Na ATMO Comunicação Digital (2022–2026) coloquei em produção plataformas de live streaming interativo, live commerce, digital signage, help desk e uma rede social corporativa com app publicado na App Store e no Google Play. Em 2026, como freelancer, entreguei um sistema em Laravel que automatiza o tratamento de planilhas de 1 milhão de linhas.",
      p3: "Trabalho de forma remota a partir de Foz do Iguaçu (PR) e busco um time de produto onde eu possa entregar de ponta a ponta.",
      stats: {
        years: { value: "4+", label: "Anos como dev" },
        viewers: { value: "2K+", label: "Espectadores simultâneos" },
        screens: { value: "1K+", label: "Telas digitais gerenciadas" },
        apps: { value: "2", label: "Lojas: App Store e Google Play" },
      },
      edu_title: "Formação",
      edu: [
        {
          degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          school: "Instituto Federal de São Paulo (IFSP) · 2018 – 2020",
        },
        {
          degree: "Técnico em Eletrônica e Mecatrônica",
          school: "Fortec · 2014",
        },
      ],
      cert_title: "Certificação",
      cert: {
        name: "ISO/IEC 27001 Information Security Associate",
        issuer: "SkillFront · 2026",
      },
      langs_title: "Idiomas",
      langs: ["Português · Nativo", "Inglês · Intermediário"],
      photo_status: "Disponível",
    },
    skills: {
      label: "Stack & Ferramentas",
      title: "Arsenal técnico",
      subtitle:
        "O que eu uso para entregar produtos rápidos, responsivos e em tempo real — do app mobile à API.",
      categories: {
        frontend: "Frontend & UI",
        mobile: "Mobile & Desktop",
        backend: "Backend & APIs",
        data: "Bancos de dados",
        quality: "Qualidade & DevOps",
        ai: "IA & Automação",
      },
    },
    experience: {
      label: "Experiência",
      title: "Trajetória",
      side: {
        stack_title: "Stack principal",
        stats: [
          { value: "7", label: "Produtos em produção" },
          { value: "~300", label: "Pontos de atendimento" },
          { value: "100+", label: "Usuários no app" },
        ],
      },
      items: [
        {
          role: "Desenvolvedor Full Stack (foco em Frontend)",
          company: "ATMO Comunicação Digital",
          location: "São Paulo, SP",
          period: "06/2022 — 07/2026",
          highlights: [
            "Frontend em ReactJS e backend em Laravel de uma plataforma de live streaming interativa — chat, quizzes, enquetes e sorteios em tempo real via WebSocket (Socket.IO), com picos de mais de 2 mil pessoas assistindo ao mesmo tempo.",
            "Frontend em React e backend de processamento de pedidos em Laravel de um sistema de live commerce, com compra em múltiplas etapas e catálogo atualizado em tempo real durante as transmissões.",
            "Web em React e app em React Native (Expo, push notifications) de uma rede social corporativa, publicado na App Store e no Google Play e usado por mais de 100 colaboradores — 50 a 80 ativos por dia.",
            "Help desk interno em ReactJS e PHP/Laravel, entregue com uma equipe de 5 pessoas: filas, SLA, notificações e relatórios. Substituiu um software terceirizado em cerca de 300 pontos de atendimento, eliminando um custo recorrente estimado em mais de R$ 5 milhões por ano.",
            "Painel React de digital signage integrado a um player próprio, para monitorar e atualizar remotamente, em tempo real, mais de 1.000 telas digitais.",
            "APIs REST em PHP/Laravel com autenticação via Sanctum e cache com Redis, definindo contratos e regras de negócio consumidos pelas aplicações web e mobile.",
            "Reserva e validação de refeições por QR Code integradas a um serviço Python de reconhecimento facial, e frontend de um sistema de rádio online (upload, playlists e player).",
            "Time ágil (Scrum) com testes automatizados (Jest/Vitest), CI/CD com GitHub Actions, Docker sobre Linux e deploy na Cloudflare.",
          ],
        },
        {
          role: "Técnico de TI",
          company: "Link-Up Sistemas de Informação",
          location: "Praia Grande, SP",
          period: "02/2019 — 04/2022",
          highlights: [
            "Implantei e administrei um servidor local em SQL Server para aplicações web internas, da configuração do ambiente à estruturação dos dados.",
            "Implantei e gerenciei a infraestrutura de redes internas e externas, garantindo a disponibilidade dos sistemas usados pela operação.",
          ],
        },
        {
          role: "Técnico de Informática",
          company: "Lorelan Ind. e Comércio LTDA",
          location: "",
          period: "2015 — 2018",
          highlights: [
            "Instalação e manutenção de computadores, redes e sistemas de CFTV.",
          ],
        },
      ],
    },
    projects: {
      label: "Projetos selecionados",
      title: "Trabalhos em destaque",
      subtitle:
        "Produtos reais em produção, com os números que eu posso contar.",
      note: "Código proprietário dos clientes — os detalhes técnicos eu conto em uma conversa.",
      kinds: {
        atmo: "ATMO · 2022–2026",
        freelance: "Freelance · 2026",
        personal: "Projeto pessoal · 2026",
      },
      items: {
        "live-streaming": {
          title: "Live Streaming Interativo",
          category: "Plataforma · Tempo real",
          description:
            "Plataforma de lives corporativas com chat, quizzes, enquetes e sorteios sincronizados em tempo real via Socket.IO. Frontend em React e backend em Laravel, mantendo a interface fluida sob atualização contínua.",
          metrics: [{ value: "2 mil+", label: "espectadores simultâneos" }],
        },
        "help-desk": {
          title: "Help Desk Interno",
          category: "Sistema interno · Full stack",
          description:
            "Sistema de chamados com filas, SLA, notificações e relatórios, construído com uma equipe de 5 pessoas para substituir um software terceirizado.",
          metrics: [
            { value: "R$ 5 mi+", label: "economia estimada / ano" },
            { value: "~300", label: "pontos de atendimento" },
          ],
        },
        mailing: {
          title: "Automação de Mailing",
          category: "Call center · Processamento de dados",
          description:
            "Automatiza a higienização de listas de discagem: cruza o mailing com blacklist, arruamento e base da Anatel, mapeia colunas de arquivos de vários provedores e gera o CSV do discador. Filas e leitura em blocos para planilhas de 1 milhão de linhas.",
          metrics: [
            { value: "1 sem → 1 dia", label: "tempo do processo" },
            { value: "1 mi", label: "linhas por planilha" },
          ],
        },
        workplace: {
          title: "Workplace Social",
          category: "Rede social corporativa · Web + Mobile",
          description:
            "Feeds, perfis, rankings, badges, notificações e gamificação. Web em React e app em React Native com Expo e push notifications, publicado na App Store e no Google Play.",
          metrics: [
            { value: "100+", label: "colaboradores" },
            { value: "50–80", label: "ativos por dia" },
          ],
        },
        signage: {
          title: "Digital Signage Dashboard",
          category: "Painel operacional · Tempo real",
          description:
            "Painel de gestão integrado a um player próprio para monitorar e atualizar remotamente, em tempo real, um parque de telas digitais.",
          metrics: [{ value: "1.000+", label: "telas digitais" }],
        },
        "live-commerce": {
          title: "Live Commerce",
          category: "E-commerce · Ao vivo",
          description:
            "Compra durante transmissões ao vivo: checkout em múltiplas etapas e catálogo atualizado em tempo real, com backend de processamento de pedidos em Laravel.",
          metrics: [],
        },
        "qr-meal": {
          title: "QR Meal Control",
          category: "Integração · Reconhecimento facial",
          description:
            "Reserva e validação de refeições por QR Code, integradas via APIs REST a um serviço independente de reconhecimento facial em Python.",
          metrics: [],
        },
        "ai-pipelines": {
          title: "Pipelines de IA Generativa",
          category: "Automação · Imagem e vídeo",
          description:
            "Pipelines locais de geração de imagem e vídeo com ComfyUI, automatizando a produção de fotos de produto e de conteúdo vertical para redes sociais.",
          metrics: [],
        },
      },
    },
    contact: {
      label: "Contato",
      title: "Vamos construir algo memorável",
      subtitle:
        "Aberto a vagas frontend ou full stack — remoto, CLT ou PJ. Respondo em até 24h.",
      cta: "Enviar e-mail",
      cv: "Baixar CV (PDF)",
      copy: "Copiar e-mail",
      copied: "E-mail copiado!",
      phone: "Telefone",
      mail_subject: "Oportunidade Dev — Portfólio",
      mail_body: "Olá Juan, gostaria de conversar sobre uma oportunidade...\n\n",
      terminal: [
        "Iniciando handshake...",
        "Resolvendo endpoint",
        "Conexão estabelecida ●",
        "Pronto para a próxima oportunidade.",
      ],
    },
    footer: {
      built: "Construído com café, React e algumas linhas de neon.",
      rights: "Todos os direitos reservados.",
      system: "sistema: online",
      location: "Foz do Iguaçu · BR",
    },
  },

  en: {
    meta: {
      title: "Juan de Sousa Fucks — Full-Stack Developer (React, React Native, Laravel)",
      description:
        "Full-stack developer with a frontend focus: React, Next.js, TypeScript, React Native and Laravel. 4+ years shipping live streaming, live commerce, digital signage and mobile apps to production. Remote, based in Brazil (UTC-3).",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menu: "Open menu",
      language: "Language",
    },
    hero: {
      greeting: "// Hello, world. I am",
      name: "Juan de Sousa Fucks",
      role: "Full-Stack Developer · Frontend focus",
      tagline:
        "4+ years shipping web and mobile products to production with React, React Native and Laravel — from live streams with 2,000+ concurrent viewers to a fleet of 1,000+ digital screens.",
      cta_primary: "Get in touch",
      cta_secondary: "View projects",
      cta_cv: "Download résumé",
      status: "Available · remote · full-time or contract",
      scroll: "Scroll to discover",
      location: "Foz do Iguaçu, Brazil · remote",
    },
    about: {
      label: "About me",
      title: "From database to interface, in production.",
      p1: "I have been a full-stack developer for over 4 years, leaning toward the frontend (UI/UX) with React, Next.js, TypeScript and React Native — and PHP/Laravel on the backend when the product calls for a system built from scratch.",
      p2: "At ATMO Comunicação Digital (2022–2026) I shipped interactive live streaming, live commerce, digital signage and help desk platforms, plus a corporate social network with an app published on the App Store and Google Play. In 2026, as a freelancer, I delivered a Laravel system that automates the processing of spreadsheets with 1 million rows.",
      p3: "I work remotely from Foz do Iguaçu, Brazil (UTC-3), and I am looking for a product team where I can own features end to end.",
      stats: {
        years: { value: "4+", label: "Years as a developer" },
        viewers: { value: "2K+", label: "Concurrent viewers" },
        screens: { value: "1K+", label: "Digital screens managed" },
        apps: { value: "2", label: "Stores: App Store & Google Play" },
      },
      edu_title: "Education",
      edu: [
        {
          degree: "Associate Degree in Systems Analysis and Development",
          school: "Instituto Federal de São Paulo (IFSP) · 2018 – 2020",
        },
        {
          degree: "Technical Degree in Electronics and Mechatronics",
          school: "Fortec · 2014",
        },
      ],
      cert_title: "Certification",
      cert: {
        name: "ISO/IEC 27001 Information Security Associate",
        issuer: "SkillFront · 2026",
      },
      langs_title: "Languages",
      langs: ["Portuguese · Native", "English · Intermediate"],
      photo_status: "Available",
    },
    skills: {
      label: "Stack & Tools",
      title: "Technical arsenal",
      subtitle:
        "What I use to ship fast, responsive, real-time products — from the mobile app down to the API.",
      categories: {
        frontend: "Frontend & UI",
        mobile: "Mobile & Desktop",
        backend: "Backend & APIs",
        data: "Databases",
        quality: "Quality & DevOps",
        ai: "AI & Automation",
      },
    },
    experience: {
      label: "Experience",
      title: "Career path",
      side: {
        stack_title: "Core stack",
        stats: [
          { value: "7", label: "Products in production" },
          { value: "~300", label: "Service seats" },
          { value: "100+", label: "App users" },
        ],
      },
      items: [
        {
          role: "Full-Stack Developer (Frontend focus)",
          company: "ATMO Comunicação Digital",
          location: "São Paulo, Brazil",
          period: "06/2022 — 07/2026",
          highlights: [
            "ReactJS frontend and Laravel backend of an interactive live streaming platform — real-time chat, quizzes, polls and giveaways over WebSocket (Socket.IO), with peaks of 2,000+ concurrent viewers.",
            "React frontend and Laravel order-processing backend of a live commerce system, with a multi-step checkout and real-time catalog updates during broadcasts.",
            "React web app and React Native mobile app (Expo, push notifications) of a corporate social network, published on the App Store and Google Play and used by 100+ employees — 50 to 80 daily active users.",
            "Internal help desk in ReactJS and PHP/Laravel, delivered with a 5-person team: queues, SLA, notifications and reports. It replaced a third-party product across ~300 service seats, eliminating an estimated BRL 5M+/year recurring cost.",
            "React digital signage dashboard integrated with an in-house player, for real-time remote monitoring and updating of 1,000+ digital screens.",
            "REST APIs in PHP/Laravel with Sanctum authentication and Redis caching, defining the contracts and business logic consumed by the web and mobile apps.",
            "QR Code meal reservation and validation integrated with a Python facial recognition service, and the frontend of an online radio system (uploads, playlists and player).",
            "Agile (Scrum) team with automated tests (Jest/Vitest), CI/CD on GitHub Actions, Docker on Linux and deployment on Cloudflare.",
          ],
        },
        {
          role: "IT Technician",
          company: "Link-Up Sistemas de Informação",
          location: "Praia Grande, Brazil",
          period: "02/2019 — 04/2022",
          highlights: [
            "Deployed and administered an on-premises SQL Server instance supporting internal web applications, from environment setup to data structuring.",
            "Deployed and managed internal and external network infrastructure, ensuring availability of the systems used by operations.",
          ],
        },
        {
          role: "Computer Technician",
          company: "Lorelan Ind. e Comércio LTDA",
          location: "",
          period: "2015 — 2018",
          highlights: [
            "Installed and maintained computers, networks and CCTV systems.",
          ],
        },
      ],
    },
    projects: {
      label: "Selected projects",
      title: "Featured work",
      subtitle: "Real products in production, with the numbers I am able to share.",
      note: "Proprietary client code — happy to walk through the technical details on a call.",
      kinds: {
        atmo: "ATMO · 2022–2026",
        freelance: "Freelance · 2026",
        personal: "Personal project · 2026",
      },
      items: {
        "live-streaming": {
          title: "Interactive Live Streaming",
          category: "Platform · Real-time",
          description:
            "Corporate live streaming platform with chat, quizzes, polls and giveaways synced in real time over Socket.IO. React frontend and Laravel backend, keeping the UI smooth under continuous updates.",
          metrics: [{ value: "2,000+", label: "concurrent viewers" }],
        },
        "help-desk": {
          title: "Internal Help Desk",
          category: "Internal system · Full stack",
          description:
            "Ticketing system with queues, SLA, notifications and reports, built with a 5-person team to replace a third-party product.",
          metrics: [
            { value: "BRL 5M+", label: "estimated savings / year" },
            { value: "~300", label: "service seats" },
          ],
        },
        mailing: {
          title: "Mailing List Automation",
          category: "Call center · Data processing",
          description:
            "Automates the cleansing of dialing lists: cross-references each list against blocklist, street-address and Anatel databases, maps columns from different providers' files and outputs the dialer's CSV. Queued jobs and chunked reading for spreadsheets with 1 million rows.",
          metrics: [
            { value: "1 wk → 1 day", label: "process time" },
            { value: "1M", label: "rows per spreadsheet" },
          ],
        },
        workplace: {
          title: "Workplace Social",
          category: "Corporate social network · Web + Mobile",
          description:
            "Feeds, profiles, rankings, badges, notifications and gamification. React web app and React Native app built with Expo and push notifications, published on the App Store and Google Play.",
          metrics: [
            { value: "100+", label: "employees" },
            { value: "50–80", label: "daily active users" },
          ],
        },
        signage: {
          title: "Digital Signage Dashboard",
          category: "Operations dashboard · Real-time",
          description:
            "Management dashboard integrated with an in-house player to monitor and update a fleet of digital screens remotely, in real time.",
          metrics: [{ value: "1,000+", label: "digital screens" }],
        },
        "live-commerce": {
          title: "Live Commerce",
          category: "E-commerce · Live",
          description:
            "Shopping during live broadcasts: multi-step checkout and real-time catalog updates, with a Laravel order-processing backend.",
          metrics: [],
        },
        "qr-meal": {
          title: "QR Meal Control",
          category: "Integration · Facial recognition",
          description:
            "QR Code meal reservation and validation, integrated through REST APIs with an independent Python facial recognition service.",
          metrics: [],
        },
        "ai-pipelines": {
          title: "Generative AI Pipelines",
          category: "Automation · Image and video",
          description:
            "Local image and video generation pipelines with ComfyUI, automating product photos and vertical content for social media.",
          metrics: [],
        },
      },
    },
    contact: {
      label: "Contact",
      title: "Let's build something memorable",
      subtitle:
        "Open to frontend or full-stack roles — remote, full-time or contract. I reply within 24 hours.",
      cta: "Send an email",
      cv: "Download résumé (PDF)",
      copy: "Copy email",
      copied: "Email copied!",
      phone: "Phone",
      mail_subject: "Dev opportunity — Portfolio",
      mail_body: "Hi Juan, I would like to talk about an opportunity...\n\n",
      terminal: [
        "Initializing handshake...",
        "Resolving endpoint",
        "Connection established ●",
        "Ready for the next opportunity.",
      ],
    },
    footer: {
      built: "Built with coffee, React and a few lines of neon.",
      rights: "All rights reserved.",
      system: "system: online",
      location: "Foz do Iguaçu · BR",
    },
  },

  es: {
    meta: {
      title: "Juan de Sousa Fucks — Desarrollador Full Stack (React, React Native, Laravel)",
      description:
        "Desarrollador Full Stack con foco en frontend: React, Next.js, TypeScript, React Native y Laravel. Más de 4 años llevando a producción live streaming, live commerce, digital signage y apps móviles. Remoto, desde Brasil (UTC-3).",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Stack",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Abrir menú",
      language: "Idioma",
    },
    hero: {
      greeting: "// Hola, mundo. Soy",
      name: "Juan de Sousa Fucks",
      role: "Desarrollador Full Stack · foco en Frontend",
      tagline:
        "Más de 4 años llevando productos web y móviles a producción con React, React Native y Laravel — desde transmisiones en vivo con más de 2 mil personas simultáneas hasta un parque de más de 1.000 pantallas digitales.",
      cta_primary: "Contactar",
      cta_secondary: "Ver proyectos",
      cta_cv: "Descargar CV",
      status: "Disponible · remoto · tiempo completo o contrato",
      scroll: "Desliza para descubrir",
      location: "Foz do Iguaçu, Brasil · remoto",
    },
    about: {
      label: "Sobre mí",
      title: "De la base de datos a la interfaz, en producción.",
      p1: "Soy desarrollador full stack desde hace más de 4 años, con el foco puesto en el frontend (UI/UX) con React, Next.js, TypeScript y React Native — y backend en PHP/Laravel cuando el producto pide un sistema construido desde cero.",
      p2: "En ATMO Comunicação Digital (2022–2026) llevé a producción plataformas de live streaming interactivo, live commerce, digital signage y help desk, además de una red social corporativa con app publicada en App Store y Google Play. En 2026, como freelance, entregué un sistema en Laravel que automatiza el tratamiento de planillas de 1 millón de filas.",
      p3: "Trabajo de forma remota desde Foz do Iguaçu, Brasil (UTC-3), y busco un equipo de producto donde pueda entregar de punta a punta.",
      stats: {
        years: { value: "4+", label: "Años como dev" },
        viewers: { value: "2K+", label: "Espectadores simultáneos" },
        screens: { value: "1K+", label: "Pantallas digitales gestionadas" },
        apps: { value: "2", label: "Tiendas: App Store y Google Play" },
      },
      edu_title: "Formación",
      edu: [
        {
          degree: "Tecnólogo en Análisis y Desarrollo de Sistemas",
          school: "Instituto Federal de São Paulo (IFSP) · 2018 – 2020",
        },
        {
          degree: "Técnico en Electrónica y Mecatrónica",
          school: "Fortec · 2014",
        },
      ],
      cert_title: "Certificación",
      cert: {
        name: "ISO/IEC 27001 Information Security Associate",
        issuer: "SkillFront · 2026",
      },
      langs_title: "Idiomas",
      langs: ["Portugués · Nativo", "Inglés · Intermedio"],
      photo_status: "Disponible",
    },
    skills: {
      label: "Stack & Herramientas",
      title: "Arsenal técnico",
      subtitle:
        "Lo que uso para entregar productos rápidos, responsivos y en tiempo real — de la app móvil a la API.",
      categories: {
        frontend: "Frontend & UI",
        mobile: "Mobile & Desktop",
        backend: "Backend & APIs",
        data: "Bases de datos",
        quality: "Calidad & DevOps",
        ai: "IA & Automatización",
      },
    },
    experience: {
      label: "Experiencia",
      title: "Trayectoria",
      side: {
        stack_title: "Stack principal",
        stats: [
          { value: "7", label: "Productos en producción" },
          { value: "~300", label: "Puntos de atención" },
          { value: "100+", label: "Usuarios en la app" },
        ],
      },
      items: [
        {
          role: "Desarrollador Full Stack (foco en Frontend)",
          company: "ATMO Comunicação Digital",
          location: "São Paulo, Brasil",
          period: "06/2022 — 07/2026",
          highlights: [
            "Frontend en ReactJS y backend en Laravel de una plataforma de live streaming interactiva — chat, quizzes, encuestas y sorteos en tiempo real vía WebSocket (Socket.IO), con picos de más de 2 mil personas viendo al mismo tiempo.",
            "Frontend en React y backend de procesamiento de pedidos en Laravel de un sistema de live commerce, con compra en múltiples etapas y catálogo actualizado en tiempo real durante las transmisiones.",
            "Web en React y app en React Native (Expo, push notifications) de una red social corporativa, publicada en App Store y Google Play y usada por más de 100 colaboradores — entre 50 y 80 activos por día.",
            "Help desk interno en ReactJS y PHP/Laravel, entregado con un equipo de 5 personas: colas, SLA, notificaciones e informes. Reemplazó un software de terceros en cerca de 300 puntos de atención, eliminando un costo recurrente estimado en más de R$ 5 millones por año.",
            "Panel React de digital signage integrado a un player propio, para monitorear y actualizar de forma remota, en tiempo real, más de 1.000 pantallas digitales.",
            "APIs REST en PHP/Laravel con autenticación vía Sanctum y caché con Redis, definiendo contratos y reglas de negocio consumidos por las aplicaciones web y móviles.",
            "Reserva y validación de comidas por código QR integradas a un servicio Python de reconocimiento facial, y frontend de un sistema de radio online (upload, playlists y player).",
            "Equipo ágil (Scrum) con tests automatizados (Jest/Vitest), CI/CD con GitHub Actions, Docker sobre Linux y deploy en Cloudflare.",
          ],
        },
        {
          role: "Técnico de TI",
          company: "Link-Up Sistemas de Informação",
          location: "Praia Grande, Brasil",
          period: "02/2019 — 04/2022",
          highlights: [
            "Implanté y administré un servidor local en SQL Server para aplicaciones web internas, desde la configuración del entorno hasta la estructuración de los datos.",
            "Implanté y gestioné la infraestructura de redes internas y externas, garantizando la disponibilidad de los sistemas usados por la operación.",
          ],
        },
        {
          role: "Técnico en Informática",
          company: "Lorelan Ind. e Comércio LTDA",
          location: "",
          period: "2015 — 2018",
          highlights: [
            "Instalación y mantenimiento de computadoras, redes y sistemas de CCTV.",
          ],
        },
      ],
    },
    projects: {
      label: "Proyectos seleccionados",
      title: "Trabajos destacados",
      subtitle: "Productos reales en producción, con los números que puedo contar.",
      note: "Código propietario de los clientes — los detalles técnicos los cuento en una conversación.",
      kinds: {
        atmo: "ATMO · 2022–2026",
        freelance: "Freelance · 2026",
        personal: "Proyecto personal · 2026",
      },
      items: {
        "live-streaming": {
          title: "Live Streaming Interactivo",
          category: "Plataforma · Tiempo real",
          description:
            "Plataforma de transmisiones corporativas con chat, quizzes, encuestas y sorteos sincronizados en tiempo real vía Socket.IO. Frontend en React y backend en Laravel, manteniendo la interfaz fluida bajo actualización continua.",
          metrics: [{ value: "2 mil+", label: "espectadores simultáneos" }],
        },
        "help-desk": {
          title: "Help Desk Interno",
          category: "Sistema interno · Full stack",
          description:
            "Sistema de tickets con colas, SLA, notificaciones e informes, construido con un equipo de 5 personas para reemplazar un software de terceros.",
          metrics: [
            { value: "R$ 5 M+", label: "ahorro estimado / año" },
            { value: "~300", label: "puntos de atención" },
          ],
        },
        mailing: {
          title: "Automatización de Mailing",
          category: "Call center · Procesamiento de datos",
          description:
            "Automatiza la limpieza de listas de marcación: cruza el mailing con blacklist, base de direcciones y base de Anatel, mapea columnas de archivos de distintos proveedores y genera el CSV del marcador. Colas y lectura por bloques para planillas de 1 millón de filas.",
          metrics: [
            { value: "1 sem → 1 día", label: "tiempo del proceso" },
            { value: "1 M", label: "filas por planilla" },
          ],
        },
        workplace: {
          title: "Workplace Social",
          category: "Red social corporativa · Web + Mobile",
          description:
            "Feeds, perfiles, rankings, badges, notificaciones y gamificación. Web en React y app en React Native con Expo y push notifications, publicada en App Store y Google Play.",
          metrics: [
            { value: "100+", label: "colaboradores" },
            { value: "50–80", label: "activos por día" },
          ],
        },
        signage: {
          title: "Digital Signage Dashboard",
          category: "Panel operativo · Tiempo real",
          description:
            "Panel de gestión integrado a un player propio para monitorear y actualizar de forma remota, en tiempo real, un parque de pantallas digitales.",
          metrics: [{ value: "1.000+", label: "pantallas digitales" }],
        },
        "live-commerce": {
          title: "Live Commerce",
          category: "E-commerce · En vivo",
          description:
            "Compra durante transmisiones en vivo: checkout en múltiples etapas y catálogo actualizado en tiempo real, con backend de procesamiento de pedidos en Laravel.",
          metrics: [],
        },
        "qr-meal": {
          title: "QR Meal Control",
          category: "Integración · Reconocimiento facial",
          description:
            "Reserva y validación de comidas por código QR, integradas vía APIs REST a un servicio independiente de reconocimiento facial en Python.",
          metrics: [],
        },
        "ai-pipelines": {
          title: "Pipelines de IA Generativa",
          category: "Automatización · Imagen y video",
          description:
            "Pipelines locales de generación de imagen y video con ComfyUI, automatizando la producción de fotos de producto y de contenido vertical para redes sociales.",
          metrics: [],
        },
      },
    },
    contact: {
      label: "Contacto",
      title: "Construyamos algo memorable",
      subtitle:
        "Abierto a posiciones frontend o full stack — remoto, tiempo completo o contrato. Respondo en menos de 24h.",
      cta: "Enviar email",
      cv: "Descargar CV (PDF)",
      copy: "Copiar email",
      copied: "¡Email copiado!",
      phone: "Teléfono",
      mail_subject: "Oportunidad Dev — Portfolio",
      mail_body: "Hola Juan, me gustaría conversar sobre una oportunidad...\n\n",
      terminal: [
        "Iniciando handshake...",
        "Resolviendo endpoint",
        "Conexión establecida ●",
        "Listo para la próxima oportunidad.",
      ],
    },
    footer: {
      built: "Hecho con café, React y unas líneas de neón.",
      rights: "Todos los derechos reservados.",
      system: "sistema: online",
      location: "Foz do Iguaçu · BR",
    },
  },
};

export const LANGS = [
  { code: "pt", label: "PT-BR", htmlLang: "pt-BR" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "es", label: "ES", htmlLang: "es" },
];
