import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  delay?: number;
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '',
  fullWidth = false
}) => {
  const getInitial = () => {
    const base = { opacity: 0, filter: 'blur(16px)' };
    switch (direction) {
      case 'left': return { ...base, x: -50 };
      case 'right': return { ...base, x: 50 };
      case 'up': return { ...base, y: 50 };
      case 'down': return { ...base, y: -50 };
      default: return base;
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </motion.div>
  );
};