import React from "react";
import Aboutimage from "../../assets/about.svg";

const About = () => {
  return (
    <div className="lg:mx-[6rem] mt-[16rem]">
      <div className="lg:flex lg:flex-row flex-col gap-2">
        <div className="w-[50%]">
          <h1 className="font-bold text-[24px] mb-1">ABOUT NUESA ENGINEERING</h1>
          <hr className="w-[8%] border-2 border-primary mb-8" />
          <p className="w-[95%] mb-8">
            Ea sit magni quas vel consequatur tempora fugit voluptatem. Aliquid
            praesentium non voluptate. Quisquam quia necessitatibus ratione quis
            itaque omnis quos.
          </p>
          <p className="w-[94%] mb-8">
            Optio sit expedita voluptatem quis. In aliquam incidunt. Laboriosam
            officia dolorem laboriosam quia. Voluptas aliquam dolor et est
            repellendus rerum aspernatur distinctio qui.
          </p>
          <p className="w-[94%] mb-5">
            Dolorem rem ut autem consequatur dolorem officia officiis architecto
            vel. Est adipisci eum fugit voluptatum delectus. Sed amet fuga eius
            dolore quia distinctio qui. Reprehenderit quaerat mollitia eligendi
            mollitia itaque voluptatem suscipit a sed. Inventore natus
            excepturi. Corrupti non quo.
          </p>
          <button className="text-primary border-[1.5px] px-4 py-1 rounded-md font-bold border-buttonborder border-solid">View more</button>
        </div>

        <div className="h-[400px]">
          <img src={Aboutimage} alt="" className="w-[509px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
