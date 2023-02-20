import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Navmobile from "./Navmobile";
import Nuesalogo from '../../assets/nuesalogo.svg'


const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

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
      <div className="xl:container container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src={Nuesalogo} alt="" className="w-[48px] md:w-[62px] lg:hidden" />
          </div>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="lg:hidden md:text-5xl text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <HiOutlineMenuAlt1 />}
          </div>
            <div
              className={`${
                mobileNav ? "left-0" : "-left-full"
              } lg:hidden fixed bottom-0 w-[80%] max-w-xs h-screen transition-all`}
            >
              <Navmobile />
            </div>
        </div>
        <nav className="hidden lg:flex">
            <ul className="md:flex text-white container justify-center md:gap-[22px]">
              <Link
                to="/courses"
                className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
              >
                COURSES
              </Link>
              <Link
                to="/facultybio"
                className="bg-secondary/[44%] font-semibold md:px-4 xl:px-4 py-2 rounded-md md:text-[13px] xl:text-[16px]"
              >
                FACULTY BIO
              </Link>
              <Link
                to="/newsevent"
                className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]"
              >
                NEWS/EVENTS
              </Link>
              <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">
                ADMISSION
              </li>
              <li className="bg-secondary/[44%] font-semibold px-4 py-2 rounded-md text-[16px]">
                ACHIEVEMENTS
              </li>
              <li className="bg-primary px-6 py-2 font-semibold rounded-md text-[16px]">
                LOGIN/SIGNUP
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;
