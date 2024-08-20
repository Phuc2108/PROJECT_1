
import {HERO} from '../constants';
/*nhập văn bản */
import phuc from '../assets/phuc.jpg';
/*nhập hình ảnh và video */
import {motion} from 'framer-motion';
//nhập `npm i framer-motion` ở terminal, import các comp còn lại
export default function Hero() {
  return (
      <section className="flex min-h-screen flex-wrap items-center">
   {/*  display: flex;
       
       * min-height: 100vh; (100vh means 100% of the viewport height)
        
        *flex-wrap: wrap; 
       * align-items: center; */}
       
        <motion.div 
          initial={{opacity : 0, x: -50}} 
          animate={{opacity:1, x:0}}
          transition={{duration: 1}}
          className="w-full md:w-1/2">
          {/**
          * initital: trạng thái ban đầu khi được render theo đường trục xy
          * animate : chỉ định trang thái mà bạn muốn  thành phần chuyển đến sau khi hoạt ảnh động tác hoạt ảnh bắt đầu
          * trasition: mô tả cách hoạt ảnh chuyển động với duration n giây
          */}
          
          {/**@media (max-width: 768px) {
           .your-element {
               width: 100%; 
                 }
                   } 
  *    @media (min-width: 768px) {
  .your-element {
    width: 50%; 
  }
}
                   */}
      <h2 className="my-8 py-2 text-4xl font-bold md:text-5xl  lg:text-[7rem]">
        {/**
       * margin-top: 32px;  (my-8 ) 
       * padding-top: 8px;  (py-2)
       * font-size: 2rem;  (text-4xl )
       * font-weight: bold; 
       * @media (min-width: 768px) {
         font-size: 3rem;   (md:text-5xl) 
            }
                
    *  @media (min-width: 1024px) { 
    font-size: 7rem;  (lg:text-[7rem])
           }
        */}
        大好き
        {HERO.name}
      </h2>
     <p className="p-2 text-3xl tracking-tighter lg:text-4xl"> {HERO.greet}</p>
    {/**phần này mở terminal nhập npm `i react-icons` , phần constants sẽ tự export sang file này*/}
    
          {/**
  padding: 8px; (p-2 )
  font-size: 3rem; (text-3xl )
  letter-spacing: -0.025em;  (tracking-tighter )
           */}
      <p className="mb-8 p-2 text-xl">{HERO.description}</p>
   {/**margin-bottom: 32px; (mb-8 )
  padding: 8px;  (p-2 )
  font-size: 1.25rem; (text-xl )  */}
    </motion.div>
        <motion.div 
          initial={{opacity : 0, scale:0.8}} 
          animate={{opacity:1, scale:1}}
          transition={{duration: 1}}
          className="w-full md:w-1/2 lg:p-8">
        {/**
        * @media (max-width: 768px) {
    width: 100%; 
  }

*   @media (min-width: 768px) {
  width: 50%; 
  }

@media (min-width: 1024px) {
  padding: 32px; (lg:p-8 )
  }
 */}
          <div className="flex justify-center">
      {/*display: flex;
  justify-content: center; */}
            <motion.img
              initial={{opacity : 0}} 
          animate={{opacity:1}}
          transition={{duration: 1}}
              src={phuc} width={550} height={500} alt="Phuc" className="rounded-3xl"/>
      {/**border-radius: 96px; */}

          </div>
        </motion.div>
      </section>
    
  )
}
