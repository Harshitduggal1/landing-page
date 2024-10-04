"use client";

import { FC, useState } from "react";
import s from "./styles/Price.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Lexend } from "next/font/google";

import { Button } from "@chakra-ui/react";
import { ButtonProps } from '@chakra-ui/react';

interface ButtonLinkProps extends ButtonProps {
  href: string;
}
const ButtonLink: FC<ButtonLinkProps> = ({ children, href, ...props }) => (
  <Button as="a" href={href} {...props}>
    {children}
  </Button>
)
interface ButtonLinkProps {
  children: string;
  href: string;
  className: string;
}

const font = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const Price: FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const DATA_CARDS = [
    {
      price: isYearly ? 90 : 9,
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
      price: isYearly ? 105 : 10.5,
      originalPrice: isYearly ? 150 : 15,
      title: "Small business",
      text: "Perfect for small / medium sized businesses.",
      list: [
        { value: "Send 25 quotes and invoices" },
        { value: "Connect up to 5 bank accounts" },
        { value: "Track up to 50 expenses per month" },
        { value: "Manual payroll support" },
        { value: "Export up to 12 reports" },
        { value: "Bulk reconcile transactions" },
        { value: "Track in multiple currencies" },
      ],
      recommended: true,
    },
    {
      price: isYearly ? 273 : 27.3,
      originalPrice: isYearly ? 390 : 39,
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

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const gradientTextStyle = {
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(to right, #4F46E5, #06B6D4)",
  };

  const numberAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
      id="price"
      className={`${s.price} bg-gradient-to-br from-slate-900 to-indigo-900 py-20 sm:py-32 overflow-hidden`}
    >
      <div className={`${s.container} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <section className={`${s.wrapper}`}>
          <motion.div
            variants={itemAnimation}
            className={`${s.header} text-center mb-16 md:mb-20`}
          >
            <motion.h2
              style={{ ...font.style, ...gradientTextStyle }}
              className="text-4xl md:text-6xl font-bold mb-5 tracking-tight text-white"  
              variants={itemAnimation}
            >
              Simple pricing for everyone
            </motion.h2>
            <motion.p
              variants={itemAnimation}
              className="text-lg md:text-xl max-w-3xl mx-auto leading-8 text-white"
            >
              It doesn't matter what size your business is, our software won't
              work well for you.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemAnimation}
            className="flex justify-center items-center mb-12"
          >
            <motion.div
              className="bg-indigo-800 p-1 rounded-full flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.button
                  key={isYearly ? "monthly" : "yearly"}
                  className={`px-6 py-3 rounded-full text-lg font-medium ${
                    !isYearly
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "text-white/90"
                  }`}
                  onClick={() => setIsYearly(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Monthly
                </motion.button>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.button
                  key={isYearly ? "yearly" : "monthly"}
                  className={`px-6 py-3 rounded-full text-lg font-medium ${
                    isYearly
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "text-gray-300"
                  }`}
                  onClick={() => setIsYearly(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Yearly
                </motion.button>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerAnimation}
            className={`${s.cards} grid grid-cols-1 md:grid-cols-3 gap-8`}
          >
            {DATA_CARDS.map((card, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className={`bg-gradient-to-br from-slate-800 to-indigo-900 p-8 rounded-3xl border-2 border-transparent hover:border-indigo-500 shadow-lg transition-all duration-300 ease-in-out relative ${
                  card.recommended ? 'border-indigo-500' : ''
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)" }}
              >
                {card.recommended && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Most Recommended
                  </motion.div>
                )}
                <motion.div className="text-center" variants={itemAnimation}>
                  <h3
                    style={{ ...font.style }}
                    className="text-2xl font-bold mb-4 text-white/80"
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/80 mb-6">{card.text}</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={card.price}
                      className="text-4xl font-bold mb-2 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        $
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {card.price.toFixed(2)}
                      </motion.span>
                      <motion.span
                        className="text-lg text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {isYearly ? "/year" : "/month"}
                      </motion.span>
                    </motion.div>
                  </AnimatePresence>
                  {card.originalPrice && (
                    <motion.p
                      className="text-lg text-gray-400 line-through mb-2"
                      {...numberAnimation}
                    >
                      ${card.originalPrice.toFixed(2)}
                    </motion.p>
                  )}
                  {card.originalPrice && (
                    <motion.p
                      className="text-lg text-green-400 font-bold mb-4"
                      {...numberAnimation}
                    >
                      30% off
                    </motion.p>
                  )}
                  <ButtonLink href="/pricing" className="bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full w-full hover:from-indigo-500 hover:to-blue-500 transition-all duration-300">
                    Get started
                  </ButtonLink>
                </motion.div>
                <motion.ul className="mt-8 space-y-4" variants={itemAnimation}>
                  {card.list.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="text-white/80 flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle2 className="text-indigo-400 w-5 h-5" />
                      <span>{item.value}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
};
