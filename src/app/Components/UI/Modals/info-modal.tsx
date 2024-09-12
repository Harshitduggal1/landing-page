"use client";
import { FC, useEffect, useState } from "react";
import { ButtonLink } from "../Button/buttonLink";
import { Github, Linkedin, X } from "lucide-react";
import s from "./info-modal.module.scss";
export const InfoModal: FC = ({}) => {
  const [isClose, setClose] = useState(() => {
    const storedValue = window.localStorage.getItem("info-modal");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    window.localStorage.setItem("info-modal", JSON.stringify(isClose));
  }, [isClose]);

  return (
    <>
      {isClose && (
        <article
          className={`${s.wrapper} fixed bottom-0 left-0 sm:bottom-4 sm:left-4 z-[100] border-t-1 sm:border-1 border-slate-200 sm:rounded-md p-3 w-full sm:max-w-[500px] bg-white/80 backdrop-blur-lg sm:shadow-md`}
        >
          <h4 className="text-xl font-medium mb-2">Hi there👋!</h4>
          <p>
            This landing page is a template for a accounting and is not used for
            commercial purposes. Enjoy watching!
          </p>
          <h5 className="mt-4 mb-2">⚡Social and Source: </h5>
          <div className="grid sm:grid-cols-2 gap-2 ">
            <ButtonLink
              href="https://github.com/Kirill-H-FrontEnd"
              size="md"
              styles="rounded-full bg-[#221F1E] text-white"
              value={<Github size={20} />}
            />
            <ButtonLink
              href="https://www.linkedin.com/in/kirill-h"
              size="md"
              styles="rounded-full bg-[#0866C0] text-white"
              value={<Linkedin size={20} />}
            />
          </div>
          <X
            size={20}
            className="absolute top-2 right-2 text-black cursor-pointer hover:opacity-70"
            onClick={() => setClose(false)}
          />
        </article>
      )}
    </>
  );
};
