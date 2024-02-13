import React, { useEffect, useState } from 'react';
import '../styles/LandingPage.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pic1 from '../assets/Screenshot_1.png'; 
import Typewriter from 'typewriter-effect';
import pic2 from '../assets/react_logo.png'

const LandingPage = () => {

  return (
    <div className='container'>
      <div style={{ height: '30vh', display: 'flex', alignItems: 'center', zIndex: 10}}>
        <div className='text-container'>
          <h2 className='textinpage'>
            Welcome to My&nbsp;
            <Typewriter className='typewriter' options={{ autoStart: true, loop: true, delay: 40, strings: [" ReactJS Project", " ExpressJS Project", " API Project"] }} />
          </h2>
        </div>
      </div>
  
      <img src={pic1} className='pic1' />
    </div>
  );
};

export default LandingPage;
