// src/App.jsx
import React from 'react';
import WorkSection from './WorkSection';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import TechStack from './TechStack';
import SocialBar from './SocialBar';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SocialBar />
      <main>
        <HeroSection />
        <WorkSection />
        <ExperienceSection />
        <TechStack />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Dixa Kundariya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
