import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import AboutUs from '../Component/AboutUs'

export default function About() {
  return (
    <>
    <Navbar/>
    <Hero cName ="hero-mid" heroImg = "https://media.istockphoto.com/id/1439435581/photo/modern-tiny-house-exterior-at-night.jpg?s=1024x1024&w=is&k=20&c=n488xaL7pi8ggTHIO46fqHP2JUL5CG0J8Dw8IGwaWYc=" title="About"  btnClass = "hide"/>
   <AboutUs/>
   <Footer/>
    </>
  )
}
