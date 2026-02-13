import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';

// Placeholder Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import AnimatedRoutes from './components/AnimatedRoutes';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary font-sans text-slate-200 relative">
        <Background />
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          </AnimatedRoutes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
