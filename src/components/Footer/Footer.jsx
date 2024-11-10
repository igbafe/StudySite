import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-20  bg-zinc-800">
      <div className="lg:flex md:flex hidden p-12 justify-between lg:px-20 md:px-12">
        <div className="w-80 flex flex-col gap-y-5">
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#ff995b] lg:text-2xl">
            ABOUT US
          </h1>
          <p className="text-white  lg:text-base md:text-xs">
            At StudyBoosta, we’re dedicated to empowering students with
            reliable, easy-to-access learning tools. From personalized study
            resources to career-building skills, our mission is to simplify your
            educational journey and support your success every step of the way.
          </p>
          <div className="flex text-white gap-2">
            <FaFacebookF />
            <FaTwitter />
            <IoLogoWhatsapp />
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#ff995b] lg:pb-3 text-2xl">
            QUICK LINKS
          </h1>
          <ul className="flex lg:text-base md:text-xs flex-col gap-y-3">
            <li>
              <NavLink className="flex gap-2 items-center text-white" to="/">
                <MdKeyboardArrowRight className="text-[#ff995b]" />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-2 items-center text-white"
                to={"/courses"}
              >
                <MdKeyboardArrowRight className="text-[#ff995b]" />
                COURSES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-2 items-center text-white"
                to={"/opportunities"}
              >
                <MdKeyboardArrowRight className="text-[#ff995b]" />
                OPPORTUNITIES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex gap-2 items-center text-white"
                to={"/DigitalSkills"}
              >
                <MdKeyboardArrowRight className="text-[#ff995b]" />
                DIGITAL SKILLS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <h1 className="text-white font-bold pl-4 border-l-8 md:text-xl border-[#ff995b] lg:text-2xl">
            CONTACT US
          </h1>
          <p className=" lg:text-base md:text-xs">
            Adress: University of Benin, Edo, Lagos
          </p>
          <p className=" lg:text-base md:text-xs">Phone No: +2348134383290</p>
          <p className=" lg:text-base md:text-xs">Email: peters@gmail.com</p>
        </div>
      </div>
      <div className="lg:pl-20 pl-12 text-white p-3 bg-black">
        <p className="lg:text-base md:text-base text-[10px]">
          Copyrights@2024|StudyBoosta
        </p>
      </div>
    </div>
  );
}

export default Footer;
