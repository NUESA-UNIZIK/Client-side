import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header 
    className={`${
      // if bg is true
      bg
        ? "bg-black py-4 lg:py-6"
        : // if bg is false
          "bg-none"
    }
    fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <nav className="hidden md:flex">
          <ul className="md:flex text-white container justify-center md:gap-[22px]">
            <Link to='/courses' className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">COURSES</Link>
            <Link to='/facultybio' className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">FACULTY BIO</Link>
            <Link to='/newsevent' className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">NEWS/EVENTS</Link>
            <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">ADMISSION</li>
            <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">ACHIEVEMENTS</li>
            <li className="bg-primary px-6 py-2 font-semibold rounded-md text-[16px]">LOGIN/SIGNUP</li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
