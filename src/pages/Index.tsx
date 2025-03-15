
import React, { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";

const Index = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md w-full space-y-12 text-center">
        <div className="space-y-4">
          <span className="inline-block text-sm font-medium text-gray-500 tracking-wide uppercase">
            Interactive Element
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Animated Button
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Press the button below to see a smooth animation effect.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <AnimatedButton 
            onClick={handleClick} 
            className="bg-black hover:bg-gray-800 text-white"
          >
            Press Me
          </AnimatedButton>
          
          {clickCount > 0 && (
            <p className="text-sm text-gray-500 animate-fade-in">
              You've pressed the button {clickCount} time{clickCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
