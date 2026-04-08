import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 flex items-center justify-between bg-glass backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src={isDark ? "https://appcdn.goqii.com/storeimg/21868_1774952258.png" : "https://appcdn.goqii.com/storeimg/8363_1775122686.png"} 
            alt="GOQii" 
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest opacity-70">
        <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
        {isHome && (
          <>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#healthstack" className="hover:text-cyan-400 transition-colors">HealthStack</a>
            <a href="#aliveos" className="hover:text-cyan-400 transition-colors">Clinical</a>
            <a href="#casestudies" className="hover:text-cyan-400 transition-colors">Resources</a>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
        </button>
        <button className="px-6 py-2 rounded-full bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 transition-all duration-300">
          Request a Demo
        </button>
      </div>
    </nav>
  );
};
