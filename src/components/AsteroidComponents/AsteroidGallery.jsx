import React from 'react';
import AsteroidCard from './AsteroidCard';

export default function AsteroidGallery({ list }) {
  return (
    <div className=" mx-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {list.map((asteroid) => (
        <AsteroidCard key={asteroid.id} asteroid={asteroid} />
      ))}
    </div>
  );
}