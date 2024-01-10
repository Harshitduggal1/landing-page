"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Price.module.scss";
// Animation
import { motion } from "framer-motion";
// Icons
import { CheckCircle2 } from "lucide-react";
// Font
import { Lexend } from "next/font/google";
import { ButtonLink } from "@/app/Components/UI/Button/buttonLink";
const font = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const Price: FC = ({}) => {
  const DATA_CARDS = [
    {
      price: "$9",
      title: "Starter",
      text: "Good for anyone who is self-employed and just getting started.",
      list: [
        { value: "Send 10 quotes and invoices" },
        { value: "Connect up to 2 bank accounts" },
        { value: "Track up to 15 expenses per month" },
        { value: "Manual payroll support" },
        { value: "Export up to 3 reports" },
      ],
    },
    {
      price: "$15",
      title: "Small business",
      text: "Perfect for small / medium sized usinesses.",
      list: [
        { value: "Send 25 quotes and invoices" },
        { value: "Connect up to 5 bank accounts" },
        { value: "Track up to 50 expenses per month" },
        { value: "Manual payroll support" },
        { value: "Export up to 12 reports" },
        { value: "Bulk reconcile transactions" },
        { value: "Track in multiple currencies" },
      ],
    },
    {
      price: "$39",
      title: "Enterprise",
      text: "For even the biggest enterprise companies.",
      list: [
        { value: "Send unlimited quotes and invoices" },
        { value: "Connect up to 15 bank accounts" },
        { value: "Track up to 200 expenses per month" },
        { value: "Manual payroll support" },
        { value: "Export up to 25 reports, including TPS" },
      ],
    },
  ];
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
    <section id="price" className={`${s.price} bg-slate-900 py-20 sm:py-32`}>
      <div className={`${s.container}`}>
        <section className={`${s.wrapper}`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={`${s.header} text-left md:text-center mb-16 md:mb-20 px-5 md:px-0`}
          >
            <motion.h2
              custom={1}
              variants={animation}
              style={font.style}
              className="relative text-white mb-5 tracking-tight font-normal text-3xl md:text-5xl "
            >
              <span className="relative whitespace-nowrap lg:whitespace-normal">
                <svg
                  fill="#60A5FA"
                  aria-hidden="true"
                  viewBox="0 0 281 40"
                  preserveAspectRatio="none"
                  className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                >
                  <path d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"></path>
                </svg>
                <span className="relative z-20 ">Simple pricing</span>
              </span>{" "}
              for everyone.
            </motion.h2>
            <motion.p
              custom={2}
              variants={animation}
              className="text-lg max-w-screen-md m-auto leading-8 text-slate-400 "
            >
              It doesn’t matter what size your business is, our software won’t
              work well for you.
            </motion.p>
          </motion.div>
          <div className={s.cards}>
            {DATA_CARDS.map((card, i) => (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={animation}
                custom={i}
                key={i}
                className={`${s.card} text-white even:bg-blue even:rounded-3xl px-6 sm:px-8 py-8 even:shadow-lg`}
              >
                <h4 style={font.style} className="text-5xl font-light">
                  {card.price}
                </h4>
                <h5 className="my-5 text-lg " style={font.style}>
                  {card.title}
                </h5>
                <p className="text-md  leading-7">{card.text}</p>
                <ButtonLink
                  value="Get Started"
                  styles="w-full rounded-full bg-white text-black font-semibold my-8"
                  href="/signUp"
                />
                <ul className="">
                  {card.list.map((item, i) => (
                    <li className=" tracking-wide" key={i}>
                      <CheckCircle2 size={20} />
                      {item.value}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
