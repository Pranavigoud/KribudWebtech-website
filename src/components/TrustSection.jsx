import React from 'react';
import { Cloud, Database, Globe, Smartphone, Server, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSection = () => {
    const techs = [
        { name: 'Salesforce', icon: <Cloud className="w-10 h-10 md:w-12 md:h-12" /> },
        { name: 'AWS', icon: <Server className="w-10 h-10 md:w-12 md:h-12" /> },
        { name: 'Azure', icon: <Shield className="w-10 h-10 md:w-12 md:h-12" /> },
        { name: 'React', icon: <Globe className="w-10 h-10 md:w-12 md:h-12" /> },
        { name: 'Flutter', icon: <Smartphone className="w-10 h-10 md:w-12 md:h-12" /> },
    ];

    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">Trusted by Market Leaders</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto font-normal">
                        We build robust solutions using industry-leading technologies to ensure security, scalability, and performance.
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24">
                    {techs.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center justify-center p-8 bg-surface rounded-xl shadow-lg border border-white/5 transition-all duration-200 ease-out hover:bg-accent group cursor-default"
                            tabIndex={0}
                        >
                            <div className="text-accent mb-3 group-hover:text-white transition-colors">{tech.icon}</div>
                            <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                    {/* <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-accent group cursor-default"
                    >
                        <div className="w-14 h-14 bg-surface shadow-inner text-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:bg-white group-hover:text-accent transition-colors">
                            <span className="font-bold text-xl">24h</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Round-the-Clock Support</h3>
                        <p className="text-slate-300 leading-relaxed font-normal group-hover:text-blue-50">
                            Our expert team is always available to ensure your business never stops.
                        </p>
                    </motion.div> */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-accent group cursor-default"
                    >
                        <div className="w-14 h-14 bg-surface shadow-inner text-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:bg-white group-hover:text-accent transition-colors">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Global Standards</h3>
                        <p className="text-slate-300 leading-relaxed font-normal group-hover:text-blue-50">
                            World-class development practices compliant with international standards.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-accent group cursor-default"
                    >
                        <div className="w-14 h-14 bg-surface shadow-inner text-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:bg-white group-hover:text-accent transition-colors">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Secure & Scalable</h3>
                        <p className="text-slate-300 leading-relaxed font-normal group-hover:text-blue-50">
                            Enterprise-grade security built into every layer of your application.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
