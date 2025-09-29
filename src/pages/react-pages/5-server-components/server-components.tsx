import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const ServerComponents: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Server Components
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">Server Components / Client Components / Streaming / Suspense / Next.js 13+</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React Server Components ile server-side rendering ve performans optimizasyonu
        </p>
      </div>

      {/* Server Components Temelleri */}
      <LessonCard
        title="Server Components Temelleri"
        description="Server Components nedir ve nasıl çalışır?"
        icon="🖥️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Server Components Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React Server Components (RSC), component'ların server'da render edilmesini sağlayan yeni bir React özelliğidir.
              Bu, bundle boyutunu küçültür, performansı artırır ve server-side data fetching'i kolaylaştırır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Server'da render edilir</p>
                <p>• Bundle boyutunu küçültür</p>
                <p>• Server-side data fetching</p>
                <p>• Zero JavaScript client-side</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha hızlı initial load</p>
                  <p>• Küçük bundle boyutu</p>
                  <p>• Server-side data access</p>
                  <p>• SEO friendly</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kısıtlamalar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Event handlers yok</p>
                  <p>• useState, useEffect yok</p>
                  <p>• Browser APIs yok</p>
                  <p>• Interactive features yok</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Server Component Örneği"
            description="Basit server component ve data fetching"
            language="jsx"
            code={`// Server Component (app/page.js)
import { db } from './lib/db';

// Bu component server'da çalışır
async function UserList() {
  // Server-side data fetching
  const users = await db.users.findMany();
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server Component (app/layout.js)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>My App</h1>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

// Server Component (app/page.js)
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <UserList />
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Client Components */}
      <LessonCard
        title="Client Components - Interaktif Özellikler"
        description="Client components ile interaktif özellikler ekleyin"
        icon="💻"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Client Components Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Client Components, browser'da çalışan ve interaktif özellikler sağlayan component'lardır.
              Event handlers, state, hooks ve browser APIs kullanabilirler.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Event handlers</p>
                <p>• State management</p>
                <p>• Browser APIs</p>
                <p>• Interactive features</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Tam interaktivite</p>
                  <p>• Hooks kullanabilir</p>
                  <p>• Browser APIs erişimi</p>
                  <p>• Event handling</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Dikkat Edilecekler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Bundle boyutunu artırır</p>
                  <p>• Client-side render</p>
                  <p>• JavaScript gerekir</p>
                  <p>• Hydration gerekir</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Client Component Örneği"
            description="Interaktif client component"
            language="jsx"
            code={`'use client'; // Client Component directive

import { useState } from 'react';

// Client Component
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="border rounded-lg p-4">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className="space-x-2">
        <button 
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

// Client Component - Form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <label className="block text-sm font-medium mb-1">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
        />
      </div>
      
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export { Counter, ContactForm };`}
          />
        </div>
      </LessonCard>

      {/* Server + Client Component Mix */}
      <LessonCard
        title="Server + Client Component Mix"
        description="Server ve client component'ları birlikte kullanma"
        icon="🔀"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Hibrit Yaklaşım</h3>
            <p className="text-secondary-dark mb-4">
              En iyi performans için server component'ları data fetching ve static content için,
              client component'ları ise interaktif özellikler için kullanın.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Best Practices</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Server components'ı default olarak kullan</p>
                <p>• Sadece gerekli yerlerde client components</p>
                <p>• Data fetching'i server'da yap</p>
                <p>• Interaktivite'yi client'da yap</p>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Hibrit Component Örneği"
            description="Server ve client component'ları birlikte kullanma"
            language="jsx"
            code={`// Server Component (app/page.js)
import { db } from './lib/db';
import { UserList } from './components/UserList';
import { UserActions } from './components/UserActions';

// Server Component - Data fetching
async function UserProfile({ userId }) {
  const user = await db.users.findUnique({
    where: { id: userId },
    include: { posts: true }
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="border rounded-lg p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      
      {/* Server Component - Static content */}
      <UserList posts={user.posts} />
      
      {/* Client Component - Interactive features */}
      <UserActions userId={userId} />
    </div>
  );
}

// Server Component (components/UserList.js)
function UserList({ posts }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Posts</h2>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.content}</p>
            <span className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Client Component (components/UserActions.js)
'use client';

import { useState } from 'react';

function UserActions({ userId }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(\`/api/users/\${userId}/follow\`, {
        method: 'POST',
      });
      
      if (response.ok) {
        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.error('Follow error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 space-x-2">
      <button
        onClick={handleFollow}
        disabled={isLoading}
        className={\`px-4 py-2 rounded \${isFollowing ? 'bg-gray-500' : 'bg-blue-500'} text-white\`}
      >
        {isLoading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      
      <button className="px-4 py-2 bg-green-500 text-white rounded">
        Send Message
      </button>
    </div>
  );
}

export default UserProfile;`}
          />
        </div>
      </LessonCard>

      {/* Streaming ve Suspense */}
      <LessonCard
        title="Streaming ve Suspense"
        description="Server components ile streaming ve suspense kullanımı"
        icon="🌊"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Streaming Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Streaming, server component'ların yavaş yüklenen kısımlarını önce gösterip,
              sonra diğer kısımları ekleyerek kullanıcı deneyimini iyileştirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Daha hızlı perceived performance</p>
                <p>• Progressive loading</p>
                <p>• Better user experience</p>
                <p>• Non-blocking rendering</p>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Streaming Örneği"
            description="Suspense ile streaming kullanımı"
            language="jsx"
            code={`// Server Component (app/page.js)
import { Suspense } from 'react';
import { db } from './lib/db';

// Slow component
async function SlowDataComponent() {
  // Simulate slow data fetching
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const data = await db.slowData.findMany();
  
  return (
    <div className="border rounded-lg p-4">
      <h2>Slow Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Fast component
async function FastDataComponent() {
  const data = await db.fastData.findMany();
  
  return (
    <div className="border rounded-lg p-4">
      <h2>Fast Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Loading component
function DataLoading() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

// Main page component
export default function StreamingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Streaming Example</h1>
      
      {/* Fast data - renders immediately */}
      <FastDataComponent />
      
      {/* Slow data - streams in later */}
      <Suspense fallback={<DataLoading />}>
        <SlowDataComponent />
      </Suspense>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Next.js 13+ App Router */}
      <LessonCard
        title="Next.js 13+ App Router"
        description="Next.js App Router ile server components kullanımı"
        icon="⚡"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Next.js App Router</h3>
            <p className="text-secondary-dark mb-4">
              Next.js 13+ App Router, server components'ı destekler ve file-based routing ile
              server ve client component'ları otomatik olarak optimize eder.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">App Router Özellikleri</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• File-based routing</p>
                <p>• Server components by default</p>
                <p>• Automatic code splitting</p>
                <p>• Streaming support</p>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Next.js App Router Yapısı"
            description="App Router ile proje yapısı"
            language="jsx"
            code={`// app/layout.js (Server Component)
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with server components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}

// app/page.js (Server Component)
import { db } from './lib/db';
import { UserList } from './components/UserList';
import { Counter } from './components/Counter';

export default async function HomePage() {
  // Server-side data fetching
  const users = await db.users.findMany();
  
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a server component!</p>
      
      {/* Server Component */}
      <UserList users={users} />
      
      {/* Client Component */}
      <Counter />
    </div>
  );
}

// app/about/page.js (Server Component)
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}

// app/contact/page.js (Client Component)
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default ServerComponents;