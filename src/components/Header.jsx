import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/5 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo - LEFT aligned per instructions */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img
                        src="/logo.jpg"
                        alt="KriBud Webtech"
                        className="w-10 h-10 object-contain rounded-lg transition-transform group-hover:scale-105"
                    />
                    <span className="text-xl font-bold font-sans text-white tracking-tight hidden sm:block">
                        KriBud <span className="text-accent">Webtech</span>
                    </span>
                </Link>

                {/* Desktop Navigation - CENTER/RIGHT aligned */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 relative group py-1 ${active ? 'text-[#0066ff]' : 'text-slate-300 hover:text-[#0066ff]'
                                    } ${link.special && !active ? 'text-[#0066ff]/90' : ''}`}
                            >
                                {link.name}
                                {/* Active & Hover Underline Effect */}
                                <span
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ease-out ${active
                                        ? 'bg-[#0066ff] shadow-[0_0_8px_rgba(0,102,255,0.4)] opacity-100 scale-x-100'
                                        : 'bg-[#0066ff]/50 opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                    <Link
                        to="/contact"
                        className="bg-[#0066ff] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Get Free Consultation
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#0066ff] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-t border-white/10 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${active
                                            ? 'bg-[#0066ff]/10 text-[#0066ff]'
                                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-2">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full bg-accent text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Get Free Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
