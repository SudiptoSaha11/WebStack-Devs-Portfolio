import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 group mb-4">
                            <div className="rounded-lg transition-colors mr-[-20px]">
                        <img src="/Logo1.PNG" alt="Logo" className="w-[120px] h-[100px] object-contain" />
                    </div>
                            <div className='pt-6'><span className="text-xl font-bold text-white tracking-tight">WebStack<span className="text-blue-400">Devs</span></span>
                            <p className="text-slate-400 max-w-xs">
                            Crafting digital experiences that inspire and engage. Your vision, our code.
                            </p></div>
                        </Link>
                        
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/gareeb-developers" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/gareeb-developers" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/gareeb-developers" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} WebStack Developers. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
