import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password & ConfirmPassword Doesn't Match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Successfully");
    const accountData = {
      ...formData,
    };

    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 text-richblack-200 my-6 rounded-full max-w-max">
        <button
        className={accountType === "student" ? "text-white bg-richblack-900 w-full  py-2 px-5 rounded-full transition-all duration-200" :"bg-transparent text-richblack-200 py-2 px-5  rounded-full transition-all duration-200"}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
        className={accountType === "insturctor" ? "text-white bg-richblack-900 w-full  py-2 px-5 rounded-full transition-all duration-200" :"bg-transparent text-richblack-200 py-2 px-5  rounded-full transition-all duration-200"}
          onClick={() => {
            setAccountType("insturctor");
          }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First name and last name form field */}
        <div className=" flex  justify-between">
          <label>
            <p className="text-white">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 mb-2"
            />
          </label>

          <label>
            <p className="text-white">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700  mb-2"
            />
          </label>
        </div>

        {/* Email field  */}
        <label>
          <p className="text-white">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email "
            className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 mb-2 "
          />
        </label>

        {/* password and confirmPassword field  */}
        <div className="flex  justify-between">
          <label className="relative">
            <p className="text-white">
              Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 mb-2"
            />
            <span
              className="text-white absolute bottom-5 right-2 font-medium"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEye /> : <AiFillEyeInvisible />}
            </span>
          </label>

          <label className="relative">
            <p className="text-white">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="bg-richblack-800 text-richblack-100 w-full mt-1 px-2 py-1.5  rounded border-b border-richblack-700 mb-2"
            />
            <span
              className="text-white absolute bottom-5 right-2 font-medium"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEye /> : <AiFillEyeInvisible />}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 text-black py-1 font-medium rounded mt-5 ">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
