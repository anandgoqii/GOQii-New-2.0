import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Activity, 
  Database, 
  ChevronLeft, 
  ChevronRight,
  Smartphone
} from 'lucide-react';

const FEATURES = [
  {
    id: 'nutrigenius',
    title: 'NutriGenius AI',
    icon: <Camera className="w-8 h-8" />,
    description: 'Snap a photo of your meal and let AI Image Recognition instantly identify ingredients, track daily calories, and calculate macronutrients with precision.',
    color: 'from-green-400 to-emerald-600',
    image: 'https://appcdn.goqii.com/storeimg/4859_1775038859.jpg'
  },
  {
    id: 'safe-score',
    title: 'S.A.F.E. Score',
    icon: <Activity className="w-8 h-8" />,
    description: 'Sedentary, Active, Fit, or Elite. Using AI and your health data, we evaluate your lifestyle to reveal your pace of ageing.',
    color: 'from-blue-400 to-cyan-600',
    image: 'https://appcdn.goqii.com/storeimg/1781_1775038942.jpg'
  },
  {
    id: 'locker',
    title: 'Health Locker',
    icon: <Database className="w-8 h-8" />,
    description: 'Visualize your health journey through advanced analytics and trends while securely storing medical records.',
    color: 'from-purple-400 to-indigo-600',
    image: 'https://appcdn.goqii.com/storeimg/7613_1775038974.jpg'
  }
];

export const AppEcosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % FEATURES.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);

  return (
    <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className="w-8 h-8 text-cyan-500" />
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">The GOQii App</h2>
          </div>
          <p className="text-xl opacity-70 max-w-3xl mx-auto font-light leading-relaxed">
            Purpose-Driven Intelligence. Connect your biological signals to daily behavioral action.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center gap-12">
          {/* Feature Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${FEATURES[activeIndex].color} flex items-center justify-center shadow-xl shadow-cyan-500/10 text-white`}>
                  {FEATURES[activeIndex].icon}
                </div>
                <h3 className="text-4xl font-display font-bold">{FEATURES[activeIndex].title}</h3>
                <p className="text-xl opacity-70 leading-relaxed font-light">
                  {FEATURES[activeIndex].description}
                </p>
                
                <div className="flex items-center gap-4 pt-8">
                  <button onClick={prev} className="p-4 rounded-full bg-card hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={next} className="p-4 rounded-full bg-card hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="flex gap-2 ml-4">
                    {FEATURES.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Feature Visual */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 group shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={FEATURES[activeIndex].image}
                  alt={FEATURES[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
