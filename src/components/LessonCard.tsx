import React from 'react';

interface LessonCardProps {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  icon,
  children,
  level = 'beginner'
}) => {
  const levelColors = {
    beginner: 'border- bg-/10',
    intermediate: 'border-secondary-light bg-secondary-light/10',
    advanced: 'border-secondary-dark bg-secondary-dark/10'
  };

  const levelText = {
    beginner: 'Başlangıç',
    intermediate: 'Orta',
    advanced: 'İleri'
  };

  return (
    <div className={`border-2 ${levelColors[level]} rounded-2xl p-6 mb-8 shadow-lg`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-pink text-blue rounded-xl flex items-center justify-center mr-4">
          <span className="text-white text-xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text- mb-2">{title}</h2>
          <p className="text-secondary-dark text-lg">{description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          level === 'beginner' ? 'bg- text-' :
          level === 'intermediate' ? 'bg-secondary-light text-white' :
          'bg-secondary-dark text-white'
        }`}>
          {levelText[level]}
        </span>
      </div>
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
};

export default LessonCard;
