import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Achievementimag from '../../assets/Achievementimage.svg'

import Navmobile from "../../Homepage/Header/Navmobile";
import Footer from "../../Homepage/Footer/Footer";

import { articles } from "../../data";
import Navbar2 from "../../Homepage/Header/Navbar2";

const Achievements = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
    <Navbar2/>
      <div className="text-center">
        <div className="text-center md:py-[80px] md:mt-[6.3rem] mt-[4rem] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="md:text-[48px] md:-mt-8 hidden md:block text-[24px] text-white uppercase  font-[700] ">
            ACHIEVEMENTS
          </h1>
        </div>

        <div className="flex flex-row my-[30px] items-center align-center justify-center md:mt-[30px] mt-[20px]   gap-[4px] ">
          <Link
            to="/"
            href=""
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            Home
          </Link>
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/achievement"
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            Achievements
          </Link>
        </div>

        <div className="flex flex-row my-[30px] items-center align-center justify-center">
          <div className="flex flex-row rounded-[8px] items-center border md:w-[352px] w-[320px]   px-[16px] py-[12px] gap-[10px] justify-between ">
            <input
              type="search"
              placeholder="Search.."
              name=""
              id=""
              className="focus:outline-none"
            />
            <BiSearchAlt2 size={24} />
          </div>
        </div>

        <div className="mt-6 md:flex hidden md:flex-row  my-[30px] align-center justify-center  gap-[10px] ">
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            ABE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            Chemical
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            Civil
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            EE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            ECE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            IPE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            MME
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            Mechanical
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            PTE
          </button>
        </div>

        {/* // mobile view */}

        <div className="flex md:hidden gap-2 text-[14px] px-4 justify-center md:flex-row">
          <button className="text-white bg-primary px-3 py-2 font-semibold rounded-[8px]">
            ABE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-3 py-2 font-semibold rounded-[8px]">
            Chemical
          </button>
          <button className="text-primary bg-[#FFEFE6] px-3 py-2 font-semibold rounded-[8px]">
            Civil
          </button>
          <button className="text-primary bg-[#FFEFE6] px-3 py-2 font-semibold rounded-[8px]">
            ECE
          </button>
          <button className="text-primary bg-[#FFEFE6] px-3 py-2 font-semibold rounded-[8px]">
            IPE
          </button>
        </div>
        <div className="flex md:hidden text-[14px] gap-2 px-4 mt-2 justify-center md:flex-row">
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            Electrical
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            MME
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            Mechanical
          </button>
          <button className="text-primary bg-[#FFEFE6] px-2 py-2 font-semibold rounded-[8px]">
            PTE
          </button>
        </div>

        {/* // desktop view */}

        <div className="gap-[1rem]  md:px-[4rem] px-[1rem]  xl:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 my-[30px] items-center align-center justify-center">
          {articles.map((article, index) => {
            return (
              <div key={index} className="bg-white shadow-2xl mt-4 md:mt-0 rounded-[12px] md:h-[427px] w-[316px] md:w-[367px]">
                <div className="px-2 py-2">
                  <img src={Achievementimag}  alt="" className="rounded-md" />
                  <div className="text-start px-2 mt-2">
                    <h1 className="font-[700] mb-3 text-[14px] md:text-[20px]">
                      {article.heading}
                    </h1>
                    <p className="w-[95%] md:text-[16px] text-[12px]">
                      {article.paragraph}
                    </p>
                    <Link to={`/achievement/${article._id}`}>
                      <button className="px-3 py-2 mt-2 mb-2 rounded-md text-primary md:text-[16px] text-[14px] font-[600] border border-solid">
                        {article.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Achievements;
