import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "TicketFlix",
        description: "A full-stack movie ticket booking application with user authentication, movie listings, and payment integration.",
        tags: ["React", "Node.js", "Stripe", "MongoDB"],
        gradient: "from-blue-500 to-cyan-400",
        image: "TicketFlix.png", // path to image in your project directory
        link: "https://ticketflix-official.netlify.app/"
    },
    {
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team chat.",
        tags: ["React.js", "Node.js", "Tailwind"],
        gradient: "from-purple-500 to-pink-400",
        image: "Todo.png",
        link: "https://taskflowflix.netlify.app/"
    },
    {
        title: "FoodExpress",
        description: "A food delivery platform connecting users with local restaurants, featuring order tracking and reviews.",
        tags: ["React.js", "Node.js", "MongoDB", "Stripe"],
        gradient: "from-orange-500 to-red-400",
        image: "Food.jpeg",
        link: "https://foodexpress.example.com"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Check out some of our recent work and the solutions we've delivered to our clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group"
                        >
                            {/* Project Image Placeholder with Gradient (image displayed now) */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                {/* image covering the area, keeps existing CSS intact */}
                                <img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
                            </div>

                            <div className="p-6 relative">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
