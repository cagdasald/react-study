import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ReactInternals from './pages/1-react-internals/ReactInternals'
import Hooks from './pages/2-hooks/Hooks'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-internals" element={<ReactInternals />} />
            <Route path="/hooks" element={<Hooks />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
