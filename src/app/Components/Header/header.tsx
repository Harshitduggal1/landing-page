"use client";
// React
import { FC, useState } from "react";
// Styles
import s from "./styles/Header.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";
// Icons
import { AlignJustify, X } from "lucide-react";
// NextUI
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

type THeader = {};

export const Header: FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return (
    <>
      <Navbar
        disableAnimation
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        shouldHideOnScroll
        maxWidth="full"
        className={`${s.navBar}`}
      >
        <div className="container">
          <section className={s.wrapper}>
            <nav className={s.nav}>
              <Link
                href={"/"}
                className={`${s.logo} hover:opacity-80 transition-opacity`}
              >
                <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
                <h5 className="text-black font-semibold text-lg">
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
                href={"/login"}
              >
                Sign In
              </Link>
              <Link
                className="bg-blue text-white py-3 px-4 rounded-full text-sm font-medium"
                href={"/register"}
              >
                Get started{" "}
                <span className="hidden lg:inline-block">today</span>
              </Link>
              {/* BurgerMenu */}
              <NavbarMenuToggle
                icon={
                  isMenuOpen ? (
                    <X color="#0F172A" />
                  ) : (
                    <AlignJustify color="#0F172A" />
                  )
                }
                className="sm:hidden"
              />
            </div>
          </section>
        </div>
        <NavbarMenu className="pt-8 border-t-1 border-blue">
          {DATA_TOGGLE_MENU.map((item, i) => (
            <NavbarMenuItem key={i}>
              <Link className="w-full" href="#">
                {item.value}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
