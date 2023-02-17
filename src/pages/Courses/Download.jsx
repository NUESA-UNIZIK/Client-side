import React from "react";
import Handouts from '../../assets/thermo.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";


export const Download = () => {
    return (
        <>
      <div className=" overflow-x-hidden">
 <div className=" text-center py-[30px] bg-cover z-[10] fixed top-0 left-0 right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
 <h1 className="text-[48px] text-white uppercase relative  font-[700] ">Courses</h1>
 </div>
            
 <div className="">
 <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
    <Link to='/' className="text-[16px] font-[500] leading-[19.36px] ">Home</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/courses' className="text-[16px] font-[500] leading-[19.36px] ">Courses</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/yeartwo' className="text-[16px] font-[500] leading-[19.36px] ">Download materials</Link>
        </div>

        <div>
            <div className="flex flex-col items-between px-[20px]">
            <h1 className="font-[700] text-[24px] text-[#FA4F06]  ">200L ELECTRONICS & COMPUTER ENGINEERING</h1>
            </div>
           <div className="px-[20px] flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[20px] md:flex-row items-start md:items-end justify-between">
                 <ul className="">
                 <h2 className="font-[600] text-[20px] text-[#000000]">Polyphase Sysmtem</h2>
                    <li>Two phase and three phase systems.</li>
                    <li>Star and delta connected loads.</li>
                <li>Power in three phase systems. </li>
           <li>Two wattmeter method applied to balance loads.</li>
                </ul>
                <button className="text-[16px] font-[600] text-[#FA4F06] px-[12px] border rounded-[8px] py-[8px] ">Upload Handouts</button>
                </div>
           
                <div className="flex gap-[10px] flex-col md:flex-row justify-between ">
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                  <div className="flex flex-col  items-center gap-[20px] ">
                    <div className="relative rounded-[8px] p-0">
                       <img className="w-[269px] rounded-[8px] h-[271px]  " src={Handouts} alt="" />
                        <p className="absolute font-semibold text-center py-[15px] text-[white] backdrop bg-[black] opacity-[80%] z-index-3 bottom-0 w-[100%] ">Polyohase.pdf</p>
                    </div>
                    <a href="http://" className="text-center w-[269px] bg-primary p-[10px] text-secondary rounded-[8px] ">Download (4MB)</a>
                  </div>
                 
                </div>
           </div>
        </div>
        </div>
        </div>
        </>
    )
}