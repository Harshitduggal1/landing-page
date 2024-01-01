import { BannerGetStarted } from "@/app/Components/UI/Banners/bannerGetStarted";

import { Hero } from "./components/hero/Hero";
import { Reviews } from "./components/reviews/Reviews";
import { Price } from "./components/price/Price";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <BannerGetStarted />
      <Reviews />
      <Price />
    </>
  );
};
