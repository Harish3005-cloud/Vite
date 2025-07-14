import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.4} color="white" />
      <spotLight 
        position={[4,9,-1]}
        angle={0.12}
        intensity={85}
        penumbra={1}
        color="white"
        
      />
      <spotLight 
        position={[-2, 8, -2]}
        angle={1}
        intensity={1}
        penumbra={2}
        color="#4cc9f0"
      />
      
      {/* Study lamp light */}
      <spotLight
        position={[0, 6, -5]} // Adjust to match your lamp's position
        angle={0.3}
        intensity={70}
        penumbra={1.5}
        color="#9d4edd"
        
      />
      <primitive 
        object={new THREE.RectAreaLight('#A259ff',8,3,2)}
        position={[4,1,-1]} // Adjust to match your lamp's position
        intensity={10}
        rotation={[-Math.PI / 4, Math.PI/4, 0]} // Adjust rotation to
      
      
      /> 
      <pointLight
        position={[0, 1, 0]} // Adjust to match your lamp's position
        intensity={10}
        color="#7209b7"
      
       />
       <pointLight
        position={[1, 2, -2]} // Adjust to match your lamp's position
        intensity={10}
        color="#0d00a4"
      
       />
    </>
  )
}

export default HeroLights