import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const MyWork = () => {
  return (
    <div className="w-full max-w-[90rem] mx-auto py-20">
      <h1 className="text-3xl md:text-4xl z-30 text-center">
        A little of my <span className="text-yellow-400">work</span>
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
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num} className="w-[400px]">
            <div className="text-white flex items-center justify-center rounded-md text-xl h-full">
              <div className="flex flex-col gap-4 bg-black p-3">
                <Image
                  alt="projects-images"
                  width={800}
                  height={800}
                  src="/images/projects/irsa-site.png"
                  className="rounded-lg"
                />
                <div className="gap-2 flex flex-col">
                  <h1 className="font-normal text-lg">IRSA: Radiologia por Imagem</h1>
                  <p className="font-thin text-sm">
                    Projeto de SPA feito com Next.js e TailwindCSS
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  <div className="rounded-full bg-blue-500 px-3 py-1 flex items-center gap-2">
                    <Image alt="typescript" width={18} height={13} src="/images/typescript-plain.png" />
                    <h1 className="text-white font-extralight text-sm">Typescript</h1>
                  </div>
                  <div className="rounded-full bg-teal-900 px-3 py-1 flex items-center gap-2">
                    <Image alt="tailwind" width={18} height={13} src="/images/tailwindcss-plain.png" />
                    <h1 className="text-white font-extralight text-sm">TailwindCSS</h1>
                  </div>
                  <div className="rounded-full bg-gray-800 px-3 py-1 flex items-center gap-2">
                    <Image alt="nextjs" width={18} height={13} src="/images/nextjs-original.png" />
                    <h1 className="text-white font-extralight text-sm">Next.js</h1>
                  </div>
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
