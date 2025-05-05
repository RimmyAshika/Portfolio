import React from 'react'

function Skills() {
  return (
    <div>
    <div className="h-auto w-full flex flex-warp font-serif flex-col items-center mt-20 md:mt-6 ">
      <div className="font-extrabold text-4xl text-red-950 "> My Skills</div>
      <div className="flex justify-evenly  mt-18 md:mt-15 w-full animate-pulse font-bold font-serif md:text-2xl text-md  text-violet-950 ">
      <p >Technical Skills </p>
        <p className=''> Professional Skills</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap md:h-auto  justify-evenly">
        {/* technical skills */}
      <div className="flex flex-wrap font-mono text-[30px] h-auto ml-7 md:text-xl text-black  flex-col">
      <p className="  mt-13 md:mt-3 md:px-30 ">
      <img className="h-6 w-6 " src="Images/c-logo.jpeg" alt="" />C</p>
      <div className="md:block hidden">
      <div className="h-4 w-90 flex  flex-col justify-center flex-wrap ml-30 bg-slate-600 rounded-r-full">
        <div  className="h-4 w-75 bg-pink-400  rounded-r-full " ></div>
      <p className="ml-15 text-lg font-bold text-red-950">80%</p>
      </div>
      </div>

      <p className=" mt-3 md:px-30  ">
      <img className="h-6 w-6 " src="Images/html-logo.jpeg" alt="" />HTML</p>
      <div className="md:block hidden">
      <div className="h-4 w-90 flex  flex-col justify-center flex-wrap ml-30 bg-slate-600 rounded-r-full">
        <div  className="h-4 w-75 bg-pink-400  rounded-r-full " ></div>
      <p className="ml-15 text-lg font-bold text-red-950">80%</p>
      </div>
      </div>

      <p className=" mt-3 md:px-30 ">
      <img className="h-6 w-6 " src="Images/CSS-logo.jpeg" alt="" />CSS</p>
      <div className="md:block hidden">
      <div className="h-4 w-90 flex  flex-col justify-center flex-wrap ml-30 bg-slate-600 rounded-r-full">
        <div  className="h-4 w-75 bg-pink-400  rounded-r-full " ></div>
      <p className="ml-15 text-lg font-bold text-red-950">80%</p>
      </div>
      </div>

      <p className=" mt-3 md:px-30 ">
      <img className="h-6 w-6" src="Images/js-logo.jpeg" alt="" />Javascript</p>
      <div className="md:block hidden">
      <div className="h-4 w-90 flex  flex-col justify-center flex-wrap ml-30 bg-slate-600 rounded-r-full">
        <div  className="h-4 w-65 bg-pink-400  rounded-r-full " ></div>
      <p className="ml-25 text-lg font-bold text-red-950">70%</p>
      </div>
      </div>

      <p className=" mt-3 md:px-30 ">
      <img className="h-6 w-6" src="Images/react-logo.jpeg" alt="" />React</p>
      <div className="md:block hidden">
      <div className="h-4 w-90 flex  flex-col justify-center flex-wrap ml-30 bg-slate-600 rounded-r-full">
        <div  className="h-4 w-65 bg-pink-400  rounded-r-full " ></div>
      <p className="ml-25 text-lg font-bold text-red-950">70%</p>
      </div>
      </div>
      </div>
      {/* Proffesional skilss */}
        <div className="flex md:flex-row md:mr-[30px]  flex-wrap justify-between text-center h-auto w-30 md:h-100 md:w-100 mt-8 font-serif  md:mt-4">
          <div className=" md:mt-2 mt-[7px] border-t-cyan-950 border-r-cyan-950 border-b-cyan-950  border-pink-400 rounded-full 
           justify-center flex md:text-lg text-[12px] flex-nowrap md:h-45 h-25 w-25 md:w-45  border-4 md:border-9 
       text-rose-900 items-center ">Communication 70%
       </div>
       <div className="md:text-xl text-[12px] md:mt-2 mt-[4px] md:h-45  h-25 w-25 md:w-45  border-4 md:border-9  md:font-bold  border-pink-400 rounded-full border-t-cyan-950
        border-r-cyan-950 border-b-cyan-950  justify-center flex  
       text-rose-900 items-center ">Creativity  <br/>  60%
       </div>
       
       <div className="md:text-lg text-[12px] md:mt-2 mt-[4px] md:h-45  h-25 w-25 md:w-45  border-4 md:border-9  md:font-bold border-pink-400 rounded-full  justify-center border-t-cyan-950 border-r-cyan-950 border-b-cyan-950  flex text-xl 
       text-rose-900 items-center  ">Problem Solving <br/> 60%
       </div>
       <div className="md:text-xl text-[12px] md:mt-2 mt-[4px] md:h-45 h-25 w-25 md:w-45  border-4 md:border-9 md:font-bold border-pink-400 rounded-full  justify-center border-t-cyan-950 border-r-cyan-950 border-b-cyan-950  flex text-xl 
       text-rose-900 items-center ">TeamWork <br/> 60%
       </div>
        </div>
      </div>
    </div>
  )
}
export default Skills

