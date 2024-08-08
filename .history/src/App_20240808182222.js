import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Posts from './pages/Posts/Posts.js';
import Contact from './pages/Contact/contact.js';
import Login from './pages/Login/Login.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
