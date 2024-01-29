import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const controls = useAnimation();


  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1 },
    });
  }, [controls]); 


  const textAnimation = {
    opacity: 1,
    from: { opacity: 0 },
    transition: { duration: 0.5, delay: 0.5 },
  };

  return (
    <motion.div className="about-me-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div animate={controls} className="about-me-card">
        <h1 className="about-me-title">Hey, I'm Rodion!</h1>
        <motion.p {...textAnimation} className="about-me-text">
          Welcome to my world of coding adventures! At the age of 16, I've embarked on an exciting journey through the realms of Python, JavaScript, C#, Java, HTML, and CSS – weaving digital wonders with every keystroke.
        </motion.p>
        <motion.p {...textAnimation} className="about-me-text">
          As a coding enthusiast, I navigate the vast landscape of React and Next.js, crafting dynamic and responsive user interfaces. But that's not all! I've also harnessed the power of the Discord API to build interactive and engaging chat experiences.
        </motion.p>
        <motion.p {...textAnimation} className="about-me-text">
          Beyond the screen, you'll find me in a realm where creativity meets logic, where bugs are mysterious creatures to be tamed, and where each project is an opportunity for growth. Join me as I continue to unravel the secrets of the coding universe!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
