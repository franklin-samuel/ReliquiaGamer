import React from 'react';
import { Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Gamepad2 className="w-16 h-16 text-neon-blue mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 animate-pulse-neon">Sobre o Museu</h1>
        </div>
        
        <div className="console-card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-neon-green">Nossa História</h2>
          <p className="mb-4">
            O Museu Virtual dos Games Retrô nasceu da paixão por preservar e compartilhar a rica história dos videogames.
            Nossa missão é manter viva a memória dos consoles e jogos que moldaram a indústria dos games e influenciaram
            gerações de jogadores.
          </p>
          <p>
            Através deste espaço virtual, buscamos não apenas exibir uma coleção de consoles e jogos antigos, mas também
            contar as histórias por trás de cada lançamento, destacando sua importância cultural e impacto na evolução
            dos videogames.
          </p>
        </div>

        <div className="console-card">
          <h2 className="text-2xl font-bold mb-4 text-neon-green">Nossa Missão</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Preservar a história dos videogames</li>
            <li>Educar novas gerações sobre os clássicos</li>
            <li>Compartilhar memórias e experiências</li>
            <li>Documentar a evolução dos consoles e jogos</li>
            <li>Criar uma comunidade de entusiastas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;