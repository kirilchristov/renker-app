import React from 'react';
import './App.css';
import MainSection from './Components/MainSection';

import NavBar from './Components/NavBar'


function App() {
  console.log("Fixed animation on mobile - removed - version 1.4")
  return (
    <div className="App">
     <NavBar />
     <MainSection/>
    </div>
  );
}

export default App;