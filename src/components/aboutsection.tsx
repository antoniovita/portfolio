"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function float(x: number, y: number, delay: number) {
  return {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, x, 0],
      y: [0, y, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  };
}

export default function AboutSection({ t }: { t: any }) {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:px-8 lg:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={float(10, 15, 0)}
          initial="initial"
          animate="animate"
          className="relative mx-auto flex w-full max-w-[200px] items-center justify-center sm:max-w-[300px] md:max-w-[400px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              width={500}
              height={800}
              priority
              src="/images/astronaut.png"
              alt="Profile"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-300/10 blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-xl space-y-5 px-1 sm:px-2 md:space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center font-bold text-2xl text-white sm:text-2xl md:text-3xl lg:text-left lg:text-4xl">
            {t?.about?.title} {" "}
            <span className="font-bold text-yellow-500">{t?.about?.titleHighlight}</span>
          </h1>



          <p className="text-center text-[15px] leading-relaxed text-gray-300 sm:text-sm md:text-base lg:text-left lg:text-lg">
            {t?.about?.description}
          </p>

          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <SocialLink
              href="https://github.com/antoniovita"
              label="GitHub"
              icon={faGithub}
              compact={true}
            />
            <SocialLink
              href="https://linkedin.com/in/antonio-vita-6177922b7"
              label="LinkedIn"
              icon={faLinkedin}
              compact={true}
            />
            <SocialLink 
              href="https://www.instagram.com/antoniovita.dev/" 
              label="Instagram" 
              icon={faInstagram}
              compact={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
  compact = false,
}: {
  href: string;
  label: string;
  icon: any;
  compact?: boolean;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <motion.button
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className={[
          "group inline-flex items-center justify-center rounded-full",
          "backdrop-blur bg-white/8",
          "hover:bg-white/12 hover:ring-yellow-400/50",
          "transition-all duration-300 focus:outline-none",
          compact ? "h-10 w-10" : "h-12 w-12",
        ].join(" ")}
      >
        <FontAwesomeIcon
          icon={icon}
          className="transition-colors duration-300 text-[40px] group-hover:text-yellow-300 text-gray-200"
        />
        <span className="sr-only">{label}</span>
      </motion.button>
    </Link>
  );
}