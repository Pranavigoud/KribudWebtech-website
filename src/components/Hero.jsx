import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
            {/* Background Elements - Subtle Professional Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-surface border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-8"
                    >
                        24/7 Expert Support Available
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        It’s not just software. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 brightness-110">
                            It’s growth for your business.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Custom web, mobile, cloud, and AI solutions tailored to scale your enterprise.
                        Experience technology that drives real results.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            to="/contact"
                            className="group bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-1 flex items-center gap-2"
                        >
                            Get Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 rounded-lg text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-white/10 hover:border-white/20 hover:-translate-y-1"
                        >
                            Explore Services
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span>Enterprise Grade</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span>Scalable Architecture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span>Cloud Native</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
