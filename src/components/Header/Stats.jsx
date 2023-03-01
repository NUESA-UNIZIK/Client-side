import React from "react";
import Book from "../../assets/book 1.svg";
import Newspaper from "../../assets/newspaper.svg";
import Achievement from "../../assets/achievement.svg";

const Stats = () => {
  return (
    <div className="lg:ml-[3.5rem]  md:mt-[8rem] lg:container lg:max-w-[90%] mx-auto p-12 lg:mt-[6.5rem] rounded-[20px]">
      <div className="hidden md:flex gap-[28px]">
        <div className="bg-courses text-black  text-center px-2 bg-no-repeat bg-top rounded-md shadow-2xl min-h-[357px] w-[356px] bg-white">
          <img
            src={Book}
            alt=""
            className="w-[100px] my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-12">
            <h1 className="font-[700] text-[24px] mb-4">COURSES</h1>
            <p className="text-[16px]">
              Possimus blanditiis incidunt. Quia maxime voluptas. Enim
              perspiciatis voluptates natus officiis ipsam et facilis.
            </p>
          </div>
        </div>

        <div className="bg-courses text-black text-center px-2 bg-no-repeat bg-top rounded-md shadow-2xl min-h-[357px] w-[356px] bg-white">
          <img
            src={Newspaper}
            alt=""
            className="w-[100px] my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-12">
            <h1 className="font-[700] text-[24px] mb-4">NEWS/EVENTS</h1>
            <p className="text-[16px]">
              Possimus blanditiis incidunt. Quia maxime voluptas. Enim
              perspiciatis voluptates natus officiis ipsam et facilis.
            </p>
          </div>
        </div>

        <div className="bg-courses text-black text-center px-2 bg-no-repeat bg-top rounded-md shadow-2xl min-h-[357px] w-[356px] bg-white">
          <img
            src={Achievement}
            alt=""
            className="w-[100px] my-[4rem] xl:mx-[7rem] md:mx-[4rem] h-[100px]"
          />
          <div className="-mt-12">
            <h1 className="font-[700] text-[24px] mb-4">ACHIEVEMENTS</h1>
            <p className="text-[16px]">
              Possimus blanditiis incidunt. Quia maxime voluptas. Enim
              perspiciatis voluptates natus officiis ipsam et facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
