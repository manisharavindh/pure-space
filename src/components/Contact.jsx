import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section id="contact" className="py-32 bg-primary flex items-center justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative px-12 py-6 overflow-hidden bg-transparent border-t border-b border-text/10"
                >
                    <span className="relative z-10 text-xl font-serif italic text-text group-hover:text-white transition-colors duration-500">
                        Start a Conversation
                    </span>
                    <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
                </button>
            </section>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] bg-secondary flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 p-2 text-text hover:rotate-90 transition-transform duration-500"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <motion.form
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full max-w-2xl space-y-12"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif text-center mb-12 text-text">Say Hello</h2>

                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-widest text-text/50">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-text/20 py-4 text-2xl font-serif focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-widest text-text/50">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-text/20 py-4 text-2xl font-serif focus:outline-none focus:border-accent transition-colors"
                                    placeholder="email@example.com"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-xs uppercase tracking-widest text-text/50">Message</label>
                                <textarea
                                    rows="1"
                                    className="w-full bg-transparent border-b border-text/20 py-4 text-2xl font-serif focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <div className="pt-8 text-center">
                                <button className="px-12 py-4 border border-text/20 rounded-full hover:bg-text hover:text-white transition-all duration-500 uppercase tracking-widest text-xs">
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;
