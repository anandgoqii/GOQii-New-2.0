import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Stethoscope, 
  Microscope, 
  ShieldCheck, 
  Activity, 
  ChevronRight 
} from 'lucide-react';

const TEAM = [
  { name: 'Vishal Gondal', role: 'Founder & CEO', image: 'https://picsum.photos/seed/vishal/400/400' },
  { name: 'Dr. Shriram Nene', role: 'Chief Medical Officer', image: 'https://picsum.photos/seed/shriram/400/400' },
  { name: 'Dr. Daniel Kraft', role: 'Clinical Advisor', image: 'https://picsum.photos/seed/daniel/400/400' },
  { name: 'Dr. Peter Diamandis', role: 'Strategic Advisor', image: 'https://picsum.photos/seed/peter/400/400' },
];

export const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Backed by Science. Built by Experts.</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our leadership and clinical consortium bring together world-class expertise in medicine, technology, and behavioral science.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card p-8 rounded-[2.5rem] text-center hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-8 border-2 border-cyan-500/20 group-hover:border-cyan-500 transition-colors duration-500 shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">{member.name}</h3>
              <p className="text-[10px] md:text-sm opacity-50 uppercase tracking-widest font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
