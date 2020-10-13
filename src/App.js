import React from 'react';
import './App.css';
import MainSection from './Components/MainSection';

import NavBar from './Components/NavBar'


function App() {
  console.log("Animation added - version 1.3")
  return (
    <div className="App">
     <NavBar />
     <MainSection/>
    </div>
  );
}

export default App;