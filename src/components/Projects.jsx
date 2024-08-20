
import {PROJECTS} from '../constants';
import { MdArrowOutward } from 'react-icons/md';
//from node_modules
import {motion} from 'framer-motion';
export default function Projects(){
  return (
  <section className="pt-20" id="projects">
    {/**padding-top: 5rem */}
    <motion.h2
      initial={{opacity : 0, y: -20}} 
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.8}}
      className="mb-8 text-center text-3xl lg:text-4xl">プロジェクト</motion.h2>
    {/**
    margin-bottom: 2rem;
    *text-align: center;
    * font-size: 1.875rem; 3xl
     line-height: 2.25rem; 3xl
     @media (min-width: 1024px) {
    font-size: 2.25rem; 4xl
    line-height: 2.5rem; 4xl
}
    */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/** 
      * display: grid;
      * grid-template-columns: repeat(1, minmax(0, 1fr));   grid-cols-1
      * gap: 1rem;
      * @media (min-width: 768px) {
  .md:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
      }
      @media (min-width: 1024px) {
        .lg:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
      */}
      {PROJECTS.map((pro) => (
       <motion.div 
         initial={{opacity : 0, scale: 0.9}} 
          whileInView={{opacity:1, scale:1}}
          transition={{duration: 0.5}}
         whileHover={{scale:1.05}}
         key={pro.id} className="group relative overflow-hidden rounded-3xl">
         {/**
         * group: không có css nào, cái này sẽ thiết kế chung các phần tử
         * position: relative;
         * overflow: hidden;
         * border-radius: 1.5rem;
         */}
      <motion.img 
        whileHover={{scale:1.1}}
        src={pro.image}  alt={pro.name} className="h-full w-full object-cover transition-transform durattion-500 group-hover:scale-100"/>
  {/**khi nhấn nút 3 gạch và nhấn project, nó sẽ tự cuộn xuống theo mục đó */}
         
         {/**
         *height: 100%;
         * width:100%
         * object-fit: cover;
         * .transition-transform {
  transition: transform 500ms ease;
}
         *.group-hover:scale-100:hover {
  transform: scale(1);
         */}
         <div 
           
           className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity durattion-500 group-hover:opacity-100">
         {/**hiện văn bản và làm mờ hình khi nhấn hoặc di chuột vào hình */}
           {/**
           *position: absolute;
           * .inset-0 {
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              }
           *display: flex;
           * flex-direction: column;
           * align-items: center;
           * justify-content: center;
           * color: white;
           * opacity: 0;
           * backdrop-filter: blur(16px);
           * transition: opacity 500ms ease;
           * transition-duration: 500ms;
           * .group-hover:opacity-100:hover {
            opacity: 1;
}
           */}
    <h3 className="mb-2 text-xl">{pro.name}</h3>
           {/**
           *margin-bottom: 0.5rem;
           * font-size: 1.25rem;
           */}
      <p className="mb-12 p-4">{pro.description}</p>
           {/*
           * margin-bottom: 3rem;
           *padding: 1rem;
           */}
      <a href={pro.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
        {/*noopener : Giá trị này của thuộc tính rel yêu cầu trình duyệt mở tài liệu được liên kết trong cửa sổ hoặc tab mới mà không chuyển bất kỳ thông tin nào về cửa sổ hoặc tab hiện tại. Điều này giúp ngăn chặn các lỗ hổng bảo mật như "tabnabbing" hoặc "clickjacking" nơi các trang web độc hại có thể cố gắng thao túng cửa sổ hiện tại.
        • noreferrer : Giá trị này của thuộc tính rel yêu cầu trình duyệt không gửi tiêu đề Người giới thiệu khi liên kết được theo dõi. Tiêu đề Người giới thiệu cho máy chủ biết URL của trang mà liên kết bắt nguồn từ đó. Mặc dù không hẳn là một lỗ hổng bảo mật nhưng nó có thể là điều không mong muốn trong một số trường hợp. Ví dụ: bạn có thể không muốn một trang web biết người dùng của mình đến từ đâu. Cuộn đến mới nhất*/}
        {/** */}
    <div className="flex items-center"> 
      {/**
     * background-color: white;
      *.px-4 {
  padding-left: 1rem; 
  padding-right: 1rem;
      }
      *color: black;
      * .hover:bg-gray-300:hover {
  background-color: lightgray
      }
      */}
      <span>Githubで見る</span>
      
      <MdArrowOutward/>
    </div>
           </a>
         </div>
           </motion.div>
           ))}
    </div>
    
    
  </section>
  
  )

}