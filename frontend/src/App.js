import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
import HomePage from "./components/HomePage"; 


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> {/* Mova o NavBar para dentro do Router */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ServiceDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
