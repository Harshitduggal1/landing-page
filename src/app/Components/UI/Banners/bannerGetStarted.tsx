"use client";
import { FC } from "react";
// Components
import { ButtonLink } from "../Button/buttonLink";
import Image from "next/image";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type TBannerGetStarted = {};

export const BannerGetStarted: FC = ({}) => {
  return (
    // bg-[url('/bgBanner.svg')] bg-no-repeat bg-center bg-cover
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
          <article className="text-center ">
            <h2 style={font.style} className="text-white text-4xl ">
              Get started today
            </h2>
            <p className="text-white my-6 max-w-md text-md  ">
              It’s time to take control of your books. Buy our software so you
              can feel like you’re doing something productive.
            </p>
            <ButtonLink
              href="/signUp"
              styles="bg-white text-black rounded-full font-semibold"
              value="Get started today"
            />
          </article>
        </section>
      </div>
    </section>
  );
};
