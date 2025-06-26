import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import Apod from './pages/Apod';
import Mars from './pages/Mars';
import Asteroid from './pages/Asteroid';
import Earth from './pages/Earth';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //a Single page architecture has been followed for efficient performance, 
  // and all the pages render using the Outlet component under the Header. 

  //All the pages are present in Pages folder and their respective components 
  // are present in components folder.


  return (
     <BrowserRouter>
      <Routes>
        {/* 
          All routes beneath path="/" will render inside <Header/> 
          because Header is the element for the "/" route. 
        */}
        <Route path="/" element={<Header />}>
          {/* index → renders at exactly “/” */}
          <Route index element={<Navigate replace to="/home" />} />

          <Route path="home"  element={<Home />} />

          <Route path="/apod" element={<Apod/>}/>
      
          <Route path="/mars" element={<Mars/>}/>

          <Route path="/earth" element={<Earth/>}/>

          <Route path="/asteroid" element={<Asteroid/>}/>
          {/* catch-all 404 inside the layout */}
          <Route path="*" element={<p className='text-white'>Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
