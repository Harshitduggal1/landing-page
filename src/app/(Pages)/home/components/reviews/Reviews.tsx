"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Reviews.module.scss";
// Animation
import { motion } from "framer-motion";
// Next
import Image from "next/image";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Reviews: FC = ({}) => {
  const REVIEWS_DATA = [
    {
      card: [
        {
          value:
            "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
          name: "Sheryl Berge",
          prof: "CEO at Lynch LLC",
          img: "/Images/HomePage/reviews/img1.jpg",
        },
        {
          value:
            "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
          name: "Leland Kiehn",
          prof: "Founder of Kiehn and Sons",
          img: "/Images/HomePage/reviews/img2.jpg",
        },
      ],
    },
    {
      card: [
        {
          value:
            "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
          name: "Sheryl Berge",
          prof: "CEO at Lynch LLC",
          img: "/Images/HomePage/reviews/img3.jpg",
        },
        {
          value:
            "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
          name: "Leland Kiehn",
          prof: "Founder of Kiehn and Sons",
          img: "/Images/HomePage/reviews/img4.jpg",
        },
      ],
    },
    {
      card: [
        {
          value:
            "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
          name: "Sheryl Berge",
          prof: "CEO at Lynch LLC",
          img: "/Images/HomePage/reviews/img5.jpg",
        },
        {
          value:
            "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
          name: "Leland Kiehn",
          prof: "Founder of Kiehn and Sons",
          img: "/Images/HomePage/reviews/img1.jpg",
        },
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
    <section
      id="testimonials"
      className={`${s.reviews} bg-slate-50 py-20 sm:py-32`}
    >
      <div className="container">
        <section className={`${s.wrapper} `}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={`${s.header} text-left md:text-center mb-20`}
          >
            <motion.h2
              custom={1}
              variants={animation}
              style={font.style}
              className="text-black mb-5 tracking-tight text-3xl md:text-5xl "
            >
              Loved by businesses world wide.{" "}
            </motion.h2>
            <motion.p
              custom={2}
              variants={animation}
              className="text-lg max-w-screen-md m-auto leading-8 text-slate-700 tracking-tight"
            >
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </motion.p>
          </motion.div>
          <div
            className={`${s.cards} mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3`}
          >
            {REVIEWS_DATA.map((card, i) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={animation}
                custom={i}
                key={i}
                className="flex flex-col gap-y-6 sm:gap-y-8"
              >
                {card.card.map((data, i) => (
                  <article
                    key={i}
                    className={`${s.card} relative bg-white shadow-xl shadow-slate-900/10 rounded-2xl p-6`}
                  >
                    <p className="z-10 relative text-slate-900 tracking-tight text-lg leading-8 mb-6">
                      {data.value}
                    </p>
                    <div
                      className={`${s.info} border-t-1 border-slate-100 pt-6`}
                    >
                      <div>
                        <span className="text-black font-medium ">
                          {data.name}
                        </span>
                        <span className="text-slate-500 ">{data.prof}</span>
                      </div>
                      <Image
                        className="rounded-full "
                        src={data.img}
                        width={55}
                        height={55}
                        alt={data.name}
                      />
                    </div>
                    <div className="absolute top-2 left-2 z-0">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                    </div>
                  </article>
                ))}
              </motion.li>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
