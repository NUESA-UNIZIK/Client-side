import React from "react";

const News = () => {
  return (
    <div className="bg-[#F5F2ED] mt-[5rem] h-[965px]">
      <div className="lg:mx-[6rem]">
        <div className="mt-9 flex gap-[39rem]">
          <div>
            <h1 className="font-bold text-[24px] mb-1">NEWS</h1>
            <hr className="w-[56%] border-2 border-primary mb-8" />
          </div>

          <div>
            <h1 className="font-bold text-[24px] mb-1">UPCOMING EVENTS</h1>
            <hr className="w-[19%] border-2 border-primary mb-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
