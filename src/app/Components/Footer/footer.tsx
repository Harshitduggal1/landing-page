"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Footer.module.scss";
// Icons
import { FaTwitter, FaGithub } from "react-icons/fa";
// ScrollLink
import { Link as ScrollLink } from "react-scroll";
// Next
import Image from "next/image";
import Link from "next/link";
// NextUI
import { Tooltip } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export const Footer: FC = ({}) => {
  const pathName = usePathname().replace("/", "");
  let hideFooter = pathName === "signIn" || pathName === "signUp";
  const getFullYear = new Date().getFullYear();
  const DATA_LINKS = [
    { value: "Features", href: "features" },
    { value: "Testimonials", href: "testimonials" },
    { value: "Pricing", href: "price" },
  ];

  return (
    <>
      {!hideFooter && (
        <footer className={`${s.footer} bg-slate-50`}>
          <div className="container">
            <section className={s.wrapper}>
              <ScrollLink
                spy={true}
                smooth={true}
                duration={800}
                to={"top"}
                className={`${s.logo} hover:opacity-80 transition-opacity cursor-pointer`}
              >
                <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
                <h5 className="text-black font-semibold text-lg">
                  Tax<span className="text-blue ">Pal</span>
                </h5>
              </ScrollLink>
              <nav className={`${s.nav}`}>
                {DATA_LINKS.map((link, i) => (
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    duration={800}
                    to={link.href}
                    key={i}
                    className="transition-all text-sm text-slate-700 hover:text-blue hover:bg-slate-100 px-3 py-2 rounded-lg"
                    href={link.href}
                  >
                    {link.value}
                  </ScrollLink>
                ))}
              </nav>
            </section>
            <div className={`${s.copyright} border-t-1 border-slate-200 py-10`}>
              <p className="text-sm text-slate-500 ">
                Copyright © {getFullYear} TaxPal. Kirill H
              </p>
              <div className={s.social}>
                <Tooltip content="Twitter" size="sm">
                  <Link
                    target="_blank"
                    className="text-slate-400 hover:text-slate-600"
                    href={""}
                  >
                    <FaTwitter size={22} />
                  </Link>
                </Tooltip>
                <Tooltip content="GitHub" size="sm">
                  <Link
                    target="_blank"
                    className="text-slate-400 hover:text-slate-600"
                    href={"https://github.com/Kirill-H-FrontEnd"}
                  >
                    <FaGithub size={22} />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
