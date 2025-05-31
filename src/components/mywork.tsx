import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

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

  const titleWords = title.trim().split(' ');
  const lastWord = titleWords.pop(); 
  const restOfTitle = titleWords.join(' '); 

  return (
    <div className="w-full max-w-[90rem] mx-auto py-20">
      <h1 className="text-3xl md:text-4xl z-30 text-center">
        {restOfTitle}{' '}
        <span className="text-yellow-500">{lastWord}</span>
      </h1>

      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="h-[550px]"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="w-[400px]">
            <div className="text-white flex items-start mt-[70px] justify-center rounded-md text-xl h-full">
              <div className="flex flex-col gap-4 bg-black p-3 rounded-lg">
                <div className="w-[450px] h-[245px] relative overflow-hidden rounded-lg">
                  <Image
                    alt="projects-images"
                    src={project.image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="gap-2 flex flex-col">
                  <h1 className="font-normal text-lg">{project.title}</h1>
                  <p className="font-thin text-sm">{project.description}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`rounded-full ${tech.bg} px-3 py-1 flex items-center gap-2`}
                    >
                      <Image
                        alt={tech.name}
                        width={18}
                        height={13}
                        src={tech.icon}
                        className="grayscale"
                      />
                      <h1 className="text-white font-extralight text-sm">{tech.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyWork;
