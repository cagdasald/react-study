import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const Hooks: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">useState / useEffect / useContext / useReducer / useCallback / useMemo / useRef / useTransition / useDeferredValue / useId / Custom Hooks</Badge>
        </div>
      </div>

      {/* Hooks Giriş */}
      <LessonCard
        title="React Hooks Nedir?"
        description="Hooks'ların ne olduğunu ve neden kullanıldığını öğrenin"
        icon="🎣"
        level="beginner"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Hooks Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Hooks, React 16.8'de tanıtılan özel fonksiyonlardır. Function component'ların içinde state ve lifecycle özelliklerini kullanmanızı sağlar.
              Class component'lara ihtiyaç duymadan React'ın tüm özelliklerini kullanabilirsiniz.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Class Component (Eski Yöntem)</h4>
                <div className="text-secondary-dark text-sm space-y-2">
                  <p>• Karmaşık syntax</p>
                  <p>• this binding sorunları</p>
                  <p>• Lifecycle method'ları</p>
                  <p>• HOC (Higher-Order Component) karmaşıklığı</p>
                </div>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Function Component + Hooks (Modern Yöntem)</h4>
                <div className="text-secondary-dark text-sm space-y-2">
                  <p>• Basit ve anlaşılır syntax</p>
                  <p>• this binding yok</p>
                  <p>• Custom hooks ile logic paylaşımı</p>
                  <p>• Daha iyi performans</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Class vs Function Component Karşılaştırması"
            description="Aynı işlevi gören iki farklı yaklaşım"
            language="jsx"
            code={`// Class Component (Eski)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = \`Count: \${this.state.count}\`;
  }

  componentDidUpdate() {
    document.title = \`Count: \${this.state.count}\`;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

// Function Component + Hooks (Modern)
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">Hooks'ların Avantajları</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-text-primary">Daha Az Kod</h5>
                  <p className="text-secondary-dark text-sm">Aynı işlevsellik için daha az kod yazarsınız</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-text-primary">Logic Paylaşımı</h5>
                  <p className="text-secondary-dark text-sm">Custom hooks ile logic'i kolayca paylaşabilirsiniz</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-text-primary">Test Edilebilirlik</h5>
                  <p className="text-secondary-dark text-sm">Hooks'ları bağımsız olarak test edebilirsiniz</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">4</div>
                <div>
                  <h5 className="font-medium text-text-primary">Performans</h5>
                  <p className="text-secondary-dark text-sm">Function component'lar daha hızlı render edilir</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary-light/20 to-accent/20 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">Hooks Kategorileri</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">Temel Hooks</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• useState</p>
                  <p>• useEffect</p>
                  <p>• useContext</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">Ek Hooks</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• useReducer</p>
                  <p>• useMemo</p>
                  <p>• useCallback</p>
                  <p>• useRef</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">React 18 Hooks</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• useTransition</p>
                  <p>• useDeferredValue</p>
                  <p>• useId</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* useState Hook */}
      <LessonCard
        title="useState - State Yönetimi"
        description="useState hook'u ile component state'ini nasıl yönettiğinizi öğrenin"
        icon="📊"
        level="beginner"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useState Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useState, React'ın en temel hook'udur. Function component'larda state (durum) yönetimi için kullanılır.
              Bir state değişkeni ve onu güncellemek için bir setter fonksiyonu döndürür.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const [state, setState] = useState(initialValue);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Parametreler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p><strong>initialValue:</strong> State'in başlangıç değeri</p>
                  <p><strong>state:</strong> Mevcut state değeri</p>
                  <p><strong>setState:</strong> State'i güncelleyen fonksiyon</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• State değiştiğinde component yeniden render edilir</p>
                  <p>• State güncellemeleri asenkron olabilir</p>
                  <p>• Functional updates desteklenir</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Basit useState Örnekleri"
            description="Farklı veri tipleri ile useState kullanımı"
            language="jsx"
            code={`import { useState } from 'react';

function StateExamples() {
  // String state
  const [name, setName] = useState('React');
  
  // Number state
  const [count, setCount] = useState(0);
  
  // Boolean state
  const [isVisible, setIsVisible] = useState(true);
  
  // Array state
  const [items, setItems] = useState(['item1', 'item2']);
  
  // Object state
  const [user, setUser] = useState({
    name: 'John',
    age: 25,
    email: 'john@example.com'
  });

  return (
    <div>
      <h2>State Examples</h2>
      
      {/* String */}
      <div>
        <p>Name: {name}</p>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      {/* Number */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      {/* Boolean */}
      <div>
        <p>Visible: {isVisible ? 'Yes' : 'No'}</p>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle
        </button>
      </div>

      {/* Array */}
      <div>
        <p>Items: {items.join(', ')}</p>
        <button onClick={() => setItems([...items, 'new item'])}>
          Add Item
        </button>
      </div>

      {/* Object */}
      <div>
        <p>User: {user.name} ({user.age})</p>
        <button onClick={() => setUser({...user, age: user.age + 1})}>
          Increase Age
        </button>
      </div>
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">State Güncelleme Yöntemleri</h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">1. Direct Update (Doğrudan Güncelleme)</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    setCount(count + 1) // Mevcut değeri kullanır
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">2. Functional Update (Fonksiyonel Güncelleme)</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    setCount(prevCount = `&gt;` prevCount + 1) // Önceki değeri kullanır
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">3. Object State Güncelleme</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    setUser(prevUser =&gt; (&#123;...prevUser, age: prevUser.age + 1&#125;))
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Functional Update Örneği"
            description="Aynı anda birden fazla state güncellemesi"
            language="jsx"
            code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // ❌ Yanlış - Aynı anda birden fazla güncelleme
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Sonuç: Sadece 1 artar (count hala eski değer)
  };

  const handleIncrementCorrect = () => {
    // ✅ Doğru - Functional update kullan
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    // Sonuç: 3 artar
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>
        Increment (Wrong) - +1
      </button>
      <button onClick={handleIncrementCorrect}>
        Increment (Correct) - +3
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`}
          />

          <div className="bg-gradient-to-r from-secondary-light/20 to-accent/20 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useState Best Practices</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-text-primary">State'i Böl</h5>
                  <p className="text-secondary-dark text-sm">İlgili olmayan state'leri ayrı useState'lerde tutun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-text-primary">Immutable Updates</h5>
                  <p className="text-secondary-dark text-sm">State'i doğrudan değiştirmeyin, yeni değer oluşturun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-text-primary">Lazy Initial State</h5>
                  <p className="text-secondary-dark text-sm">Pahalı hesaplamalar için lazy initialization kullanın</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Lazy Initial State Örneği"
            description="Pahalı hesaplamalar için lazy initialization"
            language="jsx"
            code={`import { useState } from 'react';

function ExpensiveComponent() {
  // ❌ Yanlış - Her render'da hesaplanır
  const [data, setData] = useState(expensiveCalculation());

  // ✅ Doğru - Sadece ilk render'da hesaplanır
  const [data, setData] = useState(() => expensiveCalculation());

  function expensiveCalculation() {
    console.log('Expensive calculation running...');
    // Ağır hesaplama
    return Math.random() * 1000;
  }

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={() => setData(Math.random() * 1000)}>
        Update Data
      </button>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useEffect Hook */}
      <LessonCard
        title="useEffect - Side Effects ve Lifecycle"
        description="useEffect hook'u ile component lifecycle'ını ve side effect'leri nasıl yönettiğinizi öğrenin"
        icon="⚡"
        level="beginner"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useEffect Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useEffect, React component'larında side effect'leri (yan etkiler) yönetmek için kullanılan hook'tur.
              API çağrıları, DOM manipülasyonu, subscription'lar ve cleanup işlemleri gibi işlemleri gerçekleştirmenizi sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                useEffect(() =&gt; &#123; /* effect */ &#125;, [dependencies]);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Parametreler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p><strong>effect:</strong> Çalıştırılacak fonksiyon</p>
                  <p><strong>dependencies:</strong> Effect'in ne zaman çalışacağını belirleyen array</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• API çağrıları</p>
                  <p>• DOM manipülasyonu</p>
                  <p>• Timer'lar ve interval'lar</p>
                  <p>• Event listener'lar</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useEffect Temel Kullanımı"
            description="Farklı dependency array'leri ile useEffect kullanımı"
            language="jsx"
            code={`import { useState, useEffect } from 'react';

function EffectExamples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1. Her render'da çalışır (dependency array yok)
  useEffect(() => {
    console.log('Component rendered');
  });

  // 2. Sadece ilk render'da çalışır (boş dependency array)
  useEffect(() => {
    console.log('Component mounted');
    document.title = 'React Hooks';
  }, []);

  // 3. count değiştiğinde çalışır
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = \`Count: \${count}\`;
  }, [count]);

  // 4. name değiştiğinde çalışır
  useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);

  // 5. Hem count hem name değiştiğinde çalışır
  useEffect(() => {
    console.log('Count or name changed');
  }, [count, name]);

  return (
    <div>
      <h2>useEffect Examples</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useEffect Dependency Array Kuralları</h4>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">1. Boş Array [] - Sadece Mount/Unmount</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    useEffect(() =&gt; &#123; /* effect */ &#125;, []);
                  </p>
                  <p className="text-xs text-secondary-dark mt-1">Sadece component mount olduğunda çalışır</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">2. Dependency Array - Belirli Değerler</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    useEffect(() =&gt; &#123; /* effect */ &#125;, [count, name]);
                  </p>
                  <p className="text-xs text-secondary-dark mt-1">count veya name değiştiğinde çalışır</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="font-medium text-text-primary">3. Dependency Array Yok - Her Render</h5>
                <div className="bg-white/50 p-3 rounded-lg">
                  <p className="text-sm text-secondary-dark font-mono">
                    useEffect(() =&gt; &#123; /* effect */ &#125;);
                  </p>
                  <p className="text-xs text-secondary-dark mt-1">Her render'da çalışır (dikkatli kullanın!)</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Cleanup ile useEffect"
            description="Cleanup fonksiyonu ile memory leak'leri önleme"
            language="jsx"
            code={`import { useState, useEffect } from 'react';

function CleanupExample() {
  const [count, setCount] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Timer effect'i
  useEffect(() => {
    let intervalId;
    
    if (isTimerActive) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    // Cleanup fonksiyonu
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log('Timer cleaned up');
      }
    };
  }, [isTimerActive]);

  // Event listener effect'i
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    // Cleanup fonksiyonu
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener cleaned up');
    };
  }, []);

  return (
    <div>
      <h2>Cleanup Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setIsTimerActive(!isTimerActive)}>
        {isTimerActive ? 'Stop Timer' : 'Start Timer'}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`}
          />

          <div className="bg-gradient-to-r from-secondary-light/20 to-accent/20 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useEffect Kullanım Senaryoları</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">API Çağrıları</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Data fetching</p>
                  <p>• Loading state yönetimi</p>
                  <p>• Error handling</p>
                  <p>• Abort controller ile cleanup</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">DOM Manipülasyonu</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Event listener'lar</p>
                  <p>• Timer'lar ve interval'lar</p>
                  <p>• Third-party library entegrasyonu</p>
                  <p>• Focus yönetimi</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="API Çağrısı Örneği"
            description="useEffect ile data fetching ve error handling"
            language="jsx"
            code={`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const userData = await response.json();
        
        // Component unmount olmadıysa state'i güncelle
        if (!isCancelled) {
          setUser(userData);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup fonksiyonu - component unmount olduğunda
    return () => {
      isCancelled = true;
    };
  }, [userId]); // userId değiştiğinde yeniden fetch et

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useEffect Best Practices</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-text-primary">Dependency Array'i Doğru Kullanın</h5>
                  <p className="text-secondary-dark text-sm">Effect'te kullanılan tüm değişkenleri dependency array'e ekleyin</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-text-primary">Cleanup Fonksiyonu Kullanın</h5>
                  <p className="text-secondary-dark text-sm">Memory leak'leri önlemek için cleanup fonksiyonu yazın</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-text-primary">Effect'leri Bölün</h5>
                  <p className="text-secondary-dark text-sm">İlgili olmayan side effect'leri ayrı useEffect'lerde yazın</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useEffect vs Class Lifecycle Methods"
            description="Class component lifecycle method'ları ile useEffect karşılaştırması"
            language="jsx"
            code={`// Class Component Lifecycle
class ClassComponent extends React.Component {
  componentDidMount() {
    // Component mount olduğunda
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    // Component update olduğunda
    if (prevState.count !== this.state.count) {
      console.log('Count changed');
    }
  }

  componentWillUnmount() {
    // Component unmount olmadan önce
    console.log('Component will unmount');
  }
}

// Function Component + useEffect
function FunctionComponent() {
  const [count, setCount] = useState(0);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('Component mounted or updated');
  });

  // componentDidMount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // componentDidUpdate (sadece count değiştiğinde)
  useEffect(() => {
    console.log('Count changed');
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
    };
  }, []);
}`}
          />
        </div>
      </LessonCard>

      {/* useContext Hook */}
      <LessonCard
        title="useContext - Context API Kullanımı"
        description="useContext hook'u ile prop drilling'i önleyin ve global state yönetimi yapın"
        icon="🌐"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useContext Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useContext, React Context API'sini kullanarak component tree'de prop drilling'i önlemenizi sağlar.
              Global state, tema, kullanıcı bilgileri gibi verileri tüm component'lar arasında paylaşabilirsiniz.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const value = useContext(MyContext);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Prop drilling'i önler</p>
                  <p>• Global state yönetimi</p>
                  <p>• Component'lar arası veri paylaşımı</p>
                  <p>• Tema ve konfigürasyon yönetimi</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Kullanıcı authentication</p>
                  <p>• Tema ve dil ayarları</p>
                  <p>• Global state yönetimi</p>
                  <p>• API client konfigürasyonu</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Context Oluşturma ve Kullanma"
            description="Context oluşturma, Provider ve Consumer kullanımı"
            language="jsx"
            code={`import React, { createContext, useContext, useState } from 'react';

// 1. Context oluştur
const ThemeContext = createContext();

// 2. Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook (Opsiyonel ama önerilen)
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 4. Consumer Component
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc'
      }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}

// 5. Ana Component
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme App</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">Context API Adımları</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-pink text-sm font-bold">1</div>
                <div>
                  <h5 className="font-medium text-text-primary">createContext()</h5>
                  <p className="text-secondary-dark text-sm">Context'i oluşturun ve default value verin</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-pink text-sm font-bold">2</div>
                <div>
                  <h5 className="font-medium text-text-primary">Provider Component</h5>
                  <p className="text-secondary-dark text-sm">Context.Provider ile value'yu sağlayın</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-pink text-sm font-bold">3</div>
                <div>
                  <h5 className="font-medium text-text-primary">useContext()</h5>
                  <p className="text-secondary-dark text-sm">Consumer component'larda context'i kullanın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* useReducer Hook */}
      <LessonCard
        title="useReducer - Karmaşık State Yönetimi"
        description="useReducer hook'u ile karmaşık state'leri yönetin ve Redux benzeri pattern'leri uygulayın"
        icon="🔄"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useReducer Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useReducer, useState'e alternatif olarak karmaşık state logic'ini yönetmek için kullanılan hook'tur.
              Redux pattern'ini takip ederek state güncellemelerini daha öngörülebilir ve test edilebilir hale getirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const [state, dispatch] = useReducer(reducer, initialState);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Parametreler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p><strong>reducer:</strong> State güncelleme fonksiyonu</p>
                  <p><strong>initialState:</strong> Başlangıç state'i</p>
                  <p><strong>state:</strong> Mevcut state değeri</p>
                  <p><strong>dispatch:</strong> Action gönderme fonksiyonu</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Karmaşık state logic'i</p>
                  <p>• Çoklu state değerleri</p>
                  <p>• State güncellemeleri birbirine bağlı</p>
                  <p>• Redux pattern'i tercih ediliyorsa</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useReducer Temel Kullanımı"
            description="Basit bir counter örneği ile useReducer kullanımı"
            language="jsx"
            code={`import { useReducer } from 'react';

// 1. Initial State
const initialState = { count: 0 };

// 2. Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

// 3. Component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useReducer vs useState Karşılaştırması</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">useState</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>✅ Basit state'ler için</p>
                  <p>✅ Hızlı ve kolay</p>
                  <p>❌ Karmaşık logic için zor</p>
                  <p>❌ Çoklu state'ler için karmaşık</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">useReducer</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>✅ Karmaşık state logic'i için</p>
                  <p>✅ Öngörülebilir state güncellemeleri</p>
                  <p>✅ Test edilebilir</p>
                  <p>✅ Redux pattern'i</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Todo App ile useReducer"
            description="Gerçek dünya örneği: Todo uygulaması"
            language="jsx"
            code={`import { useReducer, useState } from 'react';

// Initial State
const initialState = {
  todos: [],
  filter: 'all'
};

// Action Types
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_FILTER: 'SET_FILTER',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
};

// Reducer Function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    
    case ACTIONS.CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    
    default:
      return state;
  }
}

// Component
function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  // Computed values
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.SET_FILTER, payload: 'all' })}>
          All
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.SET_FILTER, payload: 'active' })}>
          Active
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.SET_FILTER, payload: 'completed' })}>
          Completed
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}>
          Clear Completed
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Total: {state.todos.length} | Active: {state.todos.filter(t => !t.completed).length}</p>
    </div>
  );
}`}
          />

          <div className="bg-gradient-to-r from-secondary-light/20 to-accent/20 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useReducer Best Practices</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">1</div>
                <div>
                  <h5 className="font-medium text-text-primary">Action Types'ları Sabit Olarak Tanımlayın</h5>
                  <p className="text-secondary-dark text-sm">String literal'lar yerine sabit değerler kullanın</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">2</div>
                <div>
                  <h5 className="font-medium text-text-primary">Immutable Updates</h5>
                  <p className="text-secondary-dark text-sm">State'i doğrudan değiştirmeyin, yeni obje oluşturun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-pink text-xs font-bold mt-0.5">3</div>
                <div>
                  <h5 className="font-medium text-text-primary">Reducer'ı Ayrı Dosyada Tutun</h5>
                  <p className="text-secondary-dark text-sm">Test edilebilirlik ve yeniden kullanılabilirlik için</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useReducer ile Form Yönetimi"
            description="Karmaşık form state'ini useReducer ile yönetme"
            language="jsx"
            code={`import { useReducer } from 'react';

// Form State
const initialFormState = {
  values: {
    name: '',
    email: '',
    age: '',
    country: ''
  },
  errors: {},
  isSubmitting: false,
  isDirty: false
};

// Action Types
const FORM_ACTIONS = {
  SET_FIELD: 'SET_FIELD',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_SUBMITTING: 'SET_SUBMITTING',
  RESET_FORM: 'RESET_FORM'
};

// Form Reducer
function formReducer(state, action) {
  switch (action.type) {
    case FORM_ACTIONS.SET_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        },
        isDirty: true,
        errors: {
          ...state.errors,
          [action.field]: '' // Clear error when field changes
        }
      };
    
    case FORM_ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    
    case FORM_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: ''
        }
      };
    
    case FORM_ACTIONS.SET_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.isSubmitting
      };
    
    case FORM_ACTIONS.RESET_FORM:
      return initialFormState;
    
    default:
      return state;
  }
}

// Validation function
function validateForm(values) {
  const errors = {};
  
  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age) || values.age < 0) {
    errors.age = 'Age must be a positive number';
  }
  
  return errors;
}

// Form Component
function UserForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (field, value) => {
    dispatch({ type: FORM_ACTIONS.SET_FIELD, field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm(state.values);
    
    if (Object.keys(errors).length > 0) {
      // Set all errors
      Object.keys(errors).forEach(field => {
        dispatch({ type: FORM_ACTIONS.SET_ERROR, field, error: errors[field] });
      });
      return;
    }

    dispatch({ type: FORM_ACTIONS.SET_SUBMITTING, isSubmitting: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', state.values);
      dispatch({ type: FORM_ACTIONS.RESET_FORM });
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      dispatch({ type: FORM_ACTIONS.SET_SUBMITTING, isSubmitting: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={state.values.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        {state.errors.name && <span style={{color: 'red'}}>{state.errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={state.values.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {state.errors.email && <span style={{color: 'red'}}>{state.errors.email}</span>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          value={state.values.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
        {state.errors.age && <span style={{color: 'red'}}>{state.errors.age}</span>}
      </div>

      <div>
        <label>Country:</label>
        <select
          value={state.values.country}
          onChange={(e) => handleChange('country', e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
        </select>
      </div>

      <button type="submit" disabled={state.isSubmitting}>
        {state.isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      
      <button type="button" onClick={() => dispatch({ type: FORM_ACTIONS.RESET_FORM })}>
        Reset
      </button>
    </form>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useMemo Hook */}
      <LessonCard
        title="useMemo - Hesaplama Optimizasyonu"
        description="useMemo hook'u ile pahalı hesaplamaları optimize edin ve gereksiz re-render'ları önleyin"
        icon="⚡"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useMemo Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useMemo, pahalı hesaplamaların sonucunu cache'leyerek performansı optimize eden hook'tur.
              Sadece dependency array'deki değerler değiştiğinde hesaplama yeniden yapılır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Parametreler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p><strong>computeFunction:</strong> Hesaplama yapacak fonksiyon</p>
                  <p><strong>dependencies:</strong> Hesaplamanın ne zaman yeniden yapılacağını belirleyen array</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Pahalı hesaplamalar</p>
                  <p>• Array/object oluşturma</p>
                  <p>• Filtreleme ve sıralama</p>
                  <p>• Matematiksel işlemler</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useMemo Temel Kullanımı"
            description="Pahalı hesaplamaları optimize etme"
            language="jsx"
            code={`import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Pahalı hesaplama - her render'da çalışır
  const expensiveValue = items.reduce((sum, item) => {
    console.log('Expensive calculation running...');
    return sum + item * item;
  }, 0);

  // useMemo ile optimize edilmiş hesaplama
  const memoizedValue = useMemo(() => {
    console.log('Memoized calculation running...');
    return items.reduce((sum, item) => sum + item * item, 0);
  }, [items]); // Sadece items değiştiğinde çalışır

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      
      <h3>Items: {items.join(', ')}</h3>
      <button onClick={() => setItems([...items, items.length + 1])}>
        Add Item
      </button>
      
      <div>
        <p>Expensive Value: {expensiveValue}</p>
        <p>Memoized Value: {memoizedValue}</p>
      </div>
    </div>
  );
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-primary mb-4">useMemo vs Normal Hesaplama</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">Normal Hesaplama</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>❌ Her render'da çalışır</p>
                  <p>❌ Gereksiz hesaplamalar</p>
                  <p>❌ Performans sorunları</p>
                  <p>❌ CPU kullanımı yüksek</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-text-primary mb-2">useMemo ile</h5>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>✅ Sadece gerekli durumlarda çalışır</p>
                  <p>✅ Cache'lenmiş sonuçlar</p>
                  <p>✅ Performans optimizasyonu</p>
                  <p>✅ Düşük CPU kullanımı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* useCallback Hook */}
      <LessonCard
        title="useCallback - Fonksiyon Optimizasyonu"
        description="useCallback hook'u ile fonksiyonları optimize edin ve gereksiz re-render'ları önleyin"
        icon="🎯"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useCallback Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useCallback, fonksiyonları memoize ederek performansı optimize eden hook'tur.
              Sadece dependency array'deki değerler değiştiğinde yeni fonksiyon oluşturur.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const memoizedCallback = useCallback(() =&gt; &#123; doSomething(a, b); &#125;, [a, b]);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Child component'lara geçilen fonksiyonlar</p>
                  <p>• useEffect dependency'leri</p>
                  <p>• Event handler'lar</p>
                  <p>• Expensive operations</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Gereksiz re-render'ları önler</p>
                  <p>• Referans eşitliği sağlar</p>
                  <p>• Performance optimizasyonu</p>
                  <p>• Memory kullanımını azaltır</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useCallback Temel Kullanımı"
            description="Fonksiyonları optimize etme ve child component'lara geçme"
            language="jsx"
            code={`import { useState, useCallback, memo } from 'react';

// Child component - memo ile optimize edilmiş
const ExpensiveChild = memo(({ data, onItemClick, onFilter }) => {
  console.log('ExpensiveChild rendered');
  
  return (
    <div>
      <h3>Expensive Child Component</h3>
      <button onClick={() => onFilter('active')}>Filter Active</button>
      <ul>
        {data.map(item => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', status: 'active' },
    { id: 2, name: 'Item 2', status: 'inactive' },
    { id: 3, name: 'Item 3', status: 'active' }
  ]);

  // ❌ Yanlış - Her render'da yeni fonksiyon oluşturur
  const handleItemClick = (itemId) => {
    console.log('Item clicked:', itemId);
  };

  const handleFilter = (status) => {
    console.log('Filter by:', status);
  };

  // ✅ Doğru - useCallback ile optimize edilmiş
  const memoizedHandleItemClick = useCallback((itemId) => {
    console.log('Item clicked:', itemId);
  }, []); // Dependency yok, fonksiyon hiç değişmez

  const memoizedHandleFilter = useCallback((status) => {
    console.log('Filter by:', status);
  }, []); // Dependency yok, fonksiyon hiç değişmez

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      
      {/* Child component sadece items değiştiğinde re-render olur */}
      <ExpensiveChild 
        data={items} 
        onItemClick={memoizedHandleItemClick}
        onFilter={memoizedHandleFilter}
      />
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useRef Hook */}
      <LessonCard
        title="useRef - DOM Referansları ve Mutable Değerler"
        description="useRef hook'u ile DOM elementlerine erişin ve mutable değerler saklayın"
        icon="🎯"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useRef Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useRef, DOM elementlerine erişmek ve component'lar arasında mutable değerler saklamak için kullanılan hook'tur.
              Re-render'lar arasında değeri korur ve değişiklik tetiklemez.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const ref = useRef(initialValue);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• DOM elementlerine erişim</p>
                  <p>• Mutable değerler saklama</p>
                  <p>• Timer ID'leri</p>
                  <p>• Previous value tracking</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Re-render tetiklemez</p>
                  <p>• Mutable object döndürür</p>
                  <p>• .current property ile erişim</p>
                  <p>• Component lifecycle'ı boyunca korunur</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useRef ile DOM Erişimi"
            description="Input focus, scroll ve DOM manipülasyonu"
            language="jsx"
            code={`import { useRef, useState } from 'react';

function RefExample() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const scrollRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const changeDivColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 
        divRef.current.style.backgroundColor === 'red' ? 'blue' : 'red';
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  };

  return (
    <div>
      <h2>useRef Examples</h2>
      
      <div>
        <input ref={inputRef} placeholder="Focus me!" />
        <button onClick={focusInput}>Focus Input</button>
      </div>

      <div>
        <div 
          ref={divRef} 
          style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'lightblue',
            margin: '10px 0'
          }}
        >
          Click to change color
        </div>
        <button onClick={changeDivColor}>Change Color</button>
      </div>

      <div>
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
        <div 
          ref={scrollRef}
          style={{ 
            height: '200px', 
            overflow: 'auto', 
            border: '1px solid #ccc',
            padding: '10px'
          }}
        >
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i}>Item {i + 1}</div>
          ))}
        </div>
      </div>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment (won't affect refs)
        </button>
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            title="useRef ile Mutable Değerler"
            description="Timer ID'leri ve previous value tracking"
            language="jsx"
            code={`import { useRef, useState, useEffect } from 'react';

function MutableRefExample() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const prevCountRef = useRef();

  // Previous value tracking
  useEffect(() => {
    prevCountRef.current = count;
  });

  const startTimer = () => {
    if (intervalRef.current) return; // Already running
    
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Mutable Ref Example</h2>
      
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCountRef.current}</p>
        <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
      </div>

      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start Timer
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop Timer
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>

      <div>
        <h3>Key Points:</h3>
        <ul>
          <li>Timer ID ref'te saklanıyor</li>
          <li>Previous value tracking yapılıyor</li>
          <li>Re-render tetiklenmiyor</li>
          <li>Cleanup otomatik yapılıyor</li>
        </ul>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useLayoutEffect Hook */}
      <LessonCard
        title="useLayoutEffect - DOM Güncellemeleri"
        description="useLayoutEffect hook'u ile DOM güncellemelerini senkron olarak yapın"
        icon="⚡"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useLayoutEffect Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useLayoutEffect, useEffect'e benzer ama DOM güncellemelerinden hemen sonra senkron olarak çalışır.
              Tarayıcı paint işleminden önce çalıştığı için görsel flicker'ları önler.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                useLayoutEffect(() =&gt; &#123; /* effect */ &#125;, [dependencies]);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• DOM ölçümleri</p>
                  <p>• Animasyon başlatma</p>
                  <p>• Scroll pozisyonu</p>
                  <p>• Görsel flicker önleme</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">useEffect vs useLayoutEffect</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• useEffect: Asenkron, paint sonrası</p>
                  <p>• useLayoutEffect: Senkron, paint öncesi</p>
                  <p>• useEffect: Çoğu durumda yeterli</p>
                  <p>• useLayoutEffect: DOM ölçümleri için</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useLayoutEffect ile DOM Ölçümleri"
            description="Element boyutlarını ölçme ve dinamik pozisyonlama"
            language="jsx"
            code={`import { useState, useLayoutEffect, useRef } from 'react';

function MeasureExample() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height
      });
      setPosition({
        x: rect.left,
        y: rect.top
      });
    }
  }, []); // Sadece mount'ta çalışır

  return (
    <div>
      <h2>DOM Measurements</h2>
      
      <div>
        <p>Width: {dimensions.width}px</p>
        <p>Height: {dimensions.height}px</p>
        <p>Position: ({position.x}, {position.y})</p>
      </div>

      <div
        ref={elementRef}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
          margin: '20px',
          padding: '10px',
          border: '2px solid blue'
        }}
      >
        Measured Element
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            title="useLayoutEffect vs useEffect Karşılaştırması"
            description="Flicker önleme ve timing farkları"
            language="jsx"
            code={`import { useState, useEffect, useLayoutEffect, useRef } from 'react';

function TimingComparison() {
  const [count, setCount] = useState(0);
  const [useLayout, setUseLayout] = useState(true);
  const elementRef = useRef(null);

  // useEffect ile - Flicker olabilir
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.backgroundColor = 
        count % 2 === 0 ? 'red' : 'blue';
    }
  }, [count]);

  // useLayoutEffect ile - Flicker yok
  useLayoutEffect(() => {
    if (elementRef.current && useLayout) {
      elementRef.current.style.backgroundColor = 
        count % 2 === 0 ? 'red' : 'blue';
    }
  }, [count, useLayout]);

  return (
    <div>
      <h2>Timing Comparison</h2>
      
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <button onClick={() => setUseLayout(!useLayout)}>
          Use {useLayout ? 'useEffect' : 'useLayoutEffect'}
        </button>
      </div>

      <div>
        <p>Count: {count}</p>
        <p>Using: {useLayout ? 'useLayoutEffect' : 'useEffect'}</p>
      </div>

      <div
        ref={elementRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightgray',
          margin: '20px',
          transition: 'background-color 0.3s'
        }}
      >
        Color Change
      </div>

      <div>
        <h3>Key Differences:</h3>
        <ul>
          <li><strong>useEffect:</strong> Asenkron, paint sonrası çalışır</li>
          <li><strong>useLayoutEffect:</strong> Senkron, paint öncesi çalışır</li>
          <li><strong>useEffect:</strong> Flicker olabilir</li>
          <li><strong>useLayoutEffect:</strong> Flicker önler</li>
        </ul>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useImperativeHandle Hook */}
      <LessonCard
        title="useImperativeHandle - Ref Forwarding"
        description="useImperativeHandle hook'u ile parent component'lara özel method'lar expose edin"
        icon="🔗"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useImperativeHandle Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useImperativeHandle, forwardRef ile birlikte kullanılarak parent component'lara özel method'lar ve değerler expose etmenizi sağlar.
              Genellikle third-party library'lerle entegrasyon için kullanılır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                useImperativeHandle(ref, () =&gt; (&#123; method1, method2 &#125;), [deps]);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Third-party library entegrasyonu</p>
                  <p>• Form validation</p>
                  <p>• Focus management</p>
                  <p>• Custom component API'si</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Controlled API exposure</p>
                  <p>• Encapsulation</p>
                  <p>• Third-party compatibility</p>
                  <p>• Custom method'lar</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useImperativeHandle Temel Kullanımı"
            description="Custom input component ile focus ve clear method'ları"
            language="jsx"
            code={`import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// Custom Input Component
const CustomInput = forwardRef(({ placeholder, value, onChange }, ref) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Parent component'a expose edilecek method'lar
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    clear: () => {
      onChange('');
      inputRef.current?.focus();
    },
    getValue: () => inputRef.current?.value,
    isFocused: () => isFocused
  }), [isFocused, onChange]);

  return (
    <div style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        style={{
          padding: '10px',
          border: isFocused ? '2px solid blue' : '1px solid gray',
          borderRadius: '4px',
          width: '200px'
        }}
      />
      {isFocused && (
        <span style={{ 
          position: 'absolute', 
          right: '5px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'blue',
          fontSize: '12px'
        }}>
          Focused
        </span>
      )}
    </div>
  );
});

// Parent Component
function ParentComponent() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    inputRef.current?.blur();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleGetValue = () => {
    const value = inputRef.current?.getValue();
    alert(\`Current value: \${value}\`);
  };

  const handleCheckFocus = () => {
    const focused = inputRef.current?.isFocused();
    alert(\`Input is focused: \${focused}\`);
  };

  return (
    <div>
      <h2>useImperativeHandle Example</h2>
      
      <div>
        <CustomInput
          ref={inputRef}
          value={inputValue}
          onChange={setInputValue}
          placeholder="Type something..."
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleBlur}>Blur Input</button>
        <button onClick={handleClear}>Clear Input</button>
        <button onClick={handleGetValue}>Get Value</button>
        <button onClick={handleCheckFocus}>Check Focus</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <p>Current value: {inputValue}</p>
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            title="useImperativeHandle ile Form Validation"
            description="Custom form component ile validation method'ları"
            language="jsx"
            code={`import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// Custom Form Component
const CustomForm = forwardRef(({ onSubmit }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 0) {
      newErrors.age = 'Age must be a positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', age: '' });
    setErrors({});
  };

  const focusFirstError = () => {
    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.email) {
      emailRef.current?.focus();
    } else if (errors.age) {
      ageRef.current?.focus();
    }
  };

  // Parent component'a expose edilecek method'lar
  useImperativeHandle(ref, () => ({
    validate: () => {
      const isValid = validateForm();
      if (!isValid) {
        focusFirstError();
      }
      return isValid;
    },
    reset: resetForm,
    getFormData: () => formData,
    setFormData: (newData) => setFormData(newData),
    focusField: (fieldName) => {
      const fieldRefs = { name: nameRef, email: emailRef, age: ageRef };
      fieldRefs[fieldName]?.current?.focus();
    }
  }), [formData, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
      </div>

      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>

      <div>
        <input
          ref={ageRef}
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({...formData, age: e.target.value})}
        />
        {errors.age && <span style={{color: 'red'}}>{errors.age}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
});

// Parent Component
function FormParent() {
  const formRef = useRef(null);

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  };

  const handleValidate = () => {
    const isValid = formRef.current?.validate();
    alert(\`Form is valid: \${isValid}\`);
  };

  const handleReset = () => {
    formRef.current?.reset();
  };

  const handleGetData = () => {
    const data = formRef.current?.getFormData();
    console.log('Form data:', data);
  };

  const handleFocusField = (fieldName) => {
    formRef.current?.focusField(fieldName);
  };

  return (
    <div>
      <h2>Form with useImperativeHandle</h2>
      
      <CustomForm ref={formRef} onSubmit={handleFormSubmit} />
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleValidate}>Validate Form</button>
        <button onClick={handleReset}>Reset Form</button>
        <button onClick={handleGetData}>Get Form Data</button>
        <button onClick={() => handleFocusField('name')}>Focus Name</button>
        <button onClick={() => handleFocusField('email')}>Focus Email</button>
        <button onClick={() => handleFocusField('age')}>Focus Age</button>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useTransition Hook */}
      <LessonCard
        title="useTransition - React 18 Concurrency"
        description="useTransition hook'u ile non-blocking state güncellemeleri yapın"
        icon="🚀"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useTransition Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useTransition, React 18'de tanıtılan concurrency özelliğidir. State güncellemelerini urgent ve non-urgent olarak ayırır.
              UI'yi bloklamadan büyük state güncellemeleri yapmanızı sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const [isPending, startTransition] = useTransition();
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Parametreler</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p><strong>isPending:</strong> Transition devam ediyor mu?</p>
                  <p><strong>startTransition:</strong> Non-urgent update başlatır</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Büyük listelerde filtreleme</p>
                  <p>• Arama sonuçları</p>
                  <p>• Tab switching</p>
                  <p>• Route transitions</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="useTransition Temel Kullanımı"
            description="Büyük liste filtreleme ile UI bloklamayı önleme"
            language="jsx"
            code={`import { useState, useTransition, useMemo } from 'react';

function TransitionExample() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Büyük liste oluştur
  const generateList = (size) => {
    return Array.from({ length: size }, (_, i) => ({
      id: i,
      name: \`Item \${i + 1}\`,
      value: Math.random() * 1000
    }));
  };

  // Filtreleme işlemi
  const filteredList = useMemo(() => {
    if (!input) return list;
    return list.filter(item => 
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [list, input]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value); // Urgent update - hemen güncellenir

    // Non-urgent update - arka planda işlenir
    startTransition(() => {
      const newList = generateList(10000); // Büyük liste
      setList(newList);
    });
  };

  const handleGenerateList = () => {
    startTransition(() => {
      const newList = generateList(50000); // Çok büyük liste
      setList(newList);
    });
  };

  const handleClearList = () => {
    setList([]);
    setInput('');
  };

  return (
    <div>
      <h2>useTransition Example</h2>
      
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search items..."
          style={{ padding: '10px', width: '300px' }}
        />
        {isPending && <span style={{ color: 'blue' }}> Loading...</span>}
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleGenerateList}>
          Generate 50K Items
        </button>
        <button onClick={handleClearList}>
          Clear List
        </button>
      </div>

      <div>
        <p>Total items: {list.length}</p>
        <p>Filtered items: {filteredList.length}</p>
        <p>Input value: {input}</p>
      </div>

      <div style={{ 
        height: '300px', 
        overflow: 'auto', 
        border: '1px solid #ccc',
        padding: '10px'
      }}>
        {filteredList.slice(0, 100).map(item => (
          <div key={item.id} style={{ padding: '2px' }}>
            {item.name} - {item.value.toFixed(2)}
          </div>
        ))}
        {filteredList.length > 100 && (
          <div style={{ color: 'gray' }}>
            ... and {filteredList.length - 100} more items
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Key Benefits:</h3>
        <ul>
          <li>Input responsive kalır (urgent update)</li>
          <li>Liste güncellemesi arka planda (non-urgent)</li>
          <li>UI bloklanmaz</li>
          <li>Better user experience</li>
        </ul>
      </div>
    </div>
  );
}`}
          />

          <CodeBlock
            title="useTransition ile Tab Switching"
            description="Tab geçişlerinde smooth transition"
            language="jsx"
            code={`import { useState, useTransition } from 'react';

function TabExample() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isPending, startTransition] = useTransition();

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' }
  ];

  const handleTabChange = (tabId) => {
    // Tab değişikliği urgent - hemen güncellenir
    setActiveTab(tabId);
    
    // Ağır işlemler non-urgent - arka planda
    startTransition(() => {
      // Simulate heavy computation
      const start = Date.now();
      while (Date.now() - start < 100) {
        // Heavy computation
      }
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <div>
            <h3>Tab 1 Content</h3>
            <p>This is the content for tab 1. It can contain heavy components.</p>
            {Array.from({ length: 1000 }, (_, i) => (
              <div key={i}>Item {i + 1}</div>
            ))}
          </div>
        );
      case 'tab2':
        return (
          <div>
            <h3>Tab 2 Content</h3>
            <p>This is the content for tab 2. It can contain heavy components.</p>
            {Array.from({ length: 1000 }, (_, i) => (
              <div key={i}>Item {i + 1}</div>
            ))}
          </div>
        );
      case 'tab3':
        return (
          <div>
            <h3>Tab 3 Content</h3>
            <p>This is the content for tab 3. It can contain heavy components.</p>
            {Array.from({ length: 1000 }, (_, i) => (
              <div key={i}>Item {i + 1}</div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Tab Switching with useTransition</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab.id ? 'blue' : 'lightgray',
              color: activeTab === tab.id ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isPending && (
        <div style={{ color: 'blue', marginBottom: '10px' }}>
          Loading tab content...
        </div>
      )}

      <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px',
        height: '400px',
        overflow: 'auto'
      }}>
        {renderTabContent()}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Benefits:</h3>
        <ul>
          <li>Tab switching immediate (urgent)</li>
          <li>Content loading non-blocking (non-urgent)</li>
          <li>Better perceived performance</li>
          <li>Smooth user experience</li>
        </ul>
      </div>
    </div>
  );
}`}
          />
        </div>
      </LessonCard>

      {/* useDeferredValue Hook */}
      <LessonCard
        title="useDeferredValue - Deferred Updates"
        description="useDeferredValue hook'u ile gecikmeli state güncellemeleri yapın"
        icon="⏰"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useDeferredValue Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useDeferredValue, React 18'de tanıtılan concurrency özelliğidir. State değerini geciktirerek UI'yi bloklamadan güncellemeler yapmanızı sağlar.
              useTransition ile birlikte kullanılarak performansı optimize eder.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const deferredValue = useDeferredValue(value);
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Ne Zaman Kullanılır?</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Büyük listelerde filtreleme</p>
                  <p>• Arama sonuçları</p>
                  <p>• Tab switching</p>
                  <p>• Route transitions</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• UI bloklamayı önler</p>
                  <p>• Smooth user experience</p>
                  <p>• Performance optimizasyonu</p>
                  <p>• Concurrency desteği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* useId Hook */}
      <LessonCard
        title="useId - Unique ID Generation"
        description="useId hook'u ile unique ID'ler oluşturun ve accessibility'yi artırın"
        icon="🆔"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">useId Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              useId, React 18'de tanıtılan hook'tur. Component'lar arasında unique ID'ler oluşturmanızı sağlar.
              Accessibility, form labels ve ARIA attributes için kullanılır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                const id = useId();
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Form labels ve inputs</p>
                  <p>• ARIA attributes</p>
                  <p>• Accessibility</p>
                  <p>• Unique keys</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Server-side rendering uyumlu</p>
                  <p>• Hydration güvenli</p>
                  <p>• Unique ID garantisi</p>
                  <p>• Accessibility desteği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* Custom Hooks */}
      <LessonCard
        title="Custom Hooks - Kendi Hooklarımızı Yazma"
        description="Custom hook'lar ile logic'i paylaşın ve yeniden kullanın"
        icon="🛠️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Custom Hook Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Custom hook'lar, React hook'larını kullanarak yazdığınız özel fonksiyonlardır.
              Logic'i component'lar arasında paylaşmanızı ve yeniden kullanmanızı sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Temel Syntax</h4>
              <div className="text-secondary-dark text-sm font-mono">
                function useCustomHook() &#123; /* hook logic */ &#125;
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Logic paylaşımı</p>
                  <p>• Yeniden kullanılabilirlik</p>
                  <p>• Test edilebilirlik</p>
                  <p>• Kod organizasyonu</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• API çağrıları</p>
                  <p>• Form yönetimi</p>
                  <p>• Local storage</p>
                  <p>• Timer'lar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* Hooks Kuralları */}
      <LessonCard
        title="Hooks Kuralları ve Best Practices"
        description="Hooks'ları doğru kullanmak için kurallar ve en iyi uygulamalar"
        icon="📋"
        level="beginner"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Hooks Kuralları</h3>
            <p className="text-secondary-dark mb-4">
              React Hooks'ları kullanırken uyulması gereken temel kurallar vardır.
              Bu kurallar, hooks'ların doğru çalışmasını ve öngörülebilir davranış göstermesini sağlar.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Temel Kurallar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Sadece function component'larda kullanın</p>
                  <p>• Top level'da çağırın</p>
                  <p>• Conditional olarak çağırmayın</p>
                  <p>• Loop'lar içinde çağırmayın</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Best Practices</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Custom hook'lar yazın</p>
                  <p>• Logic'i ayırın</p>
                  <p>• Dependency array'i doğru kullanın</p>
                  <p>• Performance'ı optimize edin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>
    </div>
  );
};

export default Hooks;
