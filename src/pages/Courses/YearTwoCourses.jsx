import React from "react";
import img from '../../assets/newsimage.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";
import { Download } from "./Download";


export const YearTwoCourse = () => {
    return (
        <>
        
        <div className=" overflow-x-hidden">
 <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0 left-0  bg-[url('/src/assets/heroimage.svg')]">
 <h1 className="text-[48px] text-white uppercase relative  font-[700] ">Courses</h1>
 </div>


 <div className="">
 <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
    <Link to='/' className="text-[16px] font-[500] leading-[19.36px] ">Home</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/courses' className="text-[16px] font-[500] leading-[19.36px] ">Courses</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/yeartwo'  className="text-[16px] font-[500] leading-[19.36px] ">200l Courses </Link>
 </div>
 
    
             <h1 className="text-center text-[24px] font-[700] text-[#FA4F06] my-[20px] ">200L ELECTRONICS & COMPUTER ENGINEERING</h1>
</div>
   <div className=" flex flex-col md:flex-row justify-center p-[30px] items-start gap-[30px] ">
<div className="gap-[17px] p-0 flex flex-col items-start ">
    <h3 className="font-[700] text-[20px]  ">Courses</h3>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div className="">
        <h1 className="font-[700]  text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div>
        <h1 className="font-[700] text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div>
        <h1 className="font-[700] text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div>
        <h1 className="font-[700] text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div>
        <h1 className="font-[700] text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>

    <div className="bg-[#FAF8F8] rounded-[8px] min-w-[300px] py-[12px] px-[16px] gap-[10px] flex flex-row items-center justify-between ">
        <div>
        <h1 className="font-[700] text-[#000000] text-[24px] ">FEG 201</h1>
     <p className="text-[#656565] text-[16px]">Applied Electricity</p>
        </div>
        <div className="flex flex-row justify-center gap-[10px]">
            <span>3CR</span>
            <IoIosArrowForward />
        </div>
    </div>
</div>


<div className="flex flex-col gap-[17px] relavive max-w-[600px] rounded-[16px] ">
    <div className="flex flex-row justify-between items-center">
    <h1 className="font-[700] text-[20px]  ">Topics</h1>
    <Link to='/download' className="text-primary px-[12px] py-[8px]  border font-[700] rounded-[8px]  ">Download Resources</Link>
    
    </div>
   <div className="bg-[#FAF8F8]  px-[37px] py-[25px]  ">
        <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>

    <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>

    <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>

    <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>

    <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>

    <div className="flex flex-col items-start gap-[10px] ">
    <h2 className="text-[20px] font-[500] text-[#000000] ">1. Polyphase systems</h2>
        <p className="font-[400] text-[16px] text-[#656565]  ">
        Two phase and three phase systems. Star and delta connected loads.
Power in three phase systems. Two wattmeter method applied to balance loads. 
        </p>
    </div>
    </div>
      
</div>
</div>
</div>
        </>
    )
}