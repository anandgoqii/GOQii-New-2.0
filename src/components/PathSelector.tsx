import React from 'react';
import { motion } from 'motion/react';

interface PathSelectorProps {
  activePath: 'org' | 'ind';
  onPathChange: (path: 'org' | 'ind') => void;
}

export const PathSelector: React.FC<PathSelectorProps> = ({ activePath, onPathChange }) => {
  return (
    <section className="py-12 relative z-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
          Choose Your Path
        </h3>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative flex items-center p-1.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
      >
        {/* Sliding Indicator */}
        <motion.div
          className="absolute inset-y-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-md"
          animate={{
            left: activePath === 'org' ? '6px' : 'calc(50% + 0px)'
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        
        <button
          onClick={() => onPathChange('org')}
          className={`relative z-10 px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300 ${
            activePath === 'org' ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          For Organizations
        </button>
        
        <button
          onClick={() => onPathChange('ind')}
          className={`relative z-10 px-6 md:px-10 py-3 rounded-full text-sm md:text-base font-bold transition-colors duration-300 ${
            activePath === 'ind' ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          For Individuals
        </button>
      </motion.div>
    </section>
  );
};
