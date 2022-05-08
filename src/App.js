import React from 'react';
import './App.css';
import Features from './components/features/Features';
import Section2 from './components/section2/Section2';
import SectionWrapper from './components/sectionWrapper/SectionWrapper';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Download from './components/download/Download';


const App = () => {
  return (
    <>
      <SectionWrapper />
      <Section2 />
      <Features />
      <Section3 />
      <Section4 />
      <Download />

      <div className="footer section__padding">
        <h1 className='tertiary'>Made with 🎧patience and speed</h1>
      </div>
    </>
  );
}

export default App;
