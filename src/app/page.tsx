"use client";
import { useState, useEffect, ChangeEvent, FormEvent, useMemo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import MyWork from "@/components/mywork";
import Timeline from "@/components/timeline";
import { getMessages, Language } from "@/translations";
import AboutSection from "@/components/aboutsection";

const Home = () => {
  const [language, setLanguage] = useState<Language>('en');
  const t = getMessages(language);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showStack, setShowStack] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert(t.contact.form.validationError);
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
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setFormSubmitted(false), 3000);
      }, (err) => {
        console.log('Erro', err);
      });
  };

  const timeline = t.timeline.events;
  const title = t.projects.title;

  const projects = t.projects.items.map((item: { title: any; description: any; }, index: number) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    image: ['/images/projects/irsa-site.png', '/images/projects/myorder.png', '/images/projects/gymtracker.jpg', '/images/projects/portfolio.png', '/images/projects/dayo.png'][index],
    technologies: [
      [
        { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
        { name: 'TailwindCSS', icon: '/images/tailwindcss-plain.png', bg: 'bg-teal-900' },
        { name: 'Next.js', icon: '/images/nextjs-original.png', bg: 'bg-gray-800' },
      ],
      [
        { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
        { name: 'TailwindCSS', icon: '/images/tailwindcss-plain.png', bg: 'bg-teal-900' },
        { name: 'Node.js', icon: '/images/nodejs-original.png', bg: 'bg-green-800' },
        { name: 'Next.js', icon: '/images/nextjs-original.png', bg: 'bg-gray-800' },
      ],
      [
        { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
        { name: 'React Native', icon: '/images/react-original.png', bg: 'bg-blue-900' },
      ],     
      [
        { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
        { name: 'TailwindCSS', icon: '/images/tailwindcss-plain.png', bg: 'bg-teal-900' },
        { name: 'Next.js', icon: '/images/nextjs-original.png', bg: 'bg-gray-800' },
      ],
      [
        { name: 'Typescript', icon: '/images/typescript-plain.png', bg: 'bg-blue-500' },
        { name: 'React Native', icon: '/images/react-original.png', bg: 'bg-blue-900' },
      ],

    ][index]
  }));

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
    const minDistance = 8;
    const centerZone = { min: 40, max: 60 };

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.75, y: 50, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-auto">
      <canvas id="starCanvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>

      <div className="relative">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="relative flex flex-col items-center justify-center z-30 text-white min-h-screen px-4 py-8 sm:py-12">
          <h1 className="bg-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center px-3 sm:px-4">
            {t.hero.greeting} <span className="text-yellow-500">{t.hero.name}</span>
          </h1>
          <p className="bg-black text-sm sm:text-base md:text-lg font-thin text-center px-3">{t.hero.subtitle}</p>
          
          <div className="z-40 p-3 sm:p-5 flex flex-wrap gap-2 sm:gap-4 justify-center mt-6">
            {[
              { lang: 'pt', flag: "/images/BR.png" },
              { lang: 'fr', flag: "/images/FR.png" },
              { lang: 'en', flag: "/images/UM.png" },
              { lang: 'es', flag: "/images/ES.png" },
              { lang: 'it', flag: "/images/IT.png" }
            ].map((item) => (
              <motion.button
                key={item.lang}
                onClick={() => setLanguage(item.lang as Language)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform duration-200"
              >
                <Image src={item.flag} width={36} height={36} alt={item.lang} className="w- z-50 sm:w-10" />
              </motion.button>
            ))}
          </div>

          <motion.a
            href="#about"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-black duration-300 hover:text-white flex flex-col justify-center items-center text-gray-200 mt-8 sm:mt-12"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-thin text-sm sm:text-base">{t.hero.viewMore}</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="m-1"
              animate={{ y: hovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M8 18L12 22L16 18" />
              <path d="M12 2V22" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      <Timeline timeline={timeline} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col justify-center items-center min-h-screen sm:h-screen relative py-12 sm:py-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl z-30 mb-4 sm:mb-5 text-center bg-black rounded-full px-4 sm:px-5 py-2 sm:py-3">
            {t.stack.title} <span className="text-yellow-500">{t.stack.titleHighlight}</span>?
          </h1>
          <motion.button
            onClick={() => setShowStack(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black font-bold z-30 rounded-full px-4 sm:px-5 py-2 mt-4 sm:mt-5 hover:bg-yellow-500 transition-colors duration-300"
          >
            {t.stack.viewList}
          </motion.button>

        <div className="absolute inset-0 floating-icons z-0 hidden lg:block">
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
      </motion.div>

      <AnimatePresence>
        {showStack && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowStack(false)}
            className="fixed inset-0 flex justify-center items-center z-50 p-4 sm:p-6"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-black w-full p-6 max-w-[320px] sm:max-w-sm md:max-w-md h-auto max-h-[70vh] sm:max-h-[80vh] relative flex flex-col justify-between sm:py-8 items-center text-white sm:p-4 rounded-3xl"
            >

              <div className="items-center flex flex-col gap-2 sm:gap-3 justify-start w-full overflow-y-auto max-h-[calc(70vh-160px)] sm:max-h-[calc(80vh-180px)] scrollbar-hide">
                {technologies.map((tech, index) => {
                  const techNames = [
                    "CSS3", "Figma", "JavaScript", "Python", "TypeScript",
                    "PostgreSQL", "React", "Node.js", "MongoDB", "MySQL",
                    "Git", "GitHub", "Docker", "Java", "HTML5", "Spring Boot", "React Native"
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="bg-slate-100/10 px-3 sm:px-4 py-3 rounded-xl flex flex-row gap-2 sm:gap-3 items-center w-full sm:w-[90%]"
                    >
                      <Image src={tech} alt={techNames[index]} width={50} height={50} className="w-5 sm:w-6 h-5 sm:h-6" />
                      <h1 className="font-normal text-sm sm:text-base">{techNames[index]}</h1>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                onClick={() => setShowStack(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black bg-yellow-500 font-bold w-full sm:w-[95%] py-2 sm:py-3 rounded-lg mt-4 hover:bg-yellow-500 transition-colors duration-300"
              >
                {t.stack.goBack}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col justify-center items-center min-h-screen sm:h-screen relative py-12 sm:py-0">
          <MyWork title={title} projects={projects}></MyWork>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col justify-center items-center min-h-screen sm:h-screen relative py-12 sm:py-0">
        <AboutSection t={t} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="min-h-screen lg:h-screen justify-center flex flex-col items-center z-20 px-4 sm:px-6 md:px-8 py-12 lg:py-0"
      >
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-white">{t.contact.title} <span className="font-bold text-yellow-500">{t.contact.span}</span></h2>

        <div className="rounded-3xl flex flex-col items-center border border-gray-950 sm:p-6 md:p-8 lg:p-12 w-full max-w-[350px] sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <form onSubmit={sendEmail} className="w-full space-y-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <label className="block text-sm sm:text-base text-gray-300 mb-2">{t.contact.form.name}</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder={t.contact.form.namePlaceholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="p-3 w-full font-normal focus:outline-none focus:ring-0 rounded-xl bg-slate-100/10 text-white text-sm sm:text-base"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label className="block text-sm sm:text-base text-gray-300 mb-2">{t.contact.form.email}</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder={t.contact.form.emailPlaceholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="p-3 w-full focus:outline-none focus:ring-0 font-normal rounded-xl bg-slate-100/10 text-white text-sm sm:text-base"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm sm:text-base text-gray-300 mb-2">{t.contact.form.message}</label>
              <textarea
                className="scrollbar-hide p-3 focus:outline-none focus:ring-0 h-32 sm:h-40 w-full rounded-2xl font-normal bg-slate-100/10 text-white text-sm sm:text-base"
                placeholder={t.contact.form.messagePlaceholder}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-500 text-black p-3 sm:p-4 rounded-xl mt-6 font-bold text-sm sm:text-base hover:bg-yellow-500 transition-all duration-300"
            >
              {t.contact.form.submit}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;