import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { diamondHeartAnimation } from '../assets/animation';
import { Button } from './Button';
import { RippleEffect, RippleEffectHandle } from './RippleEffect';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  const rippleRef = useRef<RippleEffectHandle>(null);

  // Trigger initial pulse on mount to align with Lottie start
  useEffect(() => {
    const timer = setTimeout(() => {
      rippleRef.current?.pulse();
    }, 100); // Small buffer to ensure everything is rendered
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 md:pb-40 overflow-hidden">
      
      {/* Atmospheric Light Pulse Background - Now synchronized via Ref */}
      <RippleEffect ref={rippleRef} />

      {/* Animation Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full max-w-[1500px] 2xl:max-w-[1800px] relative z-10 flex items-center justify-center"
      >
        <Lottie 
          animationData={diamondHeartAnimation} 
          loop={true} 
          onLoopComplete={() => {
            // Signal the ripple to fire exactly when the Lottie loops
            rippleRef.current?.pulse();
          }}
          className="w-full"
        />
        
        {/* BOTTOM BLUR OVERLAY - Atmospheric depth */}
         <div className="absolute top-[25%] -bottom-[40rem] left-0 w-full z-10 pointer-events-none">
            
            <div className="absolute inset-0 z-[1]" style={{ 
              backdropFilter: 'blur(6px)', 
              WebkitBackdropFilter: 'blur(6px)', 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)' 
            }}></div>
            
            <div className="absolute inset-0 z-[2]" style={{ 
              backdropFilter: 'blur(12px)', 
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(9, 5, 23, 0.1)', 
              maskImage: 'linear-gradient(to bottom, transparent 10%, black 25%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 25%)' 
            }}></div>
            
            <div className="absolute inset-0 z-[3]" style={{ 
              backdropFilter: 'blur(24px)', 
              WebkitBackdropFilter: 'blur(24px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.2)',
              maskImage: 'linear-gradient(to bottom, transparent 20%, black 40%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 40%)' 
            }}></div>
            
            <div className="absolute inset-0 z-[4]" style={{ 
              backdropFilter: 'blur(48px)', 
              WebkitBackdropFilter: 'blur(48px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.4)',
              maskImage: 'linear-gradient(to bottom, transparent 30%, black 60%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 60%)' 
            }}></div>

            <div className="absolute inset-0 z-[5]" style={{ 
              backdropFilter: 'blur(96px)', 
              WebkitBackdropFilter: 'blur(96px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.7)',
              maskImage: 'linear-gradient(to bottom, transparent 45%, black 80%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 45%, black 80%)' 
            }}></div>
            
            <div className="absolute inset-0 z-[6]" style={{ 
              backdropFilter: 'blur(192px)', 
              WebkitBackdropFilter: 'blur(192px)', 
              backgroundColor: '#090517',
              maskImage: 'linear-gradient(to bottom, transparent 60%, black 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 60%, black 100%)' 
            }}></div>
         </div>

         {/* Gradient Scrim */}
         <div className="absolute bottom-0 left-0 w-full h-[50%] z-15 bg-gradient-to-t from-[#090517]/30 via-[#090517]/60 to-transparent pointer-events-none"></div>

      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-6xl 2xl:max-w-7xl mx-auto px-6 -mt-32 md:-mt-48">
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="font-mono text-tertiary text-sm md:text-base 2xl:text-lg mb-3 tracking-wide uppercase drop-shadow-md"
        >
          A 6 week strategic branding sprint for B2B scaleups.
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
          className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-primary leading-[1.1] mb-8 tracking-tight drop-shadow-2xl"
        >
          Reveal your brand’s true scale
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
        >
          <Button className="2xl:px-8 2xl:py-4 2xl:text-base">
            Book a 20-min Fit Call
          </Button>
        </motion.div>
      </div>

      {/* Value Prop Section */}
      <div className="w-full max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16 mt-56 md:mt-80 grid grid-cols-1 lg:grid-cols-12 gap-5 z-20 relative">
        <FadeIn
          direction="left"
          delay={0.2}
          className="lg:col-span-1 text-tertiary mb-8 lg:mb-0"
        >
          <svg 
            width="91" 
            height="91" 
            viewBox="0 0 91 91" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 lg:w-full h-auto opacity-80"
          >
            <rect x="34.0927" y="17.3998" width="23.607" height="23.607" transform="rotate(135 34.0927 17.3998)" stroke="currentColor"/>
            <line x1="17.2583" y1="34.2952" x2="17.2583" y2="0.504288" stroke="currentColor"/>
            <line x1="34.2954" y1="17.3423" x2="0.504471" y2="17.3423" stroke="currentColor"/>
            <rect x="90.0859" y="17.3998" width="23.607" height="23.607" transform="rotate(135 90.0859 17.3998)" stroke="currentColor"/>
            <line x1="73.2515" y1="34.2952" x2="73.2515" y2="0.504288" stroke="currentColor"/>
            <line x1="90.2886" y1="17.3423" x2="56.4976" y2="17.3423" stroke="currentColor"/>
            <rect x="34.0927" y="73.1993" width="23.607" height="23.607" transform="rotate(135 34.0927 73.1993)" stroke="currentColor"/>
            <line x1="17.2583" y1="90.0948" x2="17.2583" y2="56.3038" stroke="currentColor"/>
            <line x1="34.2954" y1="73.1419" x2="0.504471" y2="73.1419" stroke="currentColor"/>
            <rect x="90.0859" y="73.1993" width="23.607" height="23.607" transform="rotate(135 90.0859 73.1993)" stroke="currentColor"/>
            <line x1="73.2515" y1="90.0948" x2="73.2515" y2="56.3038" stroke="currentColor"/>
            <line x1="90.2886" y1="73.1419" x2="56.4976" y2="73.1419" stroke="currentColor"/>
          </svg>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.4}
          className="lg:col-span-9 lg:col-start-4"
        >
           <p className="font-mono text-sm 2xl:text-base text-tertiary mb-4 uppercase tracking-widest">Incoherence can cost you millions</p>
           <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary leading-[1.15] md:leading-[1.15]">
             Great branding isn't about adding layers. It's about removing them. We strip away the noise, the jargon, and inconsistency to reveal the inevitable truth that has been there all along.
           </h2>
        </FadeIn>
      </div>
    </section>
  );
};