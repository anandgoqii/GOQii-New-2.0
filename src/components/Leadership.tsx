import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const LEADERSHIP = [
  { name: "Vishal Gondal", role: "CEO & Founder", image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png", bio: "Visionary entrepreneur with a passion for gaming, healthcare, and technology. Founded GOQii to shift healthcare from reactive to preventive." },
  { name: "Abhishek Sharma", role: "Co-Founder & CEO – GOQii UK", image: "https://appcdn.goqii.com/storeimg/69425_1775110219.jpg", bio: "Leading GOQii's expansion and operations in the UK and European markets." },
  { name: "Sachin Janghel", role: "Co-Founder & CTO", image: "https://storage.googleapis.com/ksabupatest/2026/02/11/n2s3j/q3yh7jm2qs.webp", bio: "Driving the technological vision and architecture behind GOQii's smart preventive health ecosystem." },
  { name: "Champ Alreja", role: "Co-Founder & CBO – Health Store", image: "https://appcdn.goqii.com/storeimg/93100_1775110237.jpg", bio: "Spearheading the GOQii Health Store and e-commerce initiatives." },
  { name: "Krishna Kumar", role: "Chief Customer Officer", image: "https://appcdn.goqii.com/storeimg/41869_1756732325.png", bio: "Ensuring exceptional customer experience and engagement across the GOQii platform." },
  { name: "Rohit Pareek", role: "Chief Financial Officer", image: "https://appcdn.goqii.com/storeimg/57617_1775121635.jpg", bio: "Managing financial strategy, growth, and investor relations." },
  { name: "V Srinivasan", role: "Director", image: "https://appcdn.goqii.com/storeimg/66392_1775110257.jpg", bio: "Providing strategic direction and governance to the GOQii board." },
  { name: "Luke Coutinho", role: "Master Coach & Head Nutritionist", image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Like-Counho.png", bio: "Renowned holistic lifestyle coach leading GOQii's coaching and nutrition methodologies." },
];

const BOARD = [
  { name: "Bala Deshpande", role: "Director", image: "https://appcdn.goqii.com/storeimg/40814_1775053051.jpg" },
  { name: "Amit Singhal", role: "Director", image: "https://appcdn.goqii.com/storeimg/98313_1775053077.jpg" },
  { name: "Dr. Christine Li", role: "Director", image: "https://appcdn.goqii.com/storeimg/57121_1775053095.jpg" },
  { name: "Pravin Gandhi", role: "Director", image: "https://appcdn.goqii.com/storeimg/24219_1775109984.jpg" },
  { name: "Vishal Gondal", role: "Director", image: "https://goqiimum.s3.ap-south-1.amazonaws.com/sanjivani/assets/images/Team-Vishal.png" },
];

const INVESTORS = [
  "DSG Consumer Partners",
  "Galaxy Digital",
  "Megadelta Capital",
  "Cheetah Mobile",
  "Animoca Brands"
];

const ADVISORS = [
  "Neeraj Arora",
  "Vijay Sharma",
  "Marco Argenti",
  "Anil Godhwani",
  "Bharat Vasan",
  "Dr. Shriram Nene"
];

export const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState<typeof LEADERSHIP[0] | null>(null);

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* SCENE — LEADERSHIP & TRUST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Leadership & Trust</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Built by Experts. Trusted Globally.</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            GOQii is led by a team with deep expertise in healthcare, technology, and behavioral science.<br className="hidden md:block" />
            Supported by global investors and partners.
          </p>
        </motion.div>

        {/* SECTION — LEADERSHIP TEAM */}
        <div className="mb-24">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-slate-800 pb-4"
          >
            Leadership
          </motion.h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <motion.div
                key={idx}
                layoutId={`card-${leader.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedLeader(leader)}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 relative shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200/50 dark:border-slate-800">
                  <motion.img 
                    layoutId={`image-${leader.name}`}
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.h5 layoutId={`name-${leader.name}`} className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {leader.name}
                </motion.h5>
                <motion.p layoutId={`role-${leader.name}`} className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {leader.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION — BOARD OF DIRECTORS */}
        <div className="mb-24">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-slate-800 pb-4"
          >
            Board of Directors
          </motion.h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {BOARD.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 relative shadow-md mx-auto w-32 md:w-40 border-4 border-white dark:border-slate-800">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {member.name}
                  </h5>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION — INVESTORS & PARTNERS */}
        <div className="mb-24">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-slate-800 pb-4"
          >
            Investors & Partners
          </motion.h4>
          
          {/* Marquee */}
          <div className="relative flex overflow-x-hidden py-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            
            <motion.div
              className="flex whitespace-nowrap gap-16 px-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {/* Double the array for seamless looping */}
              {[...INVESTORS, ...INVESTORS].map((investor, idx) => (
                <div key={idx} className="text-2xl md:text-4xl font-display font-bold text-slate-300 dark:text-slate-700">
                  {investor}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ADVISORS / NETWORK */}
        <div>
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 border-b border-slate-200 dark:border-slate-800 pb-4"
          >
            Advisors & Network
          </motion.h4>
          
          <div className="flex flex-wrap gap-4">
            {ADVISORS.map((advisor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-sm"
              >
                {advisor}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Leader Bio */}
      <AnimatePresence>
        {selectedLeader && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[110]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[120] p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedLeader.name}`}
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden w-full max-w-lg shadow-2xl pointer-events-auto relative"
              >
                <button 
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="aspect-video relative">
                  <motion.img 
                    layoutId={`image-${selectedLeader.name}`}
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h5 layoutId={`name-${selectedLeader.name}`} className="text-3xl font-bold text-white mb-1">
                      {selectedLeader.name}
                    </motion.h5>
                    <motion.p layoutId={`role-${selectedLeader.name}`} className="text-cyan-400 font-medium">
                      {selectedLeader.role}
                    </motion.p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedLeader.bio}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
