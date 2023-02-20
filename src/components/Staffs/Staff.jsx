import React from "react";
import Staffimage from '../../assets/staffimage.svg'

const Staff = () => {
  return (
    <div className="w-full mt-[3rem]">
      <div className="xl:mx-[6rem] mx-6">
        <div className="flex justify-between">
          <div className="mt-4">
            <h1 className="font-bold md:text-[24px] mb-1">STAFF</h1>
            <hr className="w-[35%] border-2 border-primary" />
          </div>

          <div className="mt-4 hidden xl:inline">
            <button className="text-primary border-[1.5px] px-4 py-1 rounded-md md:text-[16px] text-[14px] font-bold border-buttonborder border-solid">
              View more
            </button>
          </div>
        </div>
        

        <div className="mx-auto grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:gap-0 gap-4">
          <div  className="bg-white md:w-[255px] shadow-2xl md:h-[315px] h-[187px] md:px-4 mt-4 rounded-[12px] py-2 px-2 md:py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold md:text-[24px]  md:mb-2 mt-4">John Okafor</h1>
            <p className="md:text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white md:w-[255px] shadow-2xl md:h-[315px] h-[187px] md:px-4 mt-4 rounded-[12px] py-2 px-2 md:py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold md:text-[24px] md:mb-2 mt-4">John Okafor</h1>
            <p className="md:text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white md:w-[255px] shadow-2xl md:h-[315px] h-[187px] md:px-4 mt-4 rounded-[12px] py-2 px-2 md:py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold md:text-[24px] md:mb-2 mt-4">John Okafor</h1>
            <p className="md:text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white md:w-[255px] shadow-2xl md:h-[315px] h-[187px] md:px-4 mt-4 rounded-[12px] py-2 px-2 md:py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold md:text-[24px] md:mb-2 mt-4">John Okafor</h1>
            <p className="md:text-[18px] text-[#8E8E8E]">Dean</p>
          </div>
        </div>

        <div className="xl:hidden text-center mt-6 mx-auto">
          <button className="text-primary border-[1.5px] md:px-4 md:py-1 py-2 px-3 md:text-[16px] text-[14px] md:rounded-md rounded-lg font-bold border-buttonborder border-solid">
            All staff
          </button>
        </div>
      </div>
    </div>
  );
};

export default Staff;
