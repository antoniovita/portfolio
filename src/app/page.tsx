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
    "/images/java.png"
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
            <h1 className="bg-black text-4xl md:text-5xl font-bold mb-3 text-center">Hello, I&apos;m <span className="text-yellow-300">Antonio Vita</span></h1>
            <p className="bg-black text-md font-thin text-center"> Computer Science Student at PUC-Rio & Full-Stack Developer</p>
            <div className="z-40 p-5 flex flex-wrap gap-4 justify-center">
              <Link href={"/portuguese"}> <Image src={"/images/BR.png"} width={40} height={40} alt={"Portuguse"} /></Link>
              <Link href={"/french"}> <Image src={"/images/FR.png"} width={40} height={40} alt={"French"} /></Link>
              <Link href={"/"}> <Image src={"/images/UM.png"} width={40} height={40} alt={"English"} /></Link>
              <Link href={"/spanish"}> <Image src={"/images/ES.png"} width={40} height={40} alt={"Spanish"} /></Link>
              <Link href={"/italian"}> <Image src={"/images/IT.png"} width={40} height={40} alt={"Italian"} /></Link>
            </div>
            
            <a href="#about" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="bg-black duration-300 all-transition hover:text-white flex flex-col justify-center items-center text-gray-200">
              <p className="font-thin"> View More </p>
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

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="px-4">
  <div className="flex flex-col justify-center items-center h-screen relative"> 
    <h1 className="text-3xl md:text-4xl z-30 mb-[5px] text-center bg-black rounded-full border border-gray-950 px-5 py-3"> What about my <span className="text-yellow-300"> stack </span> ?</h1>
    <button onClick={() => setShowStack(true)} className="bg-black border border-yellow-400 text-yellow-400 rounded-full px-3 py-2 mt-5 font-normal hover:bg-yellow-400 hover:text-black all-transition duration-300"> View the list </button>
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
            "Git", "GitHub", "Docker", "Java"
          ];
          
          return (
            <div key={index} className="bg-gray-950 px-4 py-2 rounded-full flex flex-row gap-3 items-center w-[90%]">
              <Image src={tech} alt={techNames[index]} width={50} height={50} className="w-6 h-6"/>
              <h1>{techNames[index]}</h1>
            </div>
          );
        })}
      </div>
      <button onClick={() => setShowStack(false)} className=" text-black bg-yellow-400 w-[90%] py-4 rounded-lg mt-5">
        Go Back
      </button>
    </div>
  </div>
)}
</motion.div>


      <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration:3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="px-4">
      <div className="flex flex-col justify-center items-center h-screen relative"> 
        <MyWork></MyWork>
        </div>
      </motion.div>

      <div id="about" className="flex flex-col xl:flex-row sm:flex-col items-center justify-center gap-8 md:gap-20 z-30 h-screen px-4">
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
          <Image width={300} height={300} className="border-gray-900 border-3 rounded-full" src={"/images/carteirinha.jpg"} alt={""}/>
        </motion.div>
        <motion.div className=" sm:mt-4 p-4 md:p-20 flex flex-col justify-center space-y-4 max-w-[700px]" initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center md:text-left">What about <span className="text-yellow-300">me</span>?</h1>
          <p className="text-md md:text-lg font-light text-gray-300 text-center md:text-left">I&apos;m a Computer Science student at PUC-Rio with a merit scholarship. I have 1 year of experience in web development, mainly with Typescript, React, Node.js, and databases like MongoDB and PostgreSQL. I&apos;m also interested in blockchain development and always looking to learn more.</p>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <Link className='mt-8' href={"https://github.com/antoniovita"}><FontAwesomeIcon icon={faGithub} size="3x" /></Link>
            <Link className='mt-8' href={"https://linkedin.com/in/antonio-vita-6177922b7"}><FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
            <Link className='mt-8' href={""}><FontAwesomeIcon icon={fasEnvelope} size="3x" /></Link>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="h-screen justify-center flex flex-col items-center z-20 px-4">
        <div className="bg-transparent flex flex-col items-center border border-gray-700 rounded-lg p-4 md:p-[45px] w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white text-center">Contact me!</h2>
          <form onSubmit={sendEmail} className="w-full">
            <div className="mb-4">
              <label className="block text-md text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-300">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-300">Message</label>
              <textarea
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your message..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white p-3 rounded-md mt-4 hover:bg-gray-600 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
