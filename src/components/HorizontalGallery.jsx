import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "The Concrete Villa",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
        location: "Kyoto, Japan"
    },
    {
        id: 2,
        title: "Forest Studio",
        img: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2644&auto=format&fit=crop",
        location: "Portland, Oregon"
    },
    {
        id: 3,
        title: "Sky Garden",
        img: "https://www.travelpeacockmagazine.com/wp-content/uploads/2022/08/garden-2.jpg",
        location: "Singapore"
    },
    {
        id: 4,
        title: "Void House",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop",
        location: "Berlin, Germany"
    }
];

const HorizontalGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    // Simple mobile detection
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <section id="projects" className="bg-secondary py-20 px-4 flex flex-col gap-20">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} isMobile={true} />
                ))}
            </section>
        );
    }

    return (
        <section ref={targetRef} id="projects" className="relative h-[400vh] bg-secondary">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-12 pl-[10vw]"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} isMobile={false} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, isMobile }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: isMobile ? 50 : 0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: isMobile ? "-100px" : "0px" }}
            className={`relative shrink-0 overflow-hidden bg-primary shadow-2xl ${isMobile ? 'h-[60vh] w-full' : 'h-[70vh] w-[80vw] md:w-[50vw]'}`}
            data-hover-project
        >
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover filter hover: transition-all duration-700 ease-out hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <h3 className="text-2xl md:text-4xl font-serif font-light">{project.title}</h3>
                <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest opacity-80">{project.location}</p>
            </div>
        </motion.div>
    );
};

export default HorizontalGallery;
