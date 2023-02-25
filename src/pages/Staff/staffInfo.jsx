import React from "react";
import { StaffConntent } from "./StaffContent";


export const StaffInfo = (props) => {
    return(
         
        <div className="pt-[12px]  w-[254px]  pr-[12px] pb-[20px] pl-[12px] gap-[16px] bg-[#ffffff]b rounded-[12px] shadow-2xl flex flex-col items-start  ">
        <img src={props.staffPic} alt="" className="rounded  " />
        <div>
       <h1 className="font-[700] text-[#1E1307]  text-[24px]  ">{props.staffName}</h1>
       <p className="font-[400] text-[#8E8E8E]  text-[24px] ">{props.staffPost} </p>
        </div>
       </div>
    )
}