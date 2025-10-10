"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { useState } from 'react';

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
};

type MyWorkProps = {
  title: string;
  projects: Project[];
};

const MyWork = ({ title, projects }: MyWorkProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.pop();
  const restOfTitle = titleWords.join(' ');

  return (
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
            style={{
              perspective: '1200px',
            } as React.CSSProperties}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="flex items-center justify-center">
                {({ isActive }) => (
                  <div
                    className={`transform transition-all duration-500 ${
                      isActive ? 'scale-100 z-20' : 'scale-95 z-10'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                    } as React.CSSProperties}
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
                                  className={`${tech.bg} rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-sm transition-transform duration-300 cursor-pointer`}
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
  );
};

export default MyWork;