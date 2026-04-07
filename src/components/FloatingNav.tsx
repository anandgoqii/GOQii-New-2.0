import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Home, BarChart3, Zap, Layers, Smartphone, FileText, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Hero', icon: <Home className="w-5 h-5" /> },
  { id: 'aliveos', label: 'ALIVE OS', icon: <Zap className="w-5 h-5" /> },
  { id: 'metrics', label: 'Metrics', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'healthstack', label: 'Healthstack', icon: <Layers className="w-5 h-5" /> },
  { id: 'app', label: 'App', icon: <Smartphone className="w-5 h-5" /> },
  { id: 'casestudies', label: 'Case Studies', icon: <FileText className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine active section based on scroll progress
    // Each section is ~14.2% (1/7)
    const index = Math.min(Math.floor(latest * 7), 6);
    setActiveSection(navItems[index].id);
  });

  const scrollToSection = (index: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (index / (navItems.length - 1)) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <div className="bg-glass backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full p-2 flex flex-col gap-4 shadow-2xl">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className="relative flex items-center justify-end group"
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <AnimatePresence>
                {(isHovered === item.id || isActive) && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-12 px-3 py-1 rounded-full bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pointer-events-none shadow-lg shadow-cyan-500/20"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              <button
                onClick={() => scrollToSection(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative ${
                  isActive 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-110' 
                    : 'text-slate-400 hover:text-cyan-500 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {item.icon}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
