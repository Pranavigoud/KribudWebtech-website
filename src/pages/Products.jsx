import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowRight, Star, Clock, BookOpen, BrainCircuit } from 'lucide-react';
import LiquidTransitionText from '../components/LiquidTransitionText';

const ProductCard = ({ title, description, badge, icon, hasNotify, index }) => {
    const [email, setEmail] = useState('');
    const [notified, setNotified] = useState(false);

    const handleNotify = (e) => {
        e.preventDefault();
        if (email) {
            setNotified(true);
            setTimeout(() => setNotified(false), 3000);
            setEmail('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-surface rounded-2xl p-8 border border-white/5 shadow-lg hover:shadow-2xl hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-200 ease-out relative overflow-hidden flex flex-col h-full group"
            tabIndex={0}
        >
            {badge && (
                <div className="absolute top-4 right-4 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    {badge}
                </div>
            )}

            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit text-accent border border-white/5 group-hover:bg-accent/10 transition-colors">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed flex-grow font-normal">
                {description}
            </p>

            {hasNotify && (
                <div className="mt-auto pt-6 border-t border-white/5">
                    <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Bell size={16} className="text-accent" /> Get notified when we launch
                    </p>
                    <form onSubmit={handleNotify} className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-4 py-2.5 rounded-lg bg-primary border border-white/10 focus:outline-none focus:border-accent text-sm text-white placeholder:text-slate-500 transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25"
                        >
                            {notified ? 'Sent!' : 'Notify Me'}
                        </button>
                    </form>
                </div>
            )}
        </motion.div>
    );
};

const Products = () => {
    const products = [
        {
            title: "Loksar",
            description: "Next-generation AI-driven insights platform for enterprises. Isolate patterns, predict trends, and make data-driven decisions with unprecedented accuracy.",
            badge: "Launching Soon",
            icon: <BrainCircuit size={32} />,
            hasNotify: true
        },
        {
            title: "Student Eco",
            description: "A comprehensive digital ecosystem helping students and institutions save time and reduce paper waste through smart digitization of academic workflows.",
            badge: "Launching Soon",
            icon: <BookOpen size={32} />,
            hasNotify: false
        },
        {
            title: "ClockIn",
            description: "Advanced time tracking and workforce attendance system. Simplify payroll, track hours in real-time, and manage remote teams effortlessly.",
            badge: "In Development",
            icon: <Clock size={32} />,
            hasNotify: true
        }
    ];



    return (
        <div className="pt-32 min-h-screen bg-primary pb-20 overflow-x-hidden max-w-full">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Innovation Lab</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <LiquidTransitionText text="Upcoming" /> <LiquidTransitionText text="Launches" className="text-accent" />
                    </h1>
                    <p className="text-lg text-slate-300 font-normal">
                        We are constantly building tools to solve real-world problems.
                        Here is a sneak peek at what's cooking in our labs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.title}
                            {...product}
                            index={index}
                            hasNotify={product.title !== 'Student Eco' ? true : false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
