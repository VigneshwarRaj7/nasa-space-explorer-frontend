import React from 'react';

export default function AsteroidCard({ asteroid }) {
  const size = asteroid.estimated_diameter.meters;
  const approach = asteroid.close_approach_data[0];

  const isHazardous = asteroid.is_potentially_hazardous_asteroid;
  const bg = isHazardous ? 'border-red-500 hover:bg-red-500' : 'border-green-500 hover:bg-green-500';
  const bgShadow = isHazardous ? 'card-red' : 'card-green';

  return (
    <div id={`${bgShadow}`} className={`font-orbitron text-xs lg:text-  rounded-2xl p-4  border-2  
    backdrop-blur-3xl shadow-2xl  text-white hover:scale-105 hover:transition-transform ${bg} `}>
      <h3 className=" font-bold">{asteroid.name}</h3>
      <p>Size: {size.estimated_diameter_min.toFixed(1)}–{size.estimated_diameter_max.toFixed(1)} m</p>
      <p> Miss Distance: {(approach.miss_distance.kilometers / 1000000).toFixed(2)} million km</p>
      <p>🚀 Velocity: {Math.round(approach.relative_velocity.kilometers_per_hour)} km/h</p>
      <p>⚠️ Hazardous: {isHazardous ? 'Yes' : 'No'}</p>
    </div>
  );
}