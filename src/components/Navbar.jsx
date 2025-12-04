import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center group">
                    <div className="rounded-lg transition-colors mr-[-10px]">
                        <img src="/Logo1.PNG" alt="Logo" className="w-[120px] h-[100px] object-contain" />
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">WebStack<span className="text-blue-400">Devs</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
                    >
                        Hire Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
