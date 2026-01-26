import { useState, useEffect } from 'react';
import { getCounterItems } from '../constants/index.js';
import { fetchGitHubStats } from '../services/github.js';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  const [counterItems, setCounterItems] = useState(getCounterItems());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGitHubStats = async () => {
      try {
        const githubStats = await fetchGitHubStats();
        setCounterItems(getCounterItems(githubStats));
      } catch (error) {
        console.error('Failed to load GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubStats();
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className='mx-auto grid-4-cols '>
            {counterItems.map((item, index)=>(
              <div key={`${item.label}-${index}`} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
           <div className="counter-number text-white text-5xl font-bold mb-2">
            {loading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <CountUp suffix={item.suffix} end={item.value}/>
            )}
            </div> 
            <div className="text-white-50 text-lg">{item.label}</div> 
            </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter