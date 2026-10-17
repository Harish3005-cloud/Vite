import { useState, useEffect } from 'react';
import { getCounterItems } from '../constants/index.js';
import { fetchGitHubStats } from '../services/github.js';

const NativeCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const AnimatedCounter = () => {
  const [counterItems, setCounterItems] = useState(getCounterItems());

  useEffect(() => {
    const loadGitHubStats = async () => {
      try {
        const githubStats = await fetchGitHubStats();
        setCounterItems(getCounterItems(githubStats));
      } catch (error) {
        console.error('Failed to load GitHub stats:', error);
      }
    };

    loadGitHubStats();
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className='mx-auto grid-4-cols '>
            {counterItems.map((item, index)=>(
              <div key={`${item.label}-${index}`} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
           <div className="counter-number text-white text-5xl font-bold mb-2 min-h-[3.5rem] flex items-center">
             <NativeCounter suffix={item.suffix} end={item.value}/>
           </div> 
            <div className="text-white-50 text-lg">{item.label}</div> 
            </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter