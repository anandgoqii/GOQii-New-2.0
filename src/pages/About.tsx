import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Globe, Activity, Heart, ShieldCheck, Users, MapPin, Target } from 'lucide-react';
import { Leadership } from '../components/Leadership';

export const About = () => {
  return (
    <main className="relative pt-24 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* HERO — ABOUT GOQii */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent dark:from-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              About GOQii
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
              Transforming Preventive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Healthcare at Scale</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              GOQii is a Smart Health Ecosystem that combines advanced technology with human coaching to drive a permanent shift from reactive sick care to proactive preventive healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR STORY (fade text) */}
      <section className="py-24 px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">A Mission to Redefine Healthcare</h3>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              <p>
                Founded in 2014 by visionary entrepreneur Vishal Gondal, GOQii has been at the forefront of transforming preventive healthcare on a global scale.
              </p>
              <p>
                What started as a mission to shift the focus from reactive “sick care” to proactive preventive care has evolved into a comprehensive digital health platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — WHAT WE DO (zoom) */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">A Complete Health Platform</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              GOQii is a comprehensive digital health and wellness solution that integrates healthcare, fitness, and chronic disease management into one seamless experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Wearable technology" },
              { icon: Target, title: "AI-driven insights" },
              { icon: Users, title: "Personalized coaching" },
              { icon: Heart, title: "Medical & health services" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-center border border-slate-100 dark:border-slate-700"
              >
                <div className="w-16 h-16 mx-auto bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — HOW WE WORK */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">How We Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Technology + Human Intelligence</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-8">
              GOQii blends intelligent data with expert human coaching to deliver continuous engagement and long-term behavior change.
            </p>
            <ul className="space-y-4">
              {[
                "Personalized health journeys",
                "Real-time insights and nudges",
                "Continuous monitoring and engagement",
                "Expert-led coaching and guidance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-6 h-6 text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/coaching/800/800" alt="Coaching" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR ECOSYSTEM (visual) */}
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.4)_0%,transparent_100%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4">Our Ecosystem</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">A Smart Preventive Health Ecosystem</h3>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto mb-16">
              GOQii’s platform connects devices, data, AI, and human coaching into a unified system that delivers measurable health outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Track health continuously",
              "Understand risks early",
              "Take proactive action",
              "Sustain healthy behavior"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
              >
                <div className="text-cyan-400 font-bold text-2xl mb-4">0{idx + 1}</div>
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — GLOBAL PRESENCE (map style) */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Global Presence</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Built in Silicon Valley. Scaled Globally.</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              Headquartered in Menlo Park, California, with offices in Mumbai, India, GOQii operates at the intersection of innovation and impact.
            </p>
          </motion.div>

          <div className="relative h-[400px] rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <Globe className="absolute w-[800px] h-[800px] text-slate-200 dark:text-slate-700 opacity-50" strokeWidth={0.5} />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Menlo Park</h4>
                <p className="text-slate-500">California, USA</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30 mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Mumbai</h4>
                <p className="text-slate-500">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE — OUR IMPACT (metrics) */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Our Impact</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Driving Health Outcomes at Scale</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
              GOQii has empowered millions of users to take control of their health and has contributed to building healthier communities globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Individuals", value: "Millions+" },
              { label: "Enterprises", value: "500+" },
              { label: "Insurers", value: "Global" },
              { label: "Governments", value: "Partnered" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENE — OUR APPROACH */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Our Approach</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">From Data to Behavior Change</h3>
            <p className="text-2xl text-slate-700 dark:text-slate-300 font-light mb-12">
              GOQii focuses on the most critical gap in healthcare:<br/>
              <span className="font-bold text-cyan-500">Turning insights into sustained action.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {["Continuous engagement", "Habit formation", "Measurable outcomes"].map((item, idx) => (
                <div key={idx} className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Leadership />

      {/* SCENE — OUR VISION (slow cinematic) */}
      <section className="py-32 px-4 relative overflow-hidden bg-slate-950 text-white">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">Our Vision</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">The Future of Preventive Healthcare</h3>
            <p className="text-2xl font-light text-slate-300 mb-12">
              We believe healthcare should not begin when illness occurs.<br/>
              It should be continuous, personalized, and proactive.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              {[
                "Health is monitored in real time",
                "Interventions happen early",
                "Outcomes are measurable",
                "Longevity is optimized"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCENE — OUR MOVEMENT */}
      <section className="py-24 px-4 bg-cyan-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-100 mb-4">Our Movement</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold mb-8">Be The Force</h3>
            <p className="text-2xl font-light mb-8">
              GOQii is more than a platform—it is a movement.
            </p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              We are enabling individuals to become the force of change in their own health journey and creating a global shift toward healthier living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Join the Preventive Health Revolution</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-10">
            Whether you're an individual, enterprise, or healthcare provider, GOQii empowers you to take control of health outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition-all duration-300 shadow-xl shadow-cyan-500/20">
              Request a Demo
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700">
              Explore the Platform
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};
