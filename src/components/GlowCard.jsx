import React,{useRef} from 'react'

const GlowCard = ({card,children,index}) => {
    const cardrefs=useRef([]);
    const handleMouseMove=(e,index)=>{
        const card= cardrefs.current[index];
        if(!card) return;
        const rect=card.getBoundingClientRect();
        const mouseX= e.clientX - rect.left - rect.width/2;
        const mouseY= e.clientY - rect.top- rect.height/2;


        let angle=Math.atan2(mouseY,mouseX)*(180/Math.PI);
        angle=(angle + 360)%360;     
        card.style.setProperty('--start',angle+60)

    }
  return (
    <div ref={(el)=>(cardrefs.current[index]=el)} 
    onMouseMove={e => handleMouseMove(e,index)}
    className="card card-border timeline-card rounded-xl p-10">
        <div className="glow"/>
         <div className="mb-5">
            <h3 className="text-white text-2xl font-semibold mt-2">{card.title}</h3>
            
         </div>
         {children}
        
    
    
    </div>
  )
}

export default GlowCard