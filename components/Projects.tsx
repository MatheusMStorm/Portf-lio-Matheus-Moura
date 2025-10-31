
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GithubIcon, ExternalLinkIcon } from './Icons';

const ProjectCard: React.FC<{ name: string; description: string; imageUrl: string; }> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={`Preview do projeto ${name}`} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors duration-300" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors duration-300" aria-label="Live Demo">
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

const Projects: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-center mb-4 text-brand-blue">Projetos Acadêmicos e Pessoais</h2>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
                name="Recomenda.ai"
                description="Um sistema de recomendação inteligente. (Placeholder para descrição real)."
                imageUrl="https://picsum.photos/seed/project1/400/300"
            />
            <ProjectCard 
                name="Projeto 2"
                description="Uma breve descrição sobre este projeto incrível. Fácil de editar."
                imageUrl="https://picsum.photos/seed/project2/400/300"
            />
             <ProjectCard 
                name="Projeto 3"
                description="Outro projeto para demonstrar minhas habilidades. Adicione mais detalhes aqui."
                imageUrl="https://picsum.photos/seed/project3/400/300"
            />
        </div>
      </div>
    </div>
  );
};

export default Projects;
