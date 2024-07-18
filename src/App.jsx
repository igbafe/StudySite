import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import HomePage from './pages/homepage/Home';
import Courses from './pages/courses/courses';
import Security from './pages/security/security';
import Register from './pages/Register/Register';
import ChatBot from './pages/chatbot/chatbot';
import Scholarship from './pages/Scholarship/Scholarship';


function App() {
 
  return (
    <Router>
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
    </Router>
  );
}

export default App;