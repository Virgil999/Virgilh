import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const projects = [
  { name: 'Digitalya OPS', image: 'https://picsum.photos/800/600?grayscale&blur=2' },
  { name: 'Elsewhere', image: 'https://picsum.photos/801/600?grayscale&blur=2' },
  { name: 'ClientZen', image: 'https://picsum.photos/800/601?grayscale&blur=2' },
  { name: 'Lonely Planet', image: 'https://picsum.photos/801/601?grayscale&blur=2' },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16">
        
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary leading-[1.15] md:leading-[1.15]">Work</h2>
            <div className="hidden md:flex gap-2 text-tertiary opacity-50">
               <ArrowUpRight size={32} className="2xl:w-10 2xl:h-10" />
               <ArrowUpRight size={32} className="rotate-180 2xl:w-10 2xl:h-10"/>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1}>
              <div className="group cursor-pointer relative rounded-[20px] overflow-hidden aspect-[4/3]">
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                />

                {/* Tab Label Overlay */}
                <div className="absolute bottom-0 left-0 z-10">
                  <div className="bg-bg relative flex h-[40px] pl-0 pr-6 pt-2 rounded-tr-[20px]">
                    
                    {/* Top Left Ramp (Connects label top to wall) */}
                    <svg 
                      className="absolute -top-[20px] left-0 w-[20px] h-[20px] text-bg fill-current" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0C0 11.0457 8.9543 20 20 20H0V0Z" />
                    </svg>

                    {/* Right Shoulder (Connects label side to floor) */}
                    <svg 
                      className="absolute bottom-0 -right-[20px] w-[20px] h-[20px] text-bg fill-current" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0C0 11.0457 8.9543 20 20 20H0V0Z" />
                    </svg>
                    
                    <span className="flex items-center text-lg 2xl:text-xl font-mono uppercase tracking-wider text-tertiary">
                       <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                       {project.name}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};