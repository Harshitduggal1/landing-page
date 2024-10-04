"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import s from "./styles/Hero.module.scss";
import { FaPlay } from "react-icons/fa";
import { ButtonLink } from "@/app/Components/UI/Button/buttonLink";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Lexend } from "next/font/google";

const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Hero: FC = () => {
  const DATA_COMPANIES = [
    { pathImg: "./Images/HomePage/hero/1.svg" },
    { pathImg: "./Images/HomePage/hero/2.svg" },
    { pathImg: "./Images/HomePage/hero/3.svg" },
    { pathImg: "./Images/HomePage/hero/4.svg" },
    { pathImg: "./Images/HomePage/hero/5.svg" },
    { pathImg: "./Images/HomePage/hero/6.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${s.hero} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`}
    >
      <div className="container">
        <section className={`${s.wrapper} text-center`}>
          <article className={`${s.content} py-32 sm:py-44`}>
            <motion.h1
              variants={itemVariants}
              custom={1}
              className="relative mx-auto max-w-4xl tracking-tight font-medium text-balance text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
              style={{
                ...font.style,
                fontSize: "4rem",
                lineHeight: "1.2",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Accounting
              </motion.span>{" "}
              <motion.span
                className="relative whitespace-nowrap lg:whitespace-normal"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <motion.span
                  className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-sky-600  to-purple-800"
                  animate={{
                    color: [
                      "rgb(0, 0, 139)", // Dark Blue
                      "rgb(0, 0, 255)", // Blue
                      "rgb(255, 192, 203)", // Pink
                      "rgb(0, 0, 139)", // Dark Blue (to loop back)
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  made simple
                </motion.span>
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                for small businesses.
              </motion.span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              custom={2}
              className="mt-6 mx-auto max-w-xl text-md sm:text-lg tracking-tight text-white"
              style={{
                ...font.style,
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Transform your bookkeeping experience with our intuitive software, tailored for small businesses.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className={`${s.actions} mt-6`}
            >
              <ButtonLink
                size="md"
                value="Get 6 months free"
                styles="shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-full mr-5 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
                href="/signUp"
              />
              <Button
                target="_blank"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="shadow-sm bg-white border-1 border-slate-200 rounded-full text-slate-950 font-extrabold hover:bg-purple-700 transition-all duration-300"
                as={Link}
              >
                <FaPlay size={12} color={"#2563EB"} />
                Watch video
              </Button>
            </motion.div>
          </article>
          <motion.div
            variants={itemVariants}
            className={`${s.companies}`}
          >
            <motion.h5
              variants={textVariants}
              custom={3}
              style={font.style}
              className="text-white/80 font-normal"
            >
              Trusted by these six companies so far
            </motion.h5>
            <motion.div
              className="my-10 flex justify-center items-center flex-wrap"
              variants={containerVariants}
            >
              {DATA_COMPANIES.map((item, i) => (
                <motion.div
                  key={i}
                  className={`${s.company} m-4`}
                  variants={itemVariants}
                  custom={i}
                >
                  <Image
                    src={item.pathImg}
                    alt={`Company logo ${i + 1}`}
                    className={`${s.image} w-32 h-32 md:w-36 md:h-36`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
};
