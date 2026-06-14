import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import AchievementsSection from './sections/AchievementsSection';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

const App = () => {
  const activeSection = useActiveSection();
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    const moveHandler = (event) => {
      gsap.to(glow, {
        x: event.clientX - 180,
        y: event.clientY - 180,
        duration: 0.7,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <>
      <div ref={glowRef} className="pointer-events-none fixed left-0 top-0 z-0 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />
      <Navbar active={activeSection} />
      <main className="relative z-10 text-white">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
