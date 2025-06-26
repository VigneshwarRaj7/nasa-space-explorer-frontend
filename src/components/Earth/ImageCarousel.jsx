import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images, setSelectedImage, selected }) {
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync selected image with index
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[currentIndex]);
    }
  }, [currentIndex, images, setSelectedImage]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / images.length;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    // Update index
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div id='card-purple' className=" relative w-3/4 rounded-2xl  flex items-center backdrop-blur-xl justify-center mt-6 px-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="relative left-2 z-10 p-2 bg-black/50 rounded-full hover:bg-purple-600 transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Image Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto max-w-[80vw] px-10 py-2 scroll-smooth"
      >
        {images.map((image, index) => {
          const [year, month, day] = image.date.split(" ")[0].split("-");
          const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image.image}.jpg`;

          return (
            <img
              key={image.identifier}
              src={imageUrl}
              alt="Earth"
              className={`w-20 h-20 rounded-full cursor-pointer transition-transform ${
                selected?.identifier === image.identifier
                  ? "ring-1 ring-purple-400 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
            />
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="relative right-2 z-10 p-2 bg-black/50 rounded-full hover:bg-purple-600 transition"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}