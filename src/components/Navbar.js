import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.jpg";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#051033] text-gray-300 z-10">
      <div>
        <img
          className="rounded-full"
          src={Logo}
          alt="Logo"
          style={{ width: "60px" }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="text-[#55BDCA]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#55BDCA]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-[#55BDCA]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-[#55BDCA]">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-[#55BDCA]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden text-xl text-[#55BDCA] z-10"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#051033] flex flex-col justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl text-[#55BDCA]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#55BDCA]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#55BDCA]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#55BDCA]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl text-[#55BDCA]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Gmail <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
