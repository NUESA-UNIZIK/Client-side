import React from "react";
import Staffimage from '../../assets/staffimage.svg'

const Staff = () => {
  return (
    <div className="bg-[#939090]/[5%] mt-[5rem]">
      <div className="lg:mx-[6rem]">
        <div className="flex justify-between">
          <div className="mt-4">
            <h1 className="font-bold text-[24px] mb-1">STAFF</h1>
            <hr className="w-[35%] border-2 border-primary" />
          </div>

          <div className="mt-4">
            <button className="text-primary border-[1.5px] px-4 py-1 rounded-md font-bold border-buttonborder border-solid">
              View more
            </button>
          </div>
        </div>
        

        <div className="flex gap-4">
          <div  className="bg-white w-[255px] shadow-2xl h-[315px] px-4 mt-4 rounded-[12px] py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold text-[24px] mb-2 mt-4">John Okafor</h1>
            <p className="text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white w-[255px] shadow-2xl h-[315px] px-4 mt-4 rounded-[12px] py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold text-[24px] mb-2 mt-4">John Okafor</h1>
            <p className="text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white w-[255px] shadow-2xl h-[315px] px-4 mt-4 rounded-[12px] py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold text-[24px] mb-2 mt-4">John Okafor</h1>
            <p className="text-[18px] text-[#8E8E8E]">Dean</p>
          </div>

          <div  className="bg-white w-[255px] shadow-2xl h-[315px] px-4 mt-4 rounded-[12px] py-4">
            <img src={Staffimage} className="rounded-md" alt="" />
            <h1 className="font-bold text-[24px] mb-2 mt-4">John Okafor</h1>
            <p className="text-[18px] text-[#8E8E8E]">Dean</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
