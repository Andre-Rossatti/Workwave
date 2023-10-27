import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8800/details/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setServiceDetails(data);
          console.log("Detalhes do serviço:", data[0]);
        }
      })
      .catch(error => console.error('Erro ao buscar detalhes:', error));
  }, [id]);

  // Inicializar o carrossel do Bootstrap após os dados serem carregados
  useEffect(() => {
    if (serviceDetails.length > 0) {
      const timer = setTimeout(() => {
        const carouselEl = document.querySelector('#carouselExampleIndicators');
        if (window.bootstrap && window.bootstrap.Carousel && carouselEl) {
          const carousel = new window.bootstrap.Carousel(carouselEl);
        }
      }, 1000); // atrasar por 1 segundo
  
      return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
    }
  }, [serviceDetails]);
  
  if (serviceDetails.length === 0) {
    return <div>Carregando...</div>;
  }


  
  const items = serviceDetails.map((detail, index) => (
    <div key={index}>
      <img src={`${process.env.PUBLIC_URL}/upload-service/${detail.nome_arquivo}`} className="d-block w-100 no-animation" alt="..."  ref={el => {
    if (el) {
      el.style.setProperty('animation', 'none', 'important');
    }
  }} />
    </div>
  ));


  return (
    <>
      <section className="banner" id="home">
        <Container>
          <div className="mt-5">
            <div className="row">
              {/* Carousel */}
              <div className="col-md-6" style={{ animation: 'none !important' }}>

                <AliceCarousel 
                  items={items} 
                  controlsStrategy="responsive"
                  buttonsDisabled={false}
                />
              </div>
              {/* Título e descrição à direita */}
              <div className="col-md-6">
                <h1>{serviceDetails[0].title}</h1>
                <p>{serviceDetails[0].descricao}</p>
                <h5>Tipo de serviço: {serviceDetails[0].tipo}</h5>
                <h3 className="pt-2">Telefone: <a href={`tel: ${serviceDetails[0].telefone}`}>{serviceDetails[0].telefone}</a></h3>
                <h5 className="pt-2" syle = {{ color: '#8665ff !important' }}>Email: <a href={`mailto: ${serviceDetails[0].email}`}>{serviceDetails[0].email}</a></h5>
                <a href={`https://api.whatsapp.com/send?phone=${serviceDetails[0].telefone}&text=Olá ${serviceDetails[0].username}, estou entrando em contato com você pois vi seu anuncio no Workwave poderia me contar mais sobre o seu serviço ?`}>
                  <button>
                    <img src='/botao-whatsapp.png' alt='Botão do WhatsApp' />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetails;
