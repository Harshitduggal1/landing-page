"use client";
import { FC } from "react";
// Animation
import { motion } from "framer-motion";
// Components
import { ButtonLink } from "../Button/buttonLink";
// Next
import Image from "next/image";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const BannerGetStarted: FC = ({}) => {
  // Animation
  const animation = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <section className={"relative"}>
      <Image
        src={"/bgBanner.svg"}
        width={1000}
        height={1000}
        alt="Bg"
        className="absolute inset-0 w-full h-full z-0 object-cover"
      />
      <div className="container">
        <section className="relative z-10 grid place-items-center py-20">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animation}
            className="text-center "
          >
            <h2 style={font.style} className="text-white text-4xl ">
              Get started today
            </h2>
            <p className="text-white my-6 max-w-md text-md  ">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <ButtonLink
              size="md"
              href="/signUp"
              styles="bg-white text-black rounded-full font-semibold"
              value="Get started today"
            />
          </motion.article>
        </section>
      </div>
    </section>
  );
};
