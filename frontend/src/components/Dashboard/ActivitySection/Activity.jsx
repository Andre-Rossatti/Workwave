import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'; // Importe o Axios aqui
import './activity.css'




const InsertService = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const navigateTo = useNavigate();

  const createService = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:8800/Service', {
      title: title,
      description: description,
      type: type,
    }).then(() => {
          navigateTo('/');
          setTitle('');
          setType('');
          setDescription('');
      })
  }

  return (

    <div className="activitySection">
      <div className="heading flex">
        <h1>Serviços</h1>

      </div>


      <Form  className="my-4">

          <Form.Label>Titulo:</Form.Label>
          <Form.Control type="text" id="title"  onChange={(event) => setTitle(event.target.value)} className="py-2" />


        <Form.Group  className="mb-3">
          <Form.Label>Descrição:</Form.Label>
          <Form.Control type="select" id="description"  onChange={(event) => setDescription(event.target.value)} className="py-2" />
        </Form.Group>

        <Form.Group  className="mb-3">
          <Form.Label>Tipo:</Form.Label>

          <Form.Control as="select" id="type"  onChange={(event) => setType(event.target.value)} className="py-2">
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Designer">Designer</option>
          </Form.Control>
        </Form.Group>

        <Form.Group  className="mb-3">
          <Form.Label>Imagem:</Form.Label>
          <Form.Control type="file" id="image"  className="py-2" />
        </Form.Group>

        <Button variant="primary" type='submit' className="w-100 py-2" onClick={createService}>
          Salvar
        </Button>
      </Form>


    </div>
  );
};
export default InsertService;