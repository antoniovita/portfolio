"use client";
import { useState, useEffect, ChangeEvent, FormEvent, useMemo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import MyWork from "@/components/mywork";
import Timeline from "@/components/timeline";

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showStack, setShowStack] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const templateParams = {
      from_name: name,
      email: email,
      message: message
    };
    emailjs.send('service_edt8dgf', 'template_xdwwtgb', templateParams, 'bNJ1Y_BA7O5IXhkKO')
      .then((response) => {
        console.log('Email enviado', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('Erro', err);
      });
  };

  const title = "Un aperçu de mon travail"


  const projects = [
  {
    id: 1,
    title: 'IRSA : Radiologie par Image',
    description: 'Projet SPA réalisé avec Next.js et TailwindCSS',
    image: '/images/projects/irsa-site.png',
    technologies: [
      { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
      { name: 'TailwindCSS', icon: '/images/tailwindcss-plain.png', bg: 'bg-teal-900' },
      { name: 'Next.js', icon: '/images/nextjs-original.png', bg: 'bg-gray-800' },
    ],
  },
  {
    id: 2,
    title: 'MyOrder – Menu numérique pour Restaurants',
    description: 'Menu numérique interactif pour restaurants, avec interface réactive permettant les commandes sans personnel.',
    image: '/images/projects/myorder.png',
    technologies: [
      { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
      { name: 'TailwindCSS', icon: '/images/tailwindcss-plain.png', bg: 'bg-teal-900' },
      { name: 'Node.js', icon: '/images/nodejs-original.png', bg: 'bg-green-800' },
      { name: 'Next.js', icon: '/images/nextjs-original.png', bg: 'bg-gray-800' },
    ],
  },
  {
    id: 3,
    title: 'Gymtracker - Application de Gestion des Entraînements',
    description: 'Application mobile développée pour m’aider à suivre et organiser mes entraînements à la salle.',
    image: '/images/projects/gymtracker.jpg',
    technologies: [
      { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
      { name: 'React Native', icon: '/images/react-original.png', bg: 'bg-blue-900' },
    ],
  }
];

const timeline = [
  {
    year: '2017',
    title: 'Premier contact avec la programmation',
    description: 'J\'ai eu ma première expérience en programmation avec la plateforme Scratch pendant les cours à l\'école.',
  },
  {
    year: '2019',
    title: 'Début avec Python',
    description: 'J\'ai également commencé à apprendre Python à l\'école, en explorant la logique et l\'automatisation de base.',
  },
  {
    year: '2020',
    title: 'Exploration de JavaScript et premiers projets personnels',
    description: 'Je suis sorti du cadre scolaire et j\'ai commencé à apprendre JavaScript par moi-même. J\'ai développé des bots pour Discord et créé mes premiers sites web.',
  },
  {
    year: '2023',
    title: 'Retour au développement web',
    description: 'Après une période d\'éloignement de la programmation, j\'ai repris des projets web, principalement avec React.',
  },
  {
    year: '2024',
    title: 'Dernière année de lycée et approfondissement',
    description: 'Pendant ma dernière année de lycée, après les examens, j\'ai repris les études sérieusement. J\'ai approfondi mes compétences en développement web et commencé à apprendre Java.',
  },
  {
    year: '2025',
    title: 'Début des études en informatique',
    description: 'J\'ai commencé l\'université avec de bonnes bases, en me spécialisant dans le développement full-stack et en découvrant les données et l\'IA avec PyTorch.',
  },
];



  const [icons, setIcons] = useState<{ src: string; top: number; left: number; animationDelay: string }[]>([]);
  const [hovered, setHovered] = useState(false);

  const technologies = useMemo(() => [
    "/images/css3-plain.png",
    "/images/figma-original.png",
    "/images/javascript-plain.png",
    "/images/python-original.png",
    "/images/typescript-original.png",
    "/images/postgresql-plain.png",
    "/images/react-original.png",
    "/images/nodejs-original.png",
    "/images/mongodb-plain.png",
    "/images/mysql-plain.png",
    "/images/git-plain-wordmark.png",
    "/images/github-original.png",
    "/images/docker-plain.png",
    "/images/java.png",
    "/images/html5-plain.png",
    "/images/spring-boot.webp",
    "/images/react-original.png",
  ], []);

  useEffect(() => {
    const generatedIcons: { src: string; top: number; left: number; animationDelay: string }[] = [];
    const minDistance = 8; // distância mínima entre ícones (%)
    const centerZone = { min: 40, max: 60 }; // evitar o centro da tela
  
    const isTooClose = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) < minDistance;
    };
  
    const isInCenter = (top: number, left: number) => {
      return (
        top > centerZone.min && top < centerZone.max &&
        left > centerZone.min && left < centerZone.max
      );
    };
  
    for (let tech of technologies) {
      let top = 0;
      let left = 0;
      let attempts = 0;
      let validPosition = false;
  
      while (!validPosition && attempts < 100) {
        top = Math.random() * 100;
        left = Math.random() * 100;
        attempts++;
  
        const notInCenter = !isInCenter(top, left);
        const notTooClose = generatedIcons.every(icon => !isTooClose(icon.left, icon.top, left, top));
  
        if (notInCenter && notTooClose) {
          validPosition = true;
        }
      }
  
      generatedIcons.push({
        src: tech,
        top,
        left,
        animationDelay: `${Math.random() * 5}s`,
      });
    }
  
    setIcons(generatedIcons);
  }, [technologies]);
  
  useEffect(() => {
    const canvas = document.getElementById("starCanvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 0.6);
          ctx.fill();

          star.y += star.speed;
          if (star.y > canvas.height) star.y = 0;
        });

        requestAnimationFrame(animateStars);
      }
    }

    animateStars();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-auto">
      <canvas id="starCanvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>
      
      <div className="relative">
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="relative flex flex-col items-center justify-center z-30 text-white h-screen px-4">
            <h1 className="bg-black text-4xl md:text-5xl font-bold mb-3 text-center">Salut, je m'appelle <span className="text-yellow-300">Antonio Vita</span></h1>
            <p className="bg-black text-md font-thin text-center"> Étudiant en informatique à la PUC-Rio & Développeur Full-Stack
            </p>
            <div className="z-40 p-5 flex flex-wrap gap-4 justify-center">
              <Link href={"/portuguese"}> <Image src={"/images/BR.png"} width={40} height={40} alt={"Portuguse"} /></Link>
              <Link href={"/french"}> <Image src={"/images/FR.png"} width={40} height={40} alt={"French"} /></Link>
              <Link href={"/"}> <Image src={"/images/UM.png"} width={40} height={40} alt={"English"} /></Link>
              <Link href={"/spanish"}> <Image src={"/images/ES.png"} width={40} height={40} alt={"Spanish"} /></Link>
              <Link href={"/italian"}> <Image src={"/images/IT.png"} width={40} height={40} alt={"Italian"} /></Link>
            </div>
            
            <a href="#about" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="bg-black duration-300 all-transition hover:text-white flex flex-col justify-center items-center text-gray-200">
              <p className="font-thin"> Voir plus </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`m-1 lucide lucide-move-down all-transition duration-300 ${hovered ? 'translate-y-1' : ''}`}
              >
                <path d="M8 18L12 22L16 18" />
                <path d="M12 2V22" />
              </svg>
            </a>
        </motion.div>
      </div>

     <Timeline timeline={timeline}  />
      

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="px-4">
  <div className="flex flex-col justify-center items-center h-screen relative"> 
    <h1 className="text-3xl md:text-4xl z-30 mb-[5px] text-center bg-black rounded-full border border-gray-950 px-5 py-3"> Voici ma<span className="text-yellow-300"> stack </span>!</h1>
    <button onClick={() => setShowStack(true)} className="bg-yellow-400 text-black rounded-full px-3 py-2 mt-5 font-normal hover:bg-yellow-900 hover:text-black all-transition duration-300"> Voir la liste </button>
    <div className="absolute inset-0 floating-icons z-0">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt="Technology Icon"
          width={50}
          height={50}
          className="floating-icon"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            animationDelay: icon.animationDelay,
            width: '3vh',
            height: '3vh'
          }}
        />
      ))}
    </div>
  </div>

  {showStack && (
  <div className="fixed inset-0 flex justify-center items-center z-40">
    <div className="bg-black w-[500px] h-[500px] relative flex flex-col justify-center items-center text-white p-5 rounded-lg shadow-lg border-gray-950 border">
      <div className=" items-center flex flex-col gap-3 justify-start w-full overflow-y-scroll max-h-[350px] scrollbar-hide">
        {technologies.map((tech, index) => {
          const techNames = [
            "CSS3", "Figma", "JavaScript", "Python", "TypeScript",
            "PostgreSQL", "React", "Node.js", "MongoDB", "MySQL",
            "Git", "GitHub", "Docker", "Java", "HTML5", "Spring Boot", "React Native"
          ];
          
          return (
            <div key={index} className="bg-gray-950 px-4 py-2 rounded-full flex flex-row gap-3 items-center w-[90%]">
              <Image src={tech} alt={techNames[index]} width={50} height={50} className="w-6 h-6"/>
              <h1 className="font-normal">{techNames[index]}</h1>
            </div>
          );
        })}
      </div>
      <button onClick={() => setShowStack(false)} className=" text-black bg-yellow-400 w-[90%] py-4 rounded-lg mt-5">
        Retour
      </button>
    </div>
  </div>
)}
</motion.div>


      <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration:3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="px-4">
      <div className="flex flex-col justify-center items-center h-screen relative"> 
        <MyWork title={title} projects={projects}></MyWork>
        </div>
      </motion.div>

      <div id="about" className="flex flex-col xl:flex-row sm:flex-col items-center justify-center gap-6 md:gap-20 z-30 sm:h-auto md:h-screen px-6 sm:px-8 md:px-20">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
    <Image width={250} height={250} className="border-gray-900 border-3 rounded-full sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px]" src={"/images/carteirinha.jpg"} alt={""} />
  </motion.div>
  <motion.div className="sm:mt-4 p-4 sm:p-10 md:p-20 flex flex-col justify-center space-y-4 max-w-[700px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center md:text-left">
    À propos de <span className="text-yellow-300">moi </span>?
    </h1>
    <p className="text-sm sm:text-md md:text-lg font-light text-gray-300 text-center md:text-left">
    Je suis étudiant en informatique à la PUC-Rio avec une bourse au mérite. J'ai un an d'expérience en développement web, principalement avec TypeScript, React, Node.js et des bases de données comme MongoDB et PostgreSQL. Je m'intéresse aussi au développement blockchain et je cherche toujours à en apprendre davantage.     </p>
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      <Link className="mt-6" href={"https://github.com/antoniovita"}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link className="mt-6" href={"https://linkedin.com/in/antonio-vita-6177922b7"}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
      <Link className="mt-6" href={""}>
        <FontAwesomeIcon icon={fasEnvelope} size="2x" />
      </Link>
    </div>
  </motion.div>
</div>


      <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="h-screen justify-center flex flex-col items-center z-20 px-8">
        <div className="bg-transparent flex flex-col items-center border border-gray-950 rounded-lg p-4 md:p-[45px] w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white text-center">Mettiti in Contato</h2>
          <form onSubmit={sendEmail} className="w-full">
            <div className="mb-4">
              <label className="block text-md text-gray-300">Nome</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Tuo nome..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="mt-2 p-3 w-full font-normal rounded-2xl bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-300">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Tuo email..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 w-full font-normal rounded-2xl bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-300">Messaggio</label>
              <textarea
                className="mt-2 scrollbar-hide p-3 h-[150px] w-full rounded-2xl font-normal bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tuo messaggio..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black p-3 rounded-2xl mt-4 hover:bg-yellow-900 transition-all duration-300"
            >
              Inviare
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;