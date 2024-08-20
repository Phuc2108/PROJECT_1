import {BIO} from '../constants';
import {motion} from 'framer-motion';

export default function Bio() {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      {/**
      *display: flex;
      * max-width: 64rem;
      * flex-direction: column;
      * gap: 3rem;
      * padding-top: 5rem;
      */}
      <motion.h2 
        initial={{opacity : 0, y: -20}} 
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1}}
        className="text-center text-3xl lg:text-4xl ">バイオ</motion.h2>
      {/**
      *text-align: center;
      * .text-3xl {
  font-size: 1.875rem; 
  line-height: 2.25rem;
      }
      *@media (min-width: 1024px
  .lg:text-4xl {
    font-size: 2.25rem; 
    line-height: 2.5rem;
  }
      }
      */}
      <motion.div
        initial={{opacity : 0}} 
          whileInView={{opacity:1}}
     transition={{duration: 1, delay: 0.2}}
        >
        {BIO.map((bio, index) => (
       <motion.p
         initial={{opacity : 0, x: -20}} 
          whileInView={{opacity:1, x:0}}
          transition={{duration: 1, delay: index*0.5}}
         key={index} className="mb-4 text-lg lg:text-xl">  
         {/**
         * margin-bottom: 1rem;
         *font-size: 1.125rem;
         * .lg\:text-xl {
    font-size: 1.25rem;
         }
         * 
         */}
         {bio}
       </motion.p>
        ))}
      </motion.div>
    </section>
  )
    }