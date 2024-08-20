import {EDUCATION} from '../constants';
import {motion} from 'framer-motion';

export default function EducationSection() {
  return (
   <section className="py-8" id="education">
     {/**padding-top: 2rem;
     *padding-bottom: 2rem;
     */}
   <motion.h2 
     initial={{opacity : 0, y: -20}} 
          whileInView={{opacity:1, y:0}}
          transition={{duration: 1}}
     className="mb-4 text-center text-3xl font-bold">教育</motion.h2>
     {/**
     *margin-bottom: 1rem;
     * text-align: center;
     * font-size: 1.875rem
     * font-weight: 700;
     * 
     */}
     {EDUCATION.map((edu, index) => (
  <motion.div 
    initial={{opacity : 0, x: -20}} 
          whileInView={{opacity:1, x:0}}
          transition={{duration: 1, delay: index*0.5}}
    key={index} className="mb-6 p-10">
    {/**
    *margin-bottom: 1.5rem;
    * padding: 2.5rem;
    */}
    <h3 className="text-xl font-semibold">
       {edu.degree}
     </h3>
    {/**font-size: 1rem;
  font-weight: 600; */}
    <p className="text-lg">{edu.institution}</p>
    {/**font-size: 1.125rem;
    *line-height: 1.75rem;
    */}
    <p className="text-sm text-stone-300">
      {edu.duration}
    </p>
    {/**text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem; 
    }
    *color: #9ca3af;
    */}
    <p className="mt-2">{edu.description}</p>
    {/**margin-top: 0.5rem */}
  </motion.div>
     ))}
   </section>
    
  )
    }