import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import ContactForm from '../Component/ContactForm'

function Contact() {
  return (
    <>
    <Navbar/>
    <Hero cName ="hero-mid" heroImg = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3QlMjBuYXR1cmUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" title="Contact"  btnClass = "hide"/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact