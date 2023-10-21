import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import Skilllist from '../components/Skilllist'

const Skills = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Skills Page" text="Explore my skills below...."/>
    {/* <div style={{}}> */}
    <Skilllist/>
    {/* </div> */}
    <Footer/>
    </div>
  )
}

export default Skills;