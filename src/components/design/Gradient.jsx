import React from 'react';
import { gradient } from '../../assets'; // Ensure the correct import path

export const Gradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={gradient}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
