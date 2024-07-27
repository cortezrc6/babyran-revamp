import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServerInfo from './components/ServerInfo';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServerInfo />
      <About />
    </div>
  );
}

export default App;
