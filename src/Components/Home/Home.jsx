import React from 'react'

function Home() {
  return (
   <div className='flex flex-row md:flex-col flex-wrap w-full h-120  '>
        <div className=' bg-gradient-to-r to-[rgb(241,156,203)]   from-[rgb(39,0,32)]  md:w-200 md:rounded-e-full md:h-100 h-70 w-70 md:mx-20 mx-6 mt-20 md:mt-40 p-5 md:p-7 '>
          <p className='md:text-[30px] text-[#f5dbf5] md:mt-8 mt-10 text-[12px] font-serif '>Hello,It's Me </p>
          <h1 className='text-[#ccaeed] md:text-5xl text-[20px] font-semibold md:mt-2  font-serif '>Rimmy Ashika Verma</h1>
          <p className='text-[#fffbff] md:pt-9 pt-4 md:text-4xl text-xl font-mono'>Frontend Developer | Passionate Coder</p>
        </div>
        <div className='md:h-130 md:w-130 h-80 w-80 md:mt-15 mt-10   '>
          <img  className="md:rounded-full rounded-t-full md:mr-20 ml-5 flex flex-wrap flex-col" src="./Images/profile.jpg" alt="" />
        </div>
   </div>
  )
}

export default Home