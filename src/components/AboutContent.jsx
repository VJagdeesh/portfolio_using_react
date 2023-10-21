import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I?</h1>
    <p>Engineer at LTTS</p>
    <p align="justify">Worked in the fields of Smart Meters, develped interactive dashboards using PERN Stack.  Currently working as Front-End engineer at LTTS.</p>
    <Link to="/contact"><button className="btn">Contact</button></Link>
    </div>
    <div className="right">
    <div className="img-container">
    <div className="img-stack top">
    <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="img" alt="true"/>
    </div>
    <div className="img-stack bottom">
    <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="img" alt="true"/>
    </div>
    </div>    
    </div>
    </div>
  )
}

export default AboutContent;