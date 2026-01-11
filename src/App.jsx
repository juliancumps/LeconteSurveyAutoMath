import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import InputPage from './pages/InputPage'
import VisualizationPage from './pages/VisualizationPage'
import PlaceholderPage from './pages/PlaceholderPage'

function NavBar() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/input', label: 'Math' },
    { path: '/visualization', label: 'Plot' },
    { path: '/placeholder', label: 'Archive' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-symbol">◇</span>
          <span className="logo-text">Do Math</span>
        </Link>
        
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
              {location.pathname === item.path && <div className="nav-indicator"></div>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/visualization" element={<VisualizationPage />} />
            <Route path="/placeholder" element={<PlaceholderPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App