export default function ImageGallery({ photos }) {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {photos.map((photo) => (
        <div key={photo.id} className="bg-black p-2 rounded-xl shadow hover:scale-105 transition">
          <img src={photo.img_src} alt="Mars Rover" className="rounded-lg w-full h-40 object-cover" />
          <p className="text-xs text-gray-300 mt-1">{photo.camera.full_name}</p>
        </div>
      ))}
    </div>
  );
}