import React, { useEffect, useState } from "react";
import MainImage from "../components/Earth/MainImage";
import MetadataPanel from "../components/Earth/MetadataPanel";
import ImageCarousel from "../components/Earth/ImageCarousel";
import EpicDateSelector from "../components/Earth/EpicDateSelector";

import LoadingPage2 from "./LoadingPage2";

function Earth() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [date, setDate] = useState("2025-06-21"); // Default date

  //API call to retrieve images of Earth from EPIC from NASA Open APIs
  useEffect(() => {
    fetch(`http://localhost:5050/api/earth/date/:${date}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setSelectedImage(data[0]);
      });
  }, [date]);
  
 
  if(!images.length){
    return <LoadingPage2></LoadingPage2>
  }

  return (
    <div className=" min-h-screen mt-12 text-purple-400 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-orbitron ml-4 md:ml-0 mt-4 mb-2 md:mb-4 ">Earth Polychromatic Imaging Camera</h1>

      {/* Component providing the functionality to choose a particular date. From ../components/Earth/EpicDateSelector*/}
      <EpicDateSelector date={date} setDate={setDate} ></EpicDateSelector>
      {images.length === 0 ? (<div className="font-orbitron font-bold text-2xl text-white item-center"> Please choose some other date</div>):   
      <div className="flex flex-col font-orbitron items-center lg:flex-row mt-1 w-full px-6 lg:px-20">
      {/* Component providing the meta data about the image. From ../components/Earth/MetaDataPanel*/}
        <MetadataPanel image={selectedImage} />
      {/* Component providing the main image. From ../components/Earth/MainImage*/}  
        <MainImage image={selectedImage} />
      </div>
       }
       {/* Component providing the imagecarousel to select different images. From ../components/Earth/ImageCarousel*/} 
        <ImageCarousel images={images} setSelectedImage={setSelectedImage} selected={selectedImage} />
    </div>
  );
}

export default Earth;