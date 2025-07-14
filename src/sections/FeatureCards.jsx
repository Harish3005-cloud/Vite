import React from 'react'
import{abilities} from '../constants/index.js'
import { div } from 'three/tsl'
const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map(({title,desc})=>(
                <div className="card-border rounded-xl p-8 flex flex-col gap-4" key={title}>
                 <div className="size-14 flex items-center justify-center runded-full">

                    </div>   

                    <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                    <p className="text-white-50 text-lg">{desc}</p>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default FeatureCards