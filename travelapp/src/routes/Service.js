import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import Trip from '../Component/Trip'

function Service() {
  return (
    <>
    <Navbar/>
    <Hero cName ="hero-mid" heroImg = "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" title="Service"  btnClass = "hide"/>
  <Trip/>
   <Footer/>
    </>
  )
}

export default Service