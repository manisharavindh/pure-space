import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TheVoid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 40;
            const y = (clientY / window.innerHeight - 0.5) * 40;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="h-[80vh] w-full bg-primary flex items-center justify-center overflow-hidden relative">
            <motion.div
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="text-center relative z-10 p-12"
            >
                <h2 className="text-4xl md:text-6xl font-serif italic text-text/80 leading-relaxed">
                    "Space is the breath of art."
                </h2>
                <p className="mt-6 text-xs font-sans tracking-[0.3em] text-accent uppercase opacity-60">
                    The Void
                </p>
            </motion.div>

            {/* Subtle floating particles or elements could be added here for more atmosphere */}
        </section>
    );
};

export default TheVoid;
