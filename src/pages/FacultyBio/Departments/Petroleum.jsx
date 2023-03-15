import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import ABEpresident from "../../../assets/ABEpresident.jpeg";

const Petroleum = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className=" overflow-x-hidden">
      <div className=" text-center py-[30px] z-10 bg-cover  bg-[url('/src/assets/heroimage.svg')] fixed left-0 right-0 top-0">
        <h1 className="md:text-[48px] text-white uppercase relative font-[700] ">
          Petroleum
        </h1>
      </div>

      <div className="flex flex-row my-[30px] align-center justify-center mt-[100px] md:mt-[150px]   gap-[10px] ">
        <Link
          to="/"
          href=""
          className="text-[16px] font-[500] leading-[19.36px] "
        >
          Home
        </Link>
        <span className="text-[16px] font-[500] leading-[19.36px] ">
          {" "}
          <IoIosArrowForward />{" "}
        </span>
        <Link
          to="/facultybio"
          className="text-[16px] font-[500] leading-[19.36px] "
        >
          Faculty bio
        </Link>
        <span className="text-[16px] font-[500] leading-[19.36px] ">
          {" "}
          <IoIosArrowForward />{" "}
        </span>
        <Link to="/petroleum" className="text-[16px] font-[500] leading-[19.36px] ">
         Petroleum
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row px-[30px] align-center justify-center xl:justify-around  gap-[40px]">
        <div className=" flex flex-col justify-around  xl:max-w-[701px] ">
          <div className="flex justify-center flex-col align-start gap-[16px] ">
            <div className="flex items-center justify-between gap-[8rem] ">
              <div>
                <h1 className="lg:text-[20px]  text-[14px] font-[700] leading-[29.05px] uppercase">
                  History
                </h1>
              </div>

              <div className=" xl:hidden relative mt-8  block">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Departments
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      className="origin-top-right absolute text-[14px] -right-10  mt-2 w-[18rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/abe"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Agric and Bio-Resources Engineering
                        </Link>
                        <Link
                          to="/chemical"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Chemical Engineering
                        </Link>
                        <Link
                          to="/civil"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Civil Engineering
                        </Link>
                        <Link
                          to="/ece"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Electronics & Computer Engineering
                        </Link>
                        <Link
                          to="/ee"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Electrical Engineering
                        </Link>
                        <Link
                          to="/ipe"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Industrial and Production Engineering
                        </Link>
                        <Link
                          to="/mce"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Mechanical Engineering
                        </Link>
                        <Link
                          to="/mme"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Meterlurgical and Material Engineering
                        </Link>
                        <Link
                          to="/petroleum"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Petroleum Engineering
                        </Link>
                        <Link
                          to="/pte"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Polymer and Textile Engineering
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="leading-[24px] font-[400] flex flex-col gap-[20px] text-[14px] lg:text-[16px] ">
                <span>
                  Nnamdi Azikiwe University has a strong Faculty of
                  Engineering, which started at the inception of the
                  University in 1992. The Faculty is being developed to
                  acquire the status of a leading Faculty of Engineering in
                  the country.
                </span>
                <span>
                  <h1 className="lg:text-[20px] text-[14px] font-[700] my-[10px] text-darkest ">
                    Philosophy of the Department
                  </h1>
                  To achieve the goals and objectives of the National Policy
                  on Industrialization and self reliance, the Faculty of
                  Engineering and Technology is geared toward a. The
                  development of indigenous manpower through practice of
                  engineering and industrial training b. The development of a
                  broader-based practical application of Engineering,
                  Technology and Manufacturing processes c. New frontiers in
                  Engineering education, research and development The
                  Faculty’s general goals are the production of graduates of
                  high academic quality and adequate practical background for
                  self employment and global industrialization.
                </span>
                <span>
                  <h1 className="lg:text-[20px] text-[14px] font-[700] my-[10px] text-darkest ">
                    About the President
                  </h1>
                  To achieve the goals and objectives of the National Policy
                  on Industrialization and self reliance, the Faculty of
                  Engineering and Technology is geared toward a. The
                  development of indigenous manpower through practice of
                  engineering and industrial training b. The development of a
                  broader-based practical application of Engineering,
                  Technology and Manufacturing processes c. New frontiers in
                  Engineering education, research and development The
                  Faculty’s general goals are the production of graduates of
                  high academic quality and adequate practical background for
                  self employment and global industrialization.
                </span>
              {/* <img src={ABEpresident} className="mt-4 w-[320px]" alt="" /> */}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:flex flex-col justify-center hidden  w-[341px] align-start p-0 gap-[16px]   ">
          <h1 className="text-[24px] font-[700]  uppercase leading-[29.05px] text-[#000000] ">
            Departments
          </h1>
          <div>
            <Link to="/abe">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Agric and Bio Resources Engineering
              </p>
            </Link>
            <hr />
            <Link to="/chemical">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Chemical Engineering
              </p>
            </Link>
            <hr />
            <Link to="/civil">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Civil Engineering
              </p>
            </Link>
            <hr />
            <Link to="/ee">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Electrical Engineering
              </p>
            </Link>
            <hr />
            <Link to="/ece">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Electronics and Computer Engineering
              </p>
            </Link>
            <hr />
            <Link to="/ipe">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Industrial and Production Engineering
              </p>
            </Link>
            <hr />
            <Link to="/mce">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Mechanical Engineering
              </p>
            </Link>
            <hr />
            <Link to="/mme">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Metallurgical and Material Engineering
              </p>
            </Link>
            <hr />
            <Link to="/petroleum">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Petroleum Engineering
              </p>
            </Link>
            <hr />
            <Link to="/pte">
              <p className="border-[#E5E3DF] p-[10px]  text-[16px] ">
                Polymer and Textile Engineering
              </p>
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Petroleum