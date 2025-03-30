import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const MyWork = () => {
  return (
    <div className="w-full max-w-[90rem] mx-auto py-20">
      <h1 className="text-3xl md:text-4xl z-30 mb-[20px] text-center">
        A little of my <span className="text-yellow-400">work</span>
      </h1>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0, 
          stretch: 0,  
          depth: 200,      
          modifier: 2,      
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="h-[550px]"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide
            key={num}
            className="transition-all duration-300 w-[400px]"
          >
            <div className="text-white flex items-center justify-center rounded-md text-xl h-full swiper-slide-content">
              <div className="flex flex-col gap-4 bg-black p-3">
                <Image
                  alt="projects-images"
                  width={800}
                  height={800}
                  src="/images/projects/irsa-site.png"
                  className="rounded-lg"
                />
                <div className="gap-2 flex flex-col">
                  <h1 className="font-bold text-lg ">IRSA: Radiologia por Imagem</h1>
                  <p className="font-thin text-sm">
                    projeto de SPA feito com next.js Tailwindcss
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  <div className="rounded-full bg-blue-500 px-3 py-1 flex items-center gap-2">
                    <Image
                      alt="typescript"
                      width={18}
                      height={13}
                      src="/images/typescript-plain.png"
                    />
                    <h1 className="text-white font-extralight text-sm">Typescript</h1>
                  </div>

                  <div className="rounded-full bg-teal-900 px-3 py-1 flex items-center gap-2">
                    <Image
                      alt="tailwind"
                      width={18}
                      height={13}
                      src="/images/tailwindcss-plain.png"
                    />
                    <h1 className="text-white font-extralight text-sm">Tailwindcss</h1>
                  </div>

                  <div className="rounded-full bg-gray-800 px-3 py-1 flex items-center gap-2">
                    <Image
                      alt="nextjs"
                      width={18}
                      height={13}
                      src="/images/nextjs-original.png"
                    />
                    <h1 className="text-white font-extralight text-sm">Next.js</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide-active .swiper-slide-content {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default MyWork;
