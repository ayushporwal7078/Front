import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Destination from '../Component/Destination'
import Trip from '../Component/Trip'
import Footer from '../Component/Footer'

function Home(){
return (
    <>
    <Navbar/>
    <Hero cName ="hero" heroImg = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" title="Your journey your Story" text="Choose Your Favorite Destination" buttonText = "Travel Plan" url = "/" btnClass = "show"/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
    
)
}

export default Home