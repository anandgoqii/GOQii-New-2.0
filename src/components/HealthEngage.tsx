import React from 'react';
import { motion } from 'motion/react';
import { Activity, Smartphone, HeartPulse, Sparkles } from 'lucide-react';

export const HealthEngage = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            GOQii HealthEngage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            The Enterprise Health Intelligence Platform. A unified platform for insurers, hospitals, and enterprises to manage population health at scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Capabilities</h3>
            <ul className="space-y-6">
              {[
                { icon: Activity, text: "Risk stratification and triage" },
                { icon: Smartphone, text: "Digital care pathways" },
                { icon: HeartPulse, text: "Remote patient monitoring" },
                { icon: Sparkles, text: "AI-powered engagement" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-slate-700 dark:text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-cyan-500 p-10 rounded-[2.5rem] text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Impact</h3>
              <ul className="space-y-6">
                {[
                  "Reduced claims",
                  "Improved adherence",
                  "Better health outcomes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xl font-medium">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="mt-12 w-full py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-cyan-50 transition-colors">
              Explore HealthEngage
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
