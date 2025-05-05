import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message,setMessage]=useState('');

  const HandleSubmit=(e)=>{
    e.preventDefault();
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Subject:",subject);
    console.log("Message",message)

   
    setName('');
    setEmail('');
    setSubject('');
    setMessage('')
    }
  return (
<div className="flex flex-row flex-wrap justify-around mt-15 md:mt-20 font-serif">
  <div className="h-auto w-200 text-emerald-950 ml-3 ">
    <h1 className='font-extrabold text-rose-900 flex justify-center text-lg md:text-2xl'>Contact Me</h1>
    <p className='font-bold text-sky-950  mt-5 md:mt-2 text-sm md:text-lg'>Let's Work Together</p>
    <p className='mt-3 md:mt-2 text-balance md:text-lg text-[13px]'>Thank you for visiting my portfolio!
    <br/>
     As a fresher frontend developer, I’m excited to explore opportunities where I can apply my skills, 
     learn from experienced developers, and contribute to meaningful projects. I’m passionate about creating user-friendly 
     interfaces and bringing designs to life using HTML, CSS, JavaScript, React, and Tailwind CSS.
     Whether you're a recruiter, developer, or just someone who wants to connect — I’d love to hear from you!
     Feel free to reach out to me for internships, freelance work, full-time roles, or even for a quick tech chat.</p>
    <p className='flex flex-row text-lg md:text-xl items-center mt-4 md:mt-10 '> 

    <img className='h-3 w-3' src="Images/contact-email.jpeg " alt=""/><Link to="https://mail.google.com/mail/u/0/#inbox">  rimmyashika2224@gmail.com</Link></p> 
    <p className='flex flex-row items-center text-lg md:text-lg'>
      <img className='h-4 w-4 ' src="Images/contact-phn.jpeg" alt="" />9117897365</p>
    <div className='md:h-20 md:w-8 h-6 w-6  mt-1 md:mt-2  flex flex-col  flex-wrap '>
      <Link 
      to="https://www.facebook.com/profile.php?id=100050938277009">
      <img className="rounded-full p-1 m-2 border-2 hover:border-pink-700"  src="/Images/contact-fb.jpeg" alt="" 
      /></Link>
      <Link 
      to="https://www.instagram.com/rimmy0224/">
      <img className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="/Images/contact-insta.jpeg" alt="" /></Link>
      <Link 
      to="https://github.com/RimmyAshika">
      <img className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="/Images/contact-github.jpeg" alt="" /></Link>
      <Link 
      to="https://www.linkedin.com/in/rimmy-ashika-verma-48b3401b8/">
      <img  className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="Images/contact-linkedin.jpeg" alt="" /></Link>
    </div>
  </div>
  <div className="md:h-auto h-65  md:mt-5 mt-15 flex flex-col flex-wrap">
    <form onSubmit={HandleSubmit}>
    <div className="flex flex-col flex-wrap font-bold ">
      <input
       className="border-black rounded-md border-2 h-7 w-50 md:h-10 px-2 md:w-120"
        type="text"  placeholder='Enter Your Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}  />

      <input 
       className="border-black rounded-md  mt-2 border-2  h-7 w-50 md:h-9 px-2 md:w-120"
        type="text" placeholder="Enter Your Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

      <input 
       className="border-black rounded-md mt-2 border-2  h-7 w-50 md:h-9 md:w-120 px-2" 
       type="text" placeholder='Enter Your Subject'
       value={subject}
        onChange={(e)=>setSubject(e.target.value)}/>

      <textarea
       className='border-black  mt-2 h-10 w-50 md:h-30 md:w-120 border-2 text-left align-top pt-2 px-2 borderr-gray-300 rounded-md resize-none'
       placeholder='Enter Your Message' 
       value={message}
       onChange={(e)=>setMessage(e.target.value)}></textarea>

    <button className=" text-xl font-bold border-2  mt-4 md:mt-6 h-10  rounded-full 
     bg-gradient-to-r from-pink-500  to-pink-200 focus:ring-1  focus:ring-pink-950 focus-outline-none "
    type="submit">
      Submit   
    </button>
  </div>
  </form>
  </div>
</div>
  )
}

export default Contact