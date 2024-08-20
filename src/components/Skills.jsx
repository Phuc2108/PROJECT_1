import {SKILLS} from '../constants';
import {motion} from 'framer-motion';

const containerVariants = {
  hidden:{opacity:0, y: 20},
  visible: { opacity:1, y:0, 
            trasition:{  
              duration:1, 
              staggerChildren: 0.5,
    },
  }
}

const itemsVariants = {
  hidden:{opacity:0, x:-20 },
  visible:{opacity:1 , x:0, 
           trasition:{
             duration: 0.5
           },
          },
}

export default function Skills() {
  return (
   <div className="container mx-auto" id="skills">
     {/**
     *container {
  width: 100%; Full width
  max-width: 1024px; Maximum width
  margin: 0 auto; Center horizontally
     } 
     *.mx-auto {
  margin-left: auto; Left margin is auto
  margin-right: auto; Right margin is auto
     }
     */}
     <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">スキル</h2>
     {/**
     *margin-bottom: 3rem;
     * margin-top: 5rem;
     *text-align: center;
     * .text-4xl {
  font-size: 2.25rem; 36px
  line-height: 2.5rem; 40px
     }
     *font-weight: 600;
     */}
 
     <motion.div
       initial= "hidden"
          whileInView="visible"
       variants= {containerVariants}
          viewport={{once : true}}
       className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border boder-stone-50/30">
       {/**
       *mx-2 {
  margin-left: 0.5rem; 8px
  margin-right: 0.5rem; 8px
       }
       *display: flex;
       * flex-direction: column;
       * .rounded-3xl {
  border-radius: 1.5rem; 24px
       }
       *.px-4 {
  padding-left: 1rem; 16px
  padding-right: 1rem; 16px
       }
       *.py-2 {
  padding-top: 0.5rem; 8px
  padding-bottom: 0.5rem; 8px
       }
       *@media (min-width: 1024px) {
  .lg:px-20 {
    padding-left: 5rem; 80px 
    padding-right: 5rem; 80px
  }
       }
       *border-width: 1px;
       * border-color: #f3f4f6;
       */}
       {SKILLS.map((kynang, index) =>(
     <motion.div 
       variannts= {itemsVariants}
       key={index} className={`py-6 flex items-center justify-between ${index !== SKILLS.length -1 ? " border-b boder-stone-50/30" : ""}`}>
       {/**
       *.py-6 {
  padding-top: 1.5rem; 24px
  padding-bottom: 1.5rem; 24px
       }
       *align-items: center;
       *justify-content: space-between;
       * border-bottom-width: 1px;
       * border-color: #f3f4f6;
       */}
       <div className="flex items-center">
         {/**
         * display:flex
         *align-items: center;
         */}
         {kynang.icon}
         <h3 className="px-6 text-lg lg:text-2xl">{kynang.name}</h3>
         {/**
         *.px-4 {
  padding-left: 1.5rem; 
  padding-right: 1.5rem; 
       }
         *.text-lg {
  font-size: 1.125rem; 18px 
  line-height: 1.75rem;
         }
         *@media (min-width: 1024px) {
  .lg:text-2xl {
    font-size: 1.5rem; 24px
    line-height: 2rem;
  }
         }
         */}
       </div>
       <div className="text-md font-semibold lg:text-xl">
         {/**
         *.text-md {
  font-size: 1rem; 16px 
  line-height: 1.5rem;
         }
         *font-weight: 600;
         *@media (min-width: 1024px) {
  .lg:text-xl {
    font-size: 1.25rem;  20px 
    line-height: 1.75rem;
  }
}
         * 
         */}
       <span>{kynang.experience}</span>
       </div>
     </motion.div>
     
       ))}
    </motion.div>
  
   </div>
    
  )}