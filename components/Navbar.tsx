
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre' },
  { href: '#experience', label: 'Experiência' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-blue text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold font-display tracking-wider">
          MATHEUS MOURA
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium hover:text-brand-yellow transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-blue transition-all duration-300 ease-in-out transform ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-lg hover:text-brand-yellow transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
