import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useState } from "react";
function Page2() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className=" bg-[#1DBF73] flex items-center justify-center ">
      <div className="  w-[98vw] h-[100vh]   shadow-lg flex  mb-5 mt-8 bg-green-100">
        <div className="h-[100vh]  w-[40vw]  shadow-xl text-white flex flex-col items-center">
          <div className="text-center items-center">
            <div className=" "></div>
            <div className="mt-40 flex flex-col justify-center items-center py-5">
              <img className="  mt-28 " src="/image/log.png" />
            </div>
          </div>
          <div className="text-center mb-[76px] flex flex-col justify-center items-center ">
            <p className=" text-[#3C3C3C] font-Poppinspins w-[365px] h-[6vh] text-[24px] font-semibold ">
              Contact Us For Support
            </p>
            <div className="flex items-center space-x-4 text-[3vh] ">
              <CgMail className="text-[#3C3C3C] font-semibold font-Poppins h-8 w-14" />
              <p className=" text-[#3C3C3C] font-semibold font-Poppins">
                support@hopingminds.com
              </p>
            </div>
            <div className="flex items-center space-x-4 text-[3vh] ">
              <FaPhoneAlt className="text-[#3C3C3C] font-semibold font-Poppins h-7 w-5" />
              <p className=" text-[#3C3C3C] font-semibold font-Poppins">
                +91 7447732467, 356263553
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-l-xl w-full pl-10 py-6    bg-white  boe ">
          <div className="">
            <p className=" w-[60vw] mt-10 text-[36px] font-bold font-Poppins">
              Here Are Few Instructions
            </p>
            <p className="text-4xl font-bold  h-10  font-Poppins">
              {" "}
              Before Doing The Test -
            </p>
          </div>
          <div class="max-w-2xl  overflow-y-auto bg-white mt-10 h-80 text-justify w-[70%]">
            <h1 class="text-2xl font-semibold mb-6">
              Here are the online test instructions for an AI-proctored PAP (Pay
              After Placement) Test: with additional alerts for specific
              behaviour
            </h1>

            <h2 class="text-xl font-bold text-green-600 mb-4">
              Getting Ready:
            </h2>
            <ul class="list-disc list-inside text-lg space-y-2">
              <li>
                Ensure you have a working webcam and microphone connected to
                your computer.
              </li>
              <li>
                Find a quiet, well-lit room with a clean desk/table to take the
                test.
              </li>
              <li>
                Close all other programs and browsers before starting the test.
              </li>
            </ul>

            <h2 class="text-xl font-bold text-green-600 mt-8 mb-4">
              Launching the Test:
            </h2>
            <ol class="list-decimal list-inside text-lg space-y-2">
              <li>Log into the test portal using the provided credentials.</li>
              <li>
                Follow the instructions to launch the AI proctoring software.
              </li>
            </ol>

            <h2 class="text-xl font-bold text-green-600 mt-8 mb-4">
              During the Test:
            </h2>
            <ol class="list-decimal list-inside text-lg space-y-2">
              <li>
                The AI proctor will continuously monitor you via webcam and
                microphone.
              </li>
              <li>
                Do not leave the testing area or have unauthorized
                materials/devices nearby.
              </li>
              <li>The AI will flag any suspicious behaviour for review</li>
            </ol>

            <h2 class="text-xl font-bold text-green-600 mb-4">Alerts:</h2>
            <ol class="list-decimal list-inside text-lg space-y-2">
              <li>
                3 Times Alert: If you leave the testing area or look away from
                the screen for an extended period, you will receive an alert.
              </li>
              <li>
                2 Person Alert: If the AI detects a second person in the testing
                area, you will receive an alert.
              </li>
              <li>
                Tab Change Alert: If you switch tabs or windows during the test,
                you will receive an alert.
              </li>
              <li>
                New Window Alert: If you open a new window during the test, you
                will receive an alert.
              </li>
              <li>
                Block User Alert: After 3 alerts for leaving the testing area or
                looking away, you will be blocked from continuing the test.
              </li>
            </ol>

            <h2 className="text-xl font-bold text-green-600 mt-8 mb-4">
              Submitting the Test:
            </h2>
            <ol className="list-decimal list-inside text-lg">
              <li>
                Once complete, click "Submit Test" and follow any additional
                instructions.
              </li>
              <li>
                The AI proctor recording will be reviewed to ensure test
                integrity.
              </li>
            </ol>

            <div class="mt-6 flex items-start">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label for="agree" class="text-lg">
                I declare that I have read and understood the instructions, and
                I agree to abide by the rules.
              </label>
            </div>

            <button
              disabled={!isChecked}
              class="mt-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            >
              {isChecked ? "Ready to Begin" : " "}
            </button>
          </div>

          <button
            type="submit"
            className="w-[40vw] bg-[#1DBF73] mt-5 text-white py-2 rounded-lg font-semibold h-16  shadow-[2.0px_3.0px_2.0px_rgba(0,0,0,0.1)]"
          >
            Ready To Begin →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
