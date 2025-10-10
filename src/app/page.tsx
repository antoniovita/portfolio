"use client";
import { useState, useEffect, ChangeEvent, FormEvent, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import MyWork from "@/components/mywork";
import Timeline from "@/components/timeline";
import { getMessages, Language } from "@/translations";
import AboutSection from "@/components/aboutsection";
import HeroSection from "@/components/herosection";
import StackSection from "@/components/stacksection";
import ContactSection from "@/components/contactsection";

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
        <HeroSection t={t} language={language} setLanguage={setLanguage} />
      </div>


      <Timeline timeline={timeline} />

       <StackSection t={t} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col justify-center items-center min-h-screen sm:h-screen relative py-12 sm:py-0">
          <MyWork t={t}></MyWork>
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

      <ContactSection t={t} />

    </div>
  );
};

export default Home;