import React from 'react';

export default function AsteroidLegend() {
  return (
    <div id='card-purple' className="absolute flex items-center space-x-4 backdrop-blur-sm p-4 rounded-lg shadow-md -mt-3 md:mx-160 lg:mx-200 md:mt-18 lg:mt-2 mb-4 w-fit">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <span className="text-green-400 font-orbitron text-sm">Safe</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        <span className="text-red-400 font-orbitron text-sm">Hazardous</span>
      </div>
    </div>
  );
}