"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [icons, setIcons] = useState<any[]>([]);
  const [hovered, setHovered] = useState(false);

  const technologies = [
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
  ];

  useEffect(() => {
    const generatedIcons = technologies.map((tech) => ({
      src: tech,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setIcons(generatedIcons);
  }, []);

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

    animateStars();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-auto">

      
      <canvas id="starCanvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>
      
      <div className="relative pt-20">
        <motion.div initial={{ opacity:0}} whileInView={{ opacity: 1}} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="pt-20 relative flex flex-col items-center justify-center z-30 text-white mt-[100px] mb-[500px]">
            <h1 className=" bg-black text-5xl font-bold mb-3">Hello, I'm <span className="text-yellow-300">Antonio Vita</span></h1>
            <p className="bg-black text-md font-thin"> Computer Science Student at PUC-Rio & Full-Stack Developer</p>
            <div className="z-40 p-5 flex flex-wrap gap-4">
              <Link href={"/portuguese"}> <Image src={"/images/BR.png"} width={40} height={40} alt={"Portuguse"}></Image></Link>
              <Link href={""}> <Image src={"/images/FR.png"} width={40} height={40} alt={"French"}></Image></Link>
              <Link href={""}> <Image src={"/images/UM.png"} width={40} height={40} alt={"English"}></Image></Link>
              <Link href={""}> <Image src={"/images/ES.png"} width={40} height={40} alt={"Spanish"}></Image></Link>
              <Link href={""}> <Image src={"/images/IT.png"} width={40} height={40} alt={"Italian"}></Image></Link>
            </div>
            
            
            
            <a href="#projects" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="bg-black duration-300 all-transition hover:text-white flex flex-col justify-center items-center text-gray-200">
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
                className= {`m-1 lucide lucide-move-down all-transition duration-300 ${hovered ? 'translate-y-1' : ''}`}
              >
                <path d="M8 18L12 22L16 18"/>
                <path d="M12 2V22"/> </svg>
            </a>
        </motion.div>
      </div>


      <motion.div initial={{ opacity:0}} whileInView={{ opacity: 1}} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
          <div className="flex flex-col justify-center items-center mt-[200px] mb-[200px]"> 
            <h1 className="text-4xl"> What about the <span className="text-yellow-300">technologies</span> I know? </h1>
            
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
              }}
            />
          ))}
        </div>

          </div>


      </motion.div>



      <motion.div initial={{ opacity:0}} whileInView={{ opacity: 1}} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }} className="swiper-container w-full mb-[500px] ml-[20px] mr-[20px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 500 }}
          className="w-full h-[500px] flex justify-center"
        >
          <SwiperSlide>
            <div className="bg-black flex flex-col p-5 rounded-xl">
              <h1 className="text-2xl font-semibold">Lorem ipsum dolor sit amet.</h1>
              <p className="text-lg font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus doloribus a vero ea delectus at error blanditiis? </p>
              <img
                className="w-full h-60 w-100 object-cover rounded-xl shadow-lg mt-4"
                src="https://i.ytimg.com/vi/P8YuWEkTeuE/maxresdefault.jpg"
                alt="Project 1"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </motion.div>





      <div className="flex items-center justify-center gap-[120px] z-30 mb-[300px]">
         <motion.div  initial={{ opacity:0}} whileInView={{ opacity: 1}} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}><Image width={400} height={400} className="border-gray-900 border-3 ml-[100px] rounded-full" src={"/images/carteirinha.jpg"} alt={""}/></motion.div>
          <motion.div className="mt-[40px] p-20 flex flex-col justify-center space-y-4 max-w-[700px]" initial={{ opacity:0}} whileInView={{ opacity: 1}} transition={{ duration: 3, ease: "easeOut" }} viewport={{ amount: 0.2 }}>
            <h1 className="text-4xl font-semibold text-white" >What about <span className="text-yellow-300">me</span>?</h1>
            <p className="text-lg font-light text-gray-300">I'm, a Computer Science student at PUC-Rio with a merit scholarship. I have 1 year of experience in web development, mainly with Typescript, React, Node.js, and databases like MongoDB and PostgreSQL. I’m also interested in blockchain development and always looking to learn more.</p>
            <div className=" flex flex-wrap gap-[120px] justify-center">
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={faGithub} size="3x" /></Link>
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={fasEnvelope} size="3x" /></Link>
            </div>
          </motion.div>

        </div>

      {/* Formulário */}
      <div className="mt-[200px] mb-[200px] flex flex-col items-center z-20">
      <div className="bg-black flex flex-col items-center border border-gray-700 rounded-lg p-[45px]">
        <h2 className="text-4xl font-semibold mb-4 text-white">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-md text-gray-300">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-md text-gray-300">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        
          <textarea className="mt-2 p-2 w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" name="" id=""></textarea>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white p-2 rounded-md mt-4 hover:bg-gray-600 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
