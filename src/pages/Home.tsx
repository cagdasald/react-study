import React from 'react';
import StudyCard from '../components/StudyCard';

const Home: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Home;
