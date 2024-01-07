import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <NavBar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <HeroSection />
      </div>
    </main>
  );
};
