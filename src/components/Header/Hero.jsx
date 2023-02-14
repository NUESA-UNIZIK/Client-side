import React from "react";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="h-[934px] w-full bg-pattern bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">
      <div className="container mx-auto  text-center">
        <div className="leading-[100px] mb-3">
          <h2 className="font-[700] text-hero text-[38px]">Welcome to UNIZIK’s</h2>
          <h1 className="font-[700] text-[#FFC78C] text-[86px]">FACULTY OF</h1>
          <h1 className="font-[700] text-primary text-[118px]">ENGINEERING</h1>
        </div>
        <p className="text-[16px] max-w-[627px] mx-auto">
          Sunt labore est unde molestiae. Molestiae blanditiis modi ullam minima
          vel rerum et. Molestiae ut ut accusamus quia.
        </p>
      </div>
      <div>
        <Stats/>
      </div>
    </section>
  );
};

export default Hero;
