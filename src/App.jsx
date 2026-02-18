import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HorizontalGallery from './components/HorizontalGallery';
import TheVoid from './components/TheVoid';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.5,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-primary text-text min-h-screen selection:bg-accent selection:text-white">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-[1000] bg-primary flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="font-serif text-2xl tracking-widest italic"
                        >
                            Loading PureSpace...
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Cursor />
            <Navigation />

            <main className="relative z-10">
                <Hero />
                <HorizontalGallery />
                <TheVoid />
                <Philosophy />
                <Contact />
            </main>

            <footer className="py-8 text-center text-[10px] uppercase tracking-widest opacity-30">
                &copy; 2024 PureSpace Architectural Studio. All Rights Reserved.
            </footer>
        </div>
    );
};

export default App;
