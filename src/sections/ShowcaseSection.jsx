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
                    <img src="/images/CampusConnect .png" alt="game" />
                </div>
                <div className="text-content">
                    <h2>CampusConnect : Your College Your Network </h2>
                    <p className="text-white-50 md:text-xl">
                    A MERN-Stack Student Collaboration Platform
                    Designed to solve the issue of fragmented campus communication, CampusConnect is a responsive web app that centralizes events, notes, and networking.
                    Built with React and Node.js, 
                    it features real-time chat and resource sharing, fostering a stronger academic community.
                     
                     <a
                        href="https://mini-project-steel-six.vercel.app/"
                        className="text-[#9bb5ff] underline font-semibold ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                     </p>

                    
                </div>
                </div>
                {/* Right-Side */}
                <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/Virtual-bookshelf.png" alt="Virtual-Bookshelf" />
                    </div>
                    <h2>Virtual Bookshelf : For Book Lovers </h2>
                    <p className="text-white-50 md:text-xl">
                   
                     
                     <a
                        href="https://virtual-bookshlef.vercel.app/"
                        className="text-[#9bb5ff] underline font-semibold ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                          </a>
                     </p>
                </div>
                 <div className="project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src="/images/Omni-Bot.png" alt="Spotify-Clone" />
                    </div>
                    <h2>OmniBot : NMHIT Hackathon Runner-UP</h2>
                          <p className="text-white-50 md:text-xl">
                   
                     
                     <a
                        href="https://nmit-hackathon.vercel.app/"
                        className="text-[#9bb5ff] underline font-semibold ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                          </a>
                     </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection