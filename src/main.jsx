// import { StrictMode } from 'react'

import React from 'react'
import './index.css'
import { createBrowserRouter, Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import ReactDom from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='Projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='skills' element={<Skills/>}/>
    </Route>
  ) 
)
ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
