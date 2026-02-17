import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200',
  };

  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;