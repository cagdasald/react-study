import React from 'react';
import StudyCard from '../components/StudyCard';

const ReactPage: React.FC = () => {
  return (
    <div className="p-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Study Guide
        </h1>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React'ın tüm konularını detaylı örneklerle öğrenin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <StudyCard
          to="/react-internals"
          title="React Internals"
          description="Vite, build tools ve React'ın iç yapısı hakkında detaylı bilgiler."
          icon="🔧"
        />
        
        <StudyCard
          to="/hooks"
          title="React Hooks"
          description="useState, useEffect ve diğer hooks'ların kullanımı ve örnekleri."
          icon="🎣"
        />
        
        <StudyCard
          to="/advanced-patterns"
          title="Advanced Component Patterns"
          description="Compound components, render props, HOC ve controlled/uncontrolled bileşenler."
          icon="🧩"
        />
        
        <StudyCard
          to="/modern-features"
          title="Modern React Features"
          description="Suspense, lazy loading, concurrent features ve React 18 yeni özellikleri."
          icon="⚡"
        />
      </div>
    </div>
  );
};

export default ReactPage;
