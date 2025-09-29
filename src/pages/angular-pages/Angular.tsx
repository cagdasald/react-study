import React from 'react';
import StudyCard from '../../components/StudyCard';

const AngularPage: React.FC = () => {
  return (
    <div className="p-8 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Angular Study Guide
        </h1>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          Angular'ın tüm konularını detaylı örneklerle öğrenin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <StudyCard
          to="/angular-basics"
          title="Angular Temelleri"
          description="Angular'ın temel kavramları, component yapısı ve TypeScript entegrasyonu."
          icon="🅰️"
        />
        
        <StudyCard
          to="/angular-services"
          title="Services & Dependency Injection"
          description="Angular servisleri, dependency injection ve singleton pattern."
          icon="🔧"
        />
        
        <StudyCard
          to="/angular-routing"
          title="Angular Router"
          description="Angular Router ile sayfa yönlendirme ve route guard'ları."
          icon="🛣️"
        />
        
        <StudyCard
          to="/angular-forms"
          title="Reactive Forms"
          description="Angular reactive forms ve form validation teknikleri."
          icon="📝"
        />
      </div>
    </div>
  );
};

export default AngularPage;
