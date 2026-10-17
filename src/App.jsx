import { Suspense, lazy } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import Footer from './sections/Footer.jsx';

const ExperienceSection = lazy(() => import('./sections/ExperienceSection.jsx'));
const TechStack = lazy(() => import('./sections/TechStack.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

const SectionFallback = () => (
  <div className="w-full min-h-[300px] flex-center text-white-50 opacity-60">
    Loading...
  </div>
);

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection/> */}
      <FeatureCards />
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;