import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      <svg
        className="absolute top-0 left-0 w-full h-full text-babyblue-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        
        {/* Creative Lines - Top Right */}
        <path
          d="M 800 0 L 800 100 L 900 200 L 1200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="hidden md:block"
        />
        <circle cx="800" cy="0" r="4" fill="currentColor" className="hidden md:block"/>
        <circle cx="1200" cy="200" r="4" fill="currentColor" className="hidden md:block"/>

         {/* Creative Lines - Bottom Left */}
         <path
          d="M 0 600 L 100 600 L 200 700 L 200 900"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="hidden md:block"
        />
        <circle cx="0" cy="600" r="4" fill="currentColor" className="hidden md:block"/>
        <circle cx="200" cy="900" r="4" fill="currentColor" className="hidden md:block"/>
      </svg>
    </div>
  );
};

export default CircuitBackground;
