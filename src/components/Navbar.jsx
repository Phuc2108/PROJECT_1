import { useState } from 'react'
import logo from '../assets/logo.png';
import {NAVIGATION_LINKS} from '../constants';

import { FaTimes, FaBars } from 'react-icons/fa';
//lấy từ file ẩn node_modules/react-icons/fa
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  //Tự động cuộn lên đầu trang khi nhấn icon, áp dụng với tất cả các component còn lại : tạo biến section ở mỗi component
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
       const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top : offsetPosition,
        behavior : "smooth", 
      })
    }
    setIsMobileMenuOpen(false)
  }
  
return (
   <div>
  <nav className="fixed left-0 right-0 top-4 z-50 ">  
   {/* position: fixed;
       left: 0;
       right: 0;
       top: 1rem (16px); 
  z-index: 50; */}
    {/*Desktop Menu*/}
    <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
 {/** 
 * margin-left: auto;  (mx-auto)
 * margin-right: auto; (mx-auto)
  *display: none;  (hidden)
 * max-width: 42rem; (max-w-2xl)
 * align-items: center;
 * justify-content: center
 * border-radius: 0.5rem; (rounded-lg)
 * border-width: 1px; (border)
 * border: 1px solid rgba(165, 165, 165, 0.3); (border-stone-50/30)
(làm mờ hình ảnh)

  *background-color: rgba(0, 0, 0, 0.2);(bg-black-20)

  *padding-top: 0.75rem; (12px) (py-3)
  *padding-bottom: 0.75rem;(12px) (py-3)
  * backdrop-filter: blur(16px)  (backdrop-blur-lg)
  * @media (min-width: 1024px) {
    display: flex; (lg:flex)
  }
      }
  **/}
      <div className="flex items-center justify-between gap-6">
  {/**
  * display: flex;
  * align-items: center;
  * justify-content: space-between
  * gap: 1.5rem; (gap-6)
  **/}
       <div className="">
          <a href="#">
          <img src={logo} width={150}  alt="logo" />
          </a>
       </div>
        <div >
   <ul className="flex items-center gap-4">
     {/**
      * display :flex
      * align-items: center;
      * gap: 1rem
      */}
     {NAVIGATION_LINKS.map((item, index) => (
            <li key ={index}>
            <a className="text-sm hover:text-yellow-400" href={item.href} onClick={(e) => handleLinkClick(e, item.href)} >      
              {/**
     *font-size: 0.875rem; (14px) (text-sm)
     line-height: 1.25rem (20px) (text-sm)
             nav a:hover {
             color:  #ffca28 
             
             }
              */}
              {item.label}
            </a>
            </li>
            ))}
      </ul>
      </div>
      </div>
    </div>
 {/**Mobile Menu (hiển thị trên điện thoại) */}
    <div className="rounded-lg backdrop-blur-md lg:hidden">
      {/**
      *border-radius: 0.5rem;
      * backdrop-filter: blur(12px);
      * .hide-lg {
  display: none;
}

@media (min-width: 1024px) {
  .hide-lg {
    display: block;
  }
}
      */}
    <div className="flex items-center justify-between ">
      {/** 
      * display: flex
      * align-items: center;
        justify-content: space-between
      */}
      <div>
      <a href="#">
      <img src={logo} width={90}  alt="logo" className="m-2"/>
      </a>
      </div>

      <div className="flex items-center">        {/** 
      * display: flex
      * align-items: center;
      */}
        <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
          {/**
          *.no-outline {
  outline: none;
}
       .hide-lg {
  display: none;
}

@media (min-width: 1024px) {
  .hide-lg {
    display: block;
  }
}  
          */}
          { isMobileMenuOpen ? (
     <FaTimes className="m-2 h-6 w-5"/>
          ) : (
      <FaBars className="m-2 h-6 w-5" />      
          )}
          {/**
           margin: 0.5rem;
          * height: 1.5rem;
          width: 1.25rem;
          */}
          {/**đây là nút ở góc phải ở trên, nhớ nhập import từ constant */}
        </button>
      </div>
       </div>
      {isMobileMenuOpen && (
     <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
       {/**
       * margin-left: 1rem;
       * margin-top: 1rem;
       * display: flex
       * flex-direction: column
       * gap: 1rem
       * backdrop-filter: blur(12px);
       */}
       {NAVIGATION_LINKS.map((item, index) => (
            <li key ={index}>
            <a className="block w-full text-lg" href={item.href} onClick={(e) => handleLinkClick(e, item.href)} >      
              {/**
              * display: block
              * width:100%
        * font-size: 1.125rem;  (18px )
        line-height: 1.75rem;  (28px)
              */}
              {item.label}
            </a>
            </li>
            ))}
       {/**Hiện mục khi ấn nút góc trái ở trên */}
     </ul>
      )}
    </div>
  </nav>
</div>
    
  )
    }