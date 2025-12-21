import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between relative">
        
        {/* Logo */}
        <a href="#" className="block flex-shrink-0 z-10">
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.1808" cy="12.0226" r="12.0226" fill="white"/>
            <path d="M4.1582 27.7514V12.113C6.59888 12.5348 14.3367 14.5356 25.7627 19.1638C21.243 27.7514 14.7345 27.7514 4.1582 27.7514Z" fill="white"/>
            <path d="M0 19.426L4.62524 11.1006V19.426H0Z" fill="white"/>
            <path d="M30.7344 19.887L26.5626 6.1469L24.0451 19.887H30.7344Z" fill="white"/>
            <circle cx="27.7515" cy="10.7571" r="4.24859" fill="white"/>
          </svg>
        </a>

        {/* Nav - Centered Absolutely */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {['WORK', '6W SPRINT', 'ABOUT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-tertiary text-sm font-mono uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA - Hidden on mobile, sticky version appears elsewhere */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 z-10">
           <div className="text-xs text-tertiary font-mono leading-tight text-right hidden lg:block">
              <span className="text-accent">●</span> RESERVE YOUR SPOT<br/>
              <span className="opacity-60">2 seats left for January</span>
           </div>
        </div>
      </div>
    </motion.header>
  );
};