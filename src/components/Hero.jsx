import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();

    // Spread the letters as user scrolls
    const letterSpacing = useTransform(scrollY, [0, 500], ["0em", "1.5em"]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

    return (
        <section className="h-screen w-full flex items-center justify-center sticky top-0 bg-primary z-0 overflow-hidden">
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 text-center"
            >
                <motion.h1
                    style={{ letterSpacing }}
                    className="text-[10vw] md:text-[8vw] font-serif font-thin text-text uppercase tracking-widest leading-none whitespace-nowrap"
                >
                    PureSpace
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-4 text-sm md:text-base font-sans font-light tracking-[0.2em] text-accent uppercase"
                >
                    Atmospheric Minimalism
                </motion.p>
            </motion.div>

            {/* Background ambient gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none" />
        </section>
    );
};

export default Hero;
