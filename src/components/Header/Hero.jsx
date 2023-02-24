import React from "react";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="md:h-[934px] h-[321px] w-full bg-pattern bg-right bg-cover bg-no-repeat text-white md:pt-[225px] pt-[150px] pb-[254px] relative mb-12 md:bg-center md:mb-28">
      <div className="xl:container mx-auto  text-center">
        <div className="md:leading-[100px]  leading-10  mb-3">
          <h2 className="font-[700] text-hero md:text-[38px] text-[18px]">Welcome to UNIZIK’s</h2>
          <h1 className="font-[700] text-[#FFC78C] md:text-[86px] text-[36px]">FACULTY OF</h1>
          <h1 className="font-[700] text-primary md:text-[118px] text-[46px]">ENGINEERING</h1>
        </div>
        <p className="text-[16px] hidden md:block md:max-w-[627px] mx-auto">
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
