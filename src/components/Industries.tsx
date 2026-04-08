import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, FlaskConical, Building2, Stethoscope, Activity, Network, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'insurance',
    title: 'For Insurers & Payers',
    subtitle: 'Transform insurance from reactive claims to proactive health assurance.',
    icon: ShieldCheck,
    capabilities: [
      'AI-driven risk scoring',
      'Dynamic premium optimization',
      'Continuous member engagement',
      'Preventive health programs'
    ],
    outcome: 'Reduced claims. Improved risk pools. Healthier members.',
    image: 'https://picsum.photos/seed/insurance-health/800/600',
    link: '#insurers'
  },
  {
    id: 'pharma',
    title: 'For Pharma & Life Sciences',
    subtitle: 'Drive adherence and real-world outcomes across patient journeys.',
    icon: FlaskConical,
    capabilities: [
      'Therapy adherence programs',
      'Patient engagement platforms',
      'Real-world evidence generation',
      'AI-driven intervention systems'
    ],
    outcome: 'Improved adherence. Better outcomes. Actionable insights.',
    image: 'https://picsum.photos/seed/pharma-lab/800/600',
    link: '#pharma'
  },
  {
    id: 'corporates',
    title: 'For Employers & Corporates',
    subtitle: 'Build healthier, more productive, and engaged workforces.',
    icon: Building2,
    capabilities: [
      'Employee wellness programs',
      'Behavior change coaching',
      'Gamified engagement',
      'Productivity insights'
    ],
    outcome: 'Higher engagement. Reduced absenteeism. Better performance.',
    image: 'https://picsum.photos/seed/corporate-wellness/800/600',
    link: '#corporates'
  },
  {
    id: 'hospitals',
    title: 'For Hospitals & Providers',
    subtitle: 'Extend care beyond discharge with continuous monitoring.',
    icon: Stethoscope,
    capabilities: [
      'Remote patient monitoring',
      'Digital care pathways',
      'Post-discharge engagement',
      'Clinical triage systems'
    ],
    outcome: 'Better recovery. Lower readmissions. Continuous care.',
    image: 'https://picsum.photos/seed/hospital-care/800/600',
    link: '#hospitals'
  }
];

// Use isomorphic layout effect for accurate measurement without SSR warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useIsomorphicLayoutEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        // Calculate the exact distance needed to scroll the track to the end
        // using clientWidth to avoid scrollbar width issues on Windows
        const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
        const range = trackRef.current.scrollWidth - viewportWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };
    
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Map scroll progress to exact pixel translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[400vh] bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 shrink-0 pt-16 md:pt-0">
          <h2 className="text-sm md:text-base text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase mb-2">Industry Ecosystems</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white">One Platform. Multiple Healthcare Ecosystems.</h3>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-base md:text-lg">GOQii adapts to the needs of every stakeholder in the healthcare value chain.</p>
        </div>

        {/* Horizontal Track */}
        <motion.div 
          ref={trackRef}
          style={{ x }} 
          className="flex w-max gap-4 md:gap-8 px-4 md:px-8 items-center pb-8"
        >
          {INDUSTRIES.map((ind, idx) => (
            <div key={idx} className="w-[85vw] md:w-[500px] lg:w-[600px] h-[65vh] md:h-[60vh] min-h-[480px] md:min-h-[450px] max-h-[650px] shrink-0 rounded-[2rem] p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group text-white">
              
              {/* Background Image & Overlay */}
              <img 
                src={ind.image} 
                alt={ind.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/60" />

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center mb-4 md:mb-6">
                  <ind.icon className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                </div>
                <h4 className="text-xl md:text-3xl font-display font-bold text-white mb-2 md:mb-3">{ind.title}</h4>
                <p className="text-sm md:text-base text-slate-300 mb-4 md:mb-6">{ind.subtitle}</p>
                
                <div className="mb-4 md:mb-6">
                  <h5 className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 md:mb-3">Capabilities</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 mt-auto flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">Outcome</h5>
                  <p className="text-sm md:text-base font-medium text-white">{ind.outcome}</p>
                </div>
                <a 
                  href={ind.link} 
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl transition-colors"
                >
                  Explore {ind.title.replace('For ', '')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Final Card */}
          <div className="w-[85vw] md:w-[500px] lg:w-[600px] h-[65vh] md:h-[60vh] min-h-[480px] md:min-h-[450px] max-h-[650px] shrink-0 bg-cyan-500 rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080?blur=10')] opacity-20 mix-blend-overlay" />
            <Network className="w-16 h-16 text-white mb-6 relative z-10" />
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 relative z-10 leading-tight">
              All systems connect back into ALIVE O.S.
            </h3>
            <p className="text-lg md:text-xl font-bold tracking-widest uppercase opacity-90 relative z-10">One Platform</p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};
