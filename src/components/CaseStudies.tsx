import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  HeartPulse, 
  ChevronRight 
} from 'lucide-react';

const CASE_STUDIES = [
  { 
    title: 'Chronic Disease Management', 
    icon: <HeartPulse className="w-6 h-6" />, 
    description: 'Improving outcomes for patients with diabetes and hypertension through continuous monitoring and AI-driven nudges.', 
    result: '34% reduction in ER visits',
    image: 'https://picsum.photos/seed/chronic-care/600/400'
  },
  { 
    title: 'Enterprise Wellness', 
    icon: <Users className="w-6 h-6" />, 
    description: 'Scaling health and productivity across global workforces with gamified engagement and human accountability.', 
    result: '85% increase in employee engagement',
    image: 'https://picsum.photos/seed/corporate-health/600/400'
  },
  { 
    title: 'Public Health Programs', 
    icon: <BarChart3 className="w-6 h-6" />, 
    description: 'Enabling large-scale preventive healthcare initiatives for governments and public health organizations.', 
    result: '90% patient satisfaction (NHS)',
    image: 'https://picsum.photos/seed/public-health/600/400'
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/5 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Real Case Studies, Real Results.</h2>
          <p className="text-xl opacity-70 max-w-3xl mx-auto font-light leading-relaxed">
            From improving chronic disease management to scaling public health initiatives, our dynamic motivation model delivers measurable clinical outcomes today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-[2.5rem] overflow-hidden hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-cyan-500/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {study.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">{study.title}</h3>
                <p className="opacity-70 leading-relaxed mb-6 group-hover:opacity-100 transition-opacity">
                  {study.description}
                </p>
                <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-cyan-500 font-bold text-lg">{study.result}</span>
                  <button className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-full bg-card text-current font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};
