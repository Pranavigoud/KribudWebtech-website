import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Users, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidTransitionText from '../components/LiquidTransitionText';
import ContactSection from '../components/ContactSection';

const About = () => {
    return (
        <div className="pt-32 min-h-screen bg-primary pb-0 overflow-x-hidden max-w-full">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h3 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        <LiquidTransitionText text="Empowering Businesses " /> <br className="hidden md:block" />
                        <LiquidTransitionText text="Through Innovation" className="text-accent" />
                    </h3>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-white">Who We Are</h2>
                        <div className="text-slate-300 leading-relaxed space-y-4 font-normal text-lg">
                            <p>
                                KriBud Webtech is a premier technology solutions provider dedicated to transforming ideas into digital reality.
                                We specialize in delivering high-end custom web, mobile, cloud, and AI solutions that drive measurable growth for our clients.
                            </p>
                            <p>
                                From startups to large enterprises and educational institutions, we have partnered with diverse organizations to solve complex problems.
                                Our expertise lies in bridging the gap between business goals and technical execution, ensuring that every solution we build is scalable, secure, and user-centric.
                            </p>
                            <p>
                                We believe that technology is not just about code—it's about creating value. Whether it's streamlining operations with Cloud architecture
                                or launching a new digital product, our team of experts is with you every step of the way, supported by our diversified service commitment.
                            </p>
                        </div>

                        <div className="pt-6">
                            <Link to="/contact" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all inline-block hover:-translate-y-1 shadow-lg shadow-blue-500/25">
                                Get Free Consultation
                            </Link>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: <Code />, title: "Expert Development", desc: "Top-tier coding standards using React, Flutter, and Node.js." },
                            { icon: <Users />, title: "Client Focus", desc: "Tailored strategies for SMEs, Startups, and Enterprises." },
                            { icon: <Rocket />, title: "Rapid Delivery", desc: "Agile methodologies to get your product to market faster." },
                            { icon: <Globe />, title: "Global Support", desc: "Dedicated support team for seamless operations." }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4 }}
                                className="bg-surface p-8 rounded-2xl border border-white/5 shadow-lg hover:shadow-xl hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-200 ease-out"
                                tabIndex={0}
                            >
                                <div className="text-accent w-10 h-10 mb-4 [&>svg]:w-8 [&>svg]:h-8">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Expertise / Technologies Strip - Dark Theme */}
            <div className="bg-primary py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-12">Our Core Expertise</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'Salesforce', 'Digital Marketing'].map((item) => (
                            <motion.span
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 rounded-full border border-white/10 bg-surface text-slate-300 font-medium hover:bg-accent hover:text-white transition-all cursor-default shadow-sm hover:border-accent/50 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
};

export default About;
