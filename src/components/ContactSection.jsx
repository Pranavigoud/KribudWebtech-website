import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import LiquidTransitionText from './LiquidTransitionText';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <LiquidTransitionText text="Get in Touch" />
                        </h2>
                        <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
                            Have a project in mind? We'd love to hear from you. 
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="bg-surface p-4 rounded-xl text-accent border border-white/5 group-hover:border-accent/30 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-1">Email Us</h3>
                                    <p className="text-slate-400">admin@kribudwebtech.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-surface p-4 rounded-xl text-accent border border-white/5 group-hover:border-accent/30 transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-1">Call Us</h3>
                                    <p className="text-slate-400">+91 7780133244</p>
                                    <p className="text-slate-400">+44 7769 044665</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="bg-surface p-4 rounded-xl text-accent border border-white/5 group-hover:border-accent/30 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-1">Visit Us</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        Cambridge,UK
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface p-8 sm:p-10 rounded-2xl shadow-xl border border-white/5"
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-lg bg-primary border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-white placeholder:text-slate-600"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-lg bg-primary border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-white placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-lg bg-primary border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-white placeholder:text-slate-600"
                                        placeholder="+1 (123) 456-7890"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3.5 rounded-lg bg-primary border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent text-white py-4 rounded-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:-translate-y-1"
                            >
                                Contact Us Today
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
