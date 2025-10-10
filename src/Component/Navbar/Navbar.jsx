import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const baseClasses =
    "py-2 px-4 transition duration-300 ease-in-out text-lg text-gray-700 hover:text-blue-500 border-b-2 border-transparent";

  const activeClasses = "text-blue-600 font-bold border-b-2  border-blue-600";
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-medium">
              <NavLink
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : ""}`
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li className="font-medium">
              <NavLink
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : ""}`
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex gap-2 justify-center items-center">
            <img className="w-[40px] h-[40px]" src={logoImg} alt="" />
            <h3 className="text-xl">HERO.IO</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
              to="/apps"
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
              to="/installation"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/minhaj-net/my-installation.git"
          target="_blank"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:scale-105 transition duration-300 px-6 py-3 rounded-md shadow-md hover:shadow-lg"
        >
          <span>
            <FaGithub />
          </span>{" "}
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
