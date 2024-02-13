import React, { useEffect, useState } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { IoLogoJavascript } from "react-icons/io5"; //javascript icon
import { FaPython } from "react-icons/fa";//python icon
import { FaDiscord } from "react-icons/fa";//discord icon
import { SiExpress } from "react-icons/si";
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
  if(counter === boxes.length-1){
    setCounter(0);
    
  }else{
    setCounter(counter+1)
  }
  
  

};
const counterminus = () => {
  if(counter===0){
    setCounter(boxes.length-1);
  }else{
    setCounter(counter-1)
  }
};
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1 },
    });
  }, [controls]); 



  return (
    <>
    <motion.div className="about-me-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div animate={controls} className="about-me-card">
        <h1 className="about-me-title">Hey, I'm Rodion!</h1>
        <div>
          <h2>Im a self-taught full-stack web Developer and Discord Bots Developer</h2>
        </div>
      </motion.div>
    </motion.div>
    <motion.div className='tools-and-langs-box-container'>
      <h3 className='tools-and-langs-box-title'>Here is my programming knowledge and some of the tools I use</h3>

    <motion.div className='Buttons'>
      <button onClick={counterminus} className='Button'>before</button>
      <button onClick={counterplus} className='Button'>next</button>
    </motion.div>
      <motion.div className='langs-box-container'>
      <motion.div className='langs-box'>
        
      <div className='img'>
        <h2>{boxes[counter].title}</h2>
        {boxes[counter].img}
     </div>
        <h3>{boxes[counter].text}</h3>
        
        </motion.div>
      </motion.div>
    </motion.div>
      <div className='hidden-text'>Im a fast learner so i can learn anything and complete any tasks with enough time given ;)*</div>
    </>
    
  );
};


const boxes = [
  {
    title:"",
    img:<><IoLogoJavascript style={{ fontSize: '5em' }}/><MdCss style={{ fontSize: '5em' }}/><FaHtml5 style={{ fontSize: '5em' }}/></>,
    text:"I started learning the basics of web development when i was in the start of 10th grade and since then im still learning :)"
  },
  {
    title:"",
    img:<><SiExpress style={{ fontSize: '5em' }}/> <FaNodeJs style={{ fontSize: '5em' }}/></>,
    text:"I have started learning nodejs and ExpressJS not too long ago and this is my first website backend Project with a full working login system"
  },
  {
    title:"",
    img:<FaPython style={{ fontSize: '5em' }}/>,
    text:"i have finished a coruse with all the basics of python etc and I have made my own Python,shell bug bounty Project (you can see it on my Github page)"
  },
  {
    title:"",
    img:<FaDiscord style={{ fontSize: '5em' }}/>,
    text:"i have made a few discord bots useing DiscordJs (none of them are public)"
  },
  {
    title:"",
    img:<SiMongodb style={{ fontSize: '5em' }}/>,
    text:"I know how to operate an Atlas Mongodb ive learned by useing it for a few of my own personal Project (none of them are public) "
  },
  {
    title:"",
    img:<FaGithub style={{ fontSize: '5em' }}/>,
    text:"I know to use Github and how to reslove conflics,I have experience in writing code with a team of friends "
  },
  {
    title:"",
    img:<FaReact style={{ fontSize: '5em' }}/>,
    text:"The whole Front-end of this Project was built with ReactJS"
  },
  

  ]
export default AboutMe;
