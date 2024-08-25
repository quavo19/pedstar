import React from "react";
import SponsorCarousel from "../components/SponsorCarousel";
import FeaturedSection from "../components/FeaturedSection";
import ContactBanner from "../components/ContactBanner";
import ImageSlider from "../components/BigImageSlider";
import Shapes from "../components/Shapes";

export default function Home() {
  return (
    <div className="overflow-hidden	bg-[#eff6ff80]">
      <div
        className="flex flex-col pt-32 lg:flex-row items-center justify-between min-h-screen p-8"
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(to right, rgba(1, 26, 67, 1) 30%, rgba(255, 255, 255, 0)), url(${require("../images/bg2.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="w-full lg:w-1/2 lg:ml-16 text-left space-y-6">
          <p className="inline-block text-xs text-white bg-black bg-opacity-20 px-4 py-1 border-l-4 border-[#ffc000]">
            Marketing & Advertising Excellence
          </p>

          <h1 className="md:text-5xl text-3xl font-bold text-white">
            Empowering Ghana's Business Landscape with Strategic Connections
          </h1>
          <h3 className="text-sm md:text-l text-white">
            Pedstar, a key player in service marketing, connects businesses with
            essential networks and insights. We deliver tailored marketing and
            advertising solutions that drive success, always focused on
            achieving impactful results.
          </h3>
          <button
            className="relative text-white btn btn-wide text-white border-none overflow-hidden py-4 px-6"
            style={{
              backgroundImage: "linear-gradient(to right, #ffc000, #ffdd80)"
            }}
          >
            Portfolio
            <span
              className="absolute bottom-0 right-0 h-14 w-14 bg-white rounded-full"
              style={{
                transform: "translate(50%, 50%)"
              }}
            ></span>
          </button>
        </div>
        {/* <div className="w-full lg:w-2/5 mt-8 lg:mt-0 flex items-center justify-center relative">
      <img
        src={require("../images/hero-Image.png")}
        alt="hero icon"
        className="hidden lg:block w-full h-auto"
      />
    </div> */}
      </div>

      <SponsorCarousel />
      <FeaturedSection />
      <ContactBanner />
      {/* <ImageSlider /> */}
    </div>
  );
}

