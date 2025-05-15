import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-auto w-full flex flex-warp font-serif flex-col items-center mt-10  md:mt-10 ">
      <div className="font-extrabold text-4xl text-red-950 "> About me!</div>
      <div className="flex max-md:flex-wrap justify-center gap-5 lg:gap-24 md:gap-10 ">
        <img
          className="lg:h-120 lg:w-120 h-80 w-80 md:mt-8 md:ml-10 sm:ml-5 mt-10 rounded-t-full "
          src="./Images/profile.jpg"
          alt=""
        />
        <div className="text-justify md:text-balance sm:mr-5 md:mr-10 mx-5 flex max-md:items-center flex-col">
          <p className="md:h-auto text-wrap lg:mt-20 md:mt-20 mt-10 text-[#000f28] md:max-w-200 font-serif md:font-mono text-md m-2 md:text-xl">
            Hi! I’m Rimmy Ashika Verma, a passionate and detail-oriented
            Frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and modern libraries like React and Tailwind CSS. As a
            fresher, I’m constantly learning and building responsive,
            user-friendly web applications. I love turning ideas into real,
            interactive websites and enjoy solving problems through clean,
            efficient code. I’m currently looking for opportunities to work in a
            collaborative environment where I can grow my skills and contribute
            to real-world projects.
            <br />
            Let’s build something amazing together!
          </p>
          <Link to="https://drive.google.com/file/d/1wvO7A7cpf9Ehr401KzIAqp2pu_3JsgPb/view?usp=sharing">
          <button className="w-40 h-10 text-[18px] hidden md:block font-bold rounded-full text-[#ffffff] ml-30 mt-4 md:mt-5  cursor-pointer bg-gradient-to-r from-[#2c0024] to-[#c08fc0]">
            More about me
          </button> 
            <button className="w-40 h-10 md:hidden text-[18px] font-bold rounded-full text-[#ffffff] mb-3 mt-4 cursor-pointer bg-gradient-to-r from-[#2c0024] to-[#c08fc0]">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
