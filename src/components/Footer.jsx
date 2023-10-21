import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaGithubSquare, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
    <div className="location">
    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    <div>
    <p>F2, Plot 9B, Maharajapuram Main Road</p>
    <p>Santhosapuram, Chennai-73</p>
    <p>India</p>
    </div>    
    </div>
    <div className="phone">
    <h4>
    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    +91 7358523601    
    </h4>
    </div>
    <div className="email">
    <h4>
    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
    jagdeeshbhavani22@gmail.com    
    </h4>
    </div>
    </div>
    <div className="right">
    <h4>About Me</h4>
    <p style={{textAlign:"justify"}}>An undergraduate from the Computer Science field aspiring to learn new 
technologies. Serving as a Graduate Engineering Trainee at L&T Smart 
World and Communication. Working in the industries of smart meters. 
Creating interactive dashboards using React JS as a Front-End 
framework, using databases like SQL, and PostgreSQL, and Node JS as 
a back-end framework. Creating scripts for the day-to-day monitoring of 
resources using Python. Also, using technologies like AWS for the 
projects</p>
    <div className="social">
    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} onClick={()=>{window.open("https://www.linkedin.com/in/jagdeesh-v-a4b1a4208/")}}/>    
    <FaGithubSquare size={30} style={{color:"#fff",marginRight:"1rem"}} onClick={()=>{window.open("https://github.com/VJagdeesh")}}/>
    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} onClick={()=>{window.open("https://www.facebook.com/jagdeesh.venkat.9/")}}/>
    <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} onClick={()=>{window.open("https://instagram.com/jagdeesh_v?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==")}}/>
    </div>
    </div>    
    </div>    
    </div>
  )
}

export default Footer