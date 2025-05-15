import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center font-bold  font-serif text-5xl text-rose-950 mt-10">
        Projects
      </div>
      <div className="h-auto w-full  flex flex-wrap text-[#ffafca] justify-center mt-5 md:mt-10">
        <Link to="https://amazone-clone-ivory-eta.vercel.app">
          <div className="md:h-100 h-80 w-80 md:w-150 border-2 border-gray-600 rounded-4xl m-2 bg-[url('/Images/amazon-img.png')]  bg-cover hover:h-100 hover:w-200  mx-3">
            <p className="font-bold text-2xl flex justify-center">
              Amazon Clone
            </p>
          </div>
        </Link>
        <Link to="https://watch-paglu.vercel.app/">
          <div className="md:h-100 h-80 w-80 md:w-150  border-2 border-gray-600 mx-3 rounded-4xl m-2 bg-[url('/Images/watchPaglu-Img.png')] bg-cover bg-center hover:h-100 hover:w-200">
            <p className="font-bold text-2xl flex justify-center">WatchPaglu</p>
          </div>
        </Link>
        <Link to="https://currency-converter-fawn-delta.vercel.app">
          <div
            className="md:h-100 h-80 w-80 md:w-150  border-2 border-gray-600 md:mt-3 md:mb-4 m-2 md:mx-3 rounded-4xl  bg-[url('/Images/currency-img.png')] bg-cover bg-center 
        hover:h-100 hover:w-200"
          >
            <p className="font-bold text-2xl flex justify-center">
              Currency Converter
            </p>
          </div>
        </Link>
        <Link to="https://blog-space-drab.vercel.app/">
          <div className="md:h-100 h-80 w-80 md:w-150  border-2 border-gray-600 md:mt-3 md:mb-4 mx-3 m-2 rounded-4xl  bg-[url('/Images/blog-img.png')] bg-cover hover:h-100 hover:w-200">
            <p className="font-bold text-2xl flex justify-center ">
              Blog Space
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
