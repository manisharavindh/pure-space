import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-[#EAE8E3]/90 backdrop-blur-md px-8 py-6 flex justify-between items-center border-b border-hairline transition-colors">
        <div className="font-serif text-xl tracking-wide">PURE SPACE.</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.2em] font-medium">
          <a href="#about" className="hover:opacity-60 transition-opacity">ABOUT</a>
          <a href="#work" className="hover:opacity-60 transition-opacity">WORK</a>
          <a href="#awards" className="hover:opacity-60 transition-opacity">AWARDS</a>
          <a href="#blog" className="hover:opacity-60 transition-opacity">BLOG</a>
        </div>

        <div className="hidden md:block text-[10px] tracking-[0.2em] font-medium cursor-pointer hover:opacity-60 transition-opacity">
          CONTACT
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#EAE8E3] pt-24 px-8 flex flex-col space-y-8 text-center"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-widest">ABOUT</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-widest">WORK</a>
            <a href="#awards" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-widest">AWARDS</a>
            <a href="#blog" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-widest">BLOG</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-serif tracking-widest">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 px-8 min-h-screen pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 h-full">

        {/* Left Column */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="flex flex-col justify-end pb-12 order-2 md:order-1"
        >
          <div className="w-full max-w-sm mb-12">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
              alt="Minimalist interior"
              className="w-full h-[40vh] md:h-[30vh] object-cover mb-8"
            />
            <h3 className="text-xs tracking-[0.2em] font-semibold mb-3">LUXURY & INTIMACY</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Transforming spaces into deeply personal sanctuaries. Our approach blends raw materials with refined geometry to create environments that breathe.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col order-1 md:order-2 h-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="mb-4 mt-8 md:mt-0">
            <h1 className="text-5xl md:text-[8rem] leading-[0.9] font-serif uppercase tracking-tight">PURE<br />SPACE.</h1>
            <p className="text-[10px] tracking-[0.2em] mt-6 md:mt-2 opacity-70">COSTA MESA — 2007</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative mt-12 w-full max-w-lg md:ml-auto"
          >
            {/* Background UI Element */}
            <div className="absolute -left-12 md:-left-24 top-1/4 h-[120%] w-[1px] bg-gray-300 pointer-events-none hidden md:block">
              <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-20 h-20 rounded-full border border-gray-300" />
            </div>

            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"
              alt="Architectural detail"
              className="w-full h-[60vh] object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="px-8 py-24 border-t border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="md:col-span-4"
        >
          <h2 className="text-6xl md:text-8xl font-serif">ABOUT</h2>
        </motion.div>

        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-lg md:text-2xl font-medium leading-snug">
              We believe architecture should be felt before it is seen. A profound dialogue between light, material, and human emotion.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="text-sm opacity-70 leading-relaxed md:pt-2">
              Founded in 2007 in Costa Mesa, California, PureSpace Studio emerged from a desire to strip away the superfluous. Our multidisciplinary team works across residential, commercial, and gallery spaces, bringing a rigorous focus on craftsmanship and proportion to every project.
            </motion.p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }}>
            <button className="flex items-center space-x-4 border border-[#1C1B1A]/30 rounded-full px-6 py-3 text-xs tracking-[0.2rem] hover:bg-[#1C1B1A] hover:text-[#EAE8E3] hover:border-transparent transition-all duration-300">
              <span>LEARN MORE</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { name: "COASTAL RESIDENCE", loc: "LAGUNA BEACH", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
    { name: "THE ATELIER", loc: "LOS ANGELES", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { name: "WABI-SABI LOFT", loc: "NEW YORK", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="work" className="px-8 py-24 border-t border-hairline">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <h2 className="text-sm tracking-[0.2em] font-semibold invisible md:visible">SELECTED WORKS</h2>
        <div className="flex space-x-6 text-[10px] tracking-[0.15em] opacity-60">
          <span className="cursor-pointer text-[#1C1B1A] font-semibold opacity-100 border-b border-[#1C1B1A]">FEATURED PROJECTS</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">EXHIBITIONS</span>
          <span className="cursor-pointer hover:opacity-100 transition-opacity">COLLABORATIONS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-[4/3]">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xs tracking-[0.15em] font-semibold mb-1">{proj.name}</h3>
            <p className="text-[10px] tracking-widest opacity-60">— {proj.loc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Awards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const awards = [
    { year: "2026", name: "AIA DESIGN EXCELLENCE", category: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop" },
    { year: "2025", name: "INTERIOR MOTIVES AWARD", category: "COMMERCIAL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" },
    { year: "2024", name: "GLOBAL ARCHITECTURE PRIZE", category: "EXHIBITION", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop" },
    { year: "2023", name: "MINIMALIST OF THE YEAR", category: "STUDIO", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section id="awards" className="px-8 py-32 border-t border-hairline relative" onMouseMove={handleMouseMove}>
      <h2 className="text-6xl md:text-8xl font-serif mb-20">AWARDS</h2>

      <div className="flex flex-col">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="group py-8 flex flex-col md:flex-row justify-between items-start md:items-center relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-xs tracking-[0.2em] w-24 mb-2 md:mb-0 opacity-60">{award.year}</span>
            <span className="text-lg md:text-2xl font-serif flex-1 group-hover:italic transition-all">{award.name}</span>
            <span className="text-[10px] tracking-[0.2em] mt-2 md:mt-0 opacity-60">{award.category}</span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed pointer-events-none z-50 hidden md:block"
            style={{
              top: mousePos.y,
              left: mousePos.x,
              x: "-50%",
              y: "-50%",
            }}
          >
            <img
              src={awards[hoveredIndex].img}
              alt="Award Project"
              className="w-48 h-64 object-cover shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { title: "TIMELESS DESIGN: HOW WE APPROACH INTERIORS", date: "FEB 12, 2026", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
    { title: "THE PSYCHOLOGY OF NEGATIVE SPACE", date: "JAN 28, 2026", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" },
    { title: "MATERIALITY: STONE, WOOD, AND STEEL", date: "JAN 10, 2026", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="blog" className="px-8 py-24 pb-32 border-t border-hairline">
      <div className="flex justify-between items-center pb-8 mb-12">
        <h2 className="text-6xl md:text-8xl font-serif">BLOG</h2>
        <div className="flex space-x-4">
          <button className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center hover:bg-[#1C1B1A] hover:text-[#EAE8E3] transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center hover:bg-[#1C1B1A] hover:text-[#EAE8E3] transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-video">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[10px] tracking-widest opacity-60 mb-3">{post.date}</p>
            <h3 className="text-sm font-semibold leading-relaxed w-11/12">{post.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="w-32 h-32 rounded-full border border-[#1C1B1A] flex items-center justify-center text-xs tracking-[0.2em] font-medium hover:bg-[#1C1B1A] hover:text-[#EAE8E3] transition-colors duration-500">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-8 pt-24 pb-12 border-t border-hairline flex flex-col md:flex-row justify-between items-end gap-12 md:gap-0">
      <div className="w-full md:w-auto">
        <p className="text-[10px] tracking-[0.2em] opacity-60 mb-4">FOR PROJECT INQUIRIES AND STUDIO VISITS</p>
        <a href="mailto:hello@purespace.com" className="text-3xl md:text-7xl font-serif hover:opacity-60 transition-opacity break-words whitespace-normal">
          HELLO@PURESPACE.COM
        </a>
      </div>

      <div className="flex flex-col items-start md:items-end w-full md:w-auto space-y-2 text-[10px] tracking-widest opacity-60 uppercase">
        <p>© 2026 PURE SPACE.</p>
        <p>COSTA MESA, CALIFORNIA</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-[#EAE8E3] text-[#1C1B1A] min-h-screen overflow-x-hidden selection:bg-[#1C1B1A] selection:text-[#EAE8E3]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Awards />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
