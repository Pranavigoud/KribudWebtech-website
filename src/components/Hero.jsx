import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidTransitionText from './LiquidTransitionText';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-x-hidden pt-20 pb-10 sm:pb-20 w-full">
            {/* Background Elements - Moved to global Background component */}

            <div className="container mx-auto px-2 sm:px-6 relative z-10 text-center max-w-3xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight break-words w-full">
                        <LiquidTransitionText text="It’s not just software." />
                        <br className="hidden md:block" />
                                                <span className="block text-blue-500 brightness-110">
                                                    <span className="inline sm:hidden">
                                                        It’s growth for your<br/>business.
                                                    </span>
                                                    <span className="hidden sm:inline">
                                                        It’s growth for your business.
                                                    </span>
                                                </span>
                    </h1>

                    <p className="text-sm xs:text-base md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto leading-relaxed font-light w-full">
                        Custom web, mobile, cloud, and AI solutions tailored to scale your enterprise.
                        Experience technology that drives real results.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs mx-auto">
                        <Link
                            to="/contact"
                            className="bg-[#0066ff] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto min-w-0"
                            style={{maxWidth: '100%'}}
                        >
                            <span className="truncate">Get Free Consultation</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-white/10 hover:border-white/20 hover:-translate-y-1 w-full sm:w-auto min-w-0"
                            style={{maxWidth: '100%'}}
                        >
                            <span className="truncate">Explore Services</span>
                        </Link>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 sm:mt-16 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-500"
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
