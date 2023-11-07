import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';

const ConditionalFooter = () => {
  const location = useLocation();
  const showMailchimpForm = location.pathname === '/';

  let footerStyle = {};

  if (location.pathname.includes('/details/')) {
    footerStyle = { backgroundColor: 'black !important', color: 'white' }; // Estilo para a tela de detalhes
  }

  // Adicionando uma condição para o caminho '/login'
  if (location.pathname.includes('/login')) {
    footerStyle = { /* seu estilo para a tela de login aqui, se necessário */ };
  }

  return <Footer showMailchimpForm={showMailchimpForm} footerStyle={footerStyle} />;
};

export default ConditionalFooter;
