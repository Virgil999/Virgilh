import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-accent text-bg hover:bg-white",
    secondary: "border border-tertiary text-secondary hover:bg-tertiary/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};