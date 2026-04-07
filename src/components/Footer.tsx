import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Zap 
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-black/5 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center mb-24 overflow-hidden group shadow-2xl shadow-cyan-500/20 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Let’s Build the Future of Health Together</h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Whether you're an enterprise, insurer, healthcare provider, or government—GOQii helps you drive measurable health outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 group">
              Request a Demo
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xl hover:bg-white/20 transition-all duration-300">
              Contact Enterprise Sales
            </button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="https://appcdn.goqii.com/storeimg/8363_1775122686.png" 
                alt="GOQii" 
                className="h-8 w-auto object-contain dark:hidden"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://appcdn.goqii.com/storeimg/21868_1774952258.png" 
                alt="GOQii" 
                className="h-8 w-auto object-contain hidden dark:block"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="opacity-50 leading-relaxed font-light mb-8">
              Transforming healthcare from reactive treatment to continuous, AI-driven prevention.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full bg-card hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full bg-card hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full bg-card hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full bg-card hover:bg-white/10 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Solutions</h4>
            <ul className="space-y-4 opacity-50">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">For Organizations</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">For Individuals</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">For Insurers</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">For Providers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Resources</h4>
            <ul className="space-y-4 opacity-50">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Clinical Authority</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">HealthStack</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Longevity Journey</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
            <ul className="space-y-4 opacity-50">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm">
          <p>© 2026 GOQii Technologies. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-cyan-500 transition-colors">Do Not Sell My Info</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
