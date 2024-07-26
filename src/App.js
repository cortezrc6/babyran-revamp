import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServerInfo from './components/ServerInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServerInfo />
    </div>
  );
}

export default App;
