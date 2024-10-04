"use client";
import { FC, useEffect, useState } from "react";
import { ButtonLink } from "../Button/buttonLink";
import { Github, Linkedin, X } from "lucide-react";
import s from "./info-modal.module.scss";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InfoModal: FC = ({}) => {
  const [isClose, setClose] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem("info-modal");
      if (storedValue !== null) {
        setClose(JSON.parse(storedValue));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("info-modal", JSON.stringify(isClose));
    }
  }, [isClose]);

  return (
    <AnimatePresence>
      {isClose && (
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`${s.wrapper} fixed bottom-0 left-0 sm:bottom-4 sm:left-4 z-[100] border-t-1 sm:border-1 border-slate-200 sm:rounded-lg p-6 w-full sm:max-w-[500px] bg-gradient-to-br from-white via-purple-300 to-blue-50 backdrop-blur-xl sm:shadow-lg`}
        >
          <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-sky-800 bg-clip-text text-transparent"
          >
            YO  WADDUP
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 mb-6"
          >
            This landing page is a template for accounting and is not used for
            commercial purposes. Enjoy watching!
          </motion.p>
          <motion.h5 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl font-semibold mb-4 text-gray-800"
          >
            ⚡Social and Source:
          </motion.h5>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <ButtonLink
              href="https://github.com/harshitduggal1"
              size="lg"
              styles="rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black transition-all duration-300"
              value={<Github size={24} />}
            />
            <ButtonLink
              href="https://www.linkedin.com/harshitduggal1"
              size="lg"
              styles="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              value={<Linkedin size={24} />}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X
              size={24}
              className="absolute top-4 right-4 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300"
              onClick={() => setClose(false)}
            />
          </motion.div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};
