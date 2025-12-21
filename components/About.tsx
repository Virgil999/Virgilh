import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F0A24]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="bg-[#130D2B] rounded-2xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo */}
          <div className="lg:col-span-4 relative">
             <FadeIn direction="left">
               <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg relative">
                 <img 
                  src="https://picsum.photos/id/64/600/800" 
                  alt="Virgil Horghidan"
                  className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-50"></div>
               </div>
             </FadeIn>
          </div>

          {/* Text */}
          <div className="lg:col-span-8">
            <FadeIn direction="right" delay={0.2}>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl text-primary font-semibold mb-6">
                Senior craft. <span className="text-accent">Direct access.</span>
              </h2>
              
              <p className="font-sans text-secondary text-xl leading-relaxed mb-6">
                <strong className="text-primary">I am Virgil Horghidan based in Barcelona.</strong><br/>
                I function as a Fractional Brand Director for scaleups in the €2M–€50M growth corridor.
              </p>
              
              <p className="font-sans text-secondary text-xl leading-relaxed mb-12 opacity-80">
                I've built digital worlds for Red Ventures, Lonely Planet and Elsewhere. Now, I help founders outgrow their early identity without the overhead of a large agency.
              </p>

              {/* Logos */}
              <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-50 grayscale">
                <span className="text-2xl font-bold font-sans tracking-tight text-white">Lonely Planet</span>
                <span className="text-2xl font-bold font-serif italic text-white">Disney</span>
                <span className="text-2xl font-bold font-sans text-white">guide</span>
                <span className="text-2xl font-bold font-sans uppercase text-white">HARIBO</span>
                <span className="text-xl font-medium font-sans text-white">elsewhere</span>
                <span className="text-2xl font-handwriting text-white opacity-80" style={{fontFamily: 'cursive'}}>Amanda H.</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};