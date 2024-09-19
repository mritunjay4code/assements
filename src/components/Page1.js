import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function Page1() {
  return (
    <div className=" bg-[#1DBF73] flex items-center justify-center ">
      <div className="  w-[1150px] h-[705px] mt-[67px]  shadow-lg flex  mb-5   bg-green-100">
        <div className="h-[705px]  w-[680px]  shadow-xl text-white flex flex-col items-center">
          <div className="text-center items-center">
            <h2 className="text-[16px] font-Poppins mt-[62px] mb-2 text-black font-semibold ">
              Your Test Will Be Live In
            </h2>
            <div className="bg-[#1F1F1F] h-[134.66px] w-[300.33px] rounded-lg  border-[0.8px] p-[33.83px] gap-[33.83px]">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className=" h-[67px] w-[45px] text-white ">
                  <h2 className="text-[40px] font-Poppins">1</h2>
                  <p className="font-Poppins">Hours</p>
                </div>
                <div className=" text-white h-[67px] w-[59px]">
                  {" "}
                  <h2 className="text-[40px] font-Poppins">59</h2>
                  <p className="font-Poppins">Minutes</p>
                </div>
                <div class=" text-white h-[67px] w-[61px]">
                  {" "}
                  <h2 className="font-Poppins text-[40px]">59</h2>
                  <p className="font-Poppins">Seconds</p>
                </div>
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center py-5">
              <img
                className="h-[73.16px] w-[189px] mt-28 "
                src="/image/log.png"
              />
            </div>
          </div>
          <div className="text-center mb-[76px] flex flex-col justify-center items-center">
            <p className=" text-[#3C3C3C] font-Poppinspins w-[365px] h-[43px] text-[24px] font-semibold ">
              Contact Us For Support
            </p>
            <div className="flex items-center space-x-4 text-[18px] ">
              <CgMail className="text-[#3C3C3C] font-semibold font-Poppins h-8 w-14" />
              <p className="ml-24 text-[#3C3C3C] font-semibold font-Poppins">
                support@hopingminds.com
              </p>
            </div>
            <div className="flex items-center space-x-4 text-[18px] ">
              <FaPhoneAlt className="text-[#3C3C3C] font-semibold font-Poppins h-7 w-5" />
              <p className="ml-24 text-[#3C3C3C] font-semibold font-Poppins">
                +91 7447732467, 356263553
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-l-xl w-full pl-10 py-6  bg-white  boe">
          <div className="">
            <h2 className="mt-[50px] w-115 text-[24px] font-semibold text-black font-Poppins pb-2">
              Welcome
            </h2>
            <p className=" w-[528px]  text-[36px] font-bold font-Poppins">
              It's Time To Complete Your
            </p>
            <p className="text-4xl font-bold  h-10 text-[#1DBF73] font-Poppins">
              {" "}
              Designing Assessment!
            </p>
          </div>

          <div class="relative w-[561px]  mt-12">
            <input
              class="peer transition-all px-5 py-3 w-full text-lg bg-[#f9f9f9] text-gray-600  rounded-md border bo outline-none shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)] "
              type="text"
              placeholder=" "
            />

            <label class="z-2 text-gray-500 pointer-events-none absolute left-5 top-0 h-fit flex items-center select-none transition-all text-sm px-1 bg-white -translate-y-1/2">
              Name
            </label>
          </div>
          <div class="relative w-[561px]  mt-5">
            <input
              class="peer transition-all px-5 py-3 w-full text-lg bg-[#f9f9f9] text-gray-600  rounded-md border bo outline-none shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
              type="text"
              placeholder=" "
            />

            <label class="z-2 text-gray-500 pointer-events-none absolute left-5 top-0 h-fit flex items-center select-none transition-all text-sm px-1 bg-white -translate-y-1/2">
              Phone Number
            </label>
          </div>
          <div class="relative w-[561px]  mt-5">
            <input
              class="peer transition-all px-5 py-3 w-full text-lg bg-[#f9f9f9] text-gray-600  rounded-md border bo outline-none shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
              type="text"
              placeholder=" "
            />

            <label class="z-2 text-gray-500 pointer-events-none absolute left-5 top-0 h-fit flex items-center select-none transition-all text-sm px-1 bg-white -translate-y-1/2">
              College name
            </label>
          </div>
          <div class="relative w-[680px] flex mt-5">
            <input
              class="peer transition-all px-5 py-3 w-full text-lg bg-[#f9f9f9] text-gray-600  rounded-md border bo outline-none shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
              type="text"
              placeholder=" "
            />

            <label class="z-2 text-gray-500 pointer-events-none absolute left-5 top-0 h-fit flex items-center select-none transition-all text-sm px-1 bg-white -translate-y-1/2">
              Email
            </label>
            <button
              type="submit"
              className="w-36 gap-4 bg-[#1DBF73] text-white py-2 rounded-lg font-semibold ml-2 shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
            >
              Verify
            </button>
          </div>

          <button
            type="submit"
            className="w-[561px] bg-[#1DBF73] text-white py-2 rounded-lg font-semibold h-16 mt-4 shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
          >
            Continue To Test →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
