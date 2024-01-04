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
// ScrollLink
import { Link as ScrollLink } from "react-scroll";
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
  const [isActive, setActive] = useState(false);

  // Data
  const DATA_LINKS = [
    { value: "Features", href: "features" },
    { value: "Testimonials", href: "testimonials" },
    { value: "Pricing", href: "price" },
  ];
  const DATA_TOGGLE_MENU = [
    { value: "Features", href: "features" },
    { value: "Testimonials", href: "testimonials" },
    { value: "Pricing", href: "price" },
  ];
  // SetScroll
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
          className={` ${s.navBar}  shadow-sm shadow-black/10  `}
          isBlurred={!isMenuOpen}
          shouldHideOnScroll
          disableAnimation
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          maxWidth="full"
          height={"4.5em"}
        >
          <div className="container">
            <section className={s.wrapper}>
              <nav className={s.nav}>
                <ScrollLink
                  className={`${s.logo} hover:opacity-80 transition-opacity cursor-pointer`}
                  onClick={() => setIsMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  duration={800}
                  to={"top"}
                >
                  <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
                  <h5 style={font.style} className="text-black  text-lg">
                    Tax<span className="text-blue ">Pal</span>
                  </h5>
                </ScrollLink>
                <ul className="hidden md:grid">
                  {DATA_LINKS.map((link, i) => (
                    <ScrollLink
                      className={`transition-all text-sm  hover:text-blue hover:bg-slate-100 px-3 py-2 rounded-lg cursor-pointer`}
                      activeStyle={{
                        backgroundColor: "#f1f5f9",
                        color: "#2563EB",
                      }}
                      key={i}
                      to={link.href}
                      spy={true}
                      smooth={true}
                      duration={800}
                    >
                      {link.value}
                    </ScrollLink>
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
                <ScrollLink
                  activeStyle={{
                    color: "#2563EB",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  duration={800}
                  className={`w-full`}
                  to={item.href}
                >
                  {item.value}
                </ScrollLink>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
};
