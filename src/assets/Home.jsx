import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../page/skill/Skills"
import Experiences from '../components/Experiences'


function Home() {
  return (
    <>
     <Header/>
     <Skills/> 
     {/* <Experiences/>  */}
     <Projects/>
      <Footer/>
     {/* <Contact/> */}
    
    </>
  )
}

export default Home