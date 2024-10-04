import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight, GoX } from "react-icons/go";
import Link from "next/link";
import { Lexend } from "next/font/google";
import React from "react";

const font = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const BannerAdvertising: FC = () => {
  const [isClose, setClose] = useState(true);
  const getFullYear = new Date().getFullYear();

  useEffect(() => {
    const storedValue = localStorage.getItem("banner");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("banner", JSON.stringify(isClose));
  }, [isClose]);

  return (
    <AnimatePresence>
      {isClose && (
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={font.style}
          className="hidden md:block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-3 relative shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h5 className="text-white text-sm font-light">
                  <span className="font-bold mr-2">
                    FINANCIFY.IO {getFullYear}
                  </span>
                  Join us in Denver from June 1 to 9 to see what's coming next.
                </h5>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href={"signUp"}
                  className="bg-white text-indigo-600 rounded-full px-6 py-2 text-sm font-semibold transition duration-300 ease-in-out hover:bg-indigo-100 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="flex items-center">
                    Register now
                    <GoArrowRight size={16} className="ml-2" />
                  </span>
                </Link>
                <button
                  onClick={() => setClose(false)}
                  className="text-white/90 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  aria-label="Close banner"
                >
                  <GoX size={24} />
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
