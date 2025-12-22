import React from 'react';
import { FadeIn } from './FadeIn';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-32">
       <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-1 hidden md:flex flex-col gap-2 text-tertiary">
             <FadeIn direction="left">
               <div className="w-4 h-4 border border-tertiary rounded-sm mb-2"></div>
               <div className="w-4 h-4 border border-tertiary rounded-sm mb-2"></div>
               <div className="w-4 h-4 border border-tertiary rounded-sm"></div>
             </FadeIn>
          </div>
          <div className="md:col-span-11 md:pl-10">
             <FadeIn direction="right">
               <blockquote className="font-sans font-semibold text-3xl md:text-4xl 2xl:text-5xl text-primary leading-tight mb-12">
                 "Our company wouldn't be where it is today without Virgil. As our first hire beyond the founding team, his impact has been huge, shaping our company like a core founder."
               </blockquote>
               
               <div className="flex items-center gap-4">
                  <img 
                    src="https://picsum.photos/id/65/100/100" 
                    alt="Alexis Bowen" 
                    className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-lg object-cover border border-[#FFFFFF20]"
                  />
                  <div>
                     <div className="text-primary font-medium text-base 2xl:text-xl">Alexis Bowen</div>
                     <div className="text-tertiary text-sm 2xl:text-base">Co-Founder of Elsewhere | SF 40 under 40</div>
                  </div>
               </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
};