
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });
    
  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-display mb-4 text-brand-blue">Sobre Mim</h2>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mb-12"></div>
        <div className="text-lg text-gray-700 space-y-6 text-left md:text-center">
          <p>
            Graduando em Engenharia da Computação com sólida experiência de estágio em desenvolvimento de produto na indústria automotiva.
          </p>
          <p>
            Habilidades em engenharia de sistemas, validação de requisitos e gestão de testes, com forte capacidade de trabalho em equipe, adaptabilidade e resolução de problemas.
          </p>
          <p>
            Motivado a contribuir para a inovação no setor automotivo aplicando conhecimento técnico e aprendizado contínuo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
