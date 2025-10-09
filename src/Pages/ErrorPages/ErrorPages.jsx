import React from "react";
import errorPages from "../../assets/error-404.png";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className=" flex justify-center items-center mt-4">
      <div className="text-center  space-y-3">
        <img src={errorPages} alt="" />
        <h2 className="text-[##001931] font-semibold text-5xl">
          Oops, page not found!
        </h2>
        <p className="text-[#627382] text-[20px]">
          The page you are looking for is not available.
        </p>
        <Link
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:scale-105 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg"
          to="/"
        >
          Go Back !
        </Link>
      </div>
    </div>
  );
};

export default Error;
