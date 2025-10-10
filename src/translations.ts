export type Language = 'en' | 'pt' | 'fr' | 'es' | 'it';

export const getMessages = (lang: Language) => {
  return messages[lang] || messages.en;
};

export const messages = {
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Antonio Vita",
      subtitle: "Estudante de Ciência da Computação na PUC-Rio & Desenvolvedor Full-Stack",
      viewMore: "Ver Mais"
    },
    timeline: {
      title: "Minha Jornada",
      events: [
        {
          year: '2017',
          title: 'Primeiro contato com programação',
          description: 'Tive minha primeira experiência com programação usando a plataforma Scratch durante as aulas escolares.'
        },
        {
          year: '2019',
          title: 'Começando com Python',
          description: 'Também comecei a aprender Python na escola, explorando lógica e automação básica.'
        },
        {
          year: '2020',
          title: 'Explorando JavaScript e primeiros projetos pessoais',
          description: 'Fui além da escola e comecei a aprender JavaScript por conta própria. Desenvolvi bots para Discord e construí meus primeiros sites.'
        },
        {
          year: '2023',
          title: 'Retornando ao desenvolvimento web',
          description: 'Após um tempo com menos atividade de programação, voltei a focar em projetos web, especialmente usando React.'
        },
        {
          year: '2024',
          title: 'Último ano do ensino médio e aprofundamento de conhecimentos',
          description: 'Durante o último ano do ensino médio, após terminar os exames, retomei os estudos intensamente. Aprofundei minhas habilidades em desenvolvimento web e comecei a aprender Java.'
        },
        {
          year: '2025',
          title: 'Iniciando graduação em Ciência da Computação',
          description: 'Comecei a universidade com uma base sólida, focando em desenvolvimento full-stack e iniciando minha jornada em dados e IA usando PyTorch.'
        },
        {
          year: '2025',
          title: 'Estagiário em Automation no BTG Pactual',
          description: 'Automatizo tarefas internas do banco e trabalho com Python, AWS e React.'
        }
      ]
    },
    stack: {
      title: "E quanto à minha",
      titleHighlight: "stack",
      viewList: "Ver a lista",
      goBack: "Voltar"
    },
    projects: {
      title: "Um pouco do meu trabalho",
      items: [
        { title: 'IRSA: Radiologia de Imagens Médicas', description: 'Projeto SPA construído com Next.js e TailwindCSS' },
        { title: 'MyOrder – Cardápio Digital para Restaurantes', description: 'Cardápio digital interativo com interface responsiva para pedidos sem atendimento humano.' },
        { title: 'Gymtracker - App de Gerenciamento de Treinos', description: 'Aplicativo móvel para rastrear e organizar meus treinos na academia.' },
        { title: 'Esse portfolio aqui', description: 'Portfolio feito inteiramente em Next.js com TailwindCSS.' },
        { title: 'Dayo - Gerenciamento de rotina com IA', description: 'Aplicativo em Expo utilizando o llama.rn com o modelo de encoding TinyLLM.' },
      ]
    },
    about: {
      title: "E quanto a",
      titleHighlight: "mim",
      description: "Sou estudante de Ciência da Computação na PUC-Rio com bolsa por mérito. Tenho 1 ano de experiência em desenvolvimento web com Typescript, React, Node.js, MongoDB e PostgreSQL. Também me interesso por blockchain e estou sempre aprendendo."
    },
    contact: {
      title: "Entre em ",
      span: "contato!",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome...",
        email: "E-mail",
        emailPlaceholder: "Seu e-mail...",
        message: "Mensagem",
        messagePlaceholder: "Sua mensagem...",
        submit: "Enviar",
        validationError: "Por favor, preencha todos os campos."
      }
    }
  },

  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Antonio Vita",
      subtitle: "Computer Science student at PUC-Rio & Full-Stack Developer",
      viewMore: "View More"
    },
    timeline: {
      title: "My Journey",
      events: [
        { year: '2017', title: 'First contact with programming', description: 'I had my first programming experience using Scratch during school.' },
        { year: '2019', title: 'Starting with Python', description: 'I started learning Python at school, exploring logic and basic automation.' },
        { year: '2020', title: 'Exploring JavaScript and personal projects', description: 'I began learning JavaScript independently, developing Discord bots and my first websites.' },
        { year: '2023', title: 'Returning to web development', description: 'After a period of less programming, I focused again on web projects using React.' },
        { year: '2024', title: 'Final year of high school and deep learning', description: 'After exams, I deepened my web development knowledge and began learning Java.' },
        { year: '2025', title: 'Starting Computer Science degree', description: 'I began university focusing on full-stack development and AI with PyTorch.' },
        { year: '2025', title: 'Automation Intern at BTG Pactual', description: 'I automate internal bank tasks using Python, AWS, and React.' }
      ]
    },
    stack: {
      title: "And about my",
      titleHighlight: "stack",
      viewList: "View list",
      goBack: "Go back"
    },
    projects: {
      title: "Some of my work",
      items: [
        { title: 'IRSA: Medical Imaging Radiology', description: 'SPA project built with Next.js and TailwindCSS' },
        { title: 'MyOrder – Digital Menu for Restaurants', description: 'Interactive menu with responsive UI for human-free ordering.' },
        { title: 'Gymtracker - Workout Management App', description: 'Mobile app to track and organize my gym workouts.' },
        { title: 'This portfolio', description: 'Portfolio fully built with Next.js and TailwindCSS.' },
        { title: 'Dayo - AI-powered Routine Management', description: 'Expo app using llama.rn with TinyLLM encoding model.' },
      ]
    },
    about: {
      title: "And about",
      titleHighlight: "me",
      description: "I’m a Computer Science student at PUC-Rio with a merit scholarship. I have 1 year of experience in web development using TypeScript, React, Node.js, MongoDB, and PostgreSQL. I’m also interested in blockchain and always eager to learn more."
    },
    contact: {
      title: "Get in ",
      span: "touch!",
      form: {
        name: "Name",
        namePlaceholder: "Your name...",
        email: "Email",
        emailPlaceholder: "Your email...",
        message: "Message",
        messagePlaceholder: "Your message...",
        submit: "Send",
        validationError: "Please fill out all fields."
      }
    }
  },

  es: {
    hero: { greeting: "Hola, soy", name: "Antonio Vita", subtitle: "Estudiante de Ciencias de la Computación en la PUC-Rio y Desarrollador Full-Stack", viewMore: "Ver más" },
    timeline: {
      title: "Mi Trayectoria",
      events: [
        { year: '2017', title: 'Primer contacto con la programación', description: 'Tuve mi primera experiencia con Scratch durante las clases escolares.' },
        { year: '2019', title: 'Comenzando con Python', description: 'Empecé a aprender Python en la escuela, explorando lógica y automatización.' },
        { year: '2020', title: 'Explorando JavaScript y primeros proyectos', description: 'Aprendí JavaScript por mi cuenta, desarrollando bots de Discord y mis primeros sitios web.' },
        { year: '2023', title: 'Regreso al desarrollo web', description: 'Tras un tiempo inactivo, volví a centrarme en proyectos web usando React.' },
        { year: '2024', title: 'Último año de secundaria y aprendizaje profundo', description: 'Después de los exámenes, retomé mis estudios y comencé con Java.' },
        { year: '2025', title: 'Inicio de la carrera en Ciencias de la Computación', description: 'Comencé la universidad con base sólida, enfocándome en full-stack y aprendiendo IA con PyTorch.' },
        { year: '2025', title: 'Becario en Automatización en BTG Pactual', description: 'Automatizo tareas internas del banco con Python, AWS y React.' }
      ]
    },
    stack: { title: "Y sobre mi", titleHighlight: "stack", viewList: "Ver lista", goBack: "Volver" },
    projects: {
      title: "Un poco de mi trabajo",
      items: [
        { title: 'IRSA: Radiología de Imágenes Médicas', description: 'Proyecto SPA con Next.js y TailwindCSS' },
        { title: 'MyOrder – Menú Digital para Restaurantes', description: 'Menú digital interactivo para pedidos automáticos.' },
        { title: 'Gymtracker - App de Gestión de Entrenamientos', description: 'App móvil para registrar y organizar mis entrenamientos.' },
        { title: 'Este portafolio', description: 'Portafolio creado con Next.js y TailwindCSS.' },
        { title: 'Dayo - Gestión de Rutina con IA', description: 'App Expo usando llama.rn y el modelo TinyLLM.' },
      ]
    },
    about: {
      title: "Y sobre",
      titleHighlight: "mí",
      description: "Soy estudiante de Ciencias de la Computación en la PUC-Rio con beca por mérito. Tengo experiencia con TypeScript, React, Node.js, MongoDB y PostgreSQL. Me interesa el desarrollo blockchain y aprender continuamente."
    },
    contact: {
      title: "Ponte en ",
      span: "contacto!",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre...",
        email: "Correo",
        emailPlaceholder: "Tu correo...",
        message: "Mensaje",
        messagePlaceholder: "Tu mensaje...",
        submit: "Enviar",
        validationError: "Por favor, completa todos los campos."
      }
    }
  },

  it: {
    hero: { greeting: "Ciao, sono", name: "Antonio Vita", subtitle: "Studente di Informatica alla PUC-Rio e Sviluppatore Full-Stack", viewMore: "Vedi di più" },
    timeline: {
      title: "Il mio percorso",
      events: [
        { year: '2017', title: 'Primo contatto con la programmazione', description: 'Ho iniziato a programmare con Scratch a scuola.' },
        { year: '2019', title: 'Inizio con Python', description: 'Ho imparato Python, esplorando logica e automazione di base.' },
        { year: '2020', title: 'Esplorando JavaScript e i primi progetti', description: 'Ho imparato JavaScript da solo, creando bot e siti web.' },
        { year: '2023', title: 'Ritorno allo sviluppo web', description: 'Ho ripreso a concentrarmi su progetti React.' },
        { year: '2024', title: 'Ultimo anno di liceo e approfondimento', description: 'Dopo gli esami ho approfondito le mie competenze e iniziato con Java.' },
        { year: '2025', title: 'Inizio della laurea in Informatica', description: 'Mi concentro su sviluppo full-stack e IA con PyTorch.' },
        { year: '2025', title: 'Tirocinante in Automazione presso BTG Pactual', description: 'Automatizzo processi bancari con Python, AWS e React.' }
      ]
    },
    stack: { title: "E riguardo alla mia", titleHighlight: "stack", viewList: "Vedi lista", goBack: "Indietro" },
    projects: {
      title: "Un po' del mio lavoro",
      items: [
        { title: 'IRSA: Radiologia delle Immagini Mediche', description: 'Progetto SPA con Next.js e TailwindCSS' },
        { title: 'MyOrder – Menu Digitale per Ristoranti', description: 'Menu interattivo per ordinazioni automatiche.' },
        { title: 'Gymtracker - App di Gestione Allenamenti', description: 'App per gestire e monitorare allenamenti in palestra.' },
        { title: 'Questo portfolio', description: 'Portfolio realizzato con Next.js e TailwindCSS.' },
        { title: 'Dayo - Gestione Routine con IA', description: 'App Expo con llama.rn e modello TinyLLM.' },
      ]
    },
    about: {
      title: "E riguardo a",
      titleHighlight: "me",
      description: "Sono studente di Informatica alla PUC-Rio con borsa di merito. Esperienza con TypeScript, React, Node.js, MongoDB e PostgreSQL. Interessato anche alla blockchain."
    },
    contact: {
      title: "Mettiti in ",
      span: "contatto!",
      form: {
        name: "Nome",
        namePlaceholder: "Il tuo nome...",
        email: "Email",
        emailPlaceholder: "La tua email...",
        message: "Messaggio",
        messagePlaceholder: "Il tuo messaggio...",
        submit: "Invia",
        validationError: "Per favore, compila tutti i campi."
      }
    }
  },

  fr: {
    hero: { greeting: "Salut, je suis", name: "Antonio Vita", subtitle: "Étudiant en informatique à la PUC-Rio & Développeur Full-Stack", viewMore: "Voir plus" },
    timeline: {
      title: "Mon Parcours",
      events: [
        { year: '2017', title: 'Premier contact avec la programmation', description: 'Première expérience avec Scratch à l’école.' },
        { year: '2019', title: 'Début avec Python', description: 'Apprentissage de la logique et de l’automatisation basique.' },
        { year: '2020', title: 'Exploration de JavaScript et projets personnels', description: 'Apprentissage autonome de JavaScript et création de bots Discord.' },
        { year: '2023', title: 'Retour au développement web', description: 'Concentration sur des projets web avec React.' },
        { year: '2024', title: 'Dernière année de lycée et approfondissement', description: 'Après les examens, j’ai repris mes études et appris Java.' },
        { year: '2025', title: 'Début en Informatique', description: 'Études en full-stack et IA avec PyTorch.' },
        { year: '2025', title: 'Stagiaire en Automatisation chez BTG Pactual', description: 'Automatisation de tâches internes avec Python, AWS et React.' }
      ]
    },
    stack: { title: "Et à propos de ma", titleHighlight: "stack", viewList: "Voir la liste", goBack: "Retour" },
    projects: {
      title: "Quelques-uns de mes travaux",
      items: [
        { title: 'IRSA : Radiologie d’Images Médicales', description: 'Projet SPA avec Next.js et TailwindCSS' },
        { title: 'MyOrder – Menu Digital pour Restaurants', description: 'Menu numérique interactif pour commandes automatiques.' },
        { title: 'Gymtracker - Application d’Entraînement', description: 'Application mobile pour suivre mes séances de sport.' },
        { title: 'Ce portfolio', description: 'Portfolio réalisé avec Next.js et TailwindCSS.' },
        { title: 'Dayo - Gestion de routine avec IA', description: 'Application Expo utilisant llama.rn et TinyLLM.' },
      ]
    },
    about: {
      title: "Et à propos de",
      titleHighlight: "moi",
      description: "Étudiant en informatique à la PUC-Rio avec bourse de mérite. Expérience en TypeScript, React, Node.js, MongoDB, PostgreSQL. Intéressé par la blockchain et l’IA."
    },
    contact: {
      title: "Prenez ",
      span: "contact !",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom...",
        email: "E-mail",
        emailPlaceholder: "Votre e-mail...",
        message: "Message",
        messagePlaceholder: "Votre message...",
        submit: "Envoyer",
        validationError: "Veuillez remplir tous les champs."
      }
    }
  }
};
