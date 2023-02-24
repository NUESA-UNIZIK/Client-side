import React from "react";
import Projectimage from "../../assets/projectimage.svg";

const Project = () => {
  return (
    <div className="md:mt-[39rem] lg:mt-[32rem] xl:mt-[5rem]">
      <div className="xl:mx-[6rem] mx-6 md:hidden xl:block">
        <div className="flex justify-between ">
          <div>
            <h1 className="font-bold md:text-[24px] mb-1">PROJECTS</h1>
            <hr className="w-[35%] border-2 border-primary" />
          </div>

          <div className="md:hidden hidden xl:block">
            <button className="text-primary border-[1.5px] px-4 py-1 rounded-md font-bold border-buttonborder border-solid">
              View more
            </button>
          </div>
        </div>

        <div className="xl:flex md:flex-col xl:flex-row mx-auto mt-8 gap-6">
          <div>
            <img src={Projectimage} alt="" />
            <p className="md:text-[18px] text-[14px]  md:mt-3 mt-2 mb-3 font-normal">
              Biofuel from human waste
            </p>
          </div>

          <div>
            <img src={Projectimage} alt="" />
            <p className="md:text-[18px] text-[14px]   md:mt-3 mt-2 mb-3  font-normal">
              Robot metal detector
            </p>
          </div>

          <div>
            <img src={Projectimage} alt="" />
            <p className="md:text-[18px] text-[14px] md:mt-3 mt-2 mb-3  font-normal">
              Radiator cooling solution
            </p>
          </div>
        </div>
      </div>
      <div className="xl:hidden md:hidden text-center mt-2 mx-auto">
        <button className="text-primary border-[1.5px] md:px-4 md:py-1 py-2 px-3 md:text-[16px] text-[14px] md:rounded-md rounded-lg font-bold border-buttonborder border-solid">
          View more
        </button>
      </div>

      {/* // tablet design */}

      <div className="hidden xl:hidden md:inline">
        <div className="flex  mx-4 justify-between ">
          <div>
            <h1 className="font-bold text-[24px] mb-1">PROJECTS</h1>
            <hr className="w-[35%] border-2 border-primary" />
          </div>

          <div className="">
            <button className="text-primary border-[1.5px] px-4 py-1 rounded-md font-bold border-buttonborder border-solid">
              View more
            </button>
          </div>
        </div>

        <div className="flex  mx-4 flex-row mt-8 gap-6">
          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">
              Biofuel from human waste
            </p>
          </div>

          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">Robot metal detector</p>
          </div>

          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">
              Radiator cooling solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
