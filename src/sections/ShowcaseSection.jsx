import React, { useRef } from 'react';
import { useRef as useref } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP}  from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
const sectionRef = useref(null);
const project1Ref=useRef(null);
const project2Ref=useRef(null);
const project3Ref=useRef(null);


useGSAP(() => {
const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
projects.forEach((card,index)=>{
    gsap.fromTo(
        card,
        {
            y:50,opacity:0 
        },
        {
            y:0,
            opacity:1,
            duration:1,
            delay:0.3*(index+1),
            scrollTrigger:{
                trigger:card,
                start: 'top bottom-=100',

            }

        }
        

    )

})
    gsap.fromTo
    (sectionRef.current,
        { opacity: 0},
        {opacity:1 , duration:1.5})
},[]);



  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* Left-Side */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    
                <div className="image-wrapper ">
                    <img src="/images/Flappy- Bird.png" alt="game" />
                </div>
                <div className="text-content">
                    <h2>Flappy-Bird : A 2D Game </h2>
                    <p className="text-white-50 md:text-xl">Flappy Bird is a simple yet addictive side-scrolling game 
                      where players tap to navigate a bird through gaps between pipes without crashing.
                      Its minimal design and challenging gameplay make it a fun and engaging experience.
                     </p>

                    
                </div>
                </div>
                {/* Right-Side */}
                <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/Amazon.png" alt="Amazon-Clone" />
                    </div>
                    <h2>AMAZON-CLONE</h2>
                </div>
                 <div className="project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src="/images/Spotify.png" alt="Spotify-Clone" />
                    </div>
                    <h2>SPOTIFY-CLONE (Responsive)</h2>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection