import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between   gap-x-12 gap-y-0">
      <div>
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.3757]  ">
          {title}
        </h1>
        <p className="text=[1.125rem] leading[1.625rem] mt-4 ">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signUp" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center  my-2 gap-x-2 ">
          <div className=" w-full h-[1px] bg-richblack-700"></div>
          <div className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </div>
          <div className=" w-full h-[1px] bg-richblack-700"></div>
        </div>
        <button className="w-full flex justify-center items-center text-richblack-100  gap-x-2 px-[8px] py-[12px] border border-richblack-700 rounded-[10px] ">
          <FcGoogle />
          <div>Signup With Google</div>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] ">
        <img src={frameImage} width={558} height={504} loading="lazy" />
        <img src={image} width={558} height={490} loading="lazy" className="absolute -top-4 right-4" />
      </div>
    </div>
  );
}

export default Template;
