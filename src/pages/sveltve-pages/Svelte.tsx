import React from 'react';
import StudyCard from '../../components/StudyCard';

const SveltePage: React.FC = () => {
  return (
    <div className="p-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Svelte Study Guide
        </h1>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          Svelte'in tüm konularını detaylı örneklerle öğrenin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <StudyCard
          to="/svelte-basics"
          title="Svelte Temelleri"
          description="Svelte'in temel kavramları, component yapısı ve reactive statements."
          icon="🧡"
        />
        
        <StudyCard
          to="/svelte-stores"
          title="Svelte Stores"
          description="Svelte stores ile state yönetimi ve reactive programming."
          icon="🏪"
        />
        
        <StudyCard
          to="/svelte-kit"
          title="SvelteKit"
          description="SvelteKit ile full-stack uygulama geliştirme."
          icon="⚡"
        />
        
        <StudyCard
          to="/svelte-animations"
          title="Svelte Animations"
          description="Svelte transitions ve animasyon teknikleri."
          icon="🎬"
        />
      </div>
    </div>
  );
};

export default SveltePage;
