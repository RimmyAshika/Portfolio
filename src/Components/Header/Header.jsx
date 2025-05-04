import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {

  return (
    <header className="mt-8 justify-between  md:mx-90">
        
        <nav >
        <div className="font-bold  items-center h-10  md:h-15 flex rounded-full flex-wrap justify-evenly  bg-[url('Images/bgImage.jpg')] bg-cover bg-center ">
            <p className='font-bold md:text-3xl text-lg text-[#3c0b51]'>Portfolio</p>
            
            <div className='md:text-lg text-[15px]'>
            <ul className="flex items-center justify-evenly text-[#1b1d37] ">
            <li >
            <NavLink to="/" className={({isActive})=>`hover:underline ${isActive ?"text-[#211C84]" :" text-black"} 
             md:m-3 m-1 `}>
            Home</NavLink> </li>
            <li>
            <NavLink to="/about" className={({isActive})=>`hover:underline ${isActive ?"text-[#211C84]" :" text-black"} 
             md:m-3 m-1  `}>
            About</NavLink> </li>
            <li>
            <NavLink to="/projects" className={({isActive})=>`hover:underline ${isActive ?"text-[#211C84]" :" text-black"} 
            md:m-3 m-1  `}>
            Projects</NavLink> </li>
            <li>
            <NavLink to="/skills" className={({isActive})=>`hover:underline ${isActive ?"text-[#211C84]" :" text-black"} 
              md:m-3 m-1  `}>
            Skills</NavLink> </li>
            <li>
            <NavLink to="/contact" className={({isActive})=>`hover:underline ${isActive ?"text-[#211C84]" :" text-black"} 
             md:m-3 m-1 `}>
            Contact</NavLink> </li>
            <li></li>
            </ul>
            </div>
            <div className='md:block hidden'>
              <Link
               to=""   
               className="bg-gradient-to-r  from-[#130120] to-[#a791b6] md:w-40 w-15 md:text-lg text-[8px] focus:ring-3 focus:ring-violet-950  
            rounded-full flex justify-center hover:border-2 focus:outline-none items-center md:h-10 h-6 text-[#ececea]"
            >
              Download CV </Link>  
      </div>
        </div>
    </nav>
    </header>
    
  )
}
export default Header