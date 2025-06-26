import React, { useState } from 'react';
 // external CSS for cube transform
import { motion } from 'framer-motion';
import '../../../src/cube.css'; 

function ApodCube({ data }) {
  const [rotated, setRotated] = useState(false);

  return (
    <div className="    h-[290px] w-[290px] mt-110 md:mt-14  lg:h-[640px] lg:w-[640px] 
                        -ml-70 md:ml-56  lg:ml-12 xl:ml-20 2xl:ml-86 lg:mt-16 2xl:mt-26 
                        flex items-center justify-center rounded-2xl border-3
                        border-purple-600 shadow-lg shadow-purple-800
                        backdrop-blur-sm  animate-float " id='box' >   
    <div className="perspective-1000">
        <div className={`cube ${rotated ? 'rotate' : ''} `}>
          {/* Front face - Image */}
          <div className="face front">
            <img  src={data?.hdurl} alt={data.title} className=" object-cover rounded-xl  w-[270px] h-[270px] lg:w-[620px] lg:h-[620px]" />
          </div>

          {/* Back face - Info */}
          <div className="face back p-6 backdrop-blur-3xl bg-black/5 rounded-xl">
            <h2 className="text-md lg:text-3xl font-bold lg:mb-2">{data.title}</h2>
            <p className=" text-sm lg:text-xl lg:mb-2"><strong>Credits to:</strong> {data?.copyright}</p>
            <p className=" text-sm lg:text-xl lg:mb-2"><strong>Date:</strong> {data?.date}</p>
            
            <div className=" text-sm   md:mt-2 overflow-y-auto w-[270px] h-[160px] lg:w-[620px] lg:h-[620px]  lg:mt-7 max-h-90 lg:text-lg text-gray-300 lg:p-3">
                {data.explanation}
            </div>
         </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setRotated(!rotated)} id='btn-mini'
        className="  absolute ml-18 lg:ml-60 -bottom-15 bg-purple-600 hover:bg-purple-700 
                     px-2 py-1 font-extrabold text-xl rounded hover:cursor-pointer
                     hover:shadow-2xl hover:shadow-purple-800"
      >
        {rotated ? "Show Image" : "Show Info"}
      </button>
    </div>
  );
}

export default ApodCube;