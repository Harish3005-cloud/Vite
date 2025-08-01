import React from 'react'
import {logoIconList} from '../constants/index.js'
const LogoIcon =({icon}) =>{
    return (
        <div className="flex-none flec-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
        <div className="gradient-edge"/> 
        <div className="gradient-edge"/>
        <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
        {logoIconList.map((icon) => (
          <LogoIcon key={icon.name} icon={icon}/>
          ))}
          
            {logoIconList.map((icon) => (
          <LogoIcon key={icon.name} icon={icon}/>
          ))}
            
        </div>
        </div>
    </div>
  )
}

export default LogoSection