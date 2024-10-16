import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (formdata.password !== formdata.cpassword) {
      toast.error("Password didn't match");
    } else {
      setIsLoggedIn(true);
      toast.success("Logged In");
      navigate("/dashboard");
      const accountData = {
        ...formdata,
      };
      console.log("Account data");
      console.log(accountData);
    }
  }
  return (
    <div>
      {/* // student-instructor-tab  */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formdata.firstname}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formdata.lastname}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            value={formdata.email}
            placeholder="Enter email id"
            onChange={changeHandler}
            name="email"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formdata.password}
              placeholder="enter password"
              onChange={changeHandler}
              name="password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formdata.cpassword}
              placeholder="confirm password"
              onChange={changeHandler}
              name="cpassword"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
