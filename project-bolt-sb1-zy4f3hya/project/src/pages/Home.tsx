import React from 'react';
import { Gamepad2 } from 'lucide-react';

const FEATURED_CONSOLES = [
  {
    name: 'Nintendo Entertainment System',
    year: '1985',
    image: 'https://images.unsplash.com/photo-1599933310642-8f07bdaa6dc7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sega Mega Drive',
    year: '1988',
    image: 'https://images.unsplash.com/photo-1612886649869-6c900f4b5e7f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Super Nintendo',
    year: '1990',
    image: 'https://images.unsplash.com/photo-1635514569156-c53c5c782027?auto=format&fit=crop&w=600&q=80',
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 pt-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Gamepad2 className="w-16 h-16 text-neon-blue animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse-neon">
          Museu Virtual dos Games Retrô
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Uma jornada pela história dos videogames. Explore consoles lendários e os jogos que definiram gerações.
        </p>
      </div>

      {/* Featured Consoles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-neon-green">Consoles Lendários</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_CONSOLES.map((console) => (
            <div key={console.name} className="console-card">
              <img
                src={console.image}
                alt={console.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{console.name}</h3>
              <p className="text-sm text-gray-400">Lançamento: {console.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <div className="max-w-2xl mx-auto p-8 neon-border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Pronto para Explorar?</h2>
          <p className="mb-6">
            Descubra nossa extensa coleção de consoles retrô e títulos lendários.
          </p>
          <a
            href="/consoles"
            className="inline-block px-8 py-3 bg-dark-bg neon-border rounded-lg hover:text-neon-green transition-colors"
          >
            Ver Coleção
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;