import React from 'react';
import LessonCard from '../../components/LessonCard';
import CodeBlock from '../../components/CodeBlock';
import Badge from '../../components/Badge';

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
    </div>
  );
};

export default Hooks;
