import React from 'react';
import { Github, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t-2 border-neon-blue mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 Museu dos Games Retrô. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neon-green transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-neon-green transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-neon-green transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-dark-bg p-2 rounded-full neon-border hover:text-neon-green transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;