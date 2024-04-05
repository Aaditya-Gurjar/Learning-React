import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn  }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("LoggedIn Successfully!");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler} className=" flex  flex-col  w-full gap-y-4 mt-6  ">
      <label>
        <p className="text-white">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter Email address"
          onChange={changeHandler}
          name="email"

          className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 "
        />
      </label>

      <label className="w-full relative">
        <p className="text-white">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"

          className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 "
        />
        <span className="absolute text-white right-3  top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <FaEye /> : <AiFillEyeInvisible />}
        </span>

        <Link to="#" ><p className=" text-green-700 text-xs max-w-max ml-auto mt-1 " >Forgot Password</p></Link>
      </label>

      <button className="w-full bg-yellow-50 text-black py-1 font-medium rounded ">SignIn</button>
    </form>
  );
}

export default LoginForm;
