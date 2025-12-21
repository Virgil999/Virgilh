import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { Comparison } from './components/Comparison';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen text-secondary selection:bg-accent selection:text-bg">
      <Header />
      <main>
        <Hero />
        <Process />
        <Work />
        <About />
        <Impact />
        <Comparison />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default App;