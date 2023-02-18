import React from "react";
import Projectimage from '../../assets/projectimage.svg'


const Project = () => {
  return (
    <div className="mt-[5rem]">
      <div className="lg:mx-[6rem]">
        <div className="flex justify-between ">
          <div>
            <h1 className="font-bold text-[24px] mb-1">PROJECTS</h1>
            <hr className="w-[35%] border-2 border-primary" />
          </div>

          <div>
          <button className="text-primary border-[1.5px] px-4 py-1 rounded-md font-bold border-buttonborder border-solid">View more</button>
          </div>
        </div>

        <div className="flex mt-8 gap-6">
          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">Biofuel from human waste</p>
          </div>

          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">Robot metal detector</p>
          </div>
          
          <div>
            <img src={Projectimage} alt="" />
            <p className="text-[18px] mt-3 font-normal">Radiator cooling solution</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Project;
