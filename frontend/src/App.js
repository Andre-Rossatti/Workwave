import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import ServiceDetails from "./components/ServiceDetails";
import HomePage from "./components/HomePage"; 
import ConditionalFooter from "./components/ConditionalFooter";  // Importe o novo componente aqui

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ServiceDetails />} />
        </Routes>
        <ConditionalFooter />  {/* Utilize o novo componente aqui */}
      </Router>
    </div>
  );
}

export default App;
