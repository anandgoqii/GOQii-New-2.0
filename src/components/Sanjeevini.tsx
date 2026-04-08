import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Microscope, 
  ShieldCheck, 
  Activity, 
  Users, 
  ChevronRight 
} from 'lucide-react';

const SECTIONS = [
  { title: 'Philosophy', icon: <Stethoscope className="w-5 h-5" />, content: 'Transforming healthcare from reactive treatment to continuous, AI-driven prevention.' },
  { title: 'Thesis', icon: <Microscope className="w-5 h-5" />, content: 'Combining real-time biological data with behavioral science to extend human healthspan.' },
  { title: 'Clinical Consortium', icon: <Users className="w-5 h-5" />, content: 'A global network of medical experts and clinical researchers validating our outcomes.' },
  { title: 'Diagnostics & Infrastructure', icon: <Activity className="w-5 h-5" />, content: 'Advanced lab testing and secure data infrastructure for population-scale health.' },
  { title: 'Adherence Engine', icon: <ShieldCheck className="w-5 h-5" />, content: 'Proprietary behavioral neurocoding that ensures sustained engagement and results.' },
];

export const Sanjeevini = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Sanjeevini Consortium</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            The Science Behind Longevity. Built on a foundation of clinical authority and rigorous validation.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-base hover:bg-cyan-600 transition-all duration-300 shadow-xl shadow-cyan-500/20 group"
          >
            Visit Sanjeevini Consortium
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {SECTIONS.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-3xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {section.title}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="opacity-70 leading-relaxed font-light">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl shadow-black/10 dark:shadow-cyan-500/10"
            >
              <img 
                src="https://picsum.photos/seed/clinical-lab/800/800" 
                alt="Clinical Excellence" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </motion.div>
            
            <div className="absolute -bottom-8 -left-8 bg-glass p-8 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 max-w-xs">
              <p className="text-4xl font-bold text-cyan-500 mb-2">100%</p>
              <p className="text-sm opacity-60 uppercase tracking-widest font-bold">Clinical Validation</p>
              <p className="text-xs opacity-50 mt-2">All protocols are reviewed and validated by our global clinical consortium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
