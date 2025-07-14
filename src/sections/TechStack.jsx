import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx"
import { techStackIcons } from '../constants/index.js'
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx'
const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-22 px-12">
            <TitleHeader
            title="My Preferred Tech Stack" 
             sub="🤝The Skills I Bring to the Table"
            
            />

              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {techStackIcons.map((icon)=>(
                   <div key={icon.name} className="card-border tech-card overflow-hidden group md:w-3/4 xl:mx-auto ">
                    {/* <div className="tech-card-animated-bg"/>  */}
                    <div className="tech-card-content">
                      
                      <div className="padding-x w-full flex flex-col items-center justify-center ">
                        <img src={icon.modelPath} alt={icon.modelPath} className="w-full h-[120px] object-contain xl:h-[150px] mx-auto py-3.5 md:py-3 mb-4" />
                        <p>{icon.name}</p>

                      </div>
                    </div>
                   </div> 
                ))}

              </div> 
        </div>
    </div>
  )
}

export default TechStack