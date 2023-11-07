import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from "./components/NavBar";
import ServiceDetails from "./components/ServiceDetails";
import HomePage from "./components/HomePage"; 
import ConditionalFooter from "./components/ConditionalFooter";
import Login from './components/login/Login';
import Register from './components/Register/Register'; // Certifique-se de que este import está correto

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  {/* Rota adicionada */}
        </Routes>
        <ConditionalFooter />
      </Router>
    </div>
  );
}

export default App;
