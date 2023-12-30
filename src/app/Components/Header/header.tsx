"use client";
// React
import { FC, useEffect, useState } from "react";
// Styles
import s from "./styles/Header.module.scss";
// Next
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
// NextUI
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
// Font
import { Lexend } from "next/font/google";
const font = Lexend({
  subsets: ["latin"],
  weight: ["500"],
});

export const Header: FC = ({}) => {
  const pathName = usePathname().replace("/", "");
  let hideNavigation = pathName === "signIn" || pathName === "signUp";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const DATA_LINKS = [
    { value: "Features", href: "" },
    { value: "Testimonials", href: "" },
    { value: "Pricing", href: "" },
  ];

  const DATA_TOGGLE_MENU = [
    { value: "Features", href: "" },
    { value: "Testimonials", href: "" },
    { value: "Pricing", href: "" },
    { value: "Sign In", href: "" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [isScroll]);
  return (
    <>
      {!hideNavigation && (
        <Navbar
          shouldHideOnScroll
          disableAnimation
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          maxWidth="full"
          height={"4.5em"}
          className={`${s.navBar} ${
            isScroll || isMenuOpen
              ? "shadow-sm pt-0 pb-0"
              : "shadow-none md:pt-4 md:pb-4"
          }   transition-all`}
        >
          <div className="container">
            <section className={s.wrapper}>
              <nav className={s.nav}>
                <Link
                  href={"/"}
                  className={`${s.logo} hover:opacity-80 transition-opacity`}
                >
                  <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
                  <h5 style={font.style} className="text-black  text-lg">
                    Tax<span className="text-blue ">Pal</span>
                  </h5>
                </Link>
                <ul className="hidden md:grid">
                  {DATA_LINKS.map((link, i) => (
                    <Link
                      key={i}
                      className="transition-all text-sm text-slate-700 hover:text-blue hover:bg-slate-100 px-3 py-2 rounded-lg"
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  ))}
                </ul>
              </nav>
              <div className={s.actions}>
                <Link
                  className="hidden md:inline-block transition-all text-sm text-slate-700 hover:text-blue hover:bg-slate-100 px-3 py-2 rounded-lg"
                  href={"/signIn"}
                >
                  Sign In
                </Link>
                <Button
                  as={Link}
                  className="bg-blue text-white py-2 px-3 rounded-full text-sm font-medium hover:bg-white hover:text-blue  transition-all border-2 border-blue shadow-md"
                  href={"/signUp"}
                >
                  Get started{" "}
                  <span className="hidden lg:inline-block">today</span>
                </Button>
                {/* BurgerMenu */}
                <NavbarMenuToggle className="sm:hidden" />
              </div>
            </section>
          </div>
          {/* ToggleMenu */}
          <NavbarMenu className={`navbarMenu pt-5 bg-slate-50`}>
            {DATA_TOGGLE_MENU.map((item, i) => (
              <NavbarMenuItem key={i}>
                <Link
                  className={`w-full  ${
                    i === DATA_TOGGLE_MENU.length - 1
                      ? "text-blue"
                      : "text-slate-700"
                  }`}
                  href="#"
                >
                  {item.value}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
};
