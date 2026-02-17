import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import { ResumeProvider } from './context/ResumeContext';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;