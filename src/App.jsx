import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import ContactMe from './ContactMe'
import Portfolio from './Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="app">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
