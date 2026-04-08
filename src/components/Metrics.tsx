import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const METRICS = [
  { value: 34, suffix: '%', label: 'reduction in emergency visits' },
  { value: 90, suffix: '%', label: 'patient satisfaction' },
  { value: 85, suffix: '%', label: 'employee engagement' },
  { value: 28, suffix: '%', label: 'improvement in adherence' },
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
    <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080?blur=10')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Measurable Outcomes. Real Impact.</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-display font-bold text-cyan-400 mb-4">
                <Counter {...metric} />
              </div>
              <p className="text-sm md:text-base opacity-80 uppercase tracking-widest font-bold leading-relaxed max-w-[200px] mx-auto">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
