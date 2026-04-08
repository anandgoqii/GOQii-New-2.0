import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { TheShift } from '../components/TheShift';
import { PathSelector } from '../components/PathSelector';
import { AliveOS } from '../components/AliveOS';
import { DynamicMotivation } from '../components/DynamicMotivation';
import { HealthStack } from '../components/HealthStack';
import { HealthEngage } from '../components/HealthEngage';
import { Industries } from '../components/Industries';
import { Metrics as Proof } from '../components/Metrics';
import { AppEcosystem } from '../components/AppEcosystem';
import { Sanjeevini } from '../components/Sanjeevini';
import { CaseStudies } from '../components/CaseStudies';
import { CTA } from '../components/CTA';

export const Home = () => {
  const [activePath, setActivePath] = useState<'org' | 'ind'>('org');

  const handlePathChange = (path: 'org' | 'ind') => {
    setActivePath(path);
    
    // Wait for the exit/enter animations to complete before scrolling
    setTimeout(() => {
      const targetId = path === 'org' ? 'industries' : 'app';
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 600);
  };

  return (
    <main className="relative pt-20">
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="theshift">
        <TheShift />
      </section>

      <PathSelector activePath={activePath} onPathChange={handlePathChange} />

      <AnimatePresence mode="wait">
        {activePath === 'org' ? (
          <motion.div
            key="org"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section id="aliveos" className="min-h-screen">
              <AliveOS />
            </section>

            <section id="healthstack" className="min-h-screen">
              <HealthStack />
            </section>

            <section id="industries">
              <Industries />
            </section>

            <section id="proof">
              <Proof />
            </section>

            <section id="casestudies" className="min-h-screen">
              <CaseStudies />
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="ind"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section id="dynamicmotivation">
              <DynamicMotivation />
            </section>

            <section id="healthengage">
              <HealthEngage />
            </section>

            <section id="app" className="min-h-screen">
              <AppEcosystem />
            </section>

            <section id="sanjeevini">
              <Sanjeevini />
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="cta">
        <CTA />
      </section>
    </main>
  );
};
