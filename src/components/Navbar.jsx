import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react';
import File from "../assets/JAGDEESH_V_Resume_21_10_23.pdf";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {      
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
  const [color,setColor]=useState(false);
  const changeColor=()=>{
  if(window.screenY>=100)
  {
  setColor(true);
  }
  else{
  setColor(false);
  }
  };

  window.addEventListener("scroll",changeColor);

  // window.addEventListener("scroll", changeColor);

  const handleDownloadClick = () => {
    toast.success('Download Started');
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
    <Link to="/"><h1>Portfolio</h1></Link>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
    <li>
    <Link to="/">Home</Link>    
    </li>
    <li>
    <Link to="/about">About</Link>    
    </li>
    <li>
    <Link to="/project">Project</Link>    
    </li>
    <li>
    <Link to="/contact">Contact</Link>    
    </li>
    <li>
    <Link to="/skills">Skills</Link>    
    </li>
    <li>
    <Link to="/certifications">Certifications</Link>    
    </li>
    <li>
    <Link to={File} download="Resume" target="_blank" rel="noreferrer" onClick={handleDownloadClick}>Download Resume</Link>
    </li>
    </ul>

    <div className="hamburger" onClick={handleClick}>
    {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) : (<FaBars size={20} style={{color:"#fff"}}/>)}
    </div>

    </div>
  )
}

export default Navbar