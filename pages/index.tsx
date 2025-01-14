import type { NextPage } from "next";
import { Box } from "@mui/material";
import Header from "../components/header";
import HeroContainer from "../components/hero-container";
import StaysSection from "../components/stays-section";
import Footer from "../components/footer";
import FooterBand from "../components/footer-band";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header />
      <HeroContainer />
      <StaysSection />
      <Footer />
      <FooterBand />
    </div>
  );
};

export default Homepage;
