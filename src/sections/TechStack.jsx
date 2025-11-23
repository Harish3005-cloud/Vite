import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx"
import { techStackIcons, techStackImgs } from '../constants/index.js'
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx'
import { div } from 'three/tsl'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
const TechStack = () => {
  useGSAP(()=> {
    gsap.fromTo('.tech-card',{y:50,opacity:0},
      {y:0,opacity:1,
        duration:1,
        ease:'power2.inout',
        stager:0.2,
        scrollTrigger: {
          trigger:'#skills ',
          start: 'top center'
        }})
  })
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-22 px-12">
            <TitleHeader
            title="My Preferred Tech Stack" 
             sub="🤝The Skills I Bring to the Table"
            
            />
           <div className='tech-grid'>
            {techStackIcons.map((icon)=>(
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
             <div className='tech-card-animated-bg'/>
             <div className='tech-card-content'>
              <div className='tech-icon-wrapper'>
              <TechIcon model={icon}/>
              </div>
              <div className='padding-x w-full'>
               <p>{icon.name}</p> 
              </div>
              </div>
            </div>
          
          ))}

           </div>

           <div className='tech-grid'>
            {techStackImgs.map((item)=>(
            <div key={item.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
             <div className='tech-card-animated-bg'/>
             <div className='tech-card-content'>
              <div className='tech-icon-wrapper'>
               <img src={item.imgPath} alt={item.name} className='w-full h-full object-contain'/>
              </div>
              <div className='padding-x w-full'>
               <p>{item.name}</p> 
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