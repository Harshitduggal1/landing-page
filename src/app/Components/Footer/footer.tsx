// React
import { FC } from "react";
// Styles
import s from "./styles/Footer.module.scss";
// Icons
import { FaTwitter, FaGithub } from "react-icons/fa";
// Next
import Image from "next/image";
import Link from "next/link";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const DATA_LINKS = [
    { value: "Features", href: "" },
    { value: "Testimonials", href: "" },
    { value: "Pricing", href: "" },
  ];

  return (
    <>
      <footer className={`${s.footer} bg-slate-50`}>
        <div className="container">
          <section className={s.wrapper}>
            <Link
              href={"/"}
              className={`${s.logo} hover:opacity-80 transition-opacity`}
            >
              <Image src={"./Logo.svg"} width={40} height={40} alt="Logo" />
              <h5 className="text-black font-semibold text-lg">
                Tax<span className="text-blue ">Pal</span>
              </h5>
            </Link>
            <nav className={`${s.nav}`}>
              {DATA_LINKS.map((link, i) => (
                <Link
                  key={i}
                  className="transition-all text-sm text-slate-700 hover:text-blue hover:bg-slate-100 px-3 py-2 rounded-lg"
                  href={link.href}
                >
                  {link.value}
                </Link>
              ))}
            </nav>
          </section>
          <div className={`${s.copyright} border-t-1 border-slate-200 py-10`}>
            <p className="text-sm text-slate-500 ">
              Copyright © {getFullYear} TaxPal. All rights reserved.
            </p>
            <div className={s.social}>
              <Link className="text-slate-400 hover:text-slate-600" href={""}>
                <FaTwitter size={22} />
              </Link>
              <Link className="text-slate-400 hover:text-slate-600" href={""}>
                <FaGithub size={22} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
