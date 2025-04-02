// src/App.jsx
import React from 'react';
import WorkSection from './WorkSection';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import TechStack from './TechStack';


import SocialBar from './SocialBar'; // <-- Import the social bar

function App() {
  return (
    <div className="relative">
      <SocialBar />

      {/* Page Sections with IDs */}
      <HeroSection />
      <div id="work">
        <WorkSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}


export default App;
