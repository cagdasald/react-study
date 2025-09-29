import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const ReactInternals: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">React / Fiber / Reconciliation / Virtual DOM / Performance / Bundlers</Badge>
        </div>
      </div>

      {/* React'ın Temel Yapısı */}
      <LessonCard
        title="React'ın Temel Yapısı"
        description="React'ın nasıl çalıştığını, Virtual DOM'u ve temel kavramları öğrenin"
        icon="⚛️"
        level="beginner"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text- mb-4">React Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir.
              Component-based architecture ve Virtual DOM kullanarak performanslı ve ölçeklenebilir uygulamalar geliştirmenizi sağlar.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-2">Component-Based</h4>
                <p className="text-secondary-dark text-sm">Yeniden kullanılabilir UI parçaları</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-2">Virtual DOM</h4>
                <p className="text-secondary-dark text-sm">Hızlı rendering için DOM'u optimize eder</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-2">Declarative</h4>
                <p className="text-secondary-dark text-sm">Ne istediğinizi söyleyin, nasıl yapılacağını React halleder</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text-text-default mb-3">React'ın Temel Prensipleri</h4>
            <div className="space-y-3">
              <div className="flex flex-col items-start space-x-3">
                <div className='w-full'>
                  <h6 className="font-medium text-text-primary mb-2">Unidirectional Data Flow</h6>
                  <p className="text-secondary-dark text-sm mb-2">Parent component state’ini saklar. Child component
                    bu state’i sadece props (özellikler) üzerinden alır. Child, parent’ın state’ini doğrudan değiştiremez.</p>
                  <div className="bg-white/50 p-3 rounded-lg mb-2">
                    <p className="text-xs text-secondary-dark font-mono">
                      Parent → Props → Child<br />
                      Child → Callback → Parent
                    </p>
                  </div>
                  <div className="text-xs text-secondary">
                    <strong>Avantajlar:</strong> Öngörülebilir, debug edilebilir, test edilebilir
                  </div>
                </div>
                <CodeBlock
                  title="Unidirectional Data Flow"
                  language="jsx"
                  code={`import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Count ve callback Child'a props olarak geçiyor */}
      <Child count={count} onIncrease={handleIncrease} />
    </div>
  );
}

// Child Component
function Child({ count, onIncrease }) {
  return (
    <div>
      <p>Child count: {count}</p>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

export default Parent;`}
                />
              </div>

              <div className="flex flex-col items-start space-x-3">
                <div className="flex-1">
                  <h6 className="font-medium text-text-primary mb-2">Immutable State</h6>
                  <p className="text-secondary-dark text-sm mb-2">State değişiklikleri immutable şekilde yapılır, orijinal state değişmez</p>
                  <div className="bg-white/50 p-3 rounded-lg mb-2">
                    <p className="text-xs text-secondary-dark font-mono">
                      ❌ state.push(newItem)<br />
                      ✅ setState([...state, newItem])
                    </p>
                  </div>
                  <div className="text-xs text-secondary">
                    <strong>Avantajlar:</strong> Performance optimizasyonu, time-travel debugging, referans eşitliği
                  </div>
                </div>
                <CodeBlock
                  title="Immutable State"
                  language="jsx"
                  code={`import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState(["Learn React", "Practice Immutable State"]);

  const addTodo = () => {
    const newTodo = "New Task " + todos.length + 1;

    // ✅ Doğru: Yeni bir array kopyası oluşturuyoruz
    setTodos([...todos, newTodo]);
  };

  const removeFirst = () => {
    // ✅ Doğru: slice ile yeni array döndürüyoruz
    setTodos(todos.slice(1));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={removeFirst}>Remove First</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`}
                />
              </div>

              <div className="flex flex-col items-start space-x-3">
                <div className="flex-1">
                  <h6 className="font-medium text-text-primary mb-2">Composition over Inheritance</h6>
                  <p className="text-secondary-dark text-sm mb-2">Component'ları birleştirerek karmaşık UI'lar oluşturun, kalıtım yerine kompozisyon kullanın</p>
                  <div className="bg-white/50 p-3 rounded-lg mb-2">
                    <p className="text-xs text-secondary-dark font-mono">
                      &lt;Modal&gt;<br />
                      &nbsp;&nbsp;&lt;Header /&gt;<br />
                      &nbsp;&nbsp;&lt;Body /&gt;<br />
                      &nbsp;&nbsp;&lt;Footer /&gt;<br />
                      &lt;/Modal&gt;
                    </p>
                  </div>
                  <div className="text-xs text-secondary">
                    <strong>Avantajlar:</strong> Esnek yapı, yeniden kullanılabilirlik, test edilebilirlik
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* React Fiber */}
      <LessonCard
        title="React Fiber Algoritması"
        description="React'ın yeni reconciliation algoritması ve nasıl çalıştığını öğrenin"
        icon="🧬"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-secondary-light/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text- mb-4">Fiber Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Fiber, her React elementini temsil eden **hafif bir veri yapısı (data structure)**dır. Yani component tree’nin her düğümü (node) artık bir “fiber” objesi ile temsil edilir.
              Bu fiber objeleri, React’in iş planlamasını (scheduling) ve iş parçalama (incremental rendering) yapmasını sağlar.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className='text-secondary-dark text-sm font-mono'>
                📌 <b>Senaryo</b> <br />

                Kullanıcı bir input’a yazıyor → yüksek öncelik

                Arama sonuçları listesi render ediliyor → düşük öncelik

                Fiber sayesinde input gecikmeden güncelleniyor, liste ise arka planda yükleniyor.
              </div>
              <div className='text-secondary-dark text-sm font-mono'>
                📌 <b>Ne oluyor?</b> <br />

                setInput(value) → yüksek öncelikli iş → anında güncelleniyor.

                startTransition içindeki setList → düşük öncelikli iş → Fiber bunu arka planda işliyor.

                Sen input’a yazarken input donmadan güncelleniyor, liste biraz gecikmeli ama sorunsuz render oluyor. <br /> <br />

                📌 <b>Fiber ile bağlantısı</b> <br />

                Bu örnekte input’un anında güncellenmesi, listenin “sonra” güncellenmesi → Fiber’in işi küçük parçalara bölüp öncelik atama yeteneği sayesinde mümkün.

                Eski React (Fiber öncesi) olsaydı → input donardı, çünkü 5000 item’lık liste render edilirken her şey bloklanırdı.
              </div>
            </div>
          </div>

          <CodeBlock
            title="Fiber Node Yapısı"
            description="Her React element'i bir Fiber node'a dönüştürülür"
            language="typescript"
            code={`import { useState, useTransition } from "react";

export default function FiberDemo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); // yüksek öncelikli iş → input hemen güncelleniyor

    // düşük öncelikli iş → liste render
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 5000; i++) {
        newList.push(value + " - item " + i);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <h2>React Fiber & useTransition Demo</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
`}
          />
        </div>
      </LessonCard>

      {/* Reconciliation */}
      <LessonCard
        title="Reconciliation Süreci"
        description="React'ın Virtual DOM'u nasıl güncellediğini ve diffing algoritmasını öğrenin"
        icon="🔄"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-/20 to-secondary-light/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text- mb-4">Reconciliation Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Reconciliation = React’in Virtual DOM üzerinde yaptığı karşılaştırma ve güncelleme süreci.
              React, UI’de bir değişiklik olduğunda önce Virtual DOM (hafızadaki hafif kopya) üzerinde yeni bir ağaç (tree) oluşturur.
              Sonra eski ağaç (previous Virtual DOM) ile yeni ağaç (next Virtual DOM) karşılaştırılır.
              Farklı olan kısımlar (“diff”) bulunur.
              Sadece bu farklar gerçek DOM’a minimum maliyetle işlenir.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">1</div>
                <h4 className="font-semibold text- mb-2">Diffing</h4>
                <p className="text-secondary-dark text-sm">İki tree'yi karşılaştır</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">2</div>
                <h4 className="font-semibold text- mb-2">Reconciling</h4>
                <p className="text-secondary-dark text-sm">Değişiklikleri planla</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2">3</div>
                <h4 className="font-semibold text- mb-2">Committing</h4>
                <p className="text-secondary-dark text-sm">DOM'u güncelle</p>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Diffing Algoritması Kuralları"
            description="React'ın element'leri nasıl karşılaştırdığı"
            language="jsx"
            code={`// 1. Farklı element türleri → Eski tree'yi tamamen yok et
<div>
  <Counter />
</div>

// Yeni tree
<span>
  <Counter />
</span>
// → div ve tüm children'ı yok edilir, yeni span oluşturulur

// 2. Aynı element türü → Sadece props'ları güncelle
<div className="before" title="hello">
  <Counter />
</div>

// Yeni tree
<div className="after" title="hello">
  <Counter />
</div>
// → Sadece className güncellenir, Counter korunur

// 3. Key prop'u → Element'leri eşleştir
<ul>
  <li key="a">A</li>
  <li key="b">B</li>
  <li key="c">C</li>
</ul>

// Yeni tree (B ve C'nin yerini değiştir)
<ul>
  <li key="a">A</li>
  <li key="c">C</li>
  <li key="b">B</li>
</ul>
// → Sadece B ve C'nin pozisyonu değişir`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text- mb-4">Performance Optimizasyonları</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-secondary-dark">React.memo() - Component memoization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-secondary-dark">useMemo() - Expensive calculations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-secondary-dark">useCallback() - Function memoization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-secondary-dark">Key prop - List optimization</span>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>

      {/* Bundlers */}
      <LessonCard
        title="Modern Bundler'lar"
        description="Webpack, Vite, Rollup ve diğer bundler'ları karşılaştırın"
        icon="📦"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-/20 to-secondary-light/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text- mb-4">Bundler Nedir?</h3>
            <p className="text-secondary-dark mb-6">
              Bundler (paketleyici): Projedeki tüm kaynak dosyalarını (JavaScript, CSS, resimler vs.) alıp bunları tarayıcıya uygun tek/optimize edilmiş dosyalar haline getiren araçtır.
              Normalde tarayıcı sadece HTML, CSS, JS anlar.
              Ama biz proje içinde ES6+ import/export, JSX, TypeScript, SCSS gibi şeyler kullanıyoruz.
              Bundler bunları derleyip optimize eder → production için küçültülmüş (minify edilmiş), hızlı yüklenen bir paket oluşturur.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-3">Webpack</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Hız:</span>
                    <span className="text-secondary">Orta</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Yapılandırma:</span>
                    <span className="text-secondary">Karmaşık</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Plugin Ekosistemi:</span>
                    <span className="text-secondary">Çok Zengin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Code Splitting:</span>
                    <span className="text-secondary">Mükemmel</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-3">Vite</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Hız:</span>
                    <span className="text-secondary">Çok Hızlı</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Yapılandırma:</span>
                    <span className="text-secondary">Basit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Plugin Ekosistemi:</span>
                    <span className="text-secondary">Gelişiyor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">HMR:</span>
                    <span className="text-secondary">Mükemmel</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text- mb-3">Rollup</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Hız:</span>
                    <span className="text-secondary">Hızlı</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Yapılandırma:</span>
                    <span className="text-secondary">Orta</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Tree Shaking:</span>
                    <span className="text-secondary">Mükemmel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-dark">Library Build:</span>
                    <span className="text-secondary">İdeal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Vite vs Webpack Yapılandırması"
            description="Aynı proje için farklı bundler yapılandırmaları"
            language="javascript"
            code={`// vite.config.js - Basit ve hızlı
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

// webpack.config.js - Daha detaylı yapılandırma
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 3000,
    hot: true
  }
}`}
          />

          <div className="bg-accent/30 p-6 rounded-xl">
            <h4 className="font-semibold text- mb-4">Hangi Bundler'ı Seçmeli?</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">📦</div>
                <div>
                  <h5 className="font-medium text-">Webpack</h5>
                  <p className="text-secondary-dark text-sm">Büyük, karmaşık projeler için. Zengin plugin ekosistemi gerekli.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">⚡</div>
                <div>
                  <h5 className="font-medium text-">Vite</h5>
                  <p className="text-secondary-dark text-sm">Modern projeler için. Hızlı development ve basit yapılandırma.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-dark rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">📚</div>
                <div>
                  <h5 className="font-medium text-">Rollup</h5>
                  <p className="text-secondary-dark text-sm">Library geliştirme için. Mükemmel tree shaking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LessonCard>
    </div>
  );
};

export default ReactInternals;
