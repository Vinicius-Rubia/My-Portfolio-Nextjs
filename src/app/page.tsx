import { AboutSection } from "./components/AboutSection";
import { AchivementsSection } from "./components/AchivementsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSections } from "./components/ProjectsSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-3 sm:px-12 py-4">
        <HeroSection />
        <AchivementsSection />
        <AboutSection />
        <ProjectsSections />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
