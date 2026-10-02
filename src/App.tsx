import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustIntro } from './sections/TrustIntro';
import { Services } from './sections/Services';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { HowItWorks } from './sections/HowItWorks';
import { ProjectVisibility } from './sections/ProjectVisibility';
import { TransparentQuotations } from './sections/TransparentQuotations';
import { WhyNavanirman } from './sections/WhyNavanirman';
import { Testimonials } from './sections/Testimonials';
import { WarrantyMaintenance } from './sections/WarrantyMaintenance';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './components/Footer';
import DesignSystem from './pages/DesignSystem';
import { About } from './pages/About';
import { ServicesPage } from './pages/Services';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';

import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// A simple layout that includes the Navbar and an outlet for the page content
function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}



function Home() {
  return (
    <div>
      <Hero />
      <TrustIntro />
      <Services />
      <FeaturedProjects />
      <HowItWorks />
      <ProjectVisibility />
      <TransparentQuotations />
      <WhyNavanirman />
      <Testimonials />
      <WarrantyMaintenance />
      <FinalCTA />
    </div>
  );
}

import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="how-it-works" element={<div className="pt-20 min-h-screen bg-white"><HowItWorks /></div>} />
            <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<Contact />} />
            <Route path="design-system" element={<DesignSystem />} />
          </Route>
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
