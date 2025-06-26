import React from 'react'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ApodCube from '../components/ApodComponents/ApodCube';
import LoadingPage2 from './LoadingPage2';


import ship from '../assets/ship1.png';
import ride2 from "../assets/loadingRide2.mp4";

function Apod() {
    const [data, setData] = useState(null);


    useEffect(() => {
      fetchApod();
    }, []);
  
    const fetchApod = async () => {
      const response = await fetch(
        "https://nasa-space-explorer-backend-git-main-vigneshwarraj7s-projects.vercel.app/api/apod"
    );
    const json = await response.json();
    console.log(json);
    setData(json);

    }

    //Loading page active untill the API request is successful.
    if (!data) {
      return (
        <LoadingPage2 />
      );
    }

  return (
    <div className='bg-stars h-screen font-orbitron flex flex-row text-purple-400'>
        <div id='card-purple'  className='absolute animate-float mt-60 ml-20 md:mt-60 w-1/2 md:ml-4 lg:w-1/4 backdrop-blur-sm border-1 border-purple-400 rounded-2xl p-2 lg:ml-70 lg:mt-30 2xl:mt-50'>
           <p className="text-xs sm:text-sm md:text-base">
            <strong>Rick:</strong> "Morty, it's the Astronomy Picture of the Day. NASA took this photo across 13 billion light-years, and you can't even take the trash out."  
            <br/>
            <strong>Morty:</strong> "Jeez Rick, it’s just a space photo—why does it look like my search history?"
          </p>
        </div>
     
        <motion.img src={ship} className='h-40 mt-14 ml-12 lg:h-70  lg:ml-4 xl:mt-70 2xl:mt-80 xl:ml-5 lg:mr-30 animate-float'
        ></motion.img>
        {/* This component is present in /components/Api/ApodCube.jsx */}
        <ApodCube data={data} />
        
    </div>
  )
}

export default Apod;