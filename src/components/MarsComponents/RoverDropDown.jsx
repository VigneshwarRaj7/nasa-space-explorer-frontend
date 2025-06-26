import React from 'react'

function RoverDropDown({ selectedRover, setSelectedRover }) {

    const rovers = ['Curiosity', 'Opportunity', 'Spirit'];

  return (
    <div className='mb-4 text-white'>
        <label htmlFor="rover" className="mr-14  text-xl font-semibold">
        Select a Rover
        </label>
        <select
        id='rover'
        value={selectedRover} 
        onChange={(e)=>setSelectedRover(e.target.value)}
        className='mt-2 text-xl p-1 border-2 border-purple-600 bg-slate-800 text-white rounded-lg'// Default value, can be dynamic
        >
           {rovers.map((rover) => (
          <option key={rover} value={rover}>
            {rover}
          </option>
        ))}
        </select>
    </div>
  )
}

export default RoverDropDown