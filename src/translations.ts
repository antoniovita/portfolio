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
          year: "2017",
          title: "Primeiro contato com programação",
          description: "Tive minha primeira experiência com programação usando a plataforma Scratch durante as aulas escolares."
        },
        {
          year: "2019",
          title: "Começando com Python",
          description: "Também comecei a aprender Python na escola, explorando lógica e automação básica."
        },
        {
          year: "2020",
          title: "Explorando JavaScript e primeiros projetos pessoais",
          description: "Fui além da escola e comecei a aprender JavaScript por conta própria. Desenvolvi bots para Discord e construí meus primeiros sites."
        },
        {
          year: "2023",
          title: "Retornando ao desenvolvimento web",
          description: "Após um tempo com menos atividade de programação, voltei a focar em projetos web, especialmente usando React."
        },
        {
          year: "2024",
          title: "Último ano do ensino médio e aprofundamento de conhecimentos",
          description: "Durante o último ano do ensino médio, após terminar os exames, retomei os estudos intensamente. Aprofundei minhas habilidades em desenvolvimento web e comecei a aprender Java."
        },
        {
          year: "2025",
          title: "Iniciando graduação em Ciência da Computação",
          description: "Comecei a universidade com uma base sólida, focando em desenvolvimento full-stack e iniciando minha jornada em dados e IA usando PyTorch."
        },
        {
          year: "2025",
          title: "Estagiário em Automation no BTG Pactual",
          description: "Trabalhei com a automação de tarefas internas do banco, utilizando principalmente Python, AWS e React."
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
        { title: "IRSA: Radiologia de Imagens Médicas", description: "Projeto SPA construído com Next.js e TailwindCSS.", github: "https://github.com/antoniovita/irsa" },
        { title: "MyOrder – Cardápio Digital para Restaurantes", description: "Cardápio digital interativo com interface responsiva para pedidos sem atendimento humano.", github: "https://github.com/antoniovita/myorder" },
        { title: "Gymtracker - App de Gerenciamento de Treinos", description: "Aplicativo móvel para rastrear e organizar meus treinos na academia.", github: "https://github.com/antoniovita/gymtracker" },
        { title: "Esse portfolio aqui", description: "Portfolio feito inteiramente em Next.js com TailwindCSS.", github: "https://github.com/antoniovita/portfolio" },
        { title: "Dayo - Gerenciamento de rotina com IA", description: "Aplicativo em Expo utilizando o llama.rn com o modelo de encoding TinyLLM.", github: "https://github.com/antoniovita/dayo" }
      ]
    },
    about: {
      title: "E quanto a",
      titleHighlight: "mim",
      description: "Sou estudante de Ciência da Computação na PUC-Rio com bolsa por mérito. Tenho 1 ano de experiência em desenvolvimento web com Typescript, React, Node.js, MongoDB e PostgreSQL. Também me interesso por blockchain e estou sempre aprendendo."
    },
    education: {
      title: "Minha",
      linkedin: "Escaneie para ver o Linkedin",
      titleHighlight: "Formação",
      subtitle: "Educação acadêmica e certificações profissionais",
      languages: {
        title: "Idiomas",
        items: [
          { name: "Português", level: "Nativo" },
          { name: "Inglês", level: "Avançado (C1)" },
          { name: "Espanhol", level: "Intermediário (B2)" },
          { name: "Italiano", level: "Básico" },
          { name: "Francês", level: "Básico" }
        ]
      },
      experience: {
        title: "Experiência",
        items: [
          {
            position: "Estagiário em Automation",
            company: "BTG Pactual",
            period: "2025 - Presente",
            description: "Automatização de processos internos utilizando Python, AWS, React e integrações com APIs."
          },
          {
            position: "Projetos Pessoais em Desenvolvimento Web",
            company: "Freelancer / Projetos próprios",
            period: "2023 - Presente",
            description: "Desenvolvimento de aplicações full-stack com Next.js, Node.js e bancos de dados relacionais e NoSQL."
          }
        ]
      },
      institutions: {
        title: "Instituições de Ensino",
        items: [
          {
            name: "PUC-Rio",
            degree: "Bacharelado em Ciência da Computação",
            period: "2025 - Presente",
            description: "Cursando graduação com bolsa por mérito acadêmico. Foco em desenvolvimento full-stack, estruturas de dados, algoritmos e inteligência artificial.",
            achievement: "Bolsa de Mérito Acadêmico"
          },
          {
            name: "PUC-Rio",
            degree: "Associate degree em Ciência de Dados",
            period: "2025 - Presente",
            description: "Formação complementar focada em estatística aplicada, análise de dados, visualização de informações e fundamentos de machine learning."
          },
          {
            name: "Instituto Gaylussac",
            degree: "Ensino Médio e Fundamental",
            period: "2015 - 2024",
            description: "Concluí o ensino médio com foco em ciências exatas. Participei de projetos de programação e olimpíadas de matemática.",
            achievement: "Medalha de bronze no Canguru, ouro na OBLI, bronze na OBA e outras competições."
          },
          {
            name: "Cultura Inglesa",
            degree: "Curso de inglês",
            period: "2021 - 2023",
            description: "Curso de inglês com foco em comunicação oral e escrita, fluência no dia a dia e preparação para certificações internacionais."
          }
        ]
      },
      certifications: {
        title: "Certificações",
        items: [
          {
            name: "LLM Course",
            issuer: "Hugging Face",
            date: "2025"
          },
          {
            name: "Data Modeling",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "Programacao em Python",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "C1 Cambridge",
            issuer: "Cambridge",
            date: "2023"
          },
          {
            name: "B2 DELE Spanish",
            issuer: "Instituto Cervantes",
            date: "2023"
          }
        ]
      },
      learningNote: {
        title: "Aprendizado Contínuo",
        description: "Além da formação acadêmica formal, estou constantemente aprendendo novas tecnologias através de cursos online, projetos pessoais e contribuições open source."
      }
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
        {
          year: "2017",
          title: "First contact with programming",
          description: "I had my first experience with programming using the Scratch platform during school classes."
        },
        {
          year: "2019",
          title: "Getting started with Python",
          description: "I also began learning Python at school, exploring logic and basic automation."
        },
        {
          year: "2020",
          title: "Exploring JavaScript and first personal projects",
          description: "I went beyond school and started learning JavaScript on my own. I built Discord bots and created my first websites."
        },
        {
          year: "2023",
          title: "Returning to web development",
          description: "After a period with less programming activity, I refocused on web projects, especially using React."
        },
        {
          year: "2024",
          title: "Last year of high school and deepening my knowledge",
          description: "During my final year of high school, after finishing exams, I resumed studying intensely. I strengthened my web development skills and started learning Java."
        },
        {
          year: "2025",
          title: "Starting a degree in Computer Science",
          description: "I began university with a solid foundation, focusing on full-stack development and starting my journey in data and AI using PyTorch."
        },
        {
          year: "2025",
          title: "Automation Intern at BTG Pactual",
          description: "I worked on automating internal processes at the bank, mainly using Python, AWS, and React."
        }
      ]
    },
    stack: {
      title: "And what about my",
      titleHighlight: "stack",
      viewList: "View list",
      goBack: "Go back"
    },
    projects: {
      title: "Some of my work",
      items: [
        { title: "IRSA: Medical Imaging Radiology", description: "SPA project built with Next.js and TailwindCSS.", github: "https://github.com/antoniovita/irsa" },
        { title: "MyOrder – Digital Menu for Restaurants", description: "Interactive digital menu with a responsive interface for contactless ordering.", github: "https://github.com/antoniovita/myorder" },
        { title: "Gymtracker - Workout Management App", description: "Mobile app to track and organize my gym workouts.", github: "https://github.com/antoniovita/gymtracker" },
        { title: "This portfolio", description: "Portfolio built entirely with Next.js and TailwindCSS.", github: "https://github.com/antoniovita/portfolio" },
        { title: "Dayo - AI-powered routine management", description: "Expo app using llama.rn with the TinyLLM encoding model.", github: "https://github.com/antoniovita/dayo" }
      ]
    },
    about: {
      title: "And about",
      titleHighlight: "me",
      description: "I am a Computer Science student at PUC-Rio with a merit-based scholarship. I have 1 year of experience in web development with Typescript, React, Node.js, MongoDB and PostgreSQL. I'm also interested in blockchain and always learning."
    },
    education: {
      title: "My",
      linkedin: "Scan to view LinkedIn",
      titleHighlight: "Education",
      subtitle: "Academic background and professional certifications",
      languages: {
        title: "Languages",
        items: [
          { name: "Portuguese", level: "Native" },
          { name: "English", level: "Advanced (C1)" },
          { name: "Spanish", level: "Intermediate (B2)" },
          { name: "Italian", level: "Basic" },
          { name: "French", level: "Basic" }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            position: "Automation Intern",
            company: "BTG Pactual",
            period: "2025 - Present",
            description: "Automation of internal processes using Python, AWS, React and API integrations."
          },
          {
            position: "Personal Web Development Projects",
            company: "Freelance / Personal projects",
            period: "2023 - Present",
            description: "Development of full-stack applications with Next.js, Node.js, and both relational and NoSQL databases."
          }
        ]
      },
      institutions: {
        title: "Educational Institutions",
        items: [
          {
            name: "PUC-Rio",
            degree: "Bachelor's in Computer Science",
            period: "2025 - Present",
            description: "Pursuing a degree with a merit scholarship. Focused on full-stack development, data structures, algorithms, and artificial intelligence.",
            achievement: "Merit Scholarship"
          },
          {
            name: "PUC-Rio",
            degree: "Associate degree in Data Science",
            period: "2025 - Present",
            description: "Complementary program focused on applied statistics, data analysis, data visualization, and fundamentals of machine learning."
          },
          {
            name: "Instituto Gaylussac",
            degree: "Middle and High School",
            period: "2015 - 2024",
            description: "Completed high school with a focus on STEM subjects. Took part in programming projects and math olympiads.",
            achievement: "Bronze in Canguru, gold in OBLI, bronze in OBA, and other competitions."
          },
          {
            name: "Cultura Inglesa",
            degree: "English Course",
            period: "2021 - 2023",
            description: "English course focused on spoken and written communication, everyday fluency, and preparation for international certifications."
          }
        ]
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "LLM Course",
            issuer: "Hugging Face",
            date: "2025"
          },
          {
            name: "Data Modeling",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "Programming in Python",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "C1 Cambridge",
            issuer: "Cambridge",
            date: "2023"
          },
          {
            name: "B2 DELE Spanish",
            issuer: "Instituto Cervantes",
            date: "2023"
          }
        ]
      },
      learningNote: {
        title: "Continuous Learning",
        description: "Beyond formal academic education, I am constantly learning new technologies through online courses, personal projects, and open source contributions."
      }
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
        validationError: "Please fill in all fields."
      }
    }
  },

  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Antonio Vita",
      subtitle: "Estudiante de Ciencias de la Computación en PUC-Rio y Desarrollador Full-Stack",
      viewMore: "Ver más"
    },
    timeline: {
      title: "Mi Trayectoria",
      events: [
        {
          year: "2017",
          title: "Primer contacto con la programación",
          description: "Tuve mi primera experiencia con programación usando la plataforma Scratch durante las clases escolares."
        },
        {
          year: "2019",
          title: "Empezando con Python",
          description: "También empecé a aprender Python en la escuela, explorando lógica y automatización básica."
        },
        {
          year: "2020",
          title: "Explorando JavaScript y primeros proyectos personales",
          description: "Fui más allá de la escuela y comencé a aprender JavaScript por mi cuenta. Desarrollé bots para Discord y construí mis primeros sitios web."
        },
        {
          year: "2023",
          title: "Regresando al desarrollo web",
          description: "Después de un período con menos actividad de programación, volví a enfocarme en proyectos web, especialmente usando React."
        },
        {
          year: "2024",
          title: "Último año de secundaria y profundización de conocimientos",
          description: "Durante el último año de la escuela secundaria, después de terminar los exámenes, retomé los estudios intensamente. Profundicé mis habilidades en desarrollo web y comencé a aprender Java."
        },
        {
          year: "2025",
          title: "Inicio de la carrera en Ciencias de la Computación",
          description: "Comencé la universidad con una base sólida, enfocándome en desarrollo full-stack e iniciando mi camino en datos e IA utilizando PyTorch."
        },
        {
          year: "2025",
          title: "Practicante de Automatización en BTG Pactual",
          description: "Trabajé en la automatización de tareas internas del banco, utilizando principalmente Python, AWS y React."
        }
      ]
    },
    stack: {
      title: "Y sobre mi",
      titleHighlight: "stack",
      viewList: "Ver la lista",
      goBack: "Volver"
    },
    projects: {
      title: "Un poco de mi trabajo",
      items: [
        { title: "IRSA: Radiología de Imágenes Médicas", description: "Proyecto SPA construido con Next.js y TailwindCSS.", github: "https://github.com/antoniovita/irsa" },
        { title: "MyOrder – Menú Digital para Restaurantes", description: "Menú digital interactivo con interfaz responsiva para pedidos sin atención humana.", github: "https://github.com/antoniovita/myorder" },
        { title: "Gymtracker - App de Gestión de Entrenamientos", description: "Aplicación móvil para registrar y organizar mis entrenamientos en el gimnasio.", github: "https://github.com/antoniovita/gymtracker" },
        { title: "Este portafolio", description: "Portafolio hecho completamente con Next.js y TailwindCSS.", github: "https://github.com/antoniovita/portfolio" },
        { title: "Dayo - Gestión de rutina con IA", description: "Aplicación en Expo que utiliza llama.rn con el modelo de codificación TinyLLM.", github: "https://github.com/antoniovita/dayo" }
      ]
    },
    about: {
      title: "Y sobre",
      titleHighlight: "mí",
      description: "Soy estudiante de Ciencias de la Computación en PUC-Rio con beca por mérito. Tengo 1 año de experiencia en desarrollo web con Typescript, React, Node.js, MongoDB y PostgreSQL. También me interesa la cadena de bloques y siempre estoy aprendiendo."
    },
    education: {
      title: "Mi",
      linkedin: "Escanea para ver el LinkedIn",
      titleHighlight: "Formación",
      subtitle: "Formación académica y certificaciones profesionales",
      languages: {
        title: "Idiomas",
        items: [
          { name: "Portugués", level: "Nativo" },
          { name: "Inglés", level: "Avanzado (C1)" },
          { name: "Español", level: "Intermedio (B2)" },
          { name: "Italiano", level: "Básico" },
          { name: "Francés", level: "Básico" }
        ]
      },
      experience: {
        title: "Experiencia",
        items: [
          {
            position: "Practicante de Automatización",
            company: "BTG Pactual",
            period: "2025 - Presente",
            description: "Automatización de procesos internos utilizando Python, AWS, React e integraciones con APIs."
          },
          {
            position: "Proyectos Personales de Desarrollo Web",
            company: "Freelance / Proyectos propios",
            period: "2023 - Presente",
            description: "Desarrollo de aplicaciones full-stack con Next.js, Node.js y bases de datos relacionales y NoSQL."
          }
        ]
      },
      institutions: {
        title: "Instituciones Educativas",
        items: [
          {
            name: "PUC-Rio",
            degree: "Grado en Ciencias de la Computación",
            period: "2025 - Presente",
            description: "Cursando la carrera con beca por mérito académico. Enfoque en desarrollo full-stack, estructuras de datos, algoritmos e inteligencia artificial.",
            achievement: "Beca por Mérito Académico"
          },
          {
            name: "PUC-Rio",
            degree: "Associate degree en Ciencia de Datos",
            period: "2025 - Presente",
            description: "Formación complementaria centrada en estadística aplicada, análisis de datos, visualización de información y fundamentos de machine learning."
          },
          {
            name: "Instituto Gaylussac",
            degree: "Educación Secundaria y Primaria",
            period: "2015 - 2024",
            description: "Terminé la secundaria con enfoque en ciencias exactas. Participé en proyectos de programación y olimpiadas de matemáticas.",
            achievement: "Medalla de bronce en Canguru, oro en OBLI, bronce en OBA y otras competencias."
          },
          {
            name: "Cultura Inglesa",
            degree: "Curso de inglés",
            period: "2021 - 2023",
            description: "Curso de inglés enfocado en comunicación oral y escrita, fluidez en el día a día y preparación para certificaciones internacionales."
          }
        ]
      },
      certifications: {
        title: "Certificaciones",
        items: [
          {
            name: "LLM Course",
            issuer: "Hugging Face",
            date: "2025"
          },
          {
            name: "Data Modeling",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "Programación en Python",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "C1 Cambridge",
            issuer: "Cambridge",
            date: "2023"
          },
          {
            name: "B2 DELE Spanish",
            issuer: "Instituto Cervantes",
            date: "2023"
          }
        ]
      },
      learningNote: {
        title: "Aprendizaje Continuo",
        description: "Además de la formación académica formal, estoy constantemente aprendiendo nuevas tecnologías a través de cursos en línea, proyectos personales y contribuciones de código abierto."
      }
    },
    contact: {
      title: "Ponte en ",
      span: "contacto",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre...",
        email: "Correo electrónico",
        emailPlaceholder: "Tu correo...",
        message: "Mensaje",
        messagePlaceholder: "Tu mensaje...",
        submit: "Enviar",
        validationError: "Por favor, completa todos los campos."
      }
    }
  },

  it: {
    hero: {
      greeting: "Ciao, sono",
      name: "Antonio Vita",
      subtitle: "Studente di Informatica alla PUC-Rio e Sviluppatore Full-Stack",
      viewMore: "Vedi di più"
    },
    timeline: {
      title: "Il Mio Percorso",
      events: [
        {
          year: "2017",
          title: "Primo contatto con la programmazione",
          description: "Ho avuto la mia prima esperienza con la programmazione usando la piattaforma Scratch durante le lezioni scolastiche."
        },
        {
          year: "2019",
          title: "Iniziando con Python",
          description: "Ho anche iniziato a imparare Python a scuola, esplorando la logica e l'automazione di base."
        },
        {
          year: "2020",
          title: "Esplorando JavaScript e i primi progetti personali",
          description: "Sono andato oltre la scuola e ho iniziato a studiare JavaScript da autodidatta. Ho creato bot per Discord e i miei primi siti web."
        },
        {
          year: "2023",
          title: "Ritorno allo sviluppo web",
          description: "Dopo un periodo con meno attività di programmazione, sono tornato a concentrarmi su progetti web, in particolare con React."
        },
        {
          year: "2024",
          title: "Ultimo anno di liceo e approfondimento delle conoscenze",
          description: "Durante l’ultimo anno di liceo, dopo aver finito gli esami, ho ripreso a studiare intensamente. Ho migliorato le mie competenze nello sviluppo web e ho iniziato a imparare Java."
        },
        {
          year: "2025",
          title: "Inizio della laurea in Informatica",
          description: "Ho iniziato l’università con una base solida, concentrandomi sullo sviluppo full-stack e iniziando il mio percorso nei dati e nell’IA usando PyTorch."
        },
        {
          year: "2025",
          title: "Tirocinante in Automation presso BTG Pactual",
          description: "Ho lavorato all’automazione di processi interni della banca, utilizzando principalmente Python, AWS e React."
        }
      ]
    },
    stack: {
      title: "E per quanto riguarda la mia",
      titleHighlight: "stack",
      viewList: "Vedi elenco",
      goBack: "Indietro"
    },
    projects: {
      title: "Una parte del mio lavoro",
      items: [
        { title: "IRSA: Radiologia di Immagini Mediche", description: "Progetto SPA sviluppato con Next.js e TailwindCSS.", github: "https://github.com/antoniovita/irsa" },
        { title: "MyOrder – Menù Digitale per Ristoranti", description: "Menù digitale interattivo con interfaccia responsiva per ordini senza contatto umano.", github: "https://github.com/antoniovita/myorder" },
        { title: "Gymtracker - App per la Gestione degli Allenamenti", description: "Applicazione mobile per tracciare e organizzare i miei allenamenti in palestra.", github: "https://github.com/antoniovita/gymtracker" },
        { title: "Questo portfolio", description: "Portfolio realizzato interamente con Next.js e TailwindCSS.", github: "https://github.com/antoniovita/portfolio" },
        { title: "Dayo - Gestione della routine con IA", description: "App in Expo che utilizza llama.rn con il modello di encoding TinyLLM.", github: "https://github.com/antoniovita/dayo" }
      ]
    },
    about: {
      title: "E riguardo a",
      titleHighlight: "me",
      description: "Sono uno studente di Informatica alla PUC-Rio con una borsa di studio al merito. Ho 1 anno di esperienza nello sviluppo web con Typescript, React, Node.js, MongoDB e PostgreSQL. Mi interessa anche la blockchain e continuo sempre a imparare."
    },
    education: {
      title: "La mia",
      linkedin: "Scansiona per vedere il LinkedIn",
      titleHighlight: "Formazione",
      subtitle: "Formazione accademica e certificazioni professionali",
      languages: {
        title: "Lingue",
        items: [
          { name: "Portoghese", level: "Madrelingua" },
          { name: "Inglese", level: "Avanzato (C1)" },
          { name: "Spagnolo", level: "Intermedio (B2)" },
          { name: "Italiano", level: "Base" },
          { name: "Francese", level: "Base" }
        ]
      },
      experience: {
        title: "Esperienza",
        items: [
          {
            position: "Tirocinante in Automation",
            company: "BTG Pactual",
            period: "2025 - Presente",
            description: "Automazione di processi interni utilizzando Python, AWS, React e integrazioni con API."
          },
          {
            position: "Progetti Personali di Sviluppo Web",
            company: "Freelance / Progetti personali",
            period: "2023 - Presente",
            description: "Sviluppo di applicazioni full-stack con Next.js, Node.js e database relazionali e NoSQL."
          }
        ]
      },
      institutions: {
        title: "Istituzioni Scolastiche",
        items: [
          {
            name: "PUC-Rio",
            degree: "Laurea in Informatica",
            period: "2025 - Presente",
            description: "Laurea con borsa di studio al merito. Focus su sviluppo full-stack, strutture dati, algoritmi e intelligenza artificiale.",
            achievement: "Borsa di Studio al Merito"
          },
          {
            name: "PUC-Rio",
            degree: "Associate degree in Data Science",
            period: "2025 - Presente",
            description: "Percorso complementare focalizzato su statistica applicata, analisi dei dati, visualizzazione delle informazioni e basi di machine learning."
          },
          {
            name: "Instituto Gaylussac",
            degree: "Scuola Media e Superiore",
            period: "2015 - 2024",
            description: "Ho concluso il liceo con un forte focus sulle discipline scientifiche. Ho partecipato a progetti di programmazione e olimpiadi di matematica.",
            achievement: "Bronzo al Canguru, oro alla OBLI, bronzo alla OBA e altre competizioni."
          },
          {
            name: "Cultura Inglesa",
            degree: "Corso di inglese",
            period: "2021 - 2023",
            description: "Corso di inglese incentrato sulla comunicazione orale e scritta, sulla fluidità nella vita quotidiana e sulla preparazione a certificazioni internazionali."
          }
        ]
      },
      certifications: {
        title: "Certificazioni",
        items: [
          {
            name: "LLM Course",
            issuer: "Hugging Face",
            date: "2025"
          },
          {
            name: "Data Modeling",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "Programmazione in Python",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "C1 Cambridge",
            issuer: "Cambridge",
            date: "2023"
          },
          {
            name: "B2 DELE Spanish",
            issuer: "Instituto Cervantes",
            date: "2023"
          }
        ]
      },
      learningNote: {
        title: "Apprendimento Continuo",
        description: "Oltre alla formazione accademica formale, continuo a imparare nuove tecnologie tramite corsi online, progetti personali e contributi open source."
      }
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
    hero: {
      greeting: "Salut, je suis",
      name: "Antonio Vita",
      subtitle: "Étudiant en informatique à la PUC-Rio & Développeur Full-Stack",
      viewMore: "Voir plus"
    },
    timeline: {
      title: "Mon Parcours",
      events: [
        {
          year: "2017",
          title: "Premier contact avec la programmation",
          description: "J’ai eu ma première expérience de programmation avec la plateforme Scratch pendant les cours à l’école."
        },
        {
          year: "2019",
          title: "Débuts avec Python",
          description: "J’ai également commencé à apprendre Python à l’école, en explorant la logique et l’automatisation de base."
        },
        {
          year: "2020",
          title: "Exploration de JavaScript et premiers projets personnels",
          description: "Je suis allé au-delà des cours et j’ai commencé à apprendre JavaScript en autodidacte. J’ai développé des bots pour Discord et créé mes premiers sites web."
        },
        {
          year: "2023",
          title: "Retour au développement web",
          description: "Après une période avec moins d’activité de programmation, je me suis de nouveau concentré sur des projets web, surtout avec React."
        },
        {
          year: "2024",
          title: "Dernière année de lycée et approfondissement des connaissances",
          description: "Pendant ma dernière année de lycée, après les examens, j’ai repris les études de manière intensive. J’ai renforcé mes compétences en développement web et commencé à apprendre Java."
        },
        {
          year: "2025",
          title: "Début de la licence en informatique",
          description: "J’ai commencé l’université avec une base solide, en me concentrant sur le développement full-stack et en démarrant mon parcours en data et IA avec PyTorch."
        },
        {
          year: "2025",
          title: "Stagiaire en automatisation chez BTG Pactual",
          description: "J’ai travaillé sur l’automatisation de tâches internes de la banque, principalement avec Python, AWS et React."
        }
      ]
    },
    stack: {
      title: "Et pour ce qui est de ma",
      titleHighlight: "stack",
      viewList: "Voir la liste",
      goBack: "Retour"
    },
    projects: {
      title: "Un aperçu de mon travail",
      items: [
        { title: "IRSA : Radiologie d’Images Médicales", description: "Projet SPA développé avec Next.js et TailwindCSS.", github: "https://github.com/antoniovita/irsa" },
        { title: "MyOrder – Menu Digital pour Restaurants", description: "Menu numérique interactif avec interface responsive pour des commandes sans contact humain.", github: "https://github.com/antoniovita/myorder" },
        { title: "Gymtracker - App de Gestion d’Entraînements", description: "Application mobile pour suivre et organiser mes entraînements en salle de sport.", github: "https://github.com/antoniovita/gymtracker" },
        { title: "Ce portfolio", description: "Portfolio réalisé entièrement avec Next.js et TailwindCSS.", github: "https://github.com/antoniovita/portfolio" },
        { title: "Dayo - Gestion de routine avec IA", description: "Application Expo utilisant llama.rn avec le modèle d’encodage TinyLLM.", github: "https://github.com/antoniovita/dayo" }
      ]
    },
    about: {
      title: "Et à propos de",
      titleHighlight: "moi",
      description: "Je suis étudiant en informatique à la PUC-Rio avec une bourse au mérite. J’ai 1 an d’expérience en développement web avec Typescript, React, Node.js, MongoDB et PostgreSQL. Je m’intéresse également à la blockchain et j’apprends en permanence."
    },
    education: {
      title: "Ma",
      linkedin: "Scannez pour voir mon LinkedIn",
      titleHighlight: "Formation",
      subtitle: "Parcours académique et certifications professionnelles",
      languages: {
        title: "Langues",
        items: [
          { name: "Portugais", level: "Langue maternelle" },
          { name: "Anglais", level: "Avancé (C1)" },
          { name: "Espagnol", level: "Intermédiaire (B2)" },
          { name: "Italien", level: "Débutant" },
          { name: "Français", level: "Débutant" }
        ]
      },
      experience: {
        title: "Expérience",
        items: [
          {
            position: "Stagiaire en automatisation",
            company: "BTG Pactual",
            period: "2025 - Présent",
            description: "Automatisation de processus internes utilisant Python, AWS, React et des intégrations avec des APIs."
          },
          {
            position: "Projets personnels de développement web",
            company: "Freelance / Projets personnels",
            period: "2023 - Présent",
            description: "Développement d’applications full-stack avec Next.js, Node.js et des bases de données relationnelles et NoSQL."
          }
        ]
      },
      institutions: {
        title: "Établissements d’Enseignement",
        items: [
          {
            name: "PUC-Rio",
            degree: "Licence en Informatique",
            period: "2025 - Présent",
            description: "Licence avec bourse au mérite. Focus sur le développement full-stack, les structures de données, les algorithmes et l’intelligence artificielle.",
            achievement: "Bourse au Mérite Académique"
          },
          {
            name: "PUC-Rio",
            degree: "Associate degree en Data Science",
            period: "2025 - Présent",
            description: "Formation complémentaire axée sur la statistique appliquée, l’analyse de données, la visualisation d’informations et les bases du machine learning."
          },
          {
            name: "Instituto Gaylussac",
            degree: "Collège et Lycée",
            period: "2015 - 2024",
            description: "J’ai terminé le lycée avec un fort intérêt pour les sciences exactes. J’ai participé à des projets de programmation et à des olympiades de mathématiques.",
            achievement: "Médaille de bronze au Canguru, or à l’OBLI, bronze à l’OBA et autres compétitions."
          },
          {
            name: "Cultura Inglesa",
            degree: "Cours d’anglais",
            period: "2021 - 2023",
            description: "Cours d’anglais axé sur la communication orale et écrite, la fluidité au quotidien et la préparation à des certifications internationales."
          }
        ]
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "LLM Course",
            issuer: "Hugging Face",
            date: "2025"
          },
          {
            name: "Data Modeling",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "Programmation en Python",
            issuer: "Fundacao Bradesco",
            date: "2024"
          },
          {
            name: "C1 Cambridge",
            issuer: "Cambridge",
            date: "2023"
          },
          {
            name: "B2 DELE Spanish",
            issuer: "Instituto Cervantes",
            date: "2023"
          }
        ]
      },
      learningNote: {
        title: "Apprentissage Continu",
        description: "Au-delà de la formation académique formelle, j’apprends constamment de nouvelles technologies grâce à des cours en ligne, des projets personnels et des contributions open source."
      }
    },
    contact: {
      title: "Entrer en ",
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
