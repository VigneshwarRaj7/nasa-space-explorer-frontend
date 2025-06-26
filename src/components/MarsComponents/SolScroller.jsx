export default function SolScroller({ photos, onSelectSol }) {


  return (
    <div className="flex overflow-x-auto space-x-3 py-4 scrollbar-thin">
      {photos.map((entry) => (
        <button
          key={entry.sol}
          onClick={() => onSelectSol(entry.sol)}
          className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Sol {entry.sol} <br />
          📷 {entry.total_photos}
        </button>
      ))}
    
    </div>
  );
}