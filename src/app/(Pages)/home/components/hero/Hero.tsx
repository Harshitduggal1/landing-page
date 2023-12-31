"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Hero.module.scss";
import { FaPlay } from "react-icons/fa";
// Components
import { ButtonLink } from "@/app/Components/UI/Button/buttonLink";
import { Button } from "@nextui-org/react";
// Next
import Link from "next/link";
// Font
import { Lexend } from "next/font/google";
import Image from "next/image";
const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Hero: FC = ({}) => {
  const DATA_COMPANIES = [
    { pathImg: "./Images/HomePage/hero/1.svg" },
    { pathImg: "./Images/HomePage/hero/2.svg" },
    { pathImg: "./Images/HomePage/hero/3.svg" },
    { pathImg: "./Images/HomePage/hero/4.svg" },
    { pathImg: "./Images/HomePage/hero/5.svg" },
    { pathImg: "./Images/HomePage/hero/6.svg" },
  ];
  return (
    <section className={`${s.hero} `}>
      <div className="container">
        <section className={s.wrapper}>
          <article className={`${s.content} py-40`}>
            <h1
              style={font.style}
              className="relative text-black mx-auto max-w-4xl tracking-tight font-medium"
            >
              Accounting{" "}
              <span className="relative whitespace-nowrap lg:whitespace-normal">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="z-10 absolute left-0 top-2/3 h-[0.58em] w-full fill-blue/30"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  {/* <animate
                    attributeType="XML"
                    attributeName="fill"
                    values="#fff;#BDD0F9;#fff"
                    dur="3s"
                    repeatCount="indefinite"
                  /> */}
                </svg>
                <span className="relative z-20 text-blue">made simple</span>
              </span>{" "}
              for small businesses.
            </h1>
            <p className="mt-6 mx-auto max-w-xl text-lg tracking-tight ">
              Most bookkeeping software is accurate, but hard to use. We make
              the opposite trade-off, and hope you don’t get audited.
            </p>
            <div className={`${s.actions} mt-6`}>
              <ButtonLink
                value="Get 6 months free"
                styles=" shadow-md bg-black text-white font-medium rounded-full mr-5"
                href="/signUp"
              />

              <Button
                target="blank"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className=" shadow-sm bg-white border-1 border-slate-200 rounded-full text-black font-medium"
                as={Link}
              >
                <FaPlay size={12} color={"#2563EB"} />
                Watch video
              </Button>
            </div>
          </article>
          <div className={s.companies}>
            <h5 style={font.style} className="text-black font-normal">
              Trusted by these six companies so far
            </h5>
            <div className="my-10">
              {DATA_COMPANIES.map((item, i) => (
                <Image
                  key={i}
                  src={item.pathImg}
                  alt="Image"
                  width={140}
                  height={150}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
