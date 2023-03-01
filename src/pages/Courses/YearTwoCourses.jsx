import React from "react";
import img from "../../assets/newsimage.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Download } from "./Download";
import { YeartwoDesktop } from "./YeartwoDesktop";
import { YeartwoMobile } from "./YearTwoMobile";
import { YeartwoMobileProps } from "./YeartwoMobileProps";

export const YearTwoCourse = () => {
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0  bg-[url('/src/assets/circuitlines.jpg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Courses
          </h1>
        </div>

        <div className="">
          <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
            <Link to="/" className="text-[16px] font-[500] leading-[19.36px] ">
              Home
            </Link>
            <span className="text-[16px] font-[500] leading-[19.36px] ">
              {" "}
              <IoIosArrowForward />{" "}
            </span>
            <Link
              to="/courses"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              Courses
            </Link>
            <span className="text-[16px] font-[500] leading-[19.36px] ">
              {" "}
              <IoIosArrowForward />{" "}
            </span>
            <Link
              to="/yeartwo"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              200l Courses{" "}
            </Link>
          </div>

          <h1 className="text-center text-[24px] font-[700] text-[#FA4F06] my-[20px] ">
            200L ELECTRONICS & COMPUTER ENGINEERING
          </h1>
        </div>
        
    <YeartwoMobileProps />
      </div>
    </>
  );
};


export default YearTwoCourse