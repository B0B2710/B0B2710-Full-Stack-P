
import { Sidebar } from './Sidebar'
import { FiGithub } from 'react-icons/fi'
import '../styles/Navigation.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const Navigation = () => {


  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
     
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 



  return (
    <nav className={`navigation ${isScrolled ? 'invisible' : ''}`}>
        <div className='brand' style={{ zIndex: 1000 }}>
        <Sidebar className='sidebar' style={{ zIndex: 1000, }}/>
        </div>
        <a
        className={`cta-btn ${isScrolled ? 'invisible' : '' }`}
        target="_blank"
        href="https://github.com/B0B2710/Full-Stack-P"
      >
        <FiGithub className="icon" />
        Source Code
      </a>

    </nav>
  )
}
export default Navigation;


