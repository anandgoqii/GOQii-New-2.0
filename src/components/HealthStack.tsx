import React from 'react';
import { motion } from 'motion/react';
import { 
  Watch, 
  UserCircle, 
  Users, 
  Database, 
  FlaskConical, 
  Gift,
  Zap
} from 'lucide-react';

const STACK_COMPONENTS = [
  { id: 'wearables', title: 'Smart Wearable Devices', icon: <Watch className="w-6 h-6" />, description: 'High-precision tracking of biological signals.' },
  { id: 'twin', title: 'Personalized Digital Twin', icon: <UserCircle className="w-6 h-6" />, description: 'Evolving model of your unique biology.' },
  { id: 'coaching', title: 'AI-Augmented Coaching', icon: <Users className="w-6 h-6" />, description: 'Human accountability powered by AI intelligence.' },
  { id: 'locker', title: 'Health Locker', icon: <Database className="w-6 h-6" />, description: 'Secure, unified medical record storage.' },
  { id: 'labs', title: 'Integrated Lab Testing', icon: <FlaskConical className="w-6 h-6" />, description: 'Direct-to-consumer diagnostics and analysis.' },
  { id: 'rewards', title: 'UHT Rewards System', icon: <Gift className="w-6 h-6" />, description: 'Gamified incentives for healthy behaviors.' },
];

export const HealthStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">GOQii HealthStack</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            A fully integrated health ecosystem where six interconnected components work seamlessly to power the human longevity journey.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Central Core Connection Visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
            <div className="w-[80%] h-[80%] rounded-full border-[1px] border-cyan-500/50 animate-pulse" />
            <div className="absolute w-[60%] h-[60%] rounded-full border-[1px] border-cyan-500/30 animate-pulse delay-500" />
          </div>

          {STACK_COMPONENTS.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 bg-card p-8 rounded-[2rem] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform text-white`}>
                {comp.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">{comp.title}</h3>
              <p className="opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                {comp.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <Zap className="w-3 h-3" />
                Connected to ALIVE Core
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
