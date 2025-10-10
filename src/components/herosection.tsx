"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Language } from "@/translations";

interface HeroSectionProps {
  t: any;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const HeroSection = ({ t, language, setLanguage }: HeroSectionProps) => {
  const [hovered, setHovered] = useState(false);

  const languages = [
    { lang: 'pt', flag: "/images/BR.png" },
    { lang: 'fr', flag: "/images/FR.png" },
    { lang: 'en', flag: "/images/UM.png" },
    { lang: 'es', flag: "/images/ES.png" },
    { lang: 'it', flag: "/images/IT.png" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="relative flex flex-col items-center justify-center z-30 text-white min-h-screen px-4 py-8 sm:py-12"
    >
      <h1 className="bg-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center px-3 sm:px-4">
        {t.hero.greeting} <span className="text-yellow-500">{t.hero.name}</span>
      </h1>
      <p className="bg-black text-sm sm:text-base md:text-lg font-thin text-center px-3">
        {t.hero.subtitle}
      </p>

      <div className="z-40 p-3 sm:p-5 flex flex-wrap gap-2 sm:gap-4 justify-center mt-6">
        {languages.map((item) => (
          <motion.button
            key={item.lang}
            onClick={() => setLanguage(item.lang as Language)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-200"
          >
            <Image
              src={item.flag}
              width={36}
              height={36}
              alt={item.lang}
              className="w-8 z-50 sm:w-10"
            />
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
  );
};

export default HeroSection;