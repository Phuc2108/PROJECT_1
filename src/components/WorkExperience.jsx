import {EXPERIENCES} from '../constants';
import {motion} from 'framer-motion';


export default function WorkExperience() {
  return (
 <section className="pt-20" id="work">
   {/**padding-top: 5rem; */}
 <motion.h2 
   initial={{opacity : 0, y: -20}} 
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1}}
   className="text-center text-4xl font-semibold tracking-tighter">実務経験</motion.h2>
   {/**
   *text-align: center;
   * text-4xl {
  font-size: 2.25rem; 36px 
  line-height: 2.5rem; 40px 
  }
  *font-weight: 600;
  * .tracking-tighter {
  letter-spacing: -0.05em; Adjust letter spacing tighter
   }
   */}
    <motion.div 
      initial={{opacity : 0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1, delay: 0.5}}
      className="space-y-8 p-10">
      {/**
      *margin-top: 2rem
      * padding: 2.5rem;
      */}
      {EXPERIENCES.map((experience, index) => (
   <motion.div 
     initial={{opacity : 0, x: -20}} 
          animate={{opacity:1, x:0}}
          transition={{duration: 1, delay: index*0.2}}
     key={index} className="rounded-xl border boder-stone-50/30 bg-white/10 p-4">
     {/**
       *border-radius: 0.75rem;
       *border-width: 1px;
       * border-color: #f3f4f6;
       * background-color: rgba(255, 255, 255, 0.1);
       * padding: 1rem;
     */}
     <h3 className="text-2xl font-semibold "> {experience.title}</h3>
     {/**
     * text-2xl{
      font-size: 1.5rem; 24px 
line-height: 2rem;
      }
     *font-weight: 600;
     */}
     <p className="text-xl">{experience.company}</p>
     {/** font-size: 1.25rem; 20px
line-height: 1.75rem;*/}
     <p className="text-sm test-stone-300 ">{experience.duration}</p>
     {/**
     *text-sm{
      font-size: 0.875rem; 14px
      line-height: 1.25rem;}
     *color: #d1d5db
     */}
     <p className="mt-2 text-base">
       {experience.description}</p>
     {/*
     *margin-top: 0.5rem;
     font-size: 1rem; 
line-height: 1.5rem;
     */}
   </motion.div>
      ))}
    </motion.div>
 </section>
    
  )
    }