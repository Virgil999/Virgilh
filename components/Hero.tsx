import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { diamondHeartAnimation } from '../assets/animation';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 md:pb-40 overflow-hidden">
      
      {/* Animation Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full max-w-[1500px] relative z-0 flex items-center justify-center"
      >
        <Lottie 
          animationData={diamondHeartAnimation} 
          loop={true} 
          className="w-full"
        />
        
        {/* BOTTOM BLUR OVERLAY - Height increased 2x, Intensity increased 3x */}
         <div className="absolute top-[25%] -bottom-[40rem] left-0 w-full z-10 pointer-events-none">
            
            {/* Layer 1: Start blurring (Subtle) */}
            <div className="absolute inset-0 z-[1]" style={{ 
              backdropFilter: 'blur(6px)', 
              WebkitBackdropFilter: 'blur(6px)', 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)' 
            }}></div>
            
            {/* Layer 2 */}
            <div className="absolute inset-0 z-[2]" style={{ 
              backdropFilter: 'blur(12px)', 
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(9, 5, 23, 0.1)', 
              maskImage: 'linear-gradient(to bottom, transparent 10%, black 25%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 25%)' 
            }}></div>
            
            {/* Layer 3 */}
            <div className="absolute inset-0 z-[3]" style={{ 
              backdropFilter: 'blur(24px)', 
              WebkitBackdropFilter: 'blur(24px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.2)',
              maskImage: 'linear-gradient(to bottom, transparent 20%, black 40%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 40%)' 
            }}></div>
            
            {/* Layer 4 */}
            <div className="absolute inset-0 z-[4]" style={{ 
              backdropFilter: 'blur(48px)', 
              WebkitBackdropFilter: 'blur(48px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.4)',
              maskImage: 'linear-gradient(to bottom, transparent 30%, black 60%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 60%)' 
            }}></div>

             {/* Layer 5: Strong blur + darkening */}
            <div className="absolute inset-0 z-[5]" style={{ 
              backdropFilter: 'blur(96px)', 
              WebkitBackdropFilter: 'blur(96px)', 
              backgroundColor: 'rgba(9, 5, 23, 0.7)',
              maskImage: 'linear-gradient(to bottom, transparent 45%, black 80%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 45%, black 80%)' 
            }}></div>
            
            {/* Layer 6: Maximum opacity/blur (3x intensity -> 192px) */}
            <div className="absolute inset-0 z-[6]" style={{ 
              backdropFilter: 'blur(192px)', 
              WebkitBackdropFilter: 'blur(192px)', 
              backgroundColor: '#090517', // Solid background color at the very end
              maskImage: 'linear-gradient(to bottom, transparent 60%, black 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 60%, black 100%)' 
            }}></div>
         </div>

         {/* Gradient Scrim for Text Readability */}
         <div className="absolute bottom-0 left-0 w-full h-[50%] z-15 bg-gradient-to-t from-[#090517]/30 via-[#090517]/60 to-transparent pointer-events-none"></div>

      </motion.div>

      {/* Hero Content - Moved Higher to Overlap Diamond */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center max-w-6xl mx-auto px-6 -mt-32 md:-mt-48"
      >
        <p className="font-mono text-tertiary text-sm md:text-base mb-3 tracking-wide uppercase drop-shadow-md">
          A 6 week strategic branding sprint for B2B scaleups.
        </p>
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-primary leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
          Reveal your brand’s true scale
        </h1>
        
        <Button>
          Book a 20-min Fit Call
        </Button>
      </motion.div>

      {/* Value Prop Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 mt-56 md:mt-80 grid grid-cols-1 lg:grid-cols-12 gap-5 z-20 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 text-tertiary"
        >
          <div className="w-8 h-8 grid grid-cols-2 gap-1 mb-4 opacity-60">
             <div className="border border-tertiary rounded-full"></div>
             <div className="border border-tertiary rotate-45"></div>
             <div className="border border-tertiary"></div>
             <div className="border border-tertiary rounded-full"></div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-8"
        >
           <p className="font-mono text-sm text-tertiary mb-4 uppercase tracking-widest">Incoherence can cost you millions</p>
           <h2 className="font-sans font-medium text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
             Great branding isn't about adding layers. It's about removing them. We strip away the noise, the jargon, and inconsistency to reveal the inevitable truth that has been there all along.
           </h2>
        </motion.div>
      </div>
    </section>
  );
};