import React, { useState } from 'react';
import { motion } from 'motion/react';

const FlipCard = ({ from, to, delay }: { from: string, to: string, delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative h-72 w-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] p-8 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-4">Before</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-500 dark:text-slate-400 text-center">{from}</h3>
          <div className="absolute bottom-6 text-slate-400 dark:text-slate-500 text-sm font-medium flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            Hover to transform <span className="text-lg">→</span>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2rem] p-8 flex flex-col items-center justify-center shadow-xl shadow-cyan-500/20"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-cyan-100 font-bold tracking-widest uppercase text-xs mb-4">After</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white text-center">{to}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TheShift = () => {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        
        {/* SCENE — THE SHIFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-6">The Shift</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8">
            From Reactive Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">to Continuous Health</span>
          </h3>
          
          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            <p className="font-medium text-slate-800 dark:text-slate-200 mb-4">Healthcare today is broken.</p>
            <p>Care is episodic.<br/>Action comes too late.</p>
          </div>

          <div className="inline-block px-8 py-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-bold text-xl md:text-2xl">
            GOQii changes this
          </div>
        </motion.div>

        {/* TRANSFORMATION GRID */}
        <div className="grid gap-6 md:grid-cols-3 text-left max-w-5xl mx-auto mb-24">
          <FlipCard from="Sick Care" to="Preventive Care" delay={0.2} />
          <FlipCard from="Fragmented Data" to="Continuous Intelligence" delay={0.4} />
          <FlipCard from="Passive Tracking" to="Active Intervention" delay={0.6} />
        </div>

        {/* FINAL LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            A system that moves from <br className="md:hidden" />
            <span className="text-cyan-500">reaction to prevention.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};
