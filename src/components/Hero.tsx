import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Lock, Globe, Award } from 'lucide-react';

import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Hero Background */}
      <HeroBackground />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6 inline-block">
            The Operating System for Human Longevity
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-tight mb-8">
            Predict. Personalize.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Prevent. Prosper.
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Transforming healthcare from reactive treatment to continuous, AI-driven prevention—built for individuals, enterprises, insurers, and governments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-cyan-500/20">
            Request a Demo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full bg-card text-current font-bold text-lg hover:bg-white/10 transition-all duration-300">
            Start Your Longevity Journey
          </button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8 border-y border-black/5 dark:border-white/5"
        >
          <div className="flex items-center gap-2 opacity-50 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2 opacity-50 text-sm font-medium">
            <Lock className="w-4 h-4 text-cyan-500" />
            SOC2 Ready
          </div>
          <div className="flex items-center gap-2 opacity-50 text-sm font-medium">
            <Globe className="w-4 h-4 text-cyan-500" />
            GDPR Compliant
          </div>
          <div className="flex items-center gap-2 opacity-50 text-sm font-medium">
            <Award className="w-4 h-4 text-cyan-500" />
            XPRIZE Healthspan Semifinalist
          </div>
        </motion.div>
      </div>
    </section>
  );
};
