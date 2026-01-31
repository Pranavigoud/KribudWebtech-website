import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Placeholder Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary font-sans text-slate-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
