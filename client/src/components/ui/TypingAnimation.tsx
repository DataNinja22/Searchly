/**
 * Typing Animation Component
 */

import React from 'react';
import type { TypingAnimationProps } from '@/types';

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center space-x-1.5">
        <div 
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "0ms" }}
        />
        <div 
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "300ms" }}
        />
        <div 
          className="w-1.5 h-1.5 bg-gray-400/70 rounded-full animate-pulse"
          style={{ animationDuration: "1s", animationDelay: "600ms" }}
        />
      </div>
    </div>
  );
};
