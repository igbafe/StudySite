
import React from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import HomePage from './pages/homepage/Home';
import Courses from './pages/courses/courses';
import Security from './pages/security/security';
import Register from './pages/Register/Register';
import ChatBot from './pages/chatbot/chatbot';
import Scholarship from './pages/Scholarship/Scholarship';
import { Exampleprovider } from './data/third';

export function App() {
 
  return (
    <Router>
      <Exampleprovider>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path='courses' element={<Courses />} />
          <Route path='security' element={<Security />} />
          <Route path='Register' element={<Register />} />
          <Route path='Chatbot' element={<ChatBot />} />
          <Route path='Scholarship' element={<Scholarship />} />
        </Route>
      </Routes>
      </Exampleprovider>
    </Router>
  );
}

export default App;