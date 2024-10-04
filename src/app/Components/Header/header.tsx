"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Lexend } from "next/font/google";
import { BannerAdvertising } from "../UI/Banners/bannerAdvertising";
import React from "react";

const font = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});

export const Header: FC = () => {
  const pathName = usePathname()?.replace("/", "") || "";
  const hideNavigation = pathName === "signIn" || pathName === "signUp";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  const { scrollY } = useViewportScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  const DATA_LINKS = [
    { value: "Features", href: "features" },
    { value: "Testimonials", href: "testimonials" },
    { value: "Pricing", href: "price" },
    { value: "FAQ", href: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const linkHoverAnimation = {
    rest: { scale: 1, color: "#4B5563" },
    hover: {
      scale: 1.05,
      color: "#FFFFFF",
      background: "linear-gradient(45deg, #0EA5E9, #8B5CF6, #EC4899)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonHoverAnimation = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(14, 165, 233, 0.4)",
      background: "linear-gradient(45deg, #0EA5E9, #8B5CF6, #EC4899)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const logoAnimation = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <>
      {!hideNavigation && (
        <AnimatePresence>
          <BannerAdvertising />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
            style={{ opacity: headerOpacity, y: headerY }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Navbar
              className={`transition-all duration-300 ${
                isScroll
                  ? "shadow-lg shadow-sky-500/50 bg-white/80 backdrop-blur-md"
                  : "bg-transparent"
              }`}
              isBlurred={!isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
              maxWidth="full"
              height="5rem"
            >
              <motion.div 
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between h-full">
                  <motion.div variants={itemAnimation} className="flex items-center space-x-2">
                    <Link href="/">
                      <motion.div
                        variants={logoAnimation}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <Image
                          src="/Logo.svg"
                          width={40}
                          height={40}
                          alt="Logo"
                          className="transition-transform duration-300"
                        />
                      </motion.div>
                    </Link>
                    <motion.h5 
                      className={`${font.className} text-2xl font-bold`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.span
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={{ backgroundPosition: "100% 50%" }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-sky-500 to-purple-600 bg-300% animate-gradient"
                      >
                        FINANFICY<span className="text-sky-600">.IO</span>
                      </motion.span>
                    </motion.h5>
                  </motion.div>

                  <motion.nav
                    variants={itemAnimation}
                    className="hidden md:flex space-x-1"
                  >
                    {DATA_LINKS.map((link, i) => (
                      <motion.div
                        key={i}
                        variants={linkHoverAnimation}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={`/#${link.href}`}
                          className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out overflow-hidden group"
                        >
                          {link.value}
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                            layoutId="underline"
                          ></motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>

                  <motion.div
                    variants={itemAnimation}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/signIn"
                        className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Sign In
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={buttonHoverAnimation}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <Button
                        as={Link}
                        href="/signUp"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Get started
                        </motion.span>
                        <motion.span
                          className="ml-2 hidden lg:inline-block"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          today
                        </motion.span>
                      </Button>
                    </motion.div>
                    <NavbarMenuToggle className="sm:hidden" />
                  </motion.div>
                </div>
              </motion.div>

              <NavbarMenu className="pt-5 bg-gradient-to-b from-white/95 to-sky-50/95 backdrop-blur-lg">
                {DATA_LINKS.map((item, i) => (
                  <NavbarMenuItem key={i}>
                    <motion.div
                      variants={linkHoverAnimation}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/#${item.href}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-base font-medium transition-all duration-200 rounded-md px-3"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {item.value}
                        </motion.span>
                      </Link>
                    </motion.div>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};