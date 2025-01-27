import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ErrorBoundary from './pages/ErrorBoundary';
function App() {
 
  return (
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      {/* This will match any route that is not defined */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}

export default App
