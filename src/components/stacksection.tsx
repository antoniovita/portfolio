"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface StackSectionProps {
  t: any;
}

const StackSection = ({ t }: StackSectionProps) => {
  const [showStack, setShowStack] = useState(false);
  const [icons, setIcons] = useState<{
    src: string;
    top: number;
    left: number;
    animationDelay: string;
  }[]>([]);

  const technologies = useMemo(
    () => [
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
    ],
    []
  );

  const techNames = [
    "CSS3", "Figma", "JavaScript", "Python", "TypeScript",
    "PostgreSQL", "React", "Node.js", "MongoDB", "MySQL",
    "Git", "GitHub", "Docker", "Java", "HTML5", "Spring Boot", "React Native"
  ];

  useEffect(() => {
    const generatedIcons: {
      src: string;
      top: number;
      left: number;
      animationDelay: string;
    }[] = [];
    const minDistance = 8;
    const centerZone = { min: 40, max: 60 };

    const isTooClose = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy) < minDistance;
    };

    const isInCenter = (top: number, left: number) => {
      return (
        top > centerZone.min &&
        top < centerZone.max &&
        left > centerZone.min &&
        left < centerZone.max
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
        const notTooClose = generatedIcons.every(
          (icon) => !isTooClose(icon.left, icon.top, left, top)
        );

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <div className="flex flex-col justify-center items-center min-h-screen sm:h-screen relative py-12 sm:py-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl z-30 mb-4 sm:mb-5 text-center bg-black rounded-full px-4 sm:px-5 py-2 sm:py-3">
            {t.stack.title}{" "}
            <span className="text-yellow-500">{t.stack.titleHighlight}</span>?
          </h1>
          <motion.button
            onClick={() => setShowStack(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black font-bold z-30 rounded-full px-4 sm:px-5 py-2 mt-4 sm:mt-5 hover:bg-yellow-500 transition-colors duration-300"
          >
            {t.stack.viewList}
          </motion.button>

          <div className="absolute inset-0 floating-icons z-0 hidden lg:block">
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
                  width: "3vh",
                  height: "3vh",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showStack && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowStack(false)}
            className="fixed inset-0 flex justify-center items-center z-50 p-4 sm:p-6"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-black w-full p-6 max-w-[320px] sm:max-w-sm md:max-w-md h-auto max-h-[70vh] sm:max-h-[80vh] relative flex flex-col justify-between sm:py-8 items-center text-white sm:p-4 rounded-3xl"
            >
              <div className="items-center flex flex-col gap-2 sm:gap-3 justify-start w-full overflow-y-auto max-h-[calc(70vh-160px)] sm:max-h-[calc(80vh-180px)] scrollbar-hide">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-slate-100/10 px-3 sm:px-4 py-3 rounded-xl flex flex-row gap-2 sm:gap-3 items-center w-full sm:w-[90%]"
                  >
                    <Image
                      src={tech}
                      alt={techNames[index]}
                      width={50}
                      height={50}
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    />
                    <h1 className="font-normal text-sm sm:text-base">
                      {techNames[index]}
                    </h1>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setShowStack(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black bg-yellow-500 font-bold w-full sm:w-[95%] py-2 sm:py-3 rounded-lg mt-4 hover:bg-yellow-500 transition-colors duration-300"
              >
                {t.stack.goBack}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StackSection;