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
        <div className="font-serif text-xl tracking-wide">PURESPACE.</div>

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
    <section className="pt-[100px] md:pt-[120px] px-8 md:px-12 min-h-[100dvh] md:h-[100dvh] md:max-h-[100dvh] flex flex-col justify-between overflow-x-hidden md:overflow-hidden relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-16 w-full flex-1 min-h-0 pb-8 md:pb-8 lg:pb-12 mt-4 md:mt-0">

        {/* Left Column */}
        <div className="flex flex-col h-full order-2 md:order-1 relative min-h-0 pt-0 md:pt-2 lg:pr-12 gap-8 md:gap-0">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="w-full h-[40vh] md:h-[45%] lg:h-[50%] relative shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Minimalist armchair next to structural components"
              className="w-full h-full object-cover filter contrast-[0.85] brightness-[0.85] sepia-[0.1]"
            />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="w-full max-w-sm lg:max-w-md mt-auto shrink-0 pb-0 md:pb-2"
          >
            <h3 className="text-sm md:text-base tracking-[0.2em] font-bold mb-4 md:mb-6 text-[#1C1B1A] uppercase">LUXURY & INTIMACY</h3>
            <p className="text-sm md:text-base lg:text-lg tracking-wide leading-[1.8] opacity-75 font-medium">
              We transform residential and commercial spaces into refined
              environments where every detail speaks to timeless elegance and
              sophisticated living.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full order-1 md:order-2 min-h-0 gap-8 md:gap-0">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="shrink-0 mb-0 md:mb-10 lg:ml-[-1rem]">
            <h1 className="text-6xl sm:text-7xl md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.95] md:leading-[0.9] font-serif uppercase tracking-normal text-[#1C1B1A] font-light mt-[-0.1em]">PURE<br />SPACE.</h1>
            <p className="text-[10px] tracking-[0.2em] mt-6 font-bold text-[#1C1B1A] opacity-80 uppercase">Coimbatore — 2007</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-[50vh] md:h-auto flex-1 min-h-0"
          >
            {/* Background UI Element - overlapping the left edge */}
            <div className="absolute -left-12 md:-left-16 bottom-[30%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-black/15 z-10 hidden md:block"></div>

            <img
              src="https://images.unsplash.com/photo-1631509824910-82791a0e43d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzF8fHxlbnwwfHx8fHw%3D"
              alt="Structural concrete wall and botanical vase"
              className="w-full h-full object-cover relative z-0 filter contrast-[0.85] brightness-[0.9] sepia-[0.05]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Footer */}
      <div className="w-full border-t border-black/10 py-5 shrink-0 flex justify-between items-center text-[10px] tracking-[0.2em] font-bold text-[#1C1B1A] uppercase opacity-80 mt-8 md:mt-0">
        <span>SCROLL DOWN</span>
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
        <p>© 2026 PURESPACE.</p>
        <p>Coimbatore, Tamil Nadu</p>
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
