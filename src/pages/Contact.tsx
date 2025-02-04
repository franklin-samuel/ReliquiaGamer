import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-pulse-neon text-center">Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="console-card">
            <h2 className="text-2xl font-bold mb-6 text-neon-green">Informações</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 break-all">
                <Mail className="w-5 h-5 text-neon-blue flex-shrink-0" />
                <span className="text-sm">museu@museudosgamesretro.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neon-blue" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-neon-blue" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="console-card">
            <h2 className="text-2xl font-bold mb-6 text-neon-green">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-bg border-2 border-neon-blue rounded-lg p-2 focus:outline-none focus:border-neon-green"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-bg border-2 border-neon-blue rounded-lg p-2 focus:outline-none focus:border-neon-green"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-bg border-2 border-neon-blue rounded-lg p-2 focus:outline-none focus:border-neon-green"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-bg neon-border rounded-lg p-3 hover:text-neon-green transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact