
import React, { useEffect, useState } from 'react';
import AsteroidGallery from '../components/AsteroidComponents/AsteroidGallery';
import DateRangePicker from '../components/AsteroidComponents/DateRangePicker';
import LoadingPage2 from './LoadingPage2';
import AsteroidGraph from '../components/AsteroidComponents/AsteroidGraph';
import AsteroidLegend from '../components/AsteroidComponents/AsteroidLegend';

export default function Asteroid() {
  const [asteroids, setAsteroids] = useState({});
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState({ start: '', end: '' });


  const start = dates.start || new Date().toISOString().split('T')[0]; // Default to today if no start date

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];
  const end   = dates.end   || formattedTomorrow;

  //API call for retrieving information about the asteroids from a particular date range. 
  useEffect(() => {
    fetch(`https://nasa-space-explorer-backend-git-main-vigneshwarraj7s-projects.vercel.app/api/asteroids/start-date/${start}/end-date/${end}`)
      .then(res => res.json())
      .then(data => {
        setAsteroids(data.near_earth_objects);
        console.log(data.near_earth_objects);
        setLoading(false);
      });
  }, [dates]);

  

  if (loading) return <LoadingPage2 />;

  return (
    <div>
        <h1 className="text-4xl font-bold mt-17 mx-10 my-4 mb-4 font-orbitron text-purple-400">🌌 Asteroid Tracker</h1>
        <div className="space-y-8">
        {/* Component providing Legend. From ../components/ASteroid/AsteroidLegend*/}
        <AsteroidLegend/>
         {/* Component providing the functionality to choose a particular range. From ../components/ASteroid/DateRangePicker*/}   
        <DateRangePicker  dates={dates} setDates={setDates} > </DateRangePicker>

        {/* Component providing the graph where each dot represents an asteroid. From ../components/ASteroid/AsteroidGraph*/}   
        <AsteroidGraph  data= {asteroids} />

        {Object.entries(asteroids).map(([date, list]) => (
            <div key={date}>
            <h2 className="text-xl ml-10 mb-4 font-extrabold font-orbitron text-purple-400 mb-2">📅 {date} – {list.length} objects</h2>
            {/* Component providing the cards for each asteroid . From ../components/ASteroid/AsteroidGallery*/}   
            <AsteroidGallery list={list} />
            </div>
        ))}
        </div>
    </div>
  );
}