import logo from '../assets/logo.png';
import {SOCIAL_MEDIA_LINKS} from '../constants';
import {motion} from 'framer-motion';


export default function Footer() {
  return (
  <div className="mb-8 mt-20"> 
    {/**
    *margin-bottom: 2rem
    * margin-top: 5rem;
    */}
    <div className="flex items-center justify-center">
      {/**
      *display :flex
      * align-items: center
      * justify-content-center
      */}
    <motion.img 
      initial={{opacity : 0}} 
          whileInView={{opacity:1}}
          transition={{duration: 0.5}}
      src={logo} width={200}  className="my-20" />
      {/** margin-top: 5rem;
      *margin-bottom: 5rem;
      */}
    </div>

    <div className="flex items-center justify-center gap-8">
      {/** display :flex
      * align-items: center
      * justify-content-center
      *gap: 2rem;
      */}
      {SOCIAL_MEDIA_LINKS.map((link, index) => (
    <motion.a
      initial={{opacity : 0}} 
          whileInView={{opacity:1}}
          transition={{duration: 0.2, delay: index*0.5}}
      key={index} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.icon}
    </motion.a>
      ))}
    </div>
    <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
      {/**gap: 2rem;
      text-align: center;
      text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem; 
    letter-spacing: 0.025em;
    color: #9ca3af;
      */}
    &copy;copileTab. All rights reserved
    </p>
  </div>
    
  )}