import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="6w-sprint" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Side: Sticky Title */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <FadeIn direction="left">
              <h2 className="font-sans font-bold text-accent text-2xl md:text-3xl mb-2">The 6 week sprint.</h2>
              <h2 className="font-sans font-bold text-primary text-5xl md:text-6xl mb-8 leading-tight">
                Deep work.<br/>No bloat.
              </h2>
               <Button>
                Book a 20-min Fit Call
              </Button>

              {/* Decorative Number */}
              <div className="absolute top-0 right-0 -z-10 opacity-5 select-none pointer-events-none">
                <span className="font-sans font-bold text-[22rem] leading-none text-tertiary">1</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <FadeIn direction="right" delay={0.2} fullWidth>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`border border-[#FFFFFF15] rounded-lg transition-colors duration-300 ${openIndex === index ? 'bg-[#FFFFFF05]' : 'bg-transparent'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className="font-sans font-semibold text-2xl text-primary">{step.title}</span>
                  <span className="text-tertiary opacity-50 group-hover:opacity-100 transition-opacity">
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-0">
                    <p className="text-secondary font-light text-xl mb-6 leading-relaxed">
                      {step.content}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {step.tags.map(tag => (
                        <span key={tag} className="flex items-center text-sm font-mono text-tertiary uppercase tracking-wider">
                           <span className="w-1 h-1 bg-tertiary rounded-full mr-2"></span>
                           {tag}
                        </span>
                      ))}
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