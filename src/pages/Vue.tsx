import React from 'react';
import StudyCard from '../components/StudyCard';

const VuePage: React.FC = () => {
  return (
    <div className="p-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Vue.js Study Guide
        </h1>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          Vue.js'in tüm konularını detaylı örneklerle öğrenin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <StudyCard
          to="/vue-basics"
          title="Vue.js Temelleri"
          description="Vue.js'in temel kavramları, template syntax ve component yapısı."
          icon="💚"
        />
        
        <StudyCard
          to="/vue-composition"
          title="Composition API"
          description="Vue 3 Composition API, setup() fonksiyonu ve reactive sistem."
          icon="🎯"
        />
        
        <StudyCard
          to="/vue-router"
          title="Vue Router"
          description="Vue Router ile sayfa yönlendirme ve route yönetimi."
          icon="🛣️"
        />
        
        <StudyCard
          to="/vue-pinia"
          title="Pinia State Management"
          description="Pinia ile state yönetimi ve store kullanımı."
          icon="🍍"
        />
      </div>
    </div>
  );
};

export default VuePage;
