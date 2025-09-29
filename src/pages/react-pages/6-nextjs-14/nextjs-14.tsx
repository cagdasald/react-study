import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const NextJS14: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Next.js 14 - App Router & Advanced Features
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">App Router / Server Actions / ISR / Turbopack / Partial Prerendering</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          Next.js 14'ün yeni özellikleri: App Router, Server Actions, ISR ve performans optimizasyonları
        </p>
      </div>

      {/* Next.js 14 App Router */}
      <LessonCard
        title="Next.js 14 App Router"
        description="Yeni App Router ile modern routing ve layout sistemi"
        icon="🛣️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">App Router Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Next.js 14 App Router, file-based routing sistemini geliştirir ve server components,
              streaming, ve performans optimizasyonlarını destekler.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Yeni Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• File-based routing</p>
                <p>• Nested layouts</p>
                <p>• Loading states</p>
                <p>• Error boundaries</p>
                <p>• Parallel routes</p>
                <p>• Intercepting routes</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha iyi performans</p>
                  <p>• Server components</p>
                  <p>• Streaming</p>
                  <p>• SEO optimizasyonu</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Modern web uygulamaları</p>
                  <p>• E-ticaret siteleri</p>
                  <p>• Blog ve CMS</p>
                  <p>• Dashboard uygulamaları</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="App Router Yapısı"
            description="Next.js 14 App Router ile proje yapısı"
            language="jsx"
            code={`// app/layout.js (Root Layout)
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'A Next.js 14 app with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto">
            <a href="/" className="mr-4">Home</a>
            <a href="/about" className="mr-4">About</a>
            <a href="/blog" className="mr-4">Blog</a>
            <a href="/dashboard" className="mr-4">Dashboard</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}

// app/page.js (Home Page)
import { Suspense } from 'react';
import { getPosts } from './lib/posts';
import PostList from './components/PostList';
import Loading from './components/Loading';

export default async function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
      
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}

// app/about/page.js (About Page)
export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg">This is the about page.</p>
    </div>
  );
}

// app/blog/page.js (Blog Page)
import { getPosts } from '../lib/posts';

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-4">
        {posts.map(post => (
          <article key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <time className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}

// app/blog/[slug]/page.js (Dynamic Route)
import { getPost, getPosts } from '../../lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* Server Actions */}
      <LessonCard
        title="Server Actions - Form Handling"
        description="Server Actions ile form işlemleri ve data mutations"
        icon="⚡"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Server Actions Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Server Actions, form submissions ve data mutations için server-side functions sağlar.
              Client-side JavaScript olmadan form işlemleri yapabilirsiniz.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Server-side form handling</p>
                <p>• Automatic revalidation</p>
                <p>• Progressive enhancement</p>
                <p>• Type safety</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Daha az JavaScript</p>
                  <p>• Better performance</p>
                  <p>• SEO friendly</p>
                  <p>• Progressive enhancement</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Form submissions</p>
                  <p>• Data mutations</p>
                  <p>• File uploads</p>
                  <p>• API calls</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Server Actions Örneği"
            description="Form handling ve data mutations"
            language="jsx"
            code={`// app/actions/posts.js
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '../lib/db';

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  const author = formData.get('author');
  
  // Validation
  if (!title || !content || !author) {
    return { error: 'All fields are required' };
  }
  
  try {
    // Create post in database
    const post = await db.post.create({
      data: {
        title,
        content,
        author,
        publishedAt: new Date()
      }
    });
    
    // Revalidate the blog page
    revalidatePath('/blog');
    
    // Redirect to the new post
    redirect(\`/blog/\${post.slug}\`);
  } catch (error) {
    return { error: 'Failed to create post' };
  }
}

export async function updatePost(id, formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  try {
    await db.post.update({
      where: { id },
      data: { title, content }
    });
    
    revalidatePath('/blog');
    revalidatePath(\`/blog/\${id}\`);
  } catch (error) {
    return { error: 'Failed to update post' };
  }
}

export async function deletePost(id) {
  try {
    await db.post.delete({
      where: { id }
    });
    
    revalidatePath('/blog');
  } catch (error) {
    return { error: 'Failed to delete post' };
  }
}

// app/blog/new/page.js
import { createPost } from '../actions/posts';

export default function NewPostPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      
      <form action={createPost} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={10}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

// app/blog/[id]/edit/page.js
import { updatePost, deletePost } from '../../actions/posts';
import { getPost } from '../../lib/posts';

export default async function EditPostPage({ params }) {
  const post = await getPost(params.id);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      
      <form action={updatePost.bind(null, params.id)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            defaultValue={post.content}
            required
            rows={10}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update Post
          </button>
          
          <button
            type="button"
            onClick={() => deletePost(params.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Post
          </button>
        </div>
      </form>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* ISR - Incremental Static Regeneration */}
      <LessonCard
        title="ISR - Incremental Static Regeneration"
        description="Static generation ile dinamik içerik güncellemeleri"
        icon="🔄"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">ISR Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              ISR, static sayfaları build time'da oluşturur ve belirli aralıklarla yeniden generate eder.
              Bu sayede hem performans hem de güncel içerik sağlanır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">ISR Avantajları</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Static performance</p>
                <p>• Dynamic content updates</p>
                <p>• CDN caching</p>
                <p>• SEO friendly</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Senaryoları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Blog posts</p>
                  <p>• Product pages</p>
                  <p>• News articles</p>
                  <p>• User profiles</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Konfigürasyon</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• revalidate: 60 (seconds)</p>
                  <p>• revalidate: false (no revalidation)</p>
                  <p>• revalidate: 0 (always revalidate)</p>
                  <p>• on-demand revalidation</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="ISR Örneği"
            description="Incremental Static Regeneration kullanımı"
            language="jsx"
            code={`// app/blog/[slug]/page.js
import { getPost, getPosts } from '../../lib/posts';
import { notFound } from 'next/navigation';

// Generate static params at build time
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

// ISR configuration
export const revalidate = 3600; // Revalidate every hour

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          Published: {new Date(post.publishedAt).toLocaleDateString()}
        </div>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}

// app/products/[id]/page.js
import { getProduct, getProducts } from '../../lib/products';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    id: product.id
  }));
}

// Revalidate every 30 minutes
export const revalidate = 1800;

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            \${\`\${product.price}\`}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// app/api/revalidate/route.js (On-demand revalidation)
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { path, secret } = await request.json();
  
  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 });
  }
  
  try {
    // Revalidate the specific path
    revalidatePath(path);
    
    return Response.json({ 
      message: 'Path revalidated successfully',
      path 
    });
  } catch (err) {
    return Response.json({ 
      message: 'Error revalidating path' 
    }, { status: 500 });
  }
}

// lib/products.js
export async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(\`https://api.example.com/products/\${id}\`, {
    next: { revalidate: 1800 } // Cache for 30 minutes
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}`}
          />
        </div>
      </LessonCard>

      {/* Turbopack */}
      <LessonCard
        title="Turbopack - Next Generation Bundler"
        description="Turbopack ile ultra hızlı development ve build"
        icon="⚡"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Turbopack Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Turbopack, Rust ile yazılmış yeni nesil bundler'dır. Webpack'ten 10x daha hızlı
              development server ve build süreleri sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• 10x faster than Webpack</p>
                <p>• Incremental compilation</p>
                <p>• Hot Module Replacement</p>
                <p>• Tree shaking</p>
                <p>• Code splitting</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Ultra fast development</p>
                  <p>• Better caching</p>
                  <p>• Memory efficient</p>
                  <p>• Better error messages</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Next.js 14+</p>
                  <p>• Development mode</p>
                  <p>• Production builds</p>
                  <p>• Custom configurations</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Turbopack Kullanımı"
            description="Turbopack ile development ve build"
            language="bash"
            code={`# Development with Turbopack
npm run dev -- --turbo

# Or with yarn
yarn dev --turbo

# Or with pnpm
pnpm dev --turbo

# Production build with Turbopack
npm run build -- --turbo

# Custom configuration
# next.config.js
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;

# Performance comparison
# Webpack: 2.5s build time
# Turbopack: 0.25s build time (10x faster)

# Development server
# Webpack: 1.2s startup
# Turbopack: 0.1s startup (12x faster)

# Hot Module Replacement
# Webpack: 200ms
# Turbopack: 20ms (10x faster)`}
          />
        </div>
      </LessonCard>

      {/* Partial Prerendering */}
      <LessonCard
        title="Partial Prerendering (PPR)"
        description="Static ve dynamic content'i birleştiren yeni özellik"
        icon="🎯"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">PPR Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Partial Prerendering, sayfanın static kısımlarını build time'da oluştururken,
              dynamic kısımlarını request time'da render eder. Bu sayede hem performans hem de
              dinamik içerik sağlanır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">PPR Avantajları</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Static performance</p>
                <p>• Dynamic content</p>
                <p>• Better SEO</p>
                <p>• Faster loading</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Senaryoları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• E-commerce pages</p>
                  <p>• Blog with comments</p>
                  <p>• Dashboard with data</p>
                  <p>• User profiles</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Konfigürasyon</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• experimental.partialPrerendering</p>
                  <p>• Suspense boundaries</p>
                  <p>• Static segments</p>
                  <p>• Dynamic segments</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="PPR Örneği"
            description="Partial Prerendering kullanımı"
            language="jsx"
            code={`// next.config.js
const nextConfig = {
  experimental: {
    partialPrerendering: {
      enabled: true,
    },
  },
};

module.exports = nextConfig;

// app/page.js
import { Suspense } from 'react';
import { getStaticData } from './lib/static';
import { getDynamicData } from './lib/dynamic';

// Static component (prerendered)
function StaticHeader() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/contact" className="mr-4">Contact</a>
      </nav>
    </header>
  );
}

// Dynamic component (rendered at request time)
async function DynamicContent() {
  const data = await getDynamicData();
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Dynamic Content</h2>
      <p>Current time: {new Date().toLocaleString()}</p>
      <p>User count: {data.userCount}</p>
      <p>Last updated: {data.lastUpdated}</p>
    </div>
  );
}

// Loading component
function DynamicLoading() {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}

// Main page component
export default async function HomePage() {
  // This data is fetched at build time
  const staticData = await getStaticData();
  
  return (
    <div>
      {/* Static content - prerendered */}
      <StaticHeader />
      
      <main className="container mx-auto">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome to My App</h2>
          <p className="text-gray-600 mb-4">
            This is static content that was prerendered at build time.
          </p>
          <p>Static data: {staticData.message}</p>
        </div>
        
        {/* Dynamic content - rendered at request time */}
        <Suspense fallback={<DynamicLoading />}>
          <DynamicContent />
        </Suspense>
      </main>
      
      {/* Static footer - prerendered */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

// lib/static.js
export async function getStaticData() {
  // This runs at build time
  return {
    message: 'This data was fetched at build time',
    buildTime: new Date().toISOString()
  };
}

// lib/dynamic.js
export async function getDynamicData() {
  // This runs at request time
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  
  return {
    userCount: Math.floor(Math.random() * 1000),
    lastUpdated: new Date().toISOString()
  };
}`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default NextJS14;
