import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Hospital, 
  Microscope, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

const SOLUTIONS = [
  { 
    title: 'Employers & Corporates', 
    icon: <Building2 className="w-6 h-6" />, 
    description: 'Drive employee health, productivity, and engagement at scale.', 
    cta: 'Explore Corporate Solutions',
    color: 'from-blue-500 to-blue-700'
  },
  { 
    title: 'Insurers & Payers', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    description: 'Shift from reactive claims to proactive risk reduction.', 
    cta: 'Explore Insurance Solutions',
    color: 'from-cyan-500 to-cyan-700'
  },
  { 
    title: 'Hospitals & Providers', 
    icon: <Hospital className="w-6 h-6" />, 
    description: 'Enable continuous care beyond discharge.', 
    cta: 'Explore Provider Solutions',
    color: 'from-purple-500 to-purple-700'
  },
  { 
    title: 'Pharma & Life Sciences', 
    icon: <Microscope className="w-6 h-6" />, 
    description: 'Drive adherence and real-world patient outcomes.', 
    cta: 'Explore Pharma Solutions',
    color: 'from-emerald-500 to-emerald-700'
  },
  { 
    title: 'Government & Public Health', 
    icon: <Globe className="w-6 h-6" />, 
    description: 'Scale preventive healthcare across populations.', 
    cta: 'Explore Public Health Solutions',
    color: 'from-orange-500 to-orange-700'
  },
];

export const Solutions = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Industry Solutions</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Built for Every Healthcare Stakeholder. Scalable, AI-driven solutions that deliver measurable health outcomes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {SOLUTIONS.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card p-10 rounded-[2.5rem] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">{solution.title}</h3>
              <p className="opacity-70 leading-relaxed mb-8 group-hover:opacity-100 transition-opacity">
                {solution.description}
              </p>
              
              <button className="flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-widest text-xs hover:text-cyan-600 transition-colors">
                {solution.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
