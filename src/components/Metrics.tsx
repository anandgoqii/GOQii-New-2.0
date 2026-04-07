import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const METRICS = [
  { value: 34, suffix: '%', label: 'reduction in ER visits' },
  { value: 90, suffix: '%', label: 'patient satisfaction (NHS programs)' },
  { value: 85, suffix: '%', label: 'increase in employee engagement' },
  { value: 28, suffix: '%', label: 'improvement in treatment adherence' },
  { value: 30, suffix: '%', label: 'increase in preventive health engagement' },
  { value: 21, prefix: '+', suffix: '%', label: 'immune function' },
  { value: 16, prefix: '+', suffix: '%', label: 'muscularity' },
  { value: 23, prefix: '+', suffix: '%', label: 'cognitive performance' },
];

const Counter = ({ value, prefix = '', suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = duration * 60;
      const increment = end / totalSteps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export const Metrics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Proven Outcomes at Scale</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Measurable clinical and operational impact across diverse populations and healthcare settings.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-3xl p-8 text-center hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform">
                <Counter {...metric} />
              </div>
              <p className="text-xs md:text-sm opacity-60 uppercase tracking-widest font-bold leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/5">
          <p className="text-center opacity-40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-12">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder logos using text for now as per instructions (no stock imagery) */}
            <div className="text-xl md:text-2xl font-bold tracking-tighter">NHS</div>
            <div className="text-xl md:text-2xl font-bold tracking-tighter">SAMSUNG</div>
            <div className="text-xl md:text-2xl font-bold tracking-tighter">RELIANCE</div>
            <div className="text-xl md:text-2xl font-bold tracking-tighter">ADITYA BIRLA</div>
            <div className="text-xl md:text-2xl font-bold tracking-tighter">TATA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
