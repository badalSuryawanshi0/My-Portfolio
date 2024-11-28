import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Components/Home/home.jsx'


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'



const route=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>} />
    
  </Route>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <RouterProvider router={route}/>
   
  </StrictMode>,
)
