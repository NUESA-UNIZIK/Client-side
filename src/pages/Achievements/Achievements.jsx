import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import Achievementimage from "../../assets/Achievementimage.svg";
import Navmobile from "../../components/Header/Navmobile";
import Footer from '../../components/Footer/Footer'

const Achievements = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className="text-center">
        <div className="text-center md:py-[80px] py-[20px] bg-cover  h-[85px]  bg-[url('/src/assets/circuitlines.jpg')] fixed left-0 right-0 top-0">
          <h1 className="md:text-[48px] -mt-8 hidden md:block text-[24px] text-white uppercase relative  font-[700] ">
            ACHIEVEMENTS
          </h1>
          <div className="flex px-6 items-center justify-between">
            <div className="lg:hidden">
              <h1 className="md:text-[48px] text-[24px] text-white uppercase relative  font-[700] ">
                ACHIEVEMENTS
              </h1>
            </div>
            <div
              onClick={() => setMobileNav(!mobileNav)}
              className="lg:hidden md:text-5xl text-2xl lg:text-3xl text-white cursor-pointer"
            >
              {mobileNav ? <CgClose /> : <HiOutlineMenuAlt1 />}
            </div>
          </div>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } lg:hidden fixed bottom-0 w-[80%] max-w-xs h-screen transition-all`}
          >
            <Navmobile />
          </div>
        </div>

        <div className="flex flex-row my-[30px] items-center align-center justify-center md:mt-[170px] mt-[100px]   gap-[4px] ">
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

        <div className="md:hidden gap-[1rem] hidden px-[4rem]  xl:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 my-[30px] items-center align-center justify-center">
          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl  rounded-[12px] h-[427px] w-[367px]">
            <div className="px-2 py-2">
              <img src={Achievementimage} alt="" className="rounded-md" />
              <div className="text-start px-2 mt-2">
                <h1 className="font-[700] mb-3 text-[20px]">
                  CONVERSION OF WASTE TO BIOFUEL
                </h1>
                <p className="w-[95%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis ...
                </p>
                <button className="px-3 py-2 mt-2 rounded-md text-primary font-[600] border border-solid">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* // mobile view */}
        <div>

        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Achievements;
