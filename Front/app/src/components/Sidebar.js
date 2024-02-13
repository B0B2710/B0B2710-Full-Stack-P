import { useRef, useState,useEffect,useCallback } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineRollback } from 'react-icons/ai'
import { useClickAway } from "@uidotdev/usehooks"
import { SiAboutdotme } from "react-icons/si";
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import '../styles/Sidebar.css';
import { TiWeatherCloudy } from "react-icons/ti"; 
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink  } from 'react-router-dom';
export const Sidebar = () => {
    const [open ,setOpen] = useState (false)
    const ref = useRef(null)
    const [check,setCheck]= useState(open)
    const [scrollPosition, setScrollPosition] = useState(0);
    useClickAway(ref, () => setOpen(false))
    const toggleSidebar = ()  => setOpen(prev => !prev) 
    useEffect(() => {
      setCheck(old=>!old)
      if(open){
        lockScroll()
        setScrollPosition(window.scrollY);
        console.log(window.scrollY)
      }
      else{
        unlockScroll(scrollPosition);
        
      }
    }, [open]);


    const lockScroll = useCallback(() => {
      document.body.style.overflow = 'hidden';
    }, [])
    
    const unlockScroll = useCallback(() => {
      document.body.style.overflow = '';
    }, [])
    const sidebarStyle = {
      top: `${0}px`,
  };

    return (
    <>
    
   <button style={{background:"#171717"}} onClick={() => {toggleSidebar();}}
  className="toggle-btn"
> <GiHamburgerMenu color="white"/>
    </button>


  {open && (
      <>
  <AnimatePresence mode="wait" initial={false}>
  {check && (
    
    <>
    <motion.div
      className="overlay"
      {...framerSidebarBackground}

    ></motion.div>



    <motion.div //all the sidebar
      className={`sidebar `}
      ref={ref} 
      {...framerSidebarPanel}
      style={sidebarStyle}
    >

        <div className="sidebar-header">
          <span style={{ color: "white" }}>Welcome</span>
          <button
            onClick={toggleSidebar}
            className="close-btn"
            aria-label="close sidebar"
          >
            <AiOutlineRollback color="white" />
          </button>
        </div>

          <ul>
            {items.map((item, idx) => {
              const { title, href, Icon } = item;
              return (
                <li key={title}>
                  <NavLink onClick={toggleSidebar}
                    to={href}
                    className="sidebar-link">

                    <motion.span style={{color:"white"}}{...framerText(idx)}>{title}</motion.span>
                    <motion.div {...framerIcon}>
                      <Icon className="icon" color="white" />
                    </motion.div>
                  
                  </NavLink>
                </li>
              );
            })}
          </ul>

    </motion.div>

  </>
)}
</AnimatePresence>
</>
    )}
    
    </>);}

const items = [
    {title: 'Home', Icon: BiHomeSmile,href:"/"},
    {title: 'About', Icon: SiAboutdotme ,href:"/about"},
    {title: 'Weather', Icon: TiWeatherCloudy,href:"/Weather"},
    {title: 'auth system', Icon: BiUser,href:"/auth"}


] 
const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.5 } },
  transition: { duration: 1.3 },
};

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 0.5,
  },
};
