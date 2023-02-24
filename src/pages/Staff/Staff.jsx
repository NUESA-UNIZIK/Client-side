import React from "react";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export const Staff = () => {
  return (
    <>
      <div className=" overflow-x-hidden">
        <div className="text-center py-[30px] bg-cover z-[10] fixed top-0  right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
          <h1 className="text-[48px] text-white uppercase relative  font-[700] ">
            Staff
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
              to="/staff"
              className="text-[16px] font-[500] leading-[19.36px] "
            >
              Staff
            </Link>
          </div>

          <div className="flex flex-row rounded-[8px] border px-[16px] py-[12px] gap-[10px] justify-between ">
            <input type="search" placeholder="Search.." name="search" id="" />{" "}
            <IoMdSearch />
          </div>
          <div className="flex flex-cols justify-center items-center">
            <div className="flex flex-row items-center px-[12px] gap-[6px] justify-center py-[8px]  ">
              <h1 className="text-[16px] leading-[150%] font-[600] text-[#ffffff] bg-primary rounded-[8px] px-[12px] py-[8px]">
                FACULTY
              </h1>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                E E
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                ECE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                CVE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                MCE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                CHE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                MME
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                PTE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6]  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                IPE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                ABE
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary bg-[#FFEFE6] rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                PE
              </p>
            </div>
            <div className="flex flex-row items-center px-[12px] gap-[6px] justify-center py-[8px]  ">
              <h1 className="text-[16px] leading-[150%] font-[600] text-[#ffffff] bg-primary rounded-[8px] px-[12px] py-[8px]">
                Acedemic
              </h1>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                Technical
              </p>
              <p className="font-[600] text-[16px]  leading-[150%] text-primary  rounded-[8px] px-[12px] py-[8px] border-[#FFEFE5] ">
                Administrative
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
