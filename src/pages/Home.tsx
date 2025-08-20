import React from "react";
import HeroSection from "../components/layout/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import ServicesSection from "../components/sections/ServicesSection";
import Products from "../components/sections/Products";
import ProductionCapacity from "../components/sections/ProductionCapacity";
import Logistics from "../components/sections/Logistics";
import StaticImage from "../components/layout/StaticImage";
import StaticImage2 from "../components/layout/StaticImage2";
import Contact from "./Contact";
import Zepra from "../components/sections/Zepra";
import News from "./News/News";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <StaticImage2 />
      <Products />
      <StaticImage />
      <ServicesSection />
      <Zepra />
      <ProductionCapacity />
      <Logistics />
      <News />
      <Contact />
    </>
  );
};

export default Home;
