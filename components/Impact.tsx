import React from 'react';
import { FadeIn } from './FadeIn';

export const Impact: React.FC = () => {
  return (
    <section className="py-24 text-center">
       <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16">
          <FadeIn direction="up">
            <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary mb-16 leading-[1.15] md:leading-[1.15]">The impact</h2>
          </FadeIn>

          <div className="bg-[#171327] rounded-2xl p-8 md:p-12 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-[#FFFFFF08]">
             <div className="md:col-span-8">
                <FadeIn direction="left" delay={0.1}>
                  <h3 className="font-sans font-semibold text-3xl 2xl:text-4xl text-primary mb-2">Speed Up Sales</h3>
                  <p className="text-accent font-medium text-lg 2xl:text-xl mb-4">Remove the friction from your sales cycles.</p>
                  <p className="text-tertiary text-base 2xl:text-lg leading-snug max-w-xl">
                    When your brand clearly communicates your value before you even enter the room, you spend less time explaining who you are and more time closing the deal. Trust is established before the first call.
                  </p>
                </FadeIn>
             </div>
             <div className="md:col-span-4 flex justify-center md:justify-end">
                <FadeIn direction="right" delay={0.2}>
                  {/* Diamond SVG placeholder */}
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1" className="opacity-80 2xl:w-40 2xl:h-40">
                     <path d="M50 0 L100 30 L50 100 L0 30 Z" />
                     <path d="M0 30 L100 30" />
                     <path d="M25 30 L50 100 L75 30" />
                     <path d="M50 0 L50 30" />
                     <path d="M25 0 L25 30" />
                     <path d="M75 0 L75 30" />
                  </svg>
                </FadeIn>
             </div>
          </div>
       </div>
    </section>
  );
};