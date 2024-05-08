import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Video from './components/Video';
import './index.css';
import Main from './Main';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/video' element={<Video />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
