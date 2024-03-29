import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar';
import AboutSection from './components/AboutSection/AboutSection';
import DetailsSection from './components/AboutSection/DetailsSection';
import ProjectsSection from './components/ProjectSection/ProjectsSection';
import EmailSection from './components/EmailSection';
import AchievementsSection from './components/AboutSection/AchievementsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar />
      <div className="container mt-32 mx-auto px-12 py-12">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <DetailsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
};
