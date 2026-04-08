import React from 'react';
import { motion } from 'motion/react';
import { Brain, Users, Trophy, RefreshCw } from 'lucide-react';

export const DynamicMotivation = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Turning Insights into Action
            </h2>
            <p className="text-2xl text-slate-600 dark:text-slate-400 font-light mb-8">
              GOQii is not just a tracking platform.<br />
              <span className="font-bold text-cyan-500">It is a behavior change system.</span>
            </p>
            
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <p className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-2">Outcome</p>
              <p className="text-xl font-medium text-slate-900 dark:text-white">
                Sustained behavior change <span className="text-cyan-500">→</span> measurable health impact
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Brain, title: "AI-driven nudges" },
              { icon: Users, title: "Human coaching" },
              { icon: Trophy, title: "Gamification and rewards" },
              { icon: RefreshCw, title: "Continuous engagement loops" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-cyan-500/50 transition-colors group">
                <item.icon className="w-10 h-10 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
