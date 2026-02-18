import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="philosophy" className="min-h-screen w-full flex flex-col md:flex-row bg-secondary">
            {/* Left: Image/Video */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop"
                    alt="Nature Texture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center p-12 md:p-24 bg-primary z-10">
                <div className="max-w-md">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-text mb-8"
                    >
                        Living Architecture
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-text/70 font-sans font-light leading-relaxed"
                    >
                        <p>
                            We believe that architecture is not just about building walls, but about framing the emptiness between them.
                            Our philosophy is rooted in the integration of nature and structure.
                        </p>
                        <p>
                            Every project is a dialogue between the built environment and the organic world.
                            We design spaces that breathe, evolve, and age gracefully with time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
