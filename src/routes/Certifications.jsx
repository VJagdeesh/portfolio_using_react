import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import Skilllist from '../components/Skilllist'

const Certifications = () => {
const headings=["Serial Number","Skill","Certifications"];
const data=[{serial:"1",name:'AWS',certification:'https://www.credly.com/badges/8eb3fe09-80e2-4569-afc5-17aa1b597248/linked_in?t=s0ip9w'},{serial:"2",name:'Python (Basic) Certificate',certification:'https://www.hackerrank.com/certificates/5de4a72059a0'},{serial:"3",name:'Linux Mastery: Master the Linux Command Line in 11.5 Hours',certification:'https://www.udemy.com/certificate/UC-d60bf53a-5a8e-41db-936a-36f1cc310ccc/'},{serial:"4",name:'SQL Tutorial: Learn SQL with MySQL Database',certification:'https://www.udemy.com/certificate/UC-9133dc7c-d41c-4fe0-9f11-38a511d0c92d/'},{serial:"5",name:'Gold badge in Hackerrank in Java',certification:'https://www.hackerrank.com/dashboard'},
{serial:"6",name:'Python Bootcamp',certification:'https://www.udemy.com/certificate/UC-5a34dc1c-49bd-42b5-b633-29f0c5cebc28/'}];
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Skills Page" text="Explore my skills below...."/>
    {/* <div style={{}}> */}
    <Skilllist headings={headings} data={data}/>
    {/* </div> */}
    <Footer/>
    </div>
  )
}

export default Certifications;