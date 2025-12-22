import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4">
          <FadeIn direction="left">
            <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary leading-[1.15] md:leading-[1.15]">
              Traditional agencies sell complexity.<br/>
              <span className="opacity-50">I sell focus.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Agency Model */}
          <FadeIn direction="right" delay={0.1} fullWidth>
            <div className="bg-[#171327] rounded-xl p-8 border border-[#FFFFFF05] h-full">
               <h3 className="text-secondary font-bold text-xl 2xl:text-2xl mb-8">Agency Model</h3>
               <ul className="space-y-6">
                 {[
                   '6-12 month timelines.',
                   'Work delegated to juniors.',
                   'High five-figure investment.',
                   'You pay for the office, not the outcome.'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-base 2xl:text-lg text-tertiary">
                     <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5 mr-3 mt-0.5 text-tertiary opacity-50 rotate-45 shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </FadeIn>

          {/* Partner Model */}
          <FadeIn direction="right" delay={0.2} fullWidth>
            <div className="bg-[#171327] rounded-xl p-8 border border-accent/20 relative overflow-hidden h-full">
               <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
               <h3 className="text-accent font-bold text-xl 2xl:text-2xl mb-8">The Partner model (Me)</h3>
               <ul className="space-y-6 mb-10">
                 {[
                   '6-8 week sprints.',
                   'Direct access to senior talent.',
                   'Focused investment (€15k-€50k).',
                   'You pay for the impact.'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start text-base 2xl:text-lg text-white">
                     <ArrowUpRight className="w-4 h-4 2xl:w-5 2xl:h-5 mr-3 mt-0.5 text-accent shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
               <div className="text-center">
                 <Button className="w-full text-xs 2xl:text-sm py-4">Book a 20-min Fit Call</Button>
               </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};