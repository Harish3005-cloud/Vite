import { OrbitControls } from '@react-three/drei' 
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import {Room} from './Room.jsx' // Import the Room component
import HeroLights from './HeroLights.jsx'
const HeroExperience = () => {
   // Use react-responsive to detect tablet size
  const isTablet = useMediaQuery({ query: '(max-width: 1010px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    <Canvas camera ={{ position: [0, 0, 15], fov: 45 }}>
     
     <OrbitControls
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={15}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
     />
     <HeroLights />
      <group
      scale={isMobile?0.7:1}
      position={[0,-3.5,0]}
      rotation={[0, Math.PI / 4, 0]}
      >
       <Room />
       </group>
    </Canvas>
  )
}

export default HeroExperience