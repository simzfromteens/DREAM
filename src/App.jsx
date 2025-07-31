import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Demo from './pages/Demo';
import HowItWorks from './pages/HowItWorks';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
