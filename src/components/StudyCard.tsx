import React from 'react';
import { Link } from 'react-router-dom';

interface StudyCardProps {
  to: string;
  title: string;
  description: string;
  icon: string;
}

const StudyCard: React.FC<StudyCardProps> = ({
  to,
  title,
  description,
  icon,
}) => {
  return (
    <Link 
      to={to} 
      className={`group bg-white/80 backdrop-blur-sm hover:bg-blue hover:text-white border-2 border-blue rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-pink rounded-xl flex items-center justify-center mr-4`}>
          <span className="text-white text-xl">{icon}</span>
        </div>
        <h2 className="text-xl font-bold text-">{title}</h2>
      </div>
      <p className="text-secondary-dark text-md">
        {description}
      </p>
    </Link>
  );
};

export default StudyCard;
