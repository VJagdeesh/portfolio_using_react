import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import { ProjectCardData } from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    {ProjectCardData.map((val,ind)=>{return(<WorkCard key={ind} image={val.imgsrc} title={val.title} text={val.text} view={val.view}/>)})}
    </div>
    </div>
  )
}

export default Work