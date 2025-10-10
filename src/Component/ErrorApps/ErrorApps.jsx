import React from "react";
import appError from "../../assets/App-Error.png";
import { Link } from "react-router";

const ErrorApps = () => {
  return (
    <div className=" flex justify-center items-center mt-4">
      <div className="text-center  space-y-4">
        <img className="mx-auto" src={appError} alt="" />
        <h2 className="text-[##001931] font-semibold text-5xl">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-[#627382] text-[20px]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex justify-center items-center gap-5">
          <Link
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:scale-105 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg"
            to="/"
          >
            Go Back !
          </Link>
          <Link
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:scale-105 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg"
            to="/apps"
          >
            Browse Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorApps;
