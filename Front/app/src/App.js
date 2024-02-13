import './App.css';
import React, { useEffect, useState } from 'react';
import './styles.css';
import WeatherPage from './components/WeatherPage';
import  Navigation  from './components/Navigation';
import LandingPage from './components/LandingPage'
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Auth from './components/Auth';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const animationVariants = {
    hidden: { y: '-100%' }, 
    visible: { y: 0 },       
  };

  

  return (
    <>
  <div className="App" >
  <AnimatePresence mode="wait" initial={false}>
    <motion.div  initial="hidden" animate="visible" variants={animationVariants} transition={{ duration: 0.5 }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Weather" element={<WeatherPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/auth" element={<Auth/>} />
    </Routes>
    </motion.div>
   
  <Footer/>
  </AnimatePresence>
  </div>
  </>

  );
}




export default App;
