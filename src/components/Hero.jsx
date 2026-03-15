import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidTransitionText from './LiquidTransitionText';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
            {/* Background Elements - Moved to global Background component */}

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        <LiquidTransitionText text="It’s not just software." />
                        <br className="hidden md:block" />
                        <LiquidTransitionText
                            text="It’s growth for your business."
                            className="text-blue-500 brightness-110"
                        />
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Custom web, mobile, cloud, and AI solutions tailored to scale your enterprise.
                        Experience technology that drives real results.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            to="/contact"
                            className="bg-[#0066ff] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                            Get Free Consultation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
