import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';

const ConditionalFooter = () => {
  const location = useLocation();
  const showMailchimpForm = location.pathname === '/';

  let footerStyle = {};

  if (location.pathname.includes('/details/')) {
    footerStyle = { backgroundColor: 'black !important', color: 'white' }; // Estilo para a tela de detalhes
  }


  return <Footer showMailchimpForm={showMailchimpForm} footerStyle={footerStyle} />;
};

export default ConditionalFooter;