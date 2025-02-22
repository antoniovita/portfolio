"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [icons, setIcons] = useState<any[]>([]);
  const [movingStars, setMovingStars] = useState([]);
  const [stars, setStars] = useState([]);
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
    const generateStars = () => {
      const fixedStars = [];
      const movingStars = [];
      
      for (let i = 0; i < 50; i++) {
        fixedStars.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        });
      }

      // Gerar estrelas móveis
      for (let i = 0; i < 10; i++) {
        movingStars.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        });
      }

      setStars(fixedStars);
      setMovingStars(movingStars);
    };

    generateStars();
  }, []);



  // Handling input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col relative overflow-auto">
     

     
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



     <div className="stars-background">
        {/* Estrelas fixas */}
        {stars.map((star, index) => (
          <div
            key={index}
            className="star-fixed"
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}

        {/* Estrelas móveis */}
        {movingStars.map((star, index) => (
          <div
            key={index}
            className="star-moving"
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      <div className="relative pt-20">
        <div className="pt-20 relative flex flex-col items-center justify-center z-30 text-white mt-[200px] mb-[500px]">
            <h1 className=" bg-black text-5xl font-bold mb-3">Hello, I'm <span className="text-yellow-300">Antonio Vita</span></h1>
            <p className="bg-black text-md mb-6 font-thin"> Computer Science Student at PUC-Rio & Full-Stack Developer</p>
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
        </div>


      </div>



      <div className="swiper-container w-full mb-[500px] ml-[20px] mr-[20px]">
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
                className="w-full h-80 object-cover rounded-xl shadow-lg mt-4"
                src="https://i.ytimg.com/vi/P8YuWEkTeuE/maxresdefault.jpg"
                alt="Project 1"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>





      <div className="flex items-center justify-center gap-[120px] z-30 mb-[300px]">
          <Image width={400} height={400} className="border-gray-900 border-3 ml-[100px] rounded-full" src={"/images/carteirinha.jpg"} alt={""}/> 
          <div className="mt-[40px] bg-black p-20 flex flex-col justify-center space-y-4 max-w-[700px]">
            <h1 className="text-4xl font-semibold text-white" >What about <span className="text-yellow-300">me</span>?</h1>
            <p className="text-lg font-light text-gray-300">I'm, a Computer Science student at PUC-Rio with a merit scholarship. I have 1 year of experience in web development, mainly with Typescript, React, Node.js, and databases like MongoDB and PostgreSQL. I’m also interested in blockchain development and always looking to learn more.</p>
            <div className=" flex flex-wrap gap-[100px] justify-center">
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={faGithub} size="3x" /></Link>
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
              <Link className='mt-8' href={""}><FontAwesomeIcon icon={fasEnvelope} size="3x" /></Link>
            </div>
          </div>

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
