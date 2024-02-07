// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          {/* Add more routes if needed */}
        </Routes>
    </Router>
  );
}
export default App;
