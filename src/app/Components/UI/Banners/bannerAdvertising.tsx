import { FC, useEffect, useState } from "react";

// Icons
import { GoArrowRight, GoX } from "react-icons/go";
// Next
import Link from "next/link";
// Font
import { Lexend } from "next/font/google";
import React from "react";
const font = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export const BannerAdvertising: FC = ({}) => {
  const [isClose, setClose] = useState(true);
  const getFullYear = new Date().getFullYear();
  useEffect(() => {
    const storedValue = window.localStorage.getItem("banner");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("banner", JSON.stringify(isClose));
  }, [isClose]);

  return (
    <>
      {isClose && (
        <section
          style={font.style}
          className={"hidden md:block bg-black py-1.5 relative"}
        >
          <section className="text-center grid grid-cols-2-auto justify-center items-center gap-2">
            <h5 className="text-white text-sm font-light">
              <span className="relative font-normal after:content-['.'] after:absolute after:bottom-0.5 mr-2 after:-right-1">
                TaxPal {getFullYear}{" "}
              </span>
              Join us in Denver from June 7 – 9 to see what’s coming next.
            </h5>
            <Link
              href={"signUp"}
              className="text-blue bg-white rounded-full pl-3 pr-7 py-1 text-xs font-normal relative "
            >
              Register now
              <GoArrowRight size={14} className=" absolute top-1.5 right-3 " />
            </Link>
          </section>
          <button
            onClick={() => setClose(false)}
            className="text-white absolute top-1.5 right-2 "
          >
            <GoX size={20} className={""} />
          </button>
        </section>
      )}
    </>
  );
};
