import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consoles from './pages/Consoles';
import Games from './pages/Games';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <div className="crt">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consoles" element={<Consoles />} />
            <Route path="/jogos" element={<Games />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;