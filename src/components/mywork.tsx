"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

type Technology = {
  name: string;
  icon: string;
  bg: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  link?: string;
  github?: string;
  longDescription?: string;
};

type MyWorkProps = {
  t: any;
};

const MyWork = ({ t }: MyWorkProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const title = t.projects.title;
  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  const projects: Project[] = t.projects.items.map((item: any, index: number) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    longDescription: item.longDescription || item.description,
    link: item.link,
    github: item.github,
    image: [
      '/images/projects/irsa-site.png',
      '/images/projects/myorder.png',
      '/images/projects/gymtracker.jpg',
      '/images/projects/portfolio.png',
      '/images/projects/dayo.png'
    ][index],
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      y: 50,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {restOfTitle}{' '}
              <span className="bg-yellow-500 font-bold bg-clip-text text-transparent">
                {lastWord}
              </span>
            </h1>
          </div>

          <div className="relative">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { 
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 1.3,
                  spaceBetween: 15,
                },
                768: { 
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                1024: { 
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              effect="fade"
              modules={[Autoplay, EffectCoverflow]}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              className="pb-8"
              style={{ perspective: '1200px' } as React.CSSProperties}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} className="flex items-center justify-center">
                  {({ isActive }) => (
                    <div
                      onClick={() => setSelectedProject(project)}
                      className={`transform transition-all duration-500 cursor-pointer ${
                        isActive ? 'scale-100 z-20' : 'scale-95 z-10'
                      }`}
                      style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
                    >
                      <div className="group h-full">
                        <div className="relative bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-2xl overflow-hidden transition-all duration-300">
                          <div className="bg-black rounded-2xl overflow-hidden backdrop-blur-sm">
                            <div className="relative w-full aspect-video overflow-hidden rounded-t-xl transition-transform duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent z-10"></div>
                              <Image
                                alt={project.title}
                                src={project.image}
                                fill
                                className="object-cover"
                                priority={index === 0}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4 md:p-6 space-y-4">
                              <div className="space-y-2">
                                <h2 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                                  {project.title}
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base line-clamp-2 transition-colors duration-300">
                                  {project.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <div
                                    key={techIndex}
                                    className={`${tech.bg} rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-sm transition-transform duration-300`}
                                  >
                                    <Image
                                      alt={tech.name}
                                      width={16}
                                      height={16}
                                      src={tech.icon}
                                      className="grayscale transition-all duration-300"
                                    />
                                    <span className="text-white font-medium text-xs md:text-sm">
                                      {tech.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-2 mt-8 md:mt-12">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide % projects.length
                      ? 'w-8 bg-yellow-500'
                      : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 sm:p-6"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-black w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl scrollbar-hide"
            >
              <div className="relative">
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white rounded-full p-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>

                <div className="p-4 sm:p-8 space-y-6">
                  <div>
                    <h1 className="text-xl sm:text-3xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t.projects.technologies || "Technologies"}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`${tech.bg} rounded-xl px-4 py-2 flex items-center gap-2`}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="grayscale"
                          />
                          <span className="text-white font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:flex-1 bg-slate-100/10 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-100/20 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        {t.projects.viewGithub || "View GitHub"}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyWork;