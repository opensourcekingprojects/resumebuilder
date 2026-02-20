import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </Router>
    </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;