import { BannerGetStarted } from "@/app/Components/UI/Banners/bannerGetStarted";
import { AboutUs } from "../aboutUs/AboutUs";
import { Hero } from "./components/hero/Hero";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <BannerGetStarted />
    </>
  );
};
