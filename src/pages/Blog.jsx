import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LiquidTransitionText from '../components/LiquidTransitionText';

const BlogPost = ({ title, category, date, excerpt, author, index }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="bg-surface p-8 rounded-2xl border border-white/5 shadow-sm hover:shadow-xl hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-200 ease-out group"
        tabIndex={0}
    >
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-5 uppercase tracking-wider">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{category}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">
            <Link to="#">{title}</Link>
        </h3>
        <p className="text-slate-300 mb-8 leading-relaxed font-normal">
            {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <User size={16} className="text-accent" /> {author}
            </div>
            <Link to="#" className="text-accent font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                Read More <ArrowRight size={16} />
            </Link>
        </div>
    </motion.article>
);

const Blog = () => {
    const posts = [
        {
            title: "The Future of Cloud Computing in Enterprise",
            category: "Cloud Solutions",
            date: "Oct 24, 2025",
            author: "Tech Team",
            excerpt: "Explore how hybrid cloud architectures are reshaping the way enterprises manage data, scalability, and security in the modern era."
        },
        {
            title: "Optimizing Salesforce for Maximum ROI",
            category: "Salesforce",
            date: "Oct 18, 2025",
            author: "CRM Specialist",
            excerpt: "Learn the best practices for customizing your Salesforce instance to streamline sales processes and improve customer retention rates."
        },
        {
            title: "Digital Transformation: A Guide for SMEs",
            category: "Digital Transformation",
            date: "Oct 10, 2025",
            author: "Business Analyst",
            excerpt: "A comprehensive guide on how small and medium enterprises can leverage digital tools to compete with industry giants."
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-primary pb-20 overflow-x-hidden max-w-full">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <LiquidTransitionText text="Insights &" /> <LiquidTransitionText text="News" className="text-accent" />
                    </h1>
                    <p className="text-lg text-slate-300 font-normal">
                        Latest updates, technology trends, and expert insights from the KriBud Webtech team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {posts.map((post, index) => (
                        <BlogPost key={post.title} {...post} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
