export default function MainImage({ image }) {
  if (!image) return null;
  const [year, month, day] = image.date.split(" ")[0].split("-");
  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${image.image}.jpg`;

  return (
    <div  className=" flex justify-center items-center w-full lg:w-3/4">
      <img id="card-purple" src={imageUrl} alt={image.caption} className="max-h-[500px] opacity-85 rounded-xl shadow-lg" />
    </div>
  );
}