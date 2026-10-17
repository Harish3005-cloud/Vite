import React from 'react'
import { socialImgs } from '../constants/index.js'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
             <div className='flex flex-col justify-center md:items-start items-center'>
                <a href="/">Yet to be Updated</a>
            </div> 
            <div className='socials'>
                {socialImgs.map((img)=>(
                    <a className='icon' target="_blank" rel="noopener noreferrer" aria-label={img.name} href={img.url} key={img.url}>
                        <img
                          src={img.imgPath}
                          alt={img.name}
                          width={24}
                          height={24}
                          loading="lazy"
                          className="size-5 md:size-6 object-contain"
                        />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className='text-center md:text-end'>©{new Date().getFullYear()} Harish | JS Mastery. All rights reserved.</p>

            </div>
        </div>
    </footer>
  )
}

export default Footer