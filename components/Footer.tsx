import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-[#171327] mt-20">
       <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary mb-6 leading-[1.15] md:leading-[1.15]">
              Leave the noise behind.
            </h2>
            <div className="inline-block relative">
               <div className="absolute inset-0 bg-accent blur-xl opacity-20 rounded-full"></div>
               <button className="relative bg-accent text-bg font-sans font-bold text-3xl md:text-5xl 2xl:text-6xl px-8 py-4 md:px-12 md:py-6 rounded-full hover:scale-105 transition-transform duration-300">
                 Reveal your true brand
               </button>
            </div>
          </FadeIn>
       </div>
       
       <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16 mt-32 flex justify-between items-end text-tertiary text-sm font-mono">
          <FadeIn direction="up" delay={0.2}>
            <div className="2xl:text-base">
              &copy; {new Date().getFullYear()} Virgil Horghidan
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="flex gap-6 2xl:text-base">
               <a href="#" className="hover:text-primary">LINKEDIN</a>
               <a href="#" className="hover:text-primary">EMAIL</a>
            </div>
          </FadeIn>
       </div>
    </footer>
  );
};