import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { expCards } from '../constants/index.js'
import { div } from 'three/tsl'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() =>{
    gsap.utils.toArray('.timeline-card').forEach((card)=>{
      gsap.from(card,{
       xPercent: -100,
       opcity: 0,
       traansformOrigin: 'lef-left',
       duration:1,
        ease:'power2.inOut',
        scrollTrigger:{
          trigger:card,
          start:'top 80%',
        }
      })
    })

  },[]);
  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5"></div>
      <TitleHeader title="Professinal work Expericence " sub=" 💼 My Career Overview"/>
      <div className="mt-32 relative">
        <div className="relative z-50 xl:space-y-32 space-y-10">
          {expCards.map ((card,index)=>(
            <div key={card.title} className="exp-card-wrapper">
            <div className="xl:w-2/6">
             <GlowCard card={card} index={index}>
              
              
                  <div>
                    <img src={card.imgPath} alt={card.title || "Card image"} />
                  </div>
                  
                
             
             </GlowCard>
            </div>
            <div className="xl:w-4/6">
            <div className="flex items-start">
            <div className="timeline-wrapper">
              {/* <div className="timeline"/> */}
              <div className="xl:ml-8 gradient-line w-1 h-full"/>
            </div> 
            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
              <div className="timeline-logo">
              {/* for future to add an logo */}
              </div>
              <div>
                 <h1 className="font-semibold text-3xl">{card.title}</h1> 
                 <p className="my-5 text-white-50">📅{card.date}</p>
                 <p className="tex-{#839cd5} italic">Description</p>
                 <p className="text-white-50 text-lg justify-center flex flex-col">{card.review}</p>
                  {(card.src || card.Link) && (
                    <>
                      <p className="tex-{#839cd5} italic">Link :</p>
                      <a href={card.src || card.Link} target="_blank" rel="noopener noreferrer" className="text-white-50 text-lg justify-center flex flex-col">Check it out </a>
                    </>
                  )}
              </div>
            </div>
            </div>

            </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}

export default ExperienceSection