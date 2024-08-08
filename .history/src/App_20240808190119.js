import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/Home/Home.js';
import Posts from './pages/Posts/Posts.js';
import Contact from './pages/Contact/Contact.js';
import SignIn from './pages/SignIn/SignIn.js';
import SignUp from './pages/SignUp/SignUp.js';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
