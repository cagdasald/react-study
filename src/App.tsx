import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ReactPage from './pages/react-pages/React'
import VuePage from './pages/vue-pages/Vue'
import AngularPage from './pages/angular-pages/Angular'
import SveltePage from './pages/sveltve-pages/Svelte'
import ReactInternals from './pages/react-pages/1-react-internals/ReactInternals'
import Hooks from './pages/react-pages/2-hooks/Hooks'
import ReactAdvancedComponentPatterns from './pages/react-pages/3-advanced-patterns/react-advanced-component-patterns'
import ModernReactFeatures from './pages/react-pages/4-modern-features/modern-react-features'
import ServerComponents from './pages/react-pages/5-server-components/server-components'
import NextJS14 from './pages/react-pages/6-nextjs-14/nextjs-14'
import StylingStrategies from './pages/react-pages/7-styling-strategies/styling-strategies'
import StateManagement from './pages/react-pages/8-state-management/state-management'
import Test from './pages/react-pages/9-test/test'
import Documentation from './pages/react-pages/10-documentation/documentation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/vue" element={<VuePage />} />
            <Route path="/angular" element={<AngularPage />} />
            <Route path="/svelte" element={<SveltePage />} />
            <Route path="/react-internals" element={<ReactInternals />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/advanced-patterns" element={<ReactAdvancedComponentPatterns />} />
            <Route path="/modern-features" element={<ModernReactFeatures />} />
            <Route path="/server-components" element={<ServerComponents />} />
            <Route path="/nextjs-14" element={<NextJS14 />} />
            <Route path="/styling-strategies" element={<StylingStrategies />} />
            <Route path="/state-management" element={<StateManagement />} />
            <Route path="/test" element={<Test />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
