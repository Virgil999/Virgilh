import React from 'react';
import { FadeIn } from './FadeIn';
import { Diamond } from './Diamond';
import { Bolt } from './Bolt';

const cards = [
  {
    title: "Speed Up Sales",
    subtitle: "Remove the friction from your sales cycles.",
    text: "When your brand clearly communicates your value before you even enter the room, you spend less time explaining who you are and more time closing the deal. Trust is established before the first call.",
    icon: Diamond
  },
  {
    title: "Shorten Your Sales Cycle",
    subtitle: "Remove the friction from your sales process.",
    text: "When your brand clearly communicates your value before you even enter the room, you spend less time explaining who you are and more time closing the deal. Trust is established before the first call.",
    icon: Bolt
  }
];

export const Impact: React.FC = () => {
  return (
    <section className="py-24 text-center overflow-hidden">
       <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16">
          <FadeIn direction="up">
            <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary mb-16 leading-[1.15] md:leading-[1.15]">The impact</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="lg:col-span-10 lg:col-start-2 bg-[#171327] rounded-2xl p-8 md:p-12 text-left relative isolate">
                 {/* Text Content */}
                 <div className="w-full md:w-[58%] relative z-10">
                    <FadeIn direction="left" delay={0.1 * (index + 1)}>
                      <h3 className="font-sans font-semibold text-3xl 2xl:text-4xl text-primary mb-2">{card.title}</h3>
                      <p className="text-accent font-medium text-lg 2xl:text-xl mb-4">{card.subtitle}</p>
                      <p className="text-tertiary text-base 2xl:text-lg leading-snug max-w-xl">
                        {card.text}
                      </p>
                    </FadeIn>
                 </div>
                 
                 {/* Animation Container */}
                 <div className="relative mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:h-full md:w-[42%] flex items-center justify-center z-0 pointer-events-none">
                    <FadeIn direction="right" delay={0.2 * (index + 1)} className="relative w-full flex justify-center">
                      <div className="w-[8.5rem] h-[8.5rem] md:w-[13.6rem] md:h-[13.6rem] relative">
                         <card.icon className="w-full h-full overflow-visible drop-shadow-2xl" />
                      </div>
                    </FadeIn>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};