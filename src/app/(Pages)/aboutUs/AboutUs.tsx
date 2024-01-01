"use client";
// React
import { FC, useState } from "react";
// Styles
import s from "./styles/AboutUs.module.scss";

export const AboutUs: FC = ({}) => {
  return (
    <section className={s.about}>
      <div className="container">
        <section className={s.wrapper}>
          <div className={s.header}>
            <h2></h2>
            <p></p>
          </div>
        </section>
      </div>
    </section>
  );
};
