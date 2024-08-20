import React from 'react';
import './App.css'

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Bio from './components/Bio';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// làm theo trình tự từ trên xuống dưới
export default function App() {
  return (
      <div className="relative h-full overflow-y-auto antialiased">
   {/** position: relative;
        height: 100%;
        overflow-y: auto;
  antialiased   -webkit-font-smoothing: antialiased;
  
 antialiased    -moz-osx-font-smoothing: grayscale;*/}
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
   {/** 
   position: fixed;
   inset     top:0;
   inset     bottom:0;    
   inset     right:0;
   inset     left:0;
   background-attachment: fixed;
   background-size:cover;
   background-position: center;
   background-image: url("../src/assets/bg-img5.png");
        */}
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          {/**
          *position: relative;
          * z-index: 10;
          * display: flex;
          * flex-direction: column;
          * align-items-center;
          * padding: 1rem; (16px )
          * margin-top: 2rem; (32px)
          * .container {width :100%; }
 mx-auto  * margin-left: auto;
mx-auto     margin-right:auto;    */}
       
          <Hero />
          <Navbar/>
          <Projects />
          <Bio />
          <Skills />
          <WorkExperience />
          <EducationSection />
          <ContactForm />
          <Footer />
        </div>
    
        </div>
  )
}
