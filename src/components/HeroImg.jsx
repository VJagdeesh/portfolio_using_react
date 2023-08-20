import "./HeroImgStyles.css"
import "../index.css"
import React from 'react'
import Introimg from "../assets/Mine2.jpeg" 
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="intro-img" src={Introimg} alt="Intro-image"/>
    </div>
    <div className="content">
    <p>Hi, I am V Jagdeesh</p>
    <h1>Software Engineer</h1>
    <div>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default HeroImg