import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ServiceDetails from "./components/ServiceDetails";
import HomePage from "./components/HomePage"; 
import ConditionalFooter from "./components/ConditionalFooter";
import ConditionalNavbar from "./components/ConditionalNavbar"; // Este será o único Navbar
import Login from './components/login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Body';

function App() {
  return (
    <div className="App">
      <Router>
        <ConditionalNavbar />  {/* Usar apenas ConditionalNavbar aqui */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
}

export default App;
