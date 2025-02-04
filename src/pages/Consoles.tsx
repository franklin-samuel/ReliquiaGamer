import React from 'react';

const CONSOLES = [
  {
    name: 'Atari 2600',
    year: '1977',
    description: 'O console que popularizou os videogames domésticos.',
    image: 'https://www.mobygames.com/images/covers/l/579628-atari-2600-console.jpg',
  },
  {
    name: 'Nintendo Entertainment System',
    year: '1985',
    description: 'Revolucionou a indústria dos games após a crise de 1983.',
    image: 'https://www.mobygames.com/images/covers/l/579633-nintendo-entertainment-system-console.jpg',
  },
  {
    name: 'Sega Master System',
    year: '1986',
    description: 'Grande sucesso no Brasil e na Europa.',
    image: 'https://www.mobygames.com/images/covers/l/579636-sega-master-system-console.jpg',
  },
  {
    name: 'Super Nintendo',
    year: '1990',
    description: 'Era dos 16-bits e jogos revolucionários.',
    image: 'https://www.mobygames.com/images/covers/l/579638-super-nintendo-entertainment-system-console.jpg',
  },
  {
    name: 'Sega Mega Drive',
    year: '1988',
    description: 'O console que desafiou a Nintendo.',
    image: 'https://www.mobygames.com/images/covers/l/579637-sega-genesis-console.jpg',
  },
  {
    name: 'PlayStation',
    year: '1994',
    description: 'Primeira incursão da Sony no mundo dos games.',
    image: 'https://www.mobygames.com/images/covers/l/579640-sony-playstation-console.jpg',
  },
  {
    name: 'Nintendo 64',
    year: '1996',
    description: 'Pioneiro nos jogos 3D com controle analógico.',
    image: 'https://www.mobygames.com/images/covers/l/579639-nintendo-64-console.jpg',
  },
  {
    name: 'Game Boy',
    year: '1989',
    description: 'O portátil que revolucionou o gaming móvel.',
    image: 'https://www.mobygames.com/images/covers/l/579634-nintendo-game-boy-console.jpg',
  },
  {
    name: 'PlayStation 2',
    year: '2000',
    description: 'O console mais vendido de todos os tempos.',
    image: 'https://www.mobygames.com/images/covers/l/579641-sony-playstation-2-console.jpg',
  },
  {
    name: 'Neo Geo',
    year: '1990',
    description: 'O console mais poderoso de sua época.',
    image: 'https://www.mobygames.com/images/covers/l/579635-neo-geo-aes-console.jpg',
  },
  {
    name: 'Sega Saturn',
    year: '1994',
    description: 'Pioneiro em jogos 3D e arcade perfeitos.',
    image: 'https://www.mobygames.com/images/covers/l/579642-sega-saturn-console.jpg',
  }
];

const Consoles = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8 animate-pulse-neon text-center">Consoles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CONSOLES.map((console) => (
          <div key={console.name} className="console-card">
            <img
              src={console.image}
              alt={console.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{console.name}</h2>
            <p className="text-sm text-gray-400 mb-2">Lançamento: {console.year}</p>
            <p className="text-sm">{console.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consoles