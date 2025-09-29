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
        
        <StudyCard
          to="/performance-optimization"
          title="Performance Optimization"
          description="React uygulamalarında performance optimization teknikleri ve best practices."
          icon="🚀"
        />
        
        <StudyCard
          to="/js-ts"
          title="JavaScript & TypeScript"
          description="Modern JavaScript ve TypeScript'in tüm konularını detaylı örneklerle öğrenin."
          icon="⚡"
        />
        
        <StudyCard
          to="/cs-intro"
          title="Computer Science Fundamentals"
          description="Algoritmalar, veri yapıları, Big-O, memory management ve operating systems temelleri."
          icon="🧠"
        />
        
        <StudyCard
          to="/backend"
          title="Backend & Full-Stack"
          description="REST, GraphQL, authentication, databases, caching ve message queues ile backend development."
          icon="🖥️"
        />
        
        <StudyCard
          to="/software-architecture"
          title="Software Architecture & Design Patterns"
          description="SOLID principles, Clean Architecture, MVC, MVVM, DDD ve GoF design patterns."
          icon="🏗️"
        />
        
        <StudyCard
          to="/devops-cloud"
          title="DevOps & Cloud"
          description="Git, CI/CD, Docker, Kubernetes, Infrastructure as Code ve cloud platforms (AWS, GCP, Azure)."
          icon="☁️"
        />
        
        <StudyCard
          to="/system-design"
          title="System Design"
          description="Scalability, load balancing, sharding, CAP theorem, CDN ve monitoring ile system design."
          icon="🔧"
        />
        
        <StudyCard
          to="/security"
          title="Security"
          description="OWASP Top 10, HTTPS, authentication, authorization, encryption ve secure coding practices."
          icon="🔒"
        />
        
        <StudyCard
          to="/teamwork"
          title="Teamwork & Leadership"
          description="Agile/Scrum, Git strategies, code review, mentorship ve project management best practices."
          icon="👥"
        />
      </div>
    </div>
  );
};

export default Home;
