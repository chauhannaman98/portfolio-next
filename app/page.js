import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <NavBar />
      <div className="container mt-32 mx-auto px-12 py-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
};
