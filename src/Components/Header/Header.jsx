import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="mt-8 justify-center flex">
      <nav>
        <div className="font-bold items-center h-10  md:h-15 flex rounded-full px-4 justify-evenly  bg-[url('/Images/bgImage.jpg')] bg-cover bg-center flex-nowrap">
          <p className="font-bold md:text-3xl text-xl text-[#3c0b51]">
            Portfolio
          </p>
          <div className="md:text-lg text-[15px]">
            <ul className="flex items-center justify-evenly  text-[#1b1d37] ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `hover:underline ${
                    isActive ? "text-[#211C84]" : " text-black"
                  } 
             md:m-3 m-1 `}
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `hover:underline ${
                    isActive ? "text-[#211C84]" : " text-black"
                  } 
             md:m-3 m-1  `}
                >
                  About
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => `hover:underline ${
                    isActive ? "text-[#211C84]" : " text-black"
                  } 
            md:m-3 m-1  `}
                >
                  Projects
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) => `hover:underline ${
                    isActive ? "text-[#211C84]" : " text-black"
                  } 
              md:m-3 m-1  `}
                >
                  Skills
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `hover:underline ${
                    isActive ? "text-[#211C84]" : " text-black"
                  } 
             md:m-3 m-1 `}
                >
                  Contact
                </NavLink>{" "}
              </li>
              <li></li>
            </ul>
          </div>
          <Link to="https://drive.google.com/file/d/1wvO7A7cpf9Ehr401KzIAqp2pu_3JsgPb/view?usp=sharing">
            <div className="md:block hidden">
              <p
                className="bg-gradient-to-r   from-[#130120] to-[#a791b6] md:w-40 w-15 md:text-lg text-[8px] focus:ring-3 focus:ring-violet-950     cursor-pointer
            rounded-full  flex justify-center  items-center hover:border-2 focus:outline-none md:h-10 h-6 text-[#ececea]"
              >
                Download CV{" "}
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
