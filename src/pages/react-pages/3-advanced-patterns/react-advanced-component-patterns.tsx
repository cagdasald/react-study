import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const ReactAdvancedComponentPatterns: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Advanced Component Patterns
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">Compound Components / Render Props / HOC / Controlled/Uncontrolled / Children Pattern / Context Pattern</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React'ın ileri düzey component pattern'lerini öğrenin ve daha esnek, yeniden kullanılabilir bileşenler oluşturun
        </p>
      </div>

      {/* Compound Components */}
      <LessonCard
        title="Compound Components - Bileşik Bileşenler"
        description="Compound component pattern ile esnek ve yeniden kullanılabilir bileşenler oluşturun"
        icon="🧩"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Compound Components Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Compound Components, birbirleriyle iletişim kuran ve birlikte çalışan birden fazla component'ten oluşan bir pattern'dir.
              Bu pattern, API'yi daha esnek ve kullanıcı dostu hale getirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Birden fazla component birlikte çalışır</p>
                <p>• Context API ile state paylaşımı</p>
                <p>• Esnek API tasarımı</p>
                <p>• Kullanıcı dostu syntax</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha esnek API</p>
                  <p>• Kolay kullanım</p>
                  <p>• Yeniden kullanılabilirlik</p>
                  <p>• Daha iyi developer experience</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Form bileşenleri</p>
                  <p>• Modal ve dialog'lar</p>
                  <p>• Tab ve accordion'lar</p>
                  <p>• Data table'lar</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Compound Component Örneği - Modal"
            description="Modal component'i compound pattern ile oluşturma"
            language="jsx"
            code={`import React, { createContext, useContext, useState } from 'react';

// Context oluştur
const ModalContext = createContext();

// Custom hook
const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a Modal');
  }
  return context;
};

// Ana Modal component
function Modal({ children, isOpen, onClose }) {
  const value = { isOpen, onClose };
  
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

// Modal Header
function ModalHeader({ children }) {
  const { onClose } = useModal();
  
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-semibold">{children}</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        ×
      </button>
    </div>
  );
}

// Modal Body
function ModalBody({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}

// Modal Footer
function ModalFooter({ children }) {
  return (
    <div className="flex justify-end gap-2 p-4 border-t">
      {children}
    </div>
  );
}

// Modal Overlay
function ModalOverlay({ children }) {
  const { isOpen, onClose } = useModal();
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

// Kullanım örneği
function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay>
          <ModalHeader>
            Modal Title
          </ModalHeader>
          
          <ModalBody>
            <p>This is the modal content. You can put anything here!</p>
          </ModalBody>
          
          <ModalFooter>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </ModalFooter>
        </ModalOverlay>
      </Modal>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Render Props */}
      <LessonCard
        title="Render Props Pattern"
        description="Render props pattern ile component'lar arasında logic paylaşımı yapın"
        icon="🎭"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Render Props Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Render Props pattern, bir component'ın render fonksiyonunu prop olarak alması ve bu fonksiyonu kullanarak ne render edeceğini belirlemesidir.
              Bu pattern, logic'i component'lardan ayırarak daha esnek yapılar oluşturmanızı sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Logic ve UI ayrımı</p>
                <p>• Esnek render kontrolü</p>
                <p>• Component composition</p>
                <p>• Logic paylaşımı</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Logic'i yeniden kullanabilirsiniz</p>
                  <p>• Esnek render kontrolü</p>
                  <p>• Component composition</p>
                  <p>• Test edilebilirlik</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Data fetching</p>
                  <p>• Form validation</p>
                  <p>• State management</p>
                  <p>• Event handling</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Render Props Örneği - Data Fetcher"
            description="Data fetching logic'ini render props ile paylaşma"
            language="jsx"
            code={`import React, { useState, useEffect } from 'react';

// Data Fetcher component
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return render({ data, loading, error });
}

// Kullanım örnekleri
function UserList() {
  return (
    <DataFetcher
      url="https://jsonplaceholder.typicode.com/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading users...</div>;
        if (error) return <div>Error: {error}</div>;
        
        return (
          <div>
            <h3>Users</h3>
            <ul>
              {data?.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
}

function PostList() {
  return (
    <DataFetcher
      url="https://jsonplaceholder.typicode.com/posts"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading posts...</div>;
        if (error) return <div>Error: {error}</div>;
        
        return (
          <div>
            <h3>Posts</h3>
            <div className="grid gap-4">
              {data?.slice(0, 5).map(post => (
                <div key={post.id} className="border p-4 rounded">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
}

// Ana component
function RenderPropsExample() {
  return (
    <div>
      <h2>Render Props Example</h2>
      <UserList />
      <PostList />
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* HOC Pattern */}
      <LessonCard
        title="Higher-Order Components (HOC)"
        description="HOC pattern ile component'ları enhance edin ve logic paylaşımı yapın"
        icon="🔧"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">HOC Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Higher-Order Component (HOC), bir component alıp yeni bir component döndüren fonksiyondur.
              Bu pattern, component'ları enhance etmek ve logic paylaşımı yapmak için kullanılır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Component alır, component döndürür</p>
                <p>• Logic paylaşımı</p>
                <p>• Component enhancement</p>
                <p>• Composition over inheritance</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Logic'i yeniden kullanabilirsiniz</p>
                  <p>• Component'ları enhance edebilirsiniz</p>
                  <p>• Cross-cutting concerns</p>
                  <p>• Separation of concerns</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Authentication</p>
                  <p>• Loading states</p>
                  <p>• Error handling</p>
                  <p>• Data fetching</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="HOC Örneği - withLoading"
            description="Loading state'ini HOC ile yönetme"
            language="jsx"
            code={`import React, { useState, useEffect } from 'react';

// HOC - withLoading
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2">Loading...</span>
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// HOC - withError
function withError(WrappedComponent) {
  return function WithErrorComponent({ error, ...props }) {
    if (error) {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// HOC - withData
function withData(WrappedComponent) {
  return function WithDataComponent({ data, ...props }) {
    if (!data) {
      return <div>No data available</div>;
    }
    
    return <WrappedComponent data={data} {...props} />;
  };
}

// Base component
function UserCard({ data }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{data.name}</h3>
      <p className="text-gray-600">{data.email}</p>
      <p className="text-sm text-gray-500">{data.phone}</p>
    </div>
  );
}

// Enhanced components
const UserCardWithLoading = withLoading(UserCard);
const UserCardWithError = withError(UserCardWithLoading);
const UserCardWithData = withData(UserCardWithError);

// Kullanım örneği
function HOCExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>HOC Example</h2>
      <div className="grid gap-4">
        {users.map(user => (
          <UserCardWithData
            key={user.id}
            data={user}
            isLoading={loading}
            error={error}
          />
        ))}
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Controlled/Uncontrolled Components */}
      <LessonCard
        title="Controlled/Uncontrolled Components"
        description="Controlled ve uncontrolled component'ları öğrenin ve doğru kullanın"
        icon="🎛️"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Controlled vs Uncontrolled</h3>
            <p className="text-secondary-dark mb-4">
              React'te form element'leri controlled veya uncontrolled olabilir. Controlled component'lar state ile yönetilirken,
              uncontrolled component'lar DOM'un kendi state'ini kullanır.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Controlled Components</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• State ile yönetilir</p>
                  <p>• value prop'u kullanır</p>
                  <p>• onChange handler gerekir</p>
                  <p>• Daha öngörülebilir</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Uncontrolled Components</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• DOM'un state'ini kullanır</p>
                  <p>• defaultValue prop'u kullanır</p>
                  <p>• useRef ile erişim</p>
                  <p>• Daha basit</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Controlled Component Örneği"
            description="State ile yönetilen form element'leri"
            language="jsx"
            code={`import React, { useState } from 'react';

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: 'turkey'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Controlled Form</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="turkey">Turkey</option>
          <option value="usa">USA</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3>Current State:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}`}
          />

          <CodeBlock
            title="Uncontrolled Component Örneği"
            description="DOM'un state'ini kullanan form element'leri"
            language="jsx"
            code={`import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const countryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
      country: countryRef.current.value
    };
    
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Uncontrolled Form</h2>
      
      <div>
        <label className="block text-sm font-medium mb-1">Name:</label>
        <input
          type="text"
          ref={nameRef}
          defaultValue=""
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          ref={emailRef}
          defaultValue=""
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Age:</label>
        <input
          type="number"
          ref={ageRef}
          defaultValue=""
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country:</label>
        <select
          ref={countryRef}
          defaultValue="turkey"
          className="w-full p-2 border rounded"
        >
          <option value="turkey">Turkey</option>
          <option value="usa">USA</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      <button 
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Children Pattern */}
      <LessonCard
        title="Children Pattern - Children Prop Kullanımı"
        description="Children prop ile esnek ve yeniden kullanılabilir component'lar oluşturun"
        icon="👶"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Children Pattern Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Children pattern, component'ların içeriğini dışarıdan geçirmenizi sağlayan temel React pattern'idir.
              Bu pattern ile component'ları daha esnek ve yeniden kullanılabilir hale getirebilirsiniz.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Component içeriğini dışarıdan geçirme</p>
                <p>• Esnek ve yeniden kullanılabilir yapı</p>
                <p>• Composition over inheritance</p>
                <p>• React'ın temel pattern'i</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha esnek component'lar</p>
                  <p>• Kolay customization</p>
                  <p>• Yeniden kullanılabilirlik</p>
                  <p>• Basit ve anlaşılır</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Layout component'ları</p>
                  <p>• Wrapper component'ları</p>
                  <p>• Modal ve dialog'lar</p>
                  <p>• Card ve container'lar</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Children Pattern Örnekleri"
            description="Farklı children pattern kullanımları"
            language="jsx"
            code={`import React from 'react';

// 1. Basit Children Pattern
function Card({ children, title }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}

// 2. Multiple Children Pattern
function Layout({ header, sidebar, main, footer }) {
  return (
    <div className="min-h-screen flex flex-col">
      {header && <header className="bg-blue-500 text-white p-4">{header}</header>}
      
      <div className="flex flex-1">
        {sidebar && <aside className="w-64 bg-gray-200 p-4">{sidebar}</aside>}
        
        <main className="flex-1 p-4">
          {main}
        </main>
      </div>
      
      {footer && <footer className="bg-gray-800 text-white p-4">{footer}</footer>}
    </div>
  );
}

// 3. Function as Children Pattern
function DataProvider({ children, data }) {
  return children(data);
}

// 4. Render Props with Children
function Toggle({ children }) {
  const [isOn, setIsOn] = React.useState(false);
  
  return children({
    isOn,
    toggle: () => setIsOn(!isOn),
    turnOn: () => setIsOn(true),
    turnOff: () => setIsOn(false)
  });
}

// 5. Compound Children Pattern
function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(null);
  
  return (
    <div className="space-y-2">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => setActiveIndex(activeIndex === index ? null : index)
          });
        }
        return child;
      })}
    </div>
  );
}

function AccordionItem({ children, isActive, onClick }) {
  return (
    <div className="border rounded">
      <button
        onClick={onClick}
        className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200"
      >
        {children}
      </button>
      {isActive && (
        <div className="p-4 border-t">
          Content for this item
        </div>
      )}
    </div>
  );
}

// Kullanım örnekleri
function ChildrenPatternExample() {
  return (
    <div className="space-y-8">
      <div>
        <h2>1. Basit Children Pattern</h2>
        <Card title="User Profile">
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </Card>
      </div>

      <div>
        <h2>2. Multiple Children Pattern</h2>
        <Layout
          header={<h1>My App</h1>}
          sidebar={
            <nav>
              <ul className="space-y-2">
                <li><a href="#" className="block p-2 hover:bg-gray-300">Home</a></li>
                <li><a href="#" className="block p-2 hover:bg-gray-300">About</a></li>
                <li><a href="#" className="block p-2 hover:bg-gray-300">Contact</a></li>
              </ul>
            </nav>
          }
          main={
            <div>
              <h2>Main Content</h2>
              <p>This is the main content area.</p>
            </div>
          }
          footer={<p>&copy; 2024 My App</p>}
        />
      </div>

      <div>
        <h2>3. Function as Children</h2>
        <DataProvider data={{ name: 'John', age: 30 }}>
          {({ name, age }) => (
            <div>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
            </div>
          )}
        </DataProvider>
      </div>

      <div>
        <h2>4. Toggle with Children</h2>
        <Toggle>
          {({ isOn, toggle, turnOn, turnOff }) => (
            <div>
              <p>Status: {isOn ? 'ON' : 'OFF'}</p>
              <button onClick={toggle} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
                Toggle
              </button>
              <button onClick={turnOn} className="mr-2 bg-green-500 text-white px-4 py-2 rounded">
                Turn On
              </button>
              <button onClick={turnOff} className="bg-red-500 text-white px-4 py-2 rounded">
                Turn Off
              </button>
            </div>
          )}
        </Toggle>
      </div>

      <div>
        <h2>5. Accordion with Children</h2>
        <Accordion>
          <AccordionItem>Section 1</AccordionItem>
          <AccordionItem>Section 2</AccordionItem>
          <AccordionItem>Section 3</AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Diğer İleri Düzey Desenler */}
      <LessonCard
        title="Diğer İleri Düzey Desenler"
        description="Context, Provider, Custom Hooks ve diğer modern React pattern'leri"
        icon="🚀"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Modern React Pattern'leri</h3>
            <p className="text-secondary-dark mb-4">
              React'ın modern pattern'leri ile daha güçlü, esnek ve maintainable uygulamalar oluşturun.
              Bu pattern'ler, büyük uygulamalarda state yönetimi ve component organizasyonu için kritik öneme sahiptir.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Context Pattern</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Global state yönetimi</p>
                  <p>• Prop drilling önleme</p>
                  <p>• Provider/Consumer pattern</p>
                  <p>• Theme ve config yönetimi</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Custom Hooks</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Logic paylaşımı</p>
                  <p>• State management</p>
                  <p>• Side effects</p>
                  <p>• Reusable logic</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Provider Pattern</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Service injection</p>
                  <p>• Configuration management</p>
                  <p>• Dependency injection</p>
                  <p>• Testing support</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Context Pattern - Theme Provider"
            description="Context API ile tema yönetimi"
            language="jsx"
            code={`import React, { createContext, useContext, useState } from 'react';

// Theme Context
const ThemeContext = createContext();

// Theme Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    theme,
    language,
    toggleTheme,
    changeLanguage,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Themed Component
function ThemedButton({ children, ...props }) {
  const { theme, isDark } = useTheme();
  
  return (
    <button
      {...props}
      className={\`px-4 py-2 rounded \${
        isDark 
          ? 'bg-gray-700 text-white hover:bg-gray-600' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }\`}
    >
      {children}
    </button>
  );
}

// Language Component
function LanguageSelector() {
  const { language, changeLanguage } = useTheme();
  
  return (
    <select 
      value={language} 
      onChange={(e) => changeLanguage(e.target.value)}
      className="px-3 py-2 border rounded"
    >
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
      <option value="es">Español</option>
    </select>
  );
}

// Main App
function ThemeApp() {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-8">
        <h1>Theme App</h1>
        
        <div className="space-y-4">
          <ThemedButton onClick={() => {}}>
            Primary Button
          </ThemedButton>
          
          <ThemedButton onClick={() => {}}>
            Secondary Button
          </ThemedButton>
          
          <LanguageSelector />
        </div>
      </div>
    </ThemeProvider>
  );
}`}
          />

          <CodeBlock
            title="Custom Hooks Pattern - useApi"
            description="API yönetimi için custom hook"
            language="jsx"
            code={`import { useState, useEffect, useCallback } from 'react';

// Custom Hook - useApi
function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();
  }, [fetchData, refetch]);

  const retry = useCallback(() => {
    setRefetch(prev => prev + 1);
  }, []);

  return { data, loading, error, retry };
}

// Custom Hook - useLocalStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key]);

  return [storedValue, setValue];
}

// Custom Hook - useDebounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage Examples
function ApiExample() {
  const { data, loading, error, retry } = useApi('https://jsonplaceholder.typicode.com/posts/1');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} <button onClick={retry}>Retry</button></div>;

  return (
    <div>
      <h2>API Example</h2>
      <p>Title: {data?.title}</p>
      <p>Body: {data?.body}</p>
    </div>
  );
}

function LocalStorageExample() {
  const [name, setName] = useLocalStorage('name', '');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function DebounceExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>Search term: {searchTerm}</p>
      <p>Debounced term: {debouncedSearchTerm}</p>
    </div>
  );
}`}
          />

          <CodeBlock
            title="Provider Pattern - Service Injection"
            description="Service injection ile dependency management"
            language="jsx"
            code={`import React, { createContext, useContext } from 'react';

// Service Interfaces
class ApiService {
  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }

  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }
}

class NotificationService {
  showSuccess(message) {
    console.log('Success:', message);
  }

  showError(message) {
    console.error('Error:', message);
  }
}

// Service Context
const ServiceContext = createContext();

// Service Provider
function ServiceProvider({ children }) {
  const apiService = new ApiService();
  const notificationService = new NotificationService();

  const value = {
    api: apiService,
    notifications: notificationService
  };

  return (
    <ServiceContext.Provider value={value}>
      {children}
    </ServiceContext.Provider>
  );
}

// Custom Hook
function useServices() {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
}

// Component using services
function UserList() {
  const { api, notifications } = useServices();
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getUsers();
        setUsers(data);
        notifications.showSuccess('Users loaded successfully');
      } catch (error) {
        notifications.showError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [api, notifications]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Main App
function ServiceApp() {
  return (
    <ServiceProvider>
      <div className="p-8">
        <h1>Service Provider Example</h1>
        <UserList />
      </div>
    </ServiceProvider>
  );
}`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default ReactAdvancedComponentPatterns;
