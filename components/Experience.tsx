
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-center mb-4 text-brand-blue">Experiência Profissional</h2>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mb-12"></div>
        
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
            <h3 className="text-2xl font-bold text-brand-blue">Feature Systems Engineer (Estágio)</h3>
            <p className="text-md text-gray-600 font-medium sm:text-right mt-2 sm:mt-0">Fev/2025 - Atual</p>
          </div>
          <p className="text-xl font-semibold text-gray-700 mb-6">Ford Motor Company</p>
          
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              Gerenciei o monitoramento de dashboards e planos utilizando Jira, alinhando as principais prioridades do time e garantindo que o time mantivesse 100% das entregas dentro do tempo estipulado.
            </li>
            <li>
              Colaborei diretamente com os processos de auditoria, garantindo que todas as evidências de testes de validação e informações das features do time estivessem corretas e alinhadas com o programa.
            </li>
            <li>
              Participei de treinamentos teóricos e práticos sobre Systems Engineering, GPDS, Modelagem e Sistemas Automotivos, adquirindo domínio em diversas ferramentas importantes de Product Development e gerenciamento de tarefas.
            </li>
            <li>
              Contribui para o desenvolvimento de features, atualização de requerimentos, verificação e validação de testes em veículo, e implementação de melhorias em função dos indicadores de qualidade.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
