import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const ModernReactFeatures: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Modern React Features
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">Suspense / Lazy Loading / Concurrent Features / Error Boundaries / Portals / Profiler</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React'ın modern özelliklerini öğrenin ve performanslı, kullanıcı dostu uygulamalar oluşturun
        </p>
      </div>

      {/* Suspense */}
      <LessonCard
        title="Suspense - Async Veri Bekleme ve Fallback Yönetimi"
        description="Suspense ile async işlemleri yönetin ve kullanıcı deneyimini iyileştirin"
        icon="⏳"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Suspense Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Suspense, React'ın async işlemleri (veri yükleme, kod bölme) sırasında fallback UI göstermenizi sağlayan bir component'tir.
              Kullanıcı deneyimini iyileştirir ve loading state'lerini merkezi olarak yönetmenizi sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Async işlemler için fallback UI</p>
                <p>• Declarative loading state yönetimi</p>
                <p>• Error boundary ile entegrasyon</p>
                <p>• Concurrent rendering desteği</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Data fetching</p>
                  <p>• Code splitting</p>
                  <p>• Image loading</p>
                  <p>• Lazy component loading</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha iyi UX</p>
                  <p>• Merkezi loading yönetimi</p>
                  <p>• Declarative approach</p>
                  <p>• Error handling</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Suspense Temel Kullanımı"
            description="Data fetching ile Suspense kullanımı"
            language="jsx"
            code={`import React, { Suspense, useState } from 'react';

// Async data fetcher
function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://via.placeholder.com/150'
      });
    }, 2000);
  });
}

// Resource cache
const userResourceCache = new Map();

function getUserResource(userId) {
  if (!userResourceCache.has(userId)) {
    userResourceCache.set(userId, {
      promise: fetchUserData(userId),
      data: null,
      error: null
    });
  }
  
  const resource = userResourceCache.get(userId);
  
  if (resource.data) {
    return resource.data;
  }
  
  if (resource.error) {
    throw resource.error;
  }
  
  throw resource.promise.then(
    (data) => {
      resource.data = data;
    },
    (error) => {
      resource.error = error;
    }
  );
}

// User Profile Component
function UserProfile({ userId }) {
  const user = getUserResource(userId);
  
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <img 
        src={user.avatar} 
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{user.name}</h2>
      <p className="text-gray-600 text-center">{user.email}</p>
    </div>
  );
}

// Loading Component
function UserProfileSkeleton() {
  return (
    <div className="border rounded-lg p-6 shadow-md animate-pulse">
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
    </div>
  );
}

// Error Boundary
class UserProfileErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('UserProfile Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border rounded-lg p-6 shadow-md bg-red-50">
          <h2 className="text-xl font-semibold text-red-600">Error Loading Profile</h2>
          <p className="text-red-500">Something went wrong while loading the user profile.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App
function SuspenseExample() {
  const [userId, setUserId] = useState(1);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Suspense Example</h1>
      
      <div className="flex gap-4">
        <button
          onClick={() => setUserId(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load User 1
        </button>
        <button
          onClick={() => setUserId(2)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Load User 2
        </button>
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          {showProfile ? 'Hide' : 'Show'} Profile
        </button>
      </div>

      {showProfile && (
        <UserProfileErrorBoundary>
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile userId={userId} />
          </Suspense>
        </UserProfileErrorBoundary>
      )}
    </div>
  );
}`}
          />

          <CodeBlock
            title="Suspense ile Multiple Components"
            description="Birden fazla async component ile Suspense kullanımı"
            language="jsx"
            code={`import React, { Suspense, useState } from 'react';

// Mock API functions
const fetchPosts = () => new Promise(resolve => 
  setTimeout(() => resolve([
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2' }
  ]), 1500)
);

const fetchComments = () => new Promise(resolve => 
  setTimeout(() => resolve([
    { id: 1, text: 'Great post!', author: 'User 1' },
    { id: 2, text: 'Thanks for sharing', author: 'User 2' }
  ]), 2000)
);

// Resource cache
const resourceCache = new Map();

function getResource(key, fetcher) {
  if (!resourceCache.has(key)) {
    resourceCache.set(key, {
      promise: fetcher(),
      data: null,
      error: null
    });
  }
  
  const resource = resourceCache.get(key);
  
  if (resource.data) return resource.data;
  if (resource.error) throw resource.error;
  
  throw resource.promise.then(
    (data) => { resource.data = data; },
    (error) => { resource.error = error; }
  );
}

// Components
function PostsList() {
  const posts = getResource('posts', fetchPosts);
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="border p-4 rounded">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

function CommentsList() {
  const comments = getResource('comments', fetchComments);
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="border p-4 rounded">
          <p>{comment.text}</p>
          <p className="text-sm text-gray-500">- {comment.author}</p>
        </div>
      ))}
    </div>
  );
}

// Loading components
function PostsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      {[1, 2].map(i => (
        <div key={i} className="border p-4 rounded animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

function CommentsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      {[1, 2].map(i => (
        <div key={i} className="border p-4 rounded animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

// Main App
function MultipleSuspenseExample() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Multiple Suspense Example</h1>
      
      <button
        onClick={() => setShowContent(!showContent)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showContent ? 'Hide' : 'Show'} Content
      </button>

      {showContent && (
        <div className="grid md:grid-cols-2 gap-6">
          <Suspense fallback={<PostsSkeleton />}>
            <PostsList />
          </Suspense>
          
          <Suspense fallback={<CommentsSkeleton />}>
            <CommentsList />
          </Suspense>
        </div>
      )}
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Lazy Loading */}
      <LessonCard
        title="lazy() + Suspense - Lazy Loading ile Bundle Optimizasyonu"
        description="React.lazy() ile kod bölme yapın ve bundle boyutunu optimize edin"
        icon="📦"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Lazy Loading Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React.lazy() ile component'ları dinamik olarak yükleyebilirsiniz. Bu, bundle boyutunu küçültür,
              ilk yükleme süresini hızlandırır ve kullanıcı deneyimini iyileştirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Dynamic import ile kod bölme</p>
                <p>• Bundle boyutu optimizasyonu</p>
                <p>• Suspense ile entegrasyon</p>
                <p>• Route-based code splitting</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha hızlı ilk yükleme</p>
                  <p>• Küçük bundle boyutu</p>
                  <p>• Daha iyi performans</p>
                  <p>• Kullanıcı deneyimi</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Route-based splitting</p>
                  <p>• Feature-based splitting</p>
                  <p>• Third-party libraries</p>
                  <p>• Heavy components</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Lazy Loading Temel Kullanımı"
            description="React.lazy() ile component'ları lazy load etme"
            language="jsx"
            code={`import React, { Suspense, lazy, useState } from 'react';

// Lazy loaded components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const ChartComponent = lazy(() => import('./ChartComponent'));
const DataTable = lazy(() => import('./DataTable'));

// Loading components
function ComponentSkeleton() {
  return (
    <div className="border rounded-lg p-6 shadow-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

// Error Boundary for lazy components
class LazyComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border rounded-lg p-6 shadow-md bg-red-50">
          <h2 className="text-xl font-semibold text-red-600">Component Load Error</h2>
          <p className="text-red-500 mb-4">
            Failed to load component: {this.state.error?.message}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App
function LazyLoadingExample() {
  const [activeComponent, setActiveComponent] = useState(null);

  const components = {
    heavy: HeavyComponent,
    chart: ChartComponent,
    table: DataTable
  };

  const renderComponent = () => {
    if (!activeComponent) return null;

    const Component = components[activeComponent];
    
    return (
      <LazyComponentErrorBoundary>
        <Suspense fallback={<ComponentSkeleton />}>
          <Component />
        </Suspense>
      </LazyComponentErrorBoundary>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Lazy Loading Example</h1>
      
      <div className="flex gap-4">
        <button
          onClick={() => setActiveComponent('heavy')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load Heavy Component
        </button>
        <button
          onClick={() => setActiveComponent('chart')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Load Chart Component
        </button>
        <button
          onClick={() => setActiveComponent('table')}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Load Data Table
        </button>
        <button
          onClick={() => setActiveComponent(null)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      {renderComponent()}
    </div>
  );
}`}
          />

          <CodeBlock
            title="Route-based Code Splitting"
            description="React Router ile lazy loading"
            language="jsx"
            code={`import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

// Loading component
function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading page...</p>
      </div>
    </div>
  );
}

// Navigation component
function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex space-x-6">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link to="/profile" className="hover:text-blue-300">Profile</Link>
      </div>
    </nav>
  );
}

// Main App with lazy loading
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="max-w-6xl mx-auto p-6">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;`}
          />

          <CodeBlock
            title="Preloading Lazy Components"
            description="Lazy component'ları önceden yükleme"
            language="jsx"
            code={`import React, { Suspense, lazy, useEffect, useState } from 'react';

// Lazy components with preloading
const HeavyComponent = lazy(() => 
  import('./HeavyComponent').then(module => {
    // Preload related components
    import('./RelatedComponent');
    return module;
  })
);

const ChartComponent = lazy(() => import('./ChartComponent'));
const DataTable = lazy(() => import('./DataTable'));

// Preload function
function preloadComponent(importFunction) {
  const componentPromise = importFunction();
  componentPromise.then(() => {
    console.log('Component preloaded successfully');
  });
  return componentPromise;
}

// Preload on hover
function PreloadableButton({ children, onClick, preloadFunction, ...props }) {
  const [isPreloading, setIsPreloading] = useState(false);

  const handleMouseEnter = () => {
    if (!isPreloading) {
      setIsPreloading(true);
      preloadFunction();
    }
  };

  return (
    <button
      {...props}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
    >
      {isPreloading ? 'Preloading...' : children}
    </button>
  );
}

// Main App
function PreloadingExample() {
  const [activeComponent, setActiveComponent] = useState(null);

  // Preload all components on mount
  useEffect(() => {
    const preloadAll = async () => {
      try {
        await Promise.all([
          import('./HeavyComponent'),
          import('./ChartComponent'),
          import('./DataTable')
        ]);
        console.log('All components preloaded');
      } catch (error) {
        console.error('Preloading failed:', error);
      }
    };

    preloadAll();
  }, []);

  const components = {
    heavy: HeavyComponent,
    chart: ChartComponent,
    table: DataTable
  };

  const renderComponent = () => {
    if (!activeComponent) return null;

    const Component = components[activeComponent];
    
    return (
      <Suspense fallback={<div>Loading component...</div>}>
        <Component />
      </Suspense>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Preloading Example</h1>
      
      <div className="flex gap-4">
        <PreloadableButton
          onClick={() => setActiveComponent('heavy')}
          preloadFunction={() => preloadComponent(() => import('./HeavyComponent'))}
        >
          Load Heavy Component
        </PreloadableButton>
        
        <PreloadableButton
          onClick={() => setActiveComponent('chart')}
          preloadFunction={() => preloadComponent(() => import('./ChartComponent'))}
        >
          Load Chart Component
        </PreloadableButton>
        
        <PreloadableButton
          onClick={() => setActiveComponent('table')}
          preloadFunction={() => preloadComponent(() => import('./DataTable'))}
        >
          Load Data Table
        </PreloadableButton>
      </div>

      {renderComponent()}
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Concurrent Features */}
      <LessonCard
        title="Concurrent Features - React 18 Yeni Özellikleri"
        description="React 18'in concurrent özelliklerini öğrenin ve performansı artırın"
        icon="⚡"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Concurrent Features Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React 18'in concurrent özellikleri, uygulamanızın daha responsive ve performanslı olmasını sağlar.
              Bu özellikler, büyük güncellemeleri küçük parçalara böler ve kullanıcı etkileşimlerini önceliklendirir.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">useTransition</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Non-urgent updates</p>
                  <p>• UI blocking önleme</p>
                  <p>• isPending state</p>
                  <p>• startTransition API</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">useDeferredValue</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Deferred updates</p>
                  <p>• Value geciktirme</p>
                  <p>• Performance optimization</p>
                  <p>• Search input örnekleri</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Automatic Batching</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Otomatik batching</p>
                  <p>• Event handlers</p>
                  <p>• Async operations</p>
                  <p>• Performance iyileştirme</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useTransition - Non-urgent Updates"
            description="useTransition ile UI blocking'i önleme"
            language="jsx"
            code={`import React, { useState, useTransition, useMemo } from 'react';

// Mock data generator
function generateItems(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: \`Item \${i + 1}\`,
    value: Math.random() * 1000
  }));
}

// Search component
function SearchResults({ query, items }) {
  const filteredItems = useMemo(() => {
    if (!query) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">
        Results: {filteredItems.length} items
      </h3>
      <div className="max-h-96 overflow-y-auto">
        {filteredItems.map(item => (
          <div key={item.id} className="border p-2 rounded">
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-500 ml-2">({item.value.toFixed(2)})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App
function TransitionExample() {
  const [query, setQuery] = useState('');
  const [items] = useState(() => generateItems(10000));
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    
    // Urgent update - input hemen güncellenir
    setQuery(value);
    
    // Non-urgent update - arama sonuçları geciktirilir
    startTransition(() => {
      // Bu güncelleme UI'yi bloklamaz
      setQuery(value);
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">useTransition Example</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Search Items:
          </label>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Type to search..."
            className="w-full p-2 border rounded"
          />
        </div>

        {isPending && (
          <div className="text-blue-600 font-medium">
            Searching... (UI is not blocked!)
          </div>
        )}

        <SearchResults query={query} items={items} />
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            title="useDeferredValue - Deferred Updates"
            description="useDeferredValue ile value geciktirme"
            language="jsx"
            code={`import React, { useState, useDeferredValue, useMemo } from 'react';

// Expensive calculation component
function ExpensiveList({ items, query }) {
  const filteredItems = useMemo(() => {
    if (!query) return items;
    
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">
        Filtered Results: {filteredItems.length} items
      </h3>
      <div className="max-h-96 overflow-y-auto">
        {filteredItems.map(item => (
          <div key={item.id} className="border p-2 rounded">
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-500 ml-2">({item.value.toFixed(2)})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App
function DeferredValueExample() {
  const [query, setQuery] = useState('');
  const [items] = useState(() => 
    Array.from({ length: 5000 }, (_, i) => ({
      id: i,
      name: \`Item \${i + 1}\`,
      value: Math.random() * 1000
    }))
  );

  // Deferred value - geciktirilmiş query
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">useDeferredValue Example</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Search Items (with deferred value):
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search..."
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="text-sm text-gray-600">
          <p>Current query: {query}</p>
          <p>Deferred query: {deferredQuery}</p>
          <p>Query matches: {query === deferredQuery ? 'Yes' : 'No'}</p>
        </div>

        <ExpensiveList items={items} query={deferredQuery} />
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Error Boundaries */}
      <LessonCard
        title="Error Boundaries - Hata Yakalama ve Yönetimi"
        description="Error boundaries ile hataları yakalayın ve kullanıcı deneyimini iyileştirin"
        icon="🛡️"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Error Boundaries Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Error boundaries, React component tree'sinde JavaScript hatalarını yakalayan, log'layan ve
              fallback UI gösteren component'lerdir. Uygulamanızın çökmesini önler ve daha iyi kullanıcı deneyimi sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• JavaScript hatalarını yakalar</p>
                <p>• Fallback UI gösterir</p>
                <p>• Hata log'ları tutar</p>
                <p>• Uygulama çökmesini önler</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Yakaladığı Hatalar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Render method'larındaki hatalar</p>
                  <p>• Lifecycle method'larındaki hatalar</p>
                  <p>• Constructor'lardaki hatalar</p>
                  <p>• Child component'lardaki hatalar</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Yakalamadığı Hatalar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Event handler'lar</p>
                  <p>• Async kod (setTimeout, promises)</p>
                  <p>• Server-side rendering</p>
                  <p>• Error boundary'lerin kendi hataları</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Error Boundary Temel Kullanımı"
            description="Class component ile error boundary oluşturma"
            language="jsx"
            code={`import React from 'react';

// Error Boundary Class Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border border-red-300 rounded-lg p-6 bg-red-50">
          <h2 className="text-xl font-semibold text-red-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-red-600 mb-4">
            We're sorry, but something unexpected happened.
          </p>
          
          <button
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hata üreten component
function BuggyComponent({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('I crashed!');
  }

  return (
    <div className="border rounded-lg p-4 bg-green-50">
      <h3 className="text-lg font-semibold text-green-800">I'm working fine!</h3>
      <p className="text-green-600">No errors here.</p>
    </div>
  );
}

// Ana App
function ErrorBoundaryExample() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Error Boundary Example</h1>
      
      <div className="space-y-4">
        <button
          onClick={() => setShouldThrow(!shouldThrow)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {shouldThrow ? 'Fix Component' : 'Break Component'}
        </button>

        <ErrorBoundary>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Portals */}
      <LessonCard
        title="Portals - DOM Dışı Render"
        description="React portals ile component'ları DOM'un farklı yerlerine render edin"
        icon="🚪"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Portals Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React portals, component'ları parent component'in DOM hiyerarşisinin dışında,
              farklı bir DOM node'una render etmenizi sağlar. Modal'lar, tooltip'ler ve overlay'ler için idealdir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• DOM dışı render</p>
                <p>• Event bubbling korunur</p>
                <p>• Context erişimi korunur</p>
                <p>• Z-index sorunları çözülür</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Modal ve dialog'lar</p>
                  <p>• Tooltip'ler</p>
                  <p>• Loading overlay'ler</p>
                  <p>• Notification'lar</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• CSS z-index sorunları yok</p>
                  <p>• DOM hiyerarşisi bağımsız</p>
                  <p>• Event bubbling korunur</p>
                  <p>• Context erişimi korunur</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Portal Temel Kullanımı"
            description="Modal component ile portal kullanımı"
            language="jsx"
            code={`import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Modal Component with Portal
function Modal({ isOpen, onClose, children, title }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

// Ana App
function PortalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Portal Example</h1>
      
      <div className="space-y-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Portal Modal"
      >
        <p className="mb-4">
          This modal is rendered using React Portal!
        </p>
        <p className="mb-4">
          It's rendered outside the normal DOM hierarchy.
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Profiler */}
      <LessonCard
        title="Profiler - Performance Monitoring"
        description="React Profiler ile component performansını ölçün ve optimize edin"
        icon="📊"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">React Profiler Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React Profiler, component'ların render sürelerini ölçer ve performans sorunlarını tespit etmenize yardımcı olur.
              Hangi component'ların ne kadar sürede render olduğunu görebilir ve optimizasyon yapabilirsiniz.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Render sürelerini ölçer</p>
                <p>• Component hierarchy görüntüler</p>
                <p>• Performance bottlenecks tespit eder</p>
                <p>• DevTools entegrasyonu</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Performance debugging</p>
                  <p>• Component optimization</p>
                  <p>• Render cycle analysis</p>
                  <p>• Memory leak detection</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Metrikler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Render time</p>
                  <p>• Commit time</p>
                  <p>• Update time</p>
                  <p>• Mount time</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Profiler Temel Kullanımı"
            description="React.Profiler ile component performansını ölçme"
            language="jsx"
            code={`import React, { useState, memo, useMemo } from 'react';

// Expensive component
const ExpensiveComponent = memo(({ data, filter }) => {
  const filteredData = useMemo(() => {
    console.log('Filtering data...');
    return data.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Expensive Component</h3>
      <div className="space-y-1">
        {filteredData.map(item => (
          <div key={item.id} className="p-2 bg-gray-100 rounded">
            {item.name} - {item.value}
          </div>
        ))}
      </div>
    </div>
  );
});

// Main App with Profiler
function ProfilerExample() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');
  const [data] = useState(() => 
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: \`Item \${i + 1}\`,
      value: Math.random() * 1000
    }))
  );

  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('Profiler:', {
      id,
      phase,
      actualDuration: actualDuration.toFixed(2) + 'ms',
      baseDuration: baseDuration.toFixed(2) + 'ms'
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">React Profiler Example</h1>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment Count
          </button>
          
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items..."
            className="px-3 py-2 border rounded"
          />
        </div>

        <React.Profiler id="ExpensiveComponent" onRender={onRender}>
          <ExpensiveComponent data={data} filter={filter} />
        </React.Profiler>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default ModernReactFeatures;
