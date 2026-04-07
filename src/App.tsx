/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Zap, Sun, Moon } from 'lucide-react';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { AliveOS } from './components/AliveOS';
import { HealthStack } from './components/HealthStack';
import { AppEcosystem } from './components/AppEcosystem';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-300 bg-white dark:bg-slate-950`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] p-6 flex items-center justify-between bg-glass backdrop-blur-sm">
        <div className="flex items-center">
          <img 
            src={isDark ? "https://appcdn.goqii.com/storeimg/21868_1774952258.png" : "https://appcdn.goqii.com/storeimg/8363_1775122686.png"} 
            alt="GOQii" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest opacity-70">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Solutions</a>
          <a href="#healthstack" className="hover:text-cyan-400 transition-colors">HealthStack</a>
          <a href="#aliveos" className="hover:text-cyan-400 transition-colors">Clinical</a>
          <a href="#casestudies" className="hover:text-cyan-400 transition-colors">Resources</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          <button className="px-6 py-2 rounded-full bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 transition-all duration-300">
            Request a Demo
          </button>
        </div>
      </nav>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative pt-20">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="aliveos" className="min-h-screen">
          <AliveOS />
        </section>

        <section id="metrics" className="min-h-screen">
          <Metrics />
        </section>

        <section id="healthstack" className="min-h-screen">
          <HealthStack />
        </section>

        <section id="app" className="min-h-screen">
          <AppEcosystem />
        </section>

        <section id="casestudies" className="min-h-screen">
          <CaseStudies />
        </section>
      </main>

      <Footer />
    </div>
  );
}
