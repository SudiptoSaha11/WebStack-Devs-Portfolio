import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 z-0" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-400 font-medium tracking-wider uppercase mb-4">Welcome to WebStack Developers</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        We Build <span className="text-gradient">Digital Experiences</span>
                        <br /> That Matter
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        A team of passionate developers crafting pixel-perfect, performant, and accessible websites for modern businesses.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
                        >
                            View Our Work <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all cursor-pointer backdrop-blur-sm"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-slate-400">
                        <a href="https://www.linkedin.com/in/gareeb-developers" target='blank' className="hover:text-white transition-colors transform hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/gareeb-developers" target='blank' className="hover:text-white transition-colors transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <p onClick={()=>{window.location.href="mailto:gareebdevelopersflix@gmail.com"}} className="hover:text-white transition-colors transform hover:scale-110">
                            <Mail size={24} />
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
