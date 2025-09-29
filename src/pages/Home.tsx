import React from 'react';
import StudyCard from '../components/StudyCard';

const Home: React.FC = () => {
  return (
    <div className="p-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
         Developer's Handbook Study Guide
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StudyCard
          to="/react"
          title="React"
          description="React'ın tüm konularını detaylı örneklerle öğrenin. Hooks, patterns, modern features."
          icon="⚛️"
        />
        
        <StudyCard
          to="/vue"
          title="Vue.js"
          description="Vue.js'in tüm konularını öğrenin. Composition API, Router, Pinia state management."
          icon="💚"
        />
        
        <StudyCard
          to="/angular"
          title="Angular"
          description="Angular'ın tüm konularını öğrenin. Services, routing, reactive forms."
          icon="🅰️"
        />
        
        <StudyCard
          to="/svelte"
          title="Svelte"
          description="Svelte'in tüm konularını öğrenin. Stores, SvelteKit, animations."
          icon="🧡"
        />
      </div>
    </div>
  );
};

export default Home;
