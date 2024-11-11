import React from "react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/homepage/Home";
import Courses from "./pages/courses/courses";
import Security from "./pages/security/security";
import Register from "./pages/Register/Register";
import ChatBot from "./pages/chatbot/chatbot";
import { Exampleprovider } from "./data/third";
import Login from "./pages/Register/login";
import CPE361 from "./pages/courses/CPE361";
import CPE375 from "./pages/courses/CPE375";
import ComingSoon from "./pages/comingsoon/comingsoon";
import CPE500 from "./pages/courses/CPE500";
import CPE531 from "./pages/courses/CPE531";
import CPE553 from "./pages/courses/CPE553";
import Opportunities from "./pages/Opportunities/Opportunities";
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
// import { ClerkProvider } from '@clerk/clerk-react';
export function App() {
  return (
    // <ClerkProvider publishableKey="pk_test_ZW5hYmxpbmctbWFjYXctMjguY2xlcmsuYWNjb3VudHMuZ">
    <Router>
      <Exampleprovider>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="security" element={<Security />} />
            <Route path="Register" element={<Register />} />
            <Route path="Chatbot" element={<ChatBot />} />
            <Route path="Opportunities" element={<Opportunities />} />
            <Route path="login" element={<Login />} />
            <Route path="CPE361" element={<CPE361 />} />
            <Route path="CPE375" element={<CPE375 />} />
            <Route path="ComingSoon" element={<ComingSoon />} />
            <Route path="CPE500" element={<CPE500 />} />
            <Route path="CPE531" element={<CPE531 />} />
            <Route path="CPE553" element={<CPE553 />} />
          </Route>
        </Routes>
      </Exampleprovider>
    </Router>
    // </ClerkProvider>
  );
}

export default App;
