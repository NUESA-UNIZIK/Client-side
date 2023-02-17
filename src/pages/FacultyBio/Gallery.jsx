import React from "react";
import img from '../../assets/newsimage.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";


export const Gallery = () => {
    return (
        <>
        <div className=" overflow-x-hidden">
 <div className=" text-center py-[30px] bg-cover fixed top-0 left-0 right-0  bg-[url('/src/assets/heroimage.svg')]">
 <h1 className="text-[48px] text-white uppercase relative  font-[700] ">Faculty Bio</h1>
 </div>

 <div className="flex flex-row my-[30px] mt-[150px] align-center justify-center   gap-[10px] ">
    <Link to='/' href="" className="text-[16px] font-[500] leading-[19.36px] ">Home</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/facultybio' className="text-[16px] font-[500] leading-[19.36px] ">Faculty bio</Link>
    <span className="text-[16px] font-[500] leading-[19.36px] " > <IoIosArrowForward /> </span>
    <Link to='/gallery' className="text-[16px] font-[500] leading-[19.36px] ">Gallery</Link>
 
 </div>
 </div>
 <div className=" px-[20px] py-[30px]">
 <div className="flex gap-[50px]  flex-row justify-center items-center align-center">
<IoIosArrowBack />
        <img className="w-[311px] md:w-[600px] h-[421px] " src={img} alt="" srcset="" />
    <IoIosArrowForward className="font-bold"/>
 </div>
 <div className="flex  justify-center  items-center">
 <p className=" text-[16px] leading-[24px] text-center  font-[400] ">Est sit numquam qui nisi id non eius facere. Ipsa commodi accusantium quo tempora quibusdam. </p>
 </div>
 </div>
 
        </>
    )
}