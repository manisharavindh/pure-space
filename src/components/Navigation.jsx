import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const navItems = ["Projects", "Philosophy", "Contact"];

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-lg flex space-x-8">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="text-xs uppercase tracking-widest text-text/80 hover:text-text transition-colors duration-300 relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navigation;
