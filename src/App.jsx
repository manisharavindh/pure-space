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
    <section id="about" className="px-6 md:px-8 py-16 md:py-24 lg:py-32 relative">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="mb-12 md:mb-16 lg:mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-light text-[#1C1B1A]">ABOUT</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col justify-between">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="flex flex-col gap-8 md:gap-10">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-snug text-[#1C1B1A] font-medium">
              We create bold, refined and inspiring spaces.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#1C1B1A]/80">
              For over a decade, we've been at the forefront of award-winning interior design, blending the rich architectural heritage of South India with contemporary minimalism. Our approach combines meticulous attention to detail with a deep understanding of local materiality and natural light. We believe that truly exceptional interiors emerge from the careful balance of form, function, and emotion.
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-[#1C1B1A]/60">
              Based in Coimbatore, Tamil Nadu, our studio works with discerning clients who value sophistication and artistry in every detail. We believe that exceptional design transcends trends and creates a lasting impact.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }} className="mt-6">
            <button className="border border-[#1C1B1A]/20 px-10 py-4 w-full sm:w-auto text-[10px] tracking-[0.2em] font-bold text-[#1C1B1A] uppercase hover:bg-[#1C1B1A] hover:text-[#EAE8E3] transition-colors duration-300">
              LEARN MORE
            </button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="h-[250px] md:h-auto lg:h-[400px] w-full"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/08/07/08/50/staircase-6528080_1280.jpg"
            alt="Interior Studio Design Theme"
            className="w-full h-full object-cover contrast-[0.8] brightness-[0.85] sepia-[0.1]"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const [activeTab, setActiveTab] = useState("FEATURED PROJECTS");

  const allProjects = [
    { name: "COASTAL RESIDENCE", loc: "LAGUNA BEACH", category: "FEATURED PROJECTS", img: "https://images.unsplash.com/photo-1758801305879-00b65e76ae96?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "URBAN LOFT", loc: "NEWPORT BEACH", category: "FEATURED PROJECTS", img: "https://images.unsplash.com/photo-1675276902726-609a9489e806?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "PRIVATE ESTATE", loc: "COSTA MESA", category: "FEATURED PROJECTS", img: "https://images.unsplash.com/photo-1771830916709-be8695a09f96?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

    { name: "SILENT FORMS", loc: "MILAN DESIGN WEEK", category: "EXHIBITIONS", img: "/images/project_2.png" },
    { name: "THE WEIGHT OF LIGHT", loc: "VENICE", category: "EXHIBITIONS", img: "/images/project_3.png" },
    { name: "MATERIAL TRUTHS", loc: "LONDON", category: "EXHIBITIONS", img: "/images/project_1.png" },

    { name: "OAK & STONE", loc: "WITH LUNE STUDIO", category: "COLLABORATIONS", img: "/images/project_3.png" },
    { name: "BRUTALIST PAVILION", loc: "WITH STUDIO X", category: "COLLABORATIONS", img: "/images/project_1.png" },
    { name: "SERENE OBJECTS", loc: "WITH CRAFT CO.", category: "COLLABORATIONS", img: "/images/project_2.png" },
  ];

  const filteredProjects = allProjects.filter((p) => p.category === activeTab);
  const tabs = ["FEATURED PROJECTS", "EXHIBITIONS", "COLLABORATIONS"];

  return (
    <section id="work" className="px-8 py-24 border-t border-hairline relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 relative">
        <h2 className="text-sm tracking-[0.2em] font-semibold invisible md:visible">SELECTED WORKS</h2>
        <div className="flex space-x-6 text-[10px] tracking-[0.15em] opacity-60">
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer transition-all ${activeTab === tab
                ? "text-[#1C1B1A] font-semibold opacity-100 border-b border-[#1C1B1A]"
                : "hover:opacity-100"
                }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              layout
              key={proj.name + idx}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-[10px] tracking-[0.18em] font-bold uppercase text-[#1C1B1A]/80 flex whitespace-nowrap overflow-hidden text-ellipsis">
                <span>{proj.name}</span>
                <span className="mx-2">—</span>
                <span>{proj.loc}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
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
    { year: "2026", name: "INTERIOR DESIGN BEST OF YEAR", category: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop" },
    { year: "2025", name: "ARCHITECTURE MASTERPRIZE", category: "GOLD WINNER", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" },
    { year: "2025", name: "AIA ORANGE COUNTY DESIGN EXCELLENCE", category: "INTERIOR ARCHITECTURE", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&auto=format&fit=crop" },
    { year: "2024", name: "LUXE INTERIORS + DESIGN GOLD LIST", category: "FEATURED DESIGNER", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" },
    { year: "2023", name: "ELLE DECOR A-LIST", category: "EMERGING TALENT", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" },
    { year: "2023", name: "IIDA SOUTHERN CALIFORNIA DESIGN AWARD", category: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section id="awards" className="px-8 py-32 relative" onMouseMove={handleMouseMove}>
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif mb-24 font-light text-[#1C1B1A]">AWARDS</h2>

      <div className="flex flex-col border-t border-[#1C1B1A]/10">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="award-element group py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center relative cursor-pointer border-b border-[#1C1B1A]/10 hover:bg-[#1C1B1A]/[0.02] transition-colors"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center w-full md:w-3/4">
              <span className="text-xs font-semibold w-24 md:w-40">{award.year}</span>
              <span className="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] font-semibold uppercase flex-1">{award.name}</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] mt-3 md:mt-0 opacity-50 uppercase font-semibold">{award.category}</span>
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
