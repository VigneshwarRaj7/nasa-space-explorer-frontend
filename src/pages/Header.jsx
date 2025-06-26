import React from 'react';
import { Menu, X } from 'lucide-react'; // or use Heroicons/your own icons
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Home from './Home';
import Mars from '../pages/Mars';
import Earth from '../pages/Earth';
import Apod from '../pages/Apod'
import Asteroid from '../pages/Asteroid';

function Header() {

   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-stars h-screen'>
      {/*Header component */}
      <header className="bg-stars absolute top-0  left-0 w-full z-50">
      <div className=" flex items-center justify-between px-4 py-3 ">
       <Link to="/home " id='card-purple' className='font-bold text-xl font-orbitron mx-2 mt-1 rounded-2xl shadow-2xl shadow-purple-600 backdrop-blur-sm p-2 text-purple-500'>🚀Space Menu</Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X id='card-purple' className='hover:cursor-pointer text-purple-500' size={32} /> : <Menu id='card-purple' className='hover:cursor-pointer text-purple-500' size={32} />}
        </button>
      </div>

      {isOpen && (
        <nav className=" bg-opacity-80 px-4 z-50 py-2 text-purple-500">
          <ul className="flex flex-col gap-2 text-center font-extrabold font-orbitron">
            <li><Link to="/apod" onClick={() => setIsOpen(false)}>APOD</Link></li>
            <li><Link to="/earth" onClick={() => setIsOpen(false)}>Earth</Link></li>
            <li><Link to="/mars" onClick={() => setIsOpen(false)}>Mars</Link></li>
            <li><Link to="/asteroid" onClick={() => setIsOpen(false)}>Asteroid</Link></li>
          </ul>
        </nav>
      )}
      </header>

      {/* All the pages like home, mars, asteroid, earth are rendered in the outlet component following single page architecture for efficient performance. */}
      <main className="bg-stars mt-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Header