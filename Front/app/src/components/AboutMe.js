import React, { useEffect, useState } from 'react';
import { motion, px, useAnimation } from 'framer-motion';
import { IoLogoJavascript } from "react-icons/io5"; //javascript icon
import { FaPython } from "react-icons/fa";//python icon
import { FaDiscord } from "react-icons/fa";//discord icon
import { DiVisualstudio } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import '../styles/AboutMe.css';



const AboutMe = () => {
  const controls = useAnimation();

 const [counter,setCounter] = useState(0)

 const counterplus = () => {
  console.log(`lengh ${boxes.length} counter : ${counter}`)
  if(counter === boxes.length - 1){
    return;
  }
  setCounter(counter+1)

};
const counterminus = () => {
  if(counter===0){
    return;
  }
  setCounter(counter-1)
  console.log(counter)
};
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
    <>
    <motion.div className="about-me-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div animate={controls} className="about-me-card">
        <h1 className="about-me-title">Hey, I'm Rodion!</h1>
        <div>
          <h2>Im a self learned full-stack web Developer and Discord Bots Developer</h2>
        </div>
      </motion.div>
    </motion.div>
    <motion.div className='tools-and-langs-box-container'>
      <h3 className='tools-and-langs-box-title'>Here are the Programing langs i know and still learns</h3>

    <motion.div className='Buttons'>
      <button onClick={counterminus} className='Button'>before</button>
      <button onClick={counterplus} className='Button'>next</button>
    </motion.div>
      <motion.div className='langs-box-container'>
      <motion.div className='langs-box'>
        <h2>{boxes[counter].title}</h2>
        <div className='img'>{boxes[counter].img}</div>
        
        <h3>{boxes[counter].text}</h3>
        
        </motion.div>
      </motion.div>
      <button></button>
      <h2>And here some of the tools i use to do my Coding :D</h2>
      <motion.div className='tools-box-container'> 
      
      </motion.div>
    </motion.div>

    </>
    
  );
};


const boxes = [
  {
    title:"js",
    img:<IoLogoJavascript />,
    text:"im useing js to build this app rn "
  },
  {
    title:"pytohn",
    img:<FaPython/>,
    text:"i have no idea how to use python :( "
  }
  ]
export default AboutMe;
