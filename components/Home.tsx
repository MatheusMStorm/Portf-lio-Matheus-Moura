
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-blue min-h-screen flex flex-col justify-center items-center text-center text-white p-6 pt-20">
      <img
        src="https://picsum.photos/seed/mourapf/200"
        alt="Foto de perfil de Matheus Moura"
        className="w-40 h-40 rounded-full object-cover border-4 border-brand-yellow shadow-2xl mb-6"
      />
      <h1 className="text-5xl md:text-6xl font-black font-display uppercase tracking-wider mb-2">
        Matheus Moura
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-brand-yellow font-display mb-8">
        Systems Engineering
      </h2>
      <a
        href="#contact"
        className="bg-brand-yellow text-gray-900 font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Entre em Contato
      </a>
    </div>
  );
};

export default Home;
