import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceGroup = ({ title, icon, services, color }) => (
    <div className="mb-24 last:mb-0">
        <div className="flex items-center gap-4 mb-10">
            <div className={`p-4 rounded-xl ${color} text-white shadow-lg`}>
                {icon}
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="bg-surface p-10 rounded-2xl border border-white/5 shadow-sm hover:shadow-xl hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-200 ease-out group relative overflow-hidden"
                    tabIndex={0}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed text-sm font-normal">
                        {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/5 p-2 px-3 rounded-lg border border-white/5">
                        <span className="text-accent">Best For:</span> <span className="text-slate-200">{service.for}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Services = () => {
    const serviceGroups = [
        {
            title: "Cloud & Enterprise Solutions",
            icon: <Cloud size={32} />,
            color: "bg-blue-600",
            services: [
                {
                    title: "Salesforce Services",
                    description: "End-to-end Salesforce implementation and customization to streamline your customer relationships and sales pipelines.",
                    for: "Enterprises & SMEs"
                },
                {
                    title: "Cloud Architecture & Design",
                    description: "Scalable, secure cloud infrastructure design on AWS/Azure to reduce costs and improve performance coverage.",
                    for: "Startups & Enterprises"
                },
                {
                    title: "Hosting & Migration",
                    description: "Seamless migration of legacy systems to the cloud with zero downtime and managed hosting solutions.",
                    for: "Businesses scaling up"
                },
                {
                    title: "Existing Application Support",
                    description: "24/7 maintenance, monitoring, and debugging for your critical business applications to ensure stability.",
                    for: "Any Business"
                }
            ]
        },
        {
            title: "Development",
            icon: <Code size={32} />,
            color: "bg-indigo-600",
            services: [
                {
                    title: "Web Development",
                    description: "High-performance, responsive websites and web apps built with modern frameworks like React and Next.js.",
                    for: "Startups, SMEs, Enterprises"
                },
                {
                    title: "App Development",
                    description: "Native and cross-platform mobile applications (Flutter/React Native) that provide seamless user experiences.",
                    for: "Startups & Consumer Brands"
                }
            ]
        },
        {
            title: "Digital Growth",
            icon: <TrendingUp size={32} />,
            color: "bg-emerald-600",
            services: [
                {
                    title: "Digital Marketing",
                    description: "Data-driven SEO, PPC, and content strategies to increase your online visibility and drive qualified leads.",
                    for: "Growth-focused Businesses"
                },
                {
                    title: "Social Media Handling",
                    description: "Strategic brand management and engagement across all major social platforms to build community.",
                    for: "Brands & Influencers"
                }
            ]
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-primary pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Services That Drive <span className="text-accent">Growth</span>
                    </h1>
                    <p className="text-lg text-slate-300 font-normal">
                        From technical implementation to market expansion, we provide the full spectrum of digital solutions.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {serviceGroups.map((group) => (
                        <ServiceGroup key={group.title} {...group} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-r from-surface to-slate-900 rounded-3xl p-12 relative overflow-hidden border border-white/10"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to transform your business?
                            </h2>
                            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                                Schedule a free consultation with our experts to discuss your specific needs.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-lg hover:-translate-y-1"
                            >
                                Talk to Our Experts
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;
