import React, { useEffect, useState } from 'react';
import RoverManifestCard from '../components/MarsComponents/RoverManifestCard';
import SolScroller from '../components/MarsComponents/SolScroller';
import ImageGallery from '../components/MarsComponents/ImageGallery';
import { motion } from 'framer-motion';
import RoverDropDown from '../components/MarsComponents/RoverDropDown';
import LoadingPage2 from './LoadingPage2';

export default function Mars() {
  const [manifest, setManifest] = useState(null);
  const [solPhotos, setSolPhotos] = useState([]);
  const [selectedSol, setSelectedSol] = useState(null);
  const [roverPhotos, setRoverPhotos] = useState([]);

  const [selectedRover, setSelectedRover] = useState('curiosity'); // Default rover

  const rover = selectedRover.toLowerCase(); // Convert to lowercase for API consistency


 // Api call responsible for retrieving information related to the rover
  useEffect(() => {
    fetch(`https://nasa-space-explorer-backend-git-main-vigneshwarraj7s-projects.vercel.app/api/mars-rover-manifests/${rover}`)
      .then((res) => res.json())
      .then((data) => {
        setManifest(data.photo_manifest);
        setSolPhotos(data.photo_manifest.photos);
        setSelectedSol(null);
        setRoverPhotos([]);
        console.log(data.photo_manifest);
      });
  }, [rover]);

  // API call responsible for retrieving the images of that particular sol. There is an issue 
  // with sol pictures of Opportunity and Spirit rover, the image links sent by Nasa open API
  // doesn't seem to work.
  useEffect(() => {
    if (!selectedSol) return;
    fetch(`https://nasa-space-explorer-backend-git-main-vigneshwarraj7s-projects.vercel.app/api/mars-rover-photos/rover-name/${rover}/sol/${selectedSol}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.photos);
        setRoverPhotos(data.photos);
    });

  }, [selectedSol]);

  if(!manifest) return <LoadingPage2 />;

  return (
    <div className=" p-4 mt-16 max-w-7xl mx-auto text-white font-orbitron">
      <h1 className="text-4xl font-bold mb-4 text-purple-400">🚀 Mars Rover Explorer</h1>
      {/* Component to select the rover. From ../components/mars/RoverDropDown  */}
      <RoverDropDown selectedRover={selectedRover} setSelectedRover={setSelectedRover}/>
      
      {/* Component providing information about the selected rover. From ../components/mars/RoverManifestCard  */}
      {manifest && <RoverManifestCard manifest={manifest} />}
      
      <div>
        <div className="flex flex-row items-center mt-6">
            <h2 className="mt-8 text-2xl">📅 Select a Sol</h2>
            <select className='mt-8 text-lg ml-10 border-2 border-purple-600 bg-slate-800 text-white rounded-lg '
                    onChange={(e) => {
                    console.log(e.target.value);
                    setSelectedSol(e.target.value)}}
            >
                <option value="" >Select a Sol</option>
                {solPhotos.map((entry) => (
                    <option key={entry.sol} value={entry.sol}>
                    Sol {entry.sol} - 📷 {entry.total_photos}
                    </option>
                ))}
            </select>
        </div>

          {/* Component providing the feature to select a sol in a horizontal scroll way. From ../components/mars/SolScroller  */}
        <SolScroller photos={solPhotos.slice(0,50)} onSelectSol={setSelectedSol} />
      </div>

     { console.log(roverPhotos)}
      {selectedSol ?( <>
          <h2 className="mt-6 text-xl">🖼 Photos from Sol {selectedSol}</h2>
         {/* Component providing all the images of a selected sol in a horizontal scroll way. From ../components/mars/ImageGallery*/}
          <ImageGallery photos={roverPhotos} />
        </>
       ): <></>}
    </div>
  );
}