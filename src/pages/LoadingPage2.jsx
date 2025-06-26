import React from 'react'
import ride2 from '../assets/loadingRide2.mp4';

function LoadingPage2() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
              <video
                className=""
                autoPlay     
                loop       
                muted     
                playsInline  
              >
                <source src={ride2} type="video/mp4" />
                Your browser doesn’t support HTML5 video.
              </video>
    </div>
  )
}

export default LoadingPage2