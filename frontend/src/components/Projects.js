import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Projects = () => {
  
  const [ServicesBackend, setServicesBackend] = useState([]);


  const getServicesHomeBackend = async () => {
    try {
      const res = await axios.get("http://localhost:8800?type=backend");
      setServicesBackend(res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getServicesHomeBackend();
  }, []);

  const [ServicesDesigner, setServicesDesigner] = useState([]);

  const getServicesHomeDesigner = async () => {
   try {
     const res = await axios.get("http://localhost:8800?type=designer");
     setServicesDesigner(res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
   } catch (error) {
     toast.error(error);
   }
 };
 
   useEffect(() => {
    getServicesHomeDesigner();
   }, []);
 


  const [ServicesFrontend, setServicesFrontend] = useState([]);

 const getServicesHomeFrontend = async () => {
  try {
    const res = await axios.get("http://localhost:8800?type=frontend");
    setServicesFrontend(res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
  } catch (error) {
    toast.error(error);
  }
};

  useEffect(() => {
    getServicesHomeFrontend();
  }, []);



  const baseURL = "assets/img/upload-service/";
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Freelancers</h2>
                <p>Bem-vindo à seção dedicada aos profissionais que fazem a magia acontecer! Aqui, você encontrará uma diversidade incrível de freelancers talentosos prontos para transformar suas ideias em realidade. Cada perfil é uma janela para um universo único de habilidades, experiências e criatividade</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Back-end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Designers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Front-end</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                    <Row>
                    {
                       ServicesBackend.map((serviceBackend, index) => (
                    <ProjectCard
                      key={index}
                      title={serviceBackend.titulo}
                      imgUrl={`${process.env.PUBLIC_URL}/upload-service/${serviceBackend.nome_arquivo}`}
                     />
                      ))
                    }
                    </Row>

                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    
                    <Row>
                    {
                       ServicesDesigner.map((serviceDesigner, index) => (
                    <ProjectCard
                      key={index}
                      title={serviceDesigner.titulo}
                      imgUrl={`${process.env.PUBLIC_URL}/upload-service/${serviceDesigner.nome_arquivo}`}
                     />
                      ))
                    }
                    </Row>

                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    
                    <Row>
                    {
                       ServicesFrontend.map((servicesFrontend, index) => (
                    <ProjectCard
                      key={index}
                      title={servicesFrontend.titulo}
                      imgUrl={`${process.env.PUBLIC_URL}/upload-service/${servicesFrontend.nome_arquivo}`}
                     />
                      ))
                    }
                    </Row>

                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>

      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
