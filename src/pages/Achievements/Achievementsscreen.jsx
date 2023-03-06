import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import Navmobile from "../../components/Header/Navmobile";
import Achievementimag from '../../assets/Achievementimage.svg'


import { useParams } from "react-router-dom";
import { achievements } from "../../data";

const Achievementsscreen = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { id } = useParams();
  const article = achievements.find((p) => p._id === id);


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
          <span className="text-[16px] font-[500] leading-[19.36px] ">
            {" "}
            <IoIosArrowForward />{" "}
          </span>
          <Link
            to="/achievement/:id"
            className="md:text-[16px] text-[12px] font-[500] leading-[19.36px] "
          >
            AchievementScreen
          </Link>
        </div>

          <h1 className="font-bold text-[16px] md:text-[25px]">{article.heading}</h1>
        <div className="md:px-[12rem] md:text-[16px] text-[14px] px-[2rem] md:mt-4 text-start">
          <div className="mb-4">
            <p className="md:mt-6 mt-3">{article.paragraph1}</p>
            <p className="mt-6">{article.paragraph2}</p>
            <p className="mt-6">{article.paragraph3}</p>
          </div>

          <div>
            <img src={Achievementimag} alt="" />
          </div>

          <div className="mb-4">
            <p className="mt-6">{article.paragraph4}</p>
            <p className="mt-6">{article.paragraph5}</p>
            <p className="mt-6">{article.paragraph6}</p>
          </div>

          <div>
            <img src={Achievementimag} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievementsscreen;
