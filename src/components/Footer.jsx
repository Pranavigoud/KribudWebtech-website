import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1 flex flex-col items-start">
                        <img
                            src={logo}
                            alt="KriBud Webtech Logo"
                            className="w-14 h-14 object-contain rounded-lg mb-2"
                        />
                        <Link to="/" className="text-2xl font-bold text-white mb-4 block">
                            KriBud <span className="text-accent">Webtech</span>
                        </Link>
                        <p className="text-sm text-slate-400">
                            Transforming businesses with custom web, mobile, cloud, and AI solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">App Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Email: admin@kribudwebtech.com</li>
                            <li>Phone: +91 7780133244</li>
                            <li>Phone: +44 7769 044665</li>
                            <li className="text-accent font-medium mt-2">24/7 Expert Support</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} KriBud Webtech. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
