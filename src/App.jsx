import { Suspense, lazy } from 'react'
import NavBar from './components/NavBar.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'

const Hero = lazy(() => import('./sections/Hero.jsx'))
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection.jsx'))
const ExperienceSection = lazy(() => import('./sections/ExperienceSection.jsx'))
const TechStack = lazy(() => import('./sections/TechStack.jsx'))
const Contact = lazy(() => import('./sections/Contact.jsx'))

const App = () => {
  return (
   <>
   <NavBar/>
   <Suspense fallback={<div className="text-white-50">Loading...</div>}>
   <Hero />  
   <ShowcaseSection/> 
   </Suspense>
   {/* <LogoSection/> */}
   <FeatureCards/>
   <Suspense fallback={<div className="text-white-50">Loading...</div>}>
   <ExperienceSection/>
   <TechStack/>
   <Contact/>
   </Suspense>
  <Footer/>
   </>
  )
}

export default App