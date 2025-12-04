import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Email sent TO YOU
        const autoReplyID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_ID; // Auto reply sent TO USER
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const formData = {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.title.value,
        };

        // 1️⃣ MAIN EMAIL (sent to you)
        emailjs
            .send(
                serviceID,
                templateID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: formData.message, // Needed for auto-reply template
                },
                publicKey
            )
            .then(() => {
                setStatus("success");
                e.target.reset();
                setTimeout(() => { setStatus('idle'); }, 5000);
            })
            .catch(() => setStatus("error"));

    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can help you achieve your goals.
                    </p>
                </motion.div>

                <div className="max-w-xl mx-auto">
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 rounded-2xl space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="title"
                                required
                                rows="4"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${status === 'success'
                                ? 'bg-green-600 text-white'
                                : status === 'error'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                                }`}
                        >
                            {status === 'sending' ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle size={20} /> Message Sent!
                                </>
                            ) : status === 'error' ? (
                                <>
                                    <AlertCircle size={20} /> Error. Try Again.
                                </>
                            ) : (
                                <>
                                    <Send size={20} /> Send Message
                                </>
                            )}
                        </button>

                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
