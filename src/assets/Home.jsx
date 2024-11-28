import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Experiences from '../components/Experiences'


function Home() {
  return (
    <>
     <Header/>
     <Experiences/> 
     <Skills/> 
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home