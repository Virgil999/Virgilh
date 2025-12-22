import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

const steps = [
  {
    title: "Discovery",
    content: "We identify the gap between your success and your brand perception. Includes stakeholder workshops and strategic audit.",
    tags: ["WORKSHOPS", "STRATEGY REFINEMENT"]
  },
  {
    title: "Production",
    content: "We craft the visual and verbal identity systems that will carry your brand forward. Logo, typography, color, voice, and tone.",
    tags: ["VISUAL IDENTITY", "VERBAL IDENTITY"]
  },
  {
    title: "Handover",
    content: "We deliver a comprehensive brand guideline and asset library, ensuring your team has everything needed to scale consistently.",
    tags: ["GUIDELINES", "ASSET LIBRARY"]
  }
];

export const Process: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 6000; // 6 seconds per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, duration);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="6w-sprint" className="py-24 md:py-32 relative">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Sticky Title and SVG */}
        <div className="lg:col-span-5 flex flex-col h-full relative">
          
          {/* Sticky Container - Grows to fill space, defining the boundary for the sticky element */}
          <div className="flex-grow relative">
            <div className="sticky top-32 flex flex-col justify-start">
              <FadeIn direction="left">
                <div className="mb-8 relative z-10">
                  {/* Unified Title H2 to remove spacing */}
                  <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl leading-[1.15] md:leading-[1.15]">
                    <span className="text-accent block">The 6 week sprint.</span>
                    <span className="text-primary block">Deep work. No bloat.</span>
                  </h2>
                </div>
                 <Button>
                  Book a 20-min Fit Call
                </Button>
              </FadeIn>
            </div>
          </div>

           {/* Decorative SVG at bottom - Static position in flex flow to prevent overlap */}
           <div className="hidden lg:block w-24 2xl:w-32 opacity-80 text-tertiary pt-12 flex-shrink-0">
            <FadeIn direction="up" delay={0.5}>
              <svg viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path d="M27.5391 0.5V26.9834H20.1748V13.0742L5.91504 27.334L0.707031 22.126L1.06055 21.7725L14.9678 7.86426H1.05664V0.5H27.5391Z" stroke="currentColor"/>
                <path d="M83.5322 0.5V26.9834H76.168V13.0742L61.9082 27.334L56.7002 22.126L57.0537 21.7725L70.9609 7.86426H57.0498V0.5H83.5322Z" stroke="currentColor"/>
                <path d="M27.5391 56.1266V82.61H20.1748V68.7008L5.91504 82.9606L0.707031 77.7526L1.06055 77.399L14.9678 63.4908H1.05664V56.1266H27.5391Z" stroke="currentColor"/>
                <path d="M83.5322 56.1266V82.61H76.168V68.7008L61.9082 82.9606L56.7002 77.7526L57.0537 77.399L70.9609 63.4908H57.0498V56.1266H83.5322Z" stroke="currentColor"/>
              </svg>
            </FadeIn>
          </div>
        </div>

        {/* Right Side: Cards */}
        {/* Adjusted top margin to move accordion higher (approx 25% less margin than mt-80) */}
        <div className="lg:col-span-6 lg:col-start-7 lg:mt-60">
          {/* Reduced gap to keep it tight */}
          <FadeIn direction="right" delay={0.2} fullWidth className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className="flex gap-4 md:gap-8 cursor-pointer group"
              >
                {/* Number Outside Left - Fixed color #171327 */}
                <div className="hidden md:flex flex-col justify-start pt-2 w-24 2xl:w-32 text-right shrink-0 select-none">
                   <span 
                    className={`font-mono font-bold text-[6rem] 2xl:text-[8rem] leading-[0.8] tracking-tighter transition-colors duration-500 ${activeIndex === index ? 'text-primary' : 'text-[#171327]'}`}
                   >
                     {index + 1}
                   </span>
                </div>

                {/* Card - No border */}
                <div 
                  className={`relative flex-grow rounded-xl overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'bg-[#292538]' : 'bg-[#171327]'
                  }`}
                >
                  {/* Expanding Yellow Line (Progress Bar) */}
                  {activeIndex === index && (
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: duration / 1000, ease: "linear" }}
                      className="absolute top-0 left-0 h-[2px] bg-accent z-20"
                    />
                  )}

                  {/* Content Container */}
                  <div className={`relative z-10 p-6 md:p-8 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                    <h3 className={`font-sans font-semibold text-2xl 2xl:text-3xl mb-0 transition-all duration-300 text-primary ${activeIndex === index ? 'mb-4' : ''}`}>
                      {step.title}
                    </h3>

                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${
                        activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-secondary font-light text-xl 2xl:text-2xl mb-8 leading-snug">
                          {step.content}
                        </p>
                        
                        {/* Stacked Tags */}
                        <div className="flex flex-col gap-3 pt-2">
                          {step.tags.map(tag => (
                            <span key={tag} className="flex items-center text-sm 2xl:text-base font-mono text-tertiary uppercase tracking-wider">
                               <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                               {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

      </div>
    </section>
  );
};