import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './listing.css';


const UserForm = () => {
  const [form, setForm] = useState({
     name: '',
     email: '',
     password: '',
     phone: ''
  });
 
  const handleChange = e => {
     setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = e => {
     e.preventDefault();
     console.log(form);
  };
 

  return (
    
    <div className="lisitingSection">
      


      <div className="heading flex">
        <h1>Meus Dados</h1>

    

      </div>

      <Form onSubmit={handleSubmit} className="my-4">
  <Form.Group controlId="formName" className="mb-3">
    <Form.Label>Nome:</Form.Label>
    <Form.Control type="text" name="name" value={form.name} onChange={handleChange} className="py-2" />
  </Form.Group>

  <Form.Group controlId="formEmail" className="mb-3">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" name="email" value={form.email} onChange={handleChange} className="py-2" />
  </Form.Group>

  <Form.Group controlId="formPassword" className="mb-3">
    <Form.Label>Senha:</Form.Label>
    <Form.Control type="password" name="password" value={form.password} onChange={handleChange} className="py-2" />
  </Form.Group>

  <Form.Group controlId="formPhone" className="mb-3">
    <Form.Label>Telefone:</Form.Label>
    <Form.Control type="tel" name="phone" value={form.phone} onChange={handleChange} className="py-2" />
  </Form.Group>

  <Button variant="primary" type="submit" className="w-100 py-2">
    Salvar
  </Button>
</Form>

   
    </div>
  );
};

export default UserForm;