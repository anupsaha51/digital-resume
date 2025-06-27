import React from 'react';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Strengths from './components/Strengths';
import Education from './components/Education';
import Interests from './components/Interests';

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Anup Saha</h1>
        <h2>Full Stack Developer</h2>
        <p>
          <strong>Contact:</strong> 8240058867 | <strong>Email:</strong>{' '}
          anupsaha51@gmail.com | <strong>Place:</strong> India, Kolkata
        </p>
      </header>
      <Summary />
      <Experience />
      <Skills />
      <Certifications />
      <Strengths />
      <Education />
      <Interests />
    </div>
  );
}

export default App;
