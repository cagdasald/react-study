import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ReactPage from './pages/React'
import VuePage from './pages/Vue'
import AngularPage from './pages/Angular'
import SveltePage from './pages/Svelte'
import ReactInternals from './pages/react-pages/1-react-internals/ReactInternals'
import Hooks from './pages/react-pages/2-hooks/Hooks'
import ReactAdvancedComponentPatterns from './pages/react-pages/3-advanced-patterns/react-advanced-component-patterns'
import ModernReactFeatures from './pages/react-pages/4-modern-features/modern-react-features'

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
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
