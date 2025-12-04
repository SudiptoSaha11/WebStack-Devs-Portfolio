import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Globe, Code2, Code2Icon, CodeSquare } from 'lucide-react';

const skills = [
    {
        category: "Frontend Development",
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        items: ["React.js", "HTML", "Tailwind CSS", "Next.js", "TypeScript"]
    },
    {
        category: "Backend Development",
        icon: <Server className="w-8 h-8 text-purple-400" />,
        items: ["Node.js", "Express", "Python", "Django", "MongoDB"]
    },
    {
        category: "WordPress Development",
        icon: <CodeSquare className="w-8 h-8 text-pink-400" />,
        items: ["WordPress", "Elementor", "Woocommerce", "Custom Themes"]
    },
    {
        category: "DevOps & Cloud",
        icon: <Globe className="w-8 h-8 text-green-400" />,
        items: ["AWS", "Docker", "CI/CD", "Firebase", "Vercel"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Expertise</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We leverage the latest technologies to build scalable and robust solutions for your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-slate-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
