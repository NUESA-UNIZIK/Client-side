import React from "react";
import Newsimage from "../../assets/newsimage.svg";

const News = () => {
  return (
    <div className="bg-[#939090]/[5%] mt-[5rem] h-[965px]">
      <div className="lg:mx-[6rem]">
        <div className="mt-9 flex gap-8">
          <div className="mt-6">
            <h1 className="font-bold text-[24px] mb-1">NEWS</h1>
            <hr className="w-[5%] border-2 border-primary" />

            <div className="rounded-[12px] bg-white shadow-xl w-[730px] mt-8 h-[230px] px-2 py-2 flex gap-6">
              <div>
                <img src={Newsimage} alt="" className="rounded-md w-[520px]" />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="text-[24px] w-[90%] mt-4 font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="w-[98%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end font-semibold px-3 text-readmore text-end">Read more</span>
              </div>
            </div>

            <div className="rounded-[12px] bg-white shadow-xl w-[728px] mt-8 h-[230px] px-2 py-2 flex gap-6">
              <div>
                <img src={Newsimage} alt="" className="rounded-md w-[520px]" />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="text-[24px] mt-4 w-[90%] font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="w-[98%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end font-semibold px-3 text-readmore text-end">Read more</span>
              </div>
            </div>

            <div className="rounded-[12px] shadow-xl bg-white w-[728px] mt-8 h-[230px] px-2 py-2 flex gap-6">
              <div>
                <img src={Newsimage} alt="" className="rounded-md w-[520px]" />
              </div>

              <div className="flex justify-between items-stretch basis-[100%] flex-col">
                <span className="text-[24px] mt-4 w-[90%] font-bold">
                  NUESA Inter-Departmental Football Cup kicks off
                </span>
                <span className="text-[#888888] font-bold text-[14px]">
                  Nov 7, 2022
                </span>
                <span className="w-[98%]">
                  Omnis maiores velit culpa sed corporis cum exercitationem sit
                  eum. Ea veritatis et nihil corporis nobis rem ratione quia
                  nemo.
                </span>
                <span className="items-end font-semibold px-3 text-readmore text-end">Read more</span>
              </div>
            </div>
            <button className="bg-primary mt-[1.1rem] text-white py-4 rounded-[12px] text-[18px] font-semibold w-[100%]">More news</button>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-[24px] mb-1">UPCOMING EVENTS</h1>
            <hr className="w-[14%] border-2 border-primary mb-8" />

            <div className="bg-white shadow-xl rounded-[12px] h-[367px] w-[328px]">
              <div className="px-2 py-2">
                <img src={Newsimage} alt="" className="rounded-md" />
                <div className="flex flex-col px-5 mt-6">
                  <span className="font-bold mb-2">LECTURERS CONFERENCE</span>
                  <span className="text-[#888888] mb-4 font-semibold">Nov 7, 2022, 3:00PM WAT</span>
                  <span className="text-readmore text-end font-semibold">More details</span>
                </div>
              </div>
            </div>

            
            <div className="bg-white shadow-xl rounded-[12px] mt-6 h-[367px] w-[328px]">
              <div className="px-2 py-2">
                <img src={Newsimage} alt="" className="rounded-md" />
                <div className="flex flex-col px-5 mt-6">
                  <span className="font-bold mb-2">LECTURERS CONFERENCE</span>
                  <span className="text-[#888888] mb-4 font-semibold">Nov 7, 2022, 3:00PM WAT</span>
                  <span className="text-readmore text-end font-semibold">More details</span>
                </div>
              </div>
            </div>
            <button className="mt-3 py-4 border text-primary rounded-[12px] font-semibold text-[18px] border-solid border-primary px-10">View more upcoming events</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
