import React, { useState } from 'react';

export default function DateRangePicker( {dates, setDates}) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [error, setError] = useState('');

  const handleStart = (e) => {
    setStart(e.target.value);
    setError('');
  };

  const handleEnd = (e) => {
    setEnd(e.target.value);
    setError('');
  };

  const handleApply = () => {
    if (!start || !end) {
      setError('Please select both dates.');
      return;
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (diff < 0) {
      setError('End date must be after start date.');
      return;
    } else if (diff > 6) {
      setError('Date range cannot exceed 7 days.');
      return;
    } else {
      setDates({ start, end });
      setError('');
      return;
    }
   
  };

  return (
    // <div className="flex md:flex-col  md:w-full  font-orbitron md:ml-10 md:mt-8 md:mb-5 lg:mb-8">
    //   <div className="flex gap-2 text-white lg:font-semibold">
    //     <label>
    //       Start Date:
    //       <input
    //         type="date"
    //         value={start}
    //         onChange={handleStart}
    //         className="ml-2 py-1 px-3 rounded-lg text-white backdrop-blur-sm border-2 border-purple-600"
    //         max={end || undefined}
    //       />
    //     </label>
    //     <label className="ml-4">
    //       End Date:
    //       <input
    //         type="date"
    //         value={end}
    //         onChange={handleEnd}
    //         className="ml-2 py-1 px-3 rounded-lg  text-white backdrop-blur-sm border-2 border-purple-600"
    //         min={start || undefined}
    //       />
    //     </label>
    //     <button
    //       className="sm:absolute md:relative font-orbitron  md:mt-0 md:ml-4  bg-purple-600 text-white px-4 font-bold rounded-full cursor-pointer hover:bg-purple-700 transition"
    //       onClick={handleApply}
    //     >
    //       Apply
    //     </button>
    //   </div>
    //   {error && <div className="text-red-400">{error}</div>}
    // </div>
    <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:ml-6 font-orbitron text-white p-4">
  <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
    <label className="flex flex-col text-sm sm:flex-row sm:items-center">
      Start Date:
      <input
        type="date"
        value={start}
        onChange={handleStart}
        className="mt-1 sm:mt-0 sm:ml-2 py-1 px-3 rounded-lg text-white bg-transparent backdrop-blur-sm border-2 border-purple-600"
        max={end || undefined}
      />
    </label>

    <label className="flex flex-col text-sm sm:flex-row sm:items-center">
      End Date:
      <input
        type="date"
        value={end}
        onChange={handleEnd}
        className="mt-1 sm:mt-0 sm:ml-2 py-1 px-3 rounded-lg text-white bg-transparent backdrop-blur-sm border-2 border-purple-600"
        min={start || undefined}
      />
    </label>
  </div>

  <button
    className="bg-purple-600 text-white px-4 py-2 font-bold rounded-full hover:bg-purple-700 transition w-full sm:w-auto"
    onClick={handleApply}
  >
    Apply
  </button>

  {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
</div>
  );
}