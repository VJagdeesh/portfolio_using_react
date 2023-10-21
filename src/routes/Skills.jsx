import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import Skilllist from '../components/Skilllist'

const Skills = () => {

    const rows = [
        {serial:"1",name:'React JS'},{serial:"2",name:'Java'},{serial:"3",name:'Python'},{serial:"4",name:'AWS'},{serial:"5",name:'DSA'},
        {serial:"6",name:'Linux'},{serial:"7",name:'My SQL'},{serial:"8",name:'Cryptography'},{serial:"9",name:'Object Oriented Programming'},{serial:"10",name:'C++'}];
    
    const headings=["Serial Number","Skills"];
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Skills Page" text="Explore my skills below...."/>
    {/* <div style={{}}> */}
    <Skilllist data={rows} headings={headings}/>
    {/* </div> */}
    <Footer/>
    </div>
  )
}

export default Skills;