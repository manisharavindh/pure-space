import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth follow
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [hoverText, setHoverText] = useState("");

    useEffect(() => {
        const moveCursor = (e) => {
            // Track exact mouse position
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('[data-hover-project]')) {
                setIsHovering(true);
                setHoverText("View Project");
            } else if (e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
                setHoverText("");
            } else {
                setIsHovering(false);
                setHoverText("");
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center border border-text/50 mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%"
            }}
            animate={{
                width: isHovering && hoverText ? 120 : 32,
                height: isHovering && hoverText ? 120 : 32,
                backgroundColor: isHovering ? "white" : "transparent",
                borderColor: isHovering ? "white" : "rgba(255,255,255,0.5)",
                mixBlendMode: isHovering ? "normal" : "difference",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isHovering && hoverText ? 1 : 0,
                    scale: isHovering && hoverText ? 1 : 0.8
                }}
                className="text-black text-[12px] font-medium uppercase tracking-widest whitespace-nowrap text-center px-2"
            >
                {hoverText}
            </motion.span>
        </motion.div>
    );
};

export default Cursor;
