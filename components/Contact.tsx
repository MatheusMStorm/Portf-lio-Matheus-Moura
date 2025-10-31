
import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-display mb-4">Contato</h2>
        <div className="w-20 h-1 bg-brand-yellow mx-auto mb-8"></div>
        <div className="space-y-4 mb-8 text-lg">
          <p>matheusmoura.engcomp@gmail.com</p>
          <p>(71) 98300-3190</p>
          <p>Salvador, Bahia, Brasil</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="LinkedIn" className="hover:text-brand-yellow transition-colors duration-300">
            <LinkedinIcon />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-brand-yellow transition-colors duration-300">
            <GithubIcon />
          </a>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Matheus Moura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
