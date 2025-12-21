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
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        <FadeIn direction="up">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary">Work</h2>
            <div className="hidden md:flex gap-2 text-tertiary opacity-50">
               <ArrowUpRight size={32} />
               <ArrowUpRight size={32} className="rotate-180"/>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-tertiary/10 aspect-[4/3] mb-4">
                   {/* Placeholder for project image */}
                   <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                   />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-base font-mono text-tertiary">
                     <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                     {project.name}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};