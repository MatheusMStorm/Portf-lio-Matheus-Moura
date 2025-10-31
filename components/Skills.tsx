
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const hardSkills = [
  "Python", "GitHub", "Visual Studio Code", "MagicDraw", "Matlab", "Jama", "VSEM",
  "FEDE", "CANalyzer", "Vector CAN Case", "Gherkin", "DET (Diagnostic Engineering Tool)",
  "IVS", "OBD", "ECG Pigtail Instrumentation", "VBOX", "Jira", "Microsoft Office"
];

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce: true });

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-center mb-4 text-brand-blue">Formação & Skills</h2>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna 1: Formação e Línguas */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue font-display mb-4">Educação</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-xl font-semibold">Engenharia da Computação</p>
                <p className="text-gray-700">Universidade Salvador</p>
                <p className="text-gray-500 text-sm mt-1">2021 - 2025</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-blue font-display mb-4">Línguas</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-2">
                <p><span className="font-semibold">Português:</span> Nativo</p>
                <p><span className="font-semibold">Inglês:</span> Fluente</p>
              </div>
            </div>
          </div>
          
          {/* Coluna 2: Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold text-brand-blue font-display mb-4">Hard Skills</h3>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-brand-blue text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
