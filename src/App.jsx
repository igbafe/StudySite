import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import HomePage from './pages/homepage';
// import Courses from './pages/courses';

function App() {
  console.log('home');
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path='courses' element={<Courses />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;