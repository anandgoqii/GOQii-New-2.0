import React from 'react';
import { motion } from 'motion/react';

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-cyan-500 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/future/1920/1080?blur=10')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-90" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Build the Future of Health
          </h2>
          <p className="text-2xl font-light mb-12 opacity-90">
            Whether you're an enterprise, insurer, or healthcare provider—<br />
            GOQii helps you drive measurable health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-slate-50 transition-colors text-lg shadow-xl shadow-black/10">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-lg">
              Contact Enterprise Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
