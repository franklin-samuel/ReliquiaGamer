import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-dark-bg border-b-2 border-neon-blue z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-neon-blue" />
            <span className="text-xl font-bold animate-pulse-neon">Museu dos Games Retrô</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Início
            </Link>
            <Link to="/consoles" className={`nav-link ${location.pathname === '/consoles' ? 'active' : ''}`}>
              Consoles
            </Link>
            <Link to="/jogos" className={`nav-link ${location.pathname === '/jogos' ? 'active' : ''}`}>
              Jogos
            </Link>
            <Link to="/sobre" className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}>
              Sobre
            </Link>
            <Link to="/contato" className={`nav-link ${location.pathname === '/contato' ? 'active' : ''}`}>
              Contato
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;