// ConditionalNavbar.js
import { useLocation } from 'react-router-dom';
import { NavBar } from './NavBar';

const ConditionalNavbar = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/dashboard');

    return <NavBar hidden={isDashboard} />;
};

export default ConditionalNavbar;
