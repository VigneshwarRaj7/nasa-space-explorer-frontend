import React from 'react'
import { m, motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Apod from './Apod';
import Mars from './Mars';
import { Link } from 'react-router-dom';
import HoverDialogue from '../components/Home/HoverDialogue';

import mars from '../assets/Mars.png';
import ship from '../assets/ship1.png';
import portal from '../assets/portal-gif.gif';
import asteroid from '../assets/asteroid.png';
import earth from '../assets/earth.png';

function Home() {
  
  const shipControls   = useAnimation();
  const portalControls = useAnimation();
  const asteroidControls = useAnimation();


  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const [showWelcomeText, setShowWelcomeText] = useState(true);

  //This useEffect is used to show the Welcome Text for 6 seconds.
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowWelcomeText(false);
      }, 6000); 

      return () => clearTimeout(timer); 
    }, []);

    // Below are animation specifications defining the final points and state for each component in the Home page. 
  const shipAnimation = {
    opacity: 1,
    scale:   0.3,
    y:      -100,
    x:       600,
  };

  const portalAnimation = {
    opacity: 0.5,
    scale:   1.2,
    y:       0,
    x:       0,
  };

  const marsAnimation = {
    opacity: 1,
    scale: 0.3,
    y: 220,
    x: 400,
    rotate: 60,
  }; 

  const asteroidAnimation1 = {
    opacity: 1,
    scale: 0.3,
    y: -250,
    x: 290,
    rotate: -60,
  }; 

  const asteroidAnimation2 = {
    opacity: 1,
    scale: 0.3,
    y: 180,
    x: 990,
    rotate: 0,
  }; 

  const asteroidAnimation3 = {
    opacity: 1,
    scale: 0.3,
    y: 280,
    x: 790,
    rotate: 40,
  }; 

  const earthAnimation = {
    opacity: 1,
    scale: 0.3,
    y: 10,
    x: 900,
    rotate: -50,
  };

  //Below are all the functions required for triggering animation and  routing to a new page when their corresponding images are clicked.
  const handlePortalClick = () => {
    shipControls.start(shipAnimation);
    portalControls.start(portalAnimation);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/apod';
    }, 4000);
  };

  const marsTravel = () => {
    shipControls.start(marsAnimation);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/mars';
    }, 4000); 
  };

  const asteroidCrash1 = () => {
    shipControls.start(asteroidAnimation1);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/asteroid';
    }, 4000); 
  };

  const asteroidCrash2 = () => {
    shipControls.start(asteroidAnimation2);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/asteroid';
    }, 4000); 
  };

  const asteroidCrash3 = () => {
    shipControls.start(asteroidAnimation3);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/asteroid';
    }, 4000); 
  };

  const earthTravel = () => {
    shipControls.start(earthAnimation);
    setStarted(false);
    setTimeout(() => {
      window.location.href = '/earth';
    }, 4000); 
  };

  return (
    <div className="bg-stars h-screen text-green-500 relative">
      
      {showWelcomeText && (
      <div id='card-purple' className="absolute  text-center font-extrabold font-orbitron items-center text-xl text-white backdrop-blur-xs bg-opacity-50 px-4 py-2 rounded-md  left-1/2 transform -translate-x-1/2 z-50">
        🚀 Welcome to the Space Explorer! Rick & Morty are prepping the ship...
           Best viewed in "horizontal orientation" for phones...                       
            
      </div>
    )}
      {/* Hover Dialogue near the ship */}
      <div className="absolute top-32 left-10 z-50">
        <HoverDialogue
          text={
            hoveredItem === "portal"
              ? "Don’t touch the portal, Morty—unless you wanna meet your third nose."
              : hoveredItem === "mars"
              ? "We're going to Mars, Morty! It's red, dusty, and terrifying!"
              : hoveredItem === "earth"
              ? "Earth looks peaceful from here... but trust me, it's not!"
              : hoveredItem === "asteroid"
              ? "Watch out, Morty! That asteroid’s gonna hit us!"
              : ""
          }
          visible={!!hoveredItem}
        />
      </div>

      <div className='flex flex-row'> 
        <motion.img
          src={ship}
          className={`h-36 mt-20 lg:h-70 lg:mt-70 -rotate-16 ${started ? 'animate-float' : ''}`}
          initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          animate={shipControls}
          transition={{ duration: 4, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        />

        <motion.img
          src={portal}
          className={`h-45 -ml-30 md:ml-30 mt-96 md:mt-10 lg:mt-8 lg:ml-0 lg:h-90 -rotate-12 opacity-80 z-0 cursor-pointer  2xl:h-96 ${started ? 'animate-float' : ''}`}
          initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          animate={portalControls}
          transition={{ duration: 4, ease: 'easeOut' }}
          onClick={handlePortalClick}
          onMouseEnter={() => setHoveredItem("portal")}
          onMouseLeave={() => setHoveredItem(null)}
        />

        <img
          src={mars}
          className='absolute w-40 h-40  mt-70 lg:w-70 lg:h-70 md:mt-40 md:ml-90 lg:ml-150 lg:mt-120 animate-float cursor-pointer'
          onClick={marsTravel}
          onMouseEnter={() => setHoveredItem("mars")}
          onMouseLeave={() => setHoveredItem(null)}
        />

        <motion.img
          src={asteroid}
          className='absolute animate-float w-20 h-20 mt-14 ml-80 lg:w-30 lg:h-30 lg:mt-15 lg:ml-110 cursor-pointer'
          initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          animate={asteroidControls}
          transition={{ duration: 4, ease: 'easeOut' }}
          onClick={asteroidCrash1}
          onMouseEnter={() => setHoveredItem("asteroid")}
          onMouseLeave={() => setHoveredItem(null)}
        />

        <motion.img
          src={asteroid}
          className='absolute animate-float w-20 h-20 mt-50 ml-60 lg:w-30 lg:h-30 lg:mt-70 lg:ml-300 cursor-pointer'
          initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          animate={asteroidControls}
          transition={{ duration: 4, ease: 'easeOut' }}
          onClick={asteroidCrash2}
          onMouseEnter={() => setHoveredItem("asteroid")}
          onMouseLeave={() => setHoveredItem(null)}
        />

        <motion.img
          src={asteroid}
          className='absolute animate-float w-20 h-20 mt-160 ml-60 md:mt-60 md:ml-160 lg:w-30 lg:h-30 lg:mt-120 lg:ml-260 cursor-pointer'
          initial={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          animate={asteroidControls}
          transition={{ duration: 4, ease: 'easeOut' }}
          onClick={asteroidCrash3}
          onMouseEnter={() => setHoveredItem("asteroid")}
          onMouseLeave={() => setHoveredItem(null)}
        />

        <motion.img
          src={earth}
          className='absolute animate-float h-40 w-40 mt-120 md:ml-160 md:mt-10 lg:mt-5 lg:h-70 lg:w-70 lg:ml-250 cursor-pointer'
          onClick={earthTravel}
          onMouseEnter={() => setHoveredItem("earth")}
          onMouseLeave={() => setHoveredItem(null)}
        />
      </div>
    </div>
  );
}

export default Home;