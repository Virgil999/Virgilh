import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const logos = [
  { name: 'Lonely Planet', style: 'font-sans font-bold tracking-tight' },
  { name: 'Disney', style: 'font-serif italic font-bold' },
  { name: 'guide', style: 'font-sans font-bold' },
  { name: 'HARIBO', style: 'font-sans font-bold uppercase' },
  { name: 'elsewhere', sub: 'by lonely planet', style: 'font-sans font-medium' },
  { name: 'Amanda H.', style: 'font-handwriting font-bold opacity-80', customFont: true },
];

export const About: React.FC = () => {
  // Duplicate logos for infinite scroll
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16">
        
        {/* Card Container - Reverted to full width (removed max-w-6xl) */}
        <div className="bg-[#171327] w-full rounded-[2.5rem] overflow-hidden relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px] border border-white/5 group">
          
          {/* Photo Column - Spans full height of grid, reduced mobile min-height. */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full order-1 lg:order-none overflow-hidden">
             {/* 
                Using motion.div directly instead of FadeIn to ensure full width/height 
                without inline style conflicts.
             */}
             <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="h-full w-full absolute inset-0"
             >
               <img 
                src="https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/69496fc2c72cee0a4f39cb92_virgil.avif" 
                alt="Virgil Horghidan"
                className="w-full h-full object-contain object-left-bottom filter hover:grayscale-0 transition-all duration-700 mix-blend-normal"
               />
               
               {/* Overlay to ensure text/logos pop if needed, and to blend with dark theme */}
               <div className="absolute inset-0 bg-[#171327]/10 mix-blend-multiply pointer-events-none z-10"></div>
               
               {/* Gradient at the bottom to fade the photo into the marquee area smoothly */}
               <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#171327] via-[#171327]/90 to-transparent lg:hidden z-10"></div>
             </motion.div>
          </div>

          {/* Text Column - Reduced padding top/bottom/sides for tighter feel */}
          <div className="lg:col-span-7 p-8 md:p-10 lg:p-14 flex flex-col justify-center pb-28 lg:pb-28 relative z-20 order-2 lg:order-none bg-[#171327] lg:bg-transparent">
            <FadeIn direction="left" delay={0.2}>
              <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary mb-6 leading-[1.1] md:leading-[1.1]">
                Senior craft. <span className="text-accent">Direct access.</span>
              </h2>
              
              <div className="space-y-4 max-w-2xl">
                <p className="font-sans text-white text-lg 2xl:text-xl leading-snug font-medium">
                  I am Virgil Horghidan based in Barcelona.
                </p>
                <p className="font-sans text-secondary text-lg 2xl:text-xl leading-snug">
                  I function as a Fractional Brand Director for scaleups in the €2M–€50M growth corridor.
                </p>
                <p className="font-sans text-tertiary text-base 2xl:text-lg leading-relaxed opacity-80">
                  I've built digital worlds for Red Ventures, Lonely Planet and Elsewhere. Now, I help founders outgrow their early identity without the overhead of a large agency.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Infinite Logo Marquee - Absolute positioning to overlay both columns */}
          <div className="absolute bottom-0 left-0 w-full z-30 py-6 lg:py-8 pointer-events-none">
            {/* Gradient background for logos only on desktop to ensure legibility over photo if needed, or rely on text shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171327] via-[#171327]/80 to-transparent opacity-90 lg:opacity-100"></div>

            <div 
               className="w-full overflow-hidden relative z-10"
               style={{ 
                 maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
               }}
            >
              <div className="flex w-max animate-marquee gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                {marqueeLogos.map((logo, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center shrink-0">
                    <span 
                      className={`text-xl 2xl:text-2xl text-white whitespace-nowrap ${logo.style}`}
                      style={logo.customFont ? { fontFamily: 'cursive' } : {}}
                    >
                      {logo.name}
                    </span>
                    {logo.sub && (
                      <span className="text-[0.6rem] uppercase tracking-widest text-white/60 mt-1">{logo.sub}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};