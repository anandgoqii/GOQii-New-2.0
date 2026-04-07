import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import { 
  Dna, 
  UserCircle, 
  Watch, 
  BrainCircuit, 
  Navigation, 
  X,
  Zap
} from 'lucide-react';

interface PillarNode {
  id: string;
  title: string;
  content: string;
  extendedContent: string;
  icon: React.ReactNode;
  position: 'top' | 'left' | 'right' | 'bottom' | 'orbit';
  color: string;
}

const PILLARS: PillarNode[] = [
  {
    id: 'genomics',
    title: 'Predictive Genomics',
    content: 'Your body tells a story at the molecular level. We read it in real-time.',
    extendedContent: 'By analyzing your unique genetic markers and combining them with real-time biomarkers, ALIVE O.S. predicts potential health risks before they manifest, allowing for truly personalized preventative care.',
    icon: <Dna className="w-6 h-6" />,
    position: 'top',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'avatars',
    title: 'AI-Powered Avatars',
    content: 'A digital twin of your biology that evolves with you.',
    extendedContent: 'Your digital avatar is a living model of your physiological state. It simulates the impact of nutrition, sleep, and exercise on your specific biology, allowing you to "test drive" lifestyle changes.',
    icon: <UserCircle className="w-6 h-6" />,
    position: 'left',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'wearables',
    title: 'Sentient Wearables',
    content: 'Devices that do not just track—but understand.',
    extendedContent: 'Moving beyond simple step counting, our sentient ecosystem interprets heart rate variability, skin conductance, and movement patterns to understand your stress levels and recovery needs in real-time.',
    icon: <Watch className="w-6 h-6" />,
    position: 'right',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 'neurocoding',
    title: 'Behavioral Neurocoding',
    content: 'The science of making healthy habits stick permanently.',
    extendedContent: 'Leveraging neuroplasticity and behavioral psychology, ALIVE O.S. delivers micro-nudges at the precise moment your brain is most receptive to forming new, positive neural pathways.',
    icon: <BrainCircuit className="w-6 h-6" />,
    position: 'bottom',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 'routing',
    title: 'Quantum Health Routing',
    content: 'Your personal health GPS, recalculating in real-time.',
    extendedContent: 'A dynamic decision engine that processes millions of data points to route you toward your optimal health state, adjusting your daily plan based on how your body is actually responding.',
    icon: <Navigation className="w-6 h-6" />,
    position: 'orbit',
    color: 'from-cyan-400 to-cyan-600',
  },
];

interface ConnectionLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  delay: number;
}

const ConnectionLine: React.FC<ConnectionLineProps & { isActive?: boolean; isDimmed?: boolean }> = ({ 
  startX, startY, endX, endY, color, delay, isActive, isDimmed 
}) => {
  return (
    <svg 
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    >
      <defs>
        <linearGradient id={`grad-${delay}`} x1={startX} y1={startY} x2={endX} y2={endY} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="50%" stopColor={color} stopOpacity={isActive ? 0.8 : 0.2} />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Base Line */}
      <motion.line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={`url(#grad-${delay})`}
        strokeWidth="0.25"
        strokeDasharray="0 3"
        strokeLinecap="round"
        className="text-black dark:text-white"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: isDimmed ? 0.1 : 1 }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />

      {/* Flowing Light Pulse (Node -> Core) */}
      <motion.circle
        r="0.6"
        className="fill-cyan-500 dark:fill-white"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={{ 
          offsetDistance: ["100%", "0%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: delay + 1,
          ease: "linear"
        }}
        style={{
          offsetPath: `path('M ${endX} ${endY} L ${startX} ${startY}')`,
          offsetRotate: "auto",
          filter: `drop-shadow(0 0 4px ${color})`
        }}
      />
    </svg>
  );
};export const AliveOS = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarNode | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const coreScale = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [1, 1.1, 2]);
  const coreOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  const RADIUS = 30; // Percentage from center
  const CENTER = 50; // Center percentage

  const getPillarCoords = (index: number) => {
    const total = PILLARS.length;
    // Start from top (-90 degrees)
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle)
    };
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 px-4 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">ALIVE O.S.</h2>
        <p className="text-cyan-500 font-medium tracking-[0.2em] uppercase text-xs mb-6">The Intelligence Layer Behind GOQii</p>
        <p className="opacity-70 max-w-2xl mx-auto text-lg leading-relaxed">Five interconnected pillars working in harmony to optimize your biological and cognitive potential.</p>
      </motion.div>

      <div ref={sectionRef} className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        {/* Connection Lines */}
        <div className="hidden md:block absolute inset-0">
          {PILLARS.map((pillar, idx) => {
            const coords = getPillarCoords(idx);
            const isActive = hoveredPillar === pillar.id;
            const isDimmed = hoveredPillar !== null && hoveredPillar !== pillar.id;
            return (
              <ConnectionLine 
                key={`line-${pillar.id}`}
                startX={CENTER}
                startY={CENTER}
                endX={coords.x}
                endY={coords.y}
                color={pillar.color.split(' ')[0].replace('from-', '')}
                delay={1.2 + idx * 0.15} // Appear after core
                isActive={isActive}
                isDimmed={isDimmed}
              />
            );
          })}
        </div>

        {/* Core Node */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          style={{ scale: coreScale, opacity: coreOpacity }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20"
        >
          <motion.div 
            animate={{ 
              scale: hoveredPillar ? 1.05 : [1, 1.04, 1],
              boxShadow: hoveredPillar 
                ? (isDark ? "0 0 80px rgba(34,211,238,0.4)" : "0 0 60px rgba(34,211,238,0.2)")
                : (isDark 
                    ? ["0 0 30px rgba(34,211,238,0.1)", "0 0 60px rgba(34,211,238,0.2)", "0 0 30px rgba(34,211,238,0.1)"]
                    : ["0 0 20px rgba(34,211,238,0.05)", "0 0 40px rgba(34,211,238,0.1)", "0 0 20px rgba(34,211,238,0.05)"])
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-[2px] flex items-center justify-center relative"
          >
            {/* Inner Breathing Glow */}
            <motion.div 
              animate={{ opacity: isDark ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
            />
            
            <div className="w-full h-full rounded-full bg-white dark:bg-[#020617] flex flex-col items-center justify-center text-center p-6 border border-black/5 dark:border-white/10 relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              <Zap className="w-10 h-10 text-cyan-500 mb-3" />
              <h3 className="text-2xl font-bold tracking-tight">ALIVE O.S.</h3>
              <p className="text-[10px] text-cyan-500/60 uppercase tracking-[0.3em] mt-2">Intelligence Core</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pillars */}
        {PILLARS.map((pillar, idx) => {
          const coords = getPillarCoords(idx);
          const isDimmed = hoveredPillar !== null && hoveredPillar !== pillar.id;
          const isActive = hoveredPillar === pillar.id;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
              animate={isInView ? { 
                opacity: isDimmed ? 0.3 : 1, 
                scale: isActive ? 1.15 : 1,
                left: `${coords.x}%`,
                top: `${coords.y}%`,
              } : {}}
              transition={isInView ? { 
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                left: { duration: 1, delay: 1.5 + idx * 0.15, ease: [0.16, 1, 0.3, 1] },
                top: { duration: 1, delay: 1.5 + idx * 0.15, ease: [0.16, 1, 0.3, 1] },
                initial: { delay: 1.5 + idx * 0.15 }
              } : {}}
              className="absolute z-30 hidden md:block"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: idx * 0.7,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <button
                  onClick={() => setSelectedPillar(pillar)}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} p-[1px] mb-4 shadow-2xl transition-all duration-500 ${isActive ? 'shadow-cyan-500/40 scale-110' : 'shadow-black/10 dark:shadow-black/50'}`}>
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-[#020617] flex items-center justify-center border border-black/5 dark:border-white/5">
                      <div className={`group-hover:scale-110 transition-transform duration-500 ${isActive ? 'text-cyan-500' : 'text-slate-600 dark:text-slate-300'}`}>
                        {pillar.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 text-center whitespace-nowrap ${isActive ? 'text-cyan-500' : 'opacity-60'}`}>
                      {pillar.title.toUpperCase()}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="h-0.5 w-8 bg-cyan-500 mt-1 rounded-full"
                      />
                    )}
                  </div>
                </button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Pillars */}
      <div className="md:hidden w-full px-6 space-y-4 mt-8">
        {PILLARS.map((pillar) => (
          <div 
            key={pillar.id}
            onClick={() => setSelectedPillar(pillar)}
            className="bg-card p-5 rounded-2xl flex items-center gap-4 active:scale-95 transition-transform"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg text-white`}>
              {pillar.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight">{pillar.title}</span>
              <span className="text-[10px] opacity-50 uppercase tracking-wider">Tap to explore</span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-glass border border-black/5 dark:border-white/10 rounded-[2.5rem] max-w-2xl w-full p-10 md:p-12 relative shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${selectedPillar.color} opacity-20 blur-[80px]`} />
              
              <button 
                onClick={() => setSelectedPillar(null)} 
                className="absolute top-8 right-8 opacity-50 hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedPillar.color} flex items-center justify-center mb-8 shadow-2xl text-white`}>
                {React.cloneElement(selectedPillar.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              
              <h3 className="text-4xl font-display font-bold mb-6 tracking-tight">{selectedPillar.title}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent mb-8 rounded-full" />
              
              <p className="text-cyan-500 text-xl mb-8 font-medium leading-relaxed italic">
                "{selectedPillar.content}"
              </p>
              
              <p className="opacity-70 text-lg leading-relaxed font-light">
                {selectedPillar.extendedContent}
              </p>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="px-8 py-3 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-colors"
                >
                  Close Exploration
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
