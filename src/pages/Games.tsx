import React from 'react';

const GAMES = [
  {
    name: 'Super Mario Bros.',
    year: '1985',
    console: 'NES',
    description: 'O jogo que definiu o gênero de plataforma.',
    image: 'https://images.nintendolife.com/games/nes/super_mario_bros/cover_large.jpg',
  },
  {
    name: 'Sonic the Hedgehog',
    year: '1991',
    console: 'Mega Drive',
    description: 'O mascote veloz da SEGA.',
    image: 'https://www.mobygames.com/images/covers/l/102029-sonic-the-hedgehog-genesis-front-cover.jpg',
  },
  {
    name: 'The Legend of Zelda',
    year: '1986',
    console: 'NES',
    description: 'Uma aventura épica que revolucionou os RPGs.',
    image: 'https://www.mobygames.com/images/covers/l/16141-the-legend-of-zelda-nes-front-cover.jpg',
  },
  {
    name: 'Final Fantasy VII',
    year: '1997',
    console: 'PlayStation',
    description: 'O RPG que redefiniu o gênero na era 3D.',
    image: 'https://www.mobygames.com/images/covers/l/33463-final-fantasy-vii-playstation-front-cover.jpg',
  },
  {
    name: 'Street Fighter II',
    year: '1991',
    console: 'Super Nintendo',
    description: 'O jogo de luta que revolucionou os arcades.',
    image: 'https://www.mobygames.com/images/covers/l/63516-street-fighter-ii-snes-front-cover.jpg',
  },
  {
    name: 'Pokémon Red/Blue',
    year: '1996',
    console: 'Game Boy',
    description: 'O início do fenômeno mundial Pokémon.',
    image: 'https://www.mobygames.com/images/covers/l/40747-pokemon-red-version-game-boy-front-cover.jpg',
  },
  {
    name: 'Chrono Trigger',
    year: '1995',
    console: 'Super Nintendo',
    description: 'Uma obra-prima atemporal dos RPGs.',
    image: 'https://www.mobygames.com/images/covers/l/35487-chrono-trigger-snes-front-cover.jpg',
  },
  {
    name: 'Metal Gear Solid',
    year: '1998',
    console: 'PlayStation',
    description: 'O jogo que revolucionou a narrativa nos videogames.',
    image: 'https://www.mobygames.com/images/covers/l/33243-metal-gear-solid-playstation-front-cover.jpg',
  },
  {
    name: 'Super Mario 64',
    year: '1996',
    console: 'Nintendo 64',
    description: 'O primeiro grande jogo de plataforma 3D.',
    image: 'https://www.mobygames.com/images/covers/l/17983-super-mario-64-nintendo-64-front-cover.jpg',
  }
];

const Games = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8 animate-pulse-neon text-center">Jogos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {GAMES.map((game) => (
          <div key={game.name} className="console-card">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{game.name}</h2>
            <p className="text-sm text-gray-400 mb-2">
              {game.year} • {game.console}
            </p>
            <p className="text-sm">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games