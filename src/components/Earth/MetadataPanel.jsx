export default function MetadataPanel({ image }) {
  if (!image) return null;
  const date = image.date.split(" ")[0];
  return (
    <div id='card-purple'  className="animate-float backdrop-blur-md border-2 border-purple-600 w-2/4 h-1/4 p-3 lg:ml-24 xl:ml-30 2xl:ml-90 rounded-xl  text-sm lg:w-1/4 mb-4 lg:mb-0 mr-4">
      <p><strong>Name:</strong> {image.identifier}</p>
      <p><strong>Date:</strong> {image.date}</p>
      <p><strong>Version:</strong> {image.version}</p>
      <p><strong>SEV Angle:</strong> {image.attitude_quaternions.q0}</p>
      <p><strong>Latitude:</strong> {image.centroid_coordinates.lat}</p>
      <p><strong>Longitude:</strong> {image.centroid_coordinates.lon}</p>
    </div>
  );
}