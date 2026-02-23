import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${isScrolled ? 'bg-pure-black/90 backdrop-blur-xl' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-[1920px] mx-auto border-x border-pure-border mx-auto bg-transparent">
          <div className="flex h-20 items-center justify-between px-6 lg:px-12 border-b border-pure-border/0 transition-colors duration-500">
            <a href="#" className="font-serif text-2xl tracking-wider text-pure-grey z-50 shrink-0">
              PureSpace
            </a>

            <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] text-earth-tone">
              {['Work', 'Studio', 'Services', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="group relative transition-colors hover:text-pure-grey py-2">
                  {item}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-pure-grey transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <button
              className="md:hidden z-50 text-pure-grey p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-pure-black flex flex-col items-center justify-center border-x border-pure-border max-w-[1920px] mx-auto"
          >
            <nav className="flex flex-col gap-12 text-center">
              {['Work', 'Studio', 'Services', 'Contact'].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-5xl text-pure-grey hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <span className="w-[1px] h-12 bg-pure-border"></span>
              <p className="text-xs uppercase tracking-[0.3em] text-earth-tone">Menu</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section className="pt-20 min-h-[90vh] flex flex-col border-b border-pure-border bg-pure-black relative overflow-hidden">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column (Image 1 and Bottom Text) */}
        <div className="flex flex-col relative">
          <div className="p-8 md:p-16 lg:p-24 relative z-10 w-full h-full lg:h-[70vh]">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full relative overflow-hidden shadow-2xl">
              <motion.img style={{ y: y1 }} src="/hero_1.png" className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] object-cover" alt="Interior Details" />
            </motion.div>
          </div>

          {/* Left Column Bottom Text Area */}
          <div className="px-8 md:px-16 lg:px-24 pb-16 flex flex-col gap-6 mt-auto">
            <motion.h4 initial="hidden" animate="visible" variants={fadeInUp} className="text-[10px] tracking-[0.2em] uppercase text-pure-grey font-medium">
              Interior Architecture
            </motion.h4>
            <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="max-w-[280px] text-xs text-earth-tone leading-relaxed font-light">
              We design minimalist environments focused on essentialism, organic materiality, and absolute quiet luxury.
            </motion.p>
          </div>
        </div>

        {/* Right Column (Top Text and offset Image 2) */}
        <div className="flex flex-col lg:border-l border-pure-border relative">
          <div className="px-8 md:px-16 lg:px-24 pt-16 lg:pt-32 relative z-20">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] text-pure-grey tracking-tight mb-8">
                PURE<br />SPACE.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.2em] uppercase text-earth-tone font-mono">
                Stockholm — 2024
              </motion.p>
            </motion.div>
          </div>

          <div className="p-8 md:p-16 lg:p-24 lg:pl-0 mt-8 lg:mt-32 relative z-10 w-full lg:w-[130%] lg:-ml-[30%] h-[50vh] lg:h-[60vh]">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full relative overflow-hidden shadow-2xl border border-pure-border/20">
              <motion.img style={{ y: y2 }} src="/hero_2.png" className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] object-cover" alt="Atmospheric Textures" />

              {/* Decorative floating circle line from reference */}
              <div className="absolute -left-16 bottom-[20%] w-32 h-32 rounded-full border-[0.5px] border-white/20 z-20"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Persistent Bottom 'Scroll Down' bar from reference */}
      <div className="w-full border-t border-pure-border px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center bg-pure-black relative z-30 flex-none hidden lg:flex">
        <p className="text-[10px] tracking-[0.25em] uppercase text-earth-tone">Scroll Down</p>
        <div className="w-px h-12 bg-pure-border absolute left-1/2 -top-12"></div>
      </div>
    </section>
  );
};

const SelectedWorks = () => {
  const projects = [
    { name: "Lumina Residence", location: "Stockholm", year: "2024", img: "/work_1.png" },
    { name: "The Alabaster Gallery", location: "New York", year: "2023", img: "/work_2.png" },
    { name: "Villa Oakhaven", location: "Copenhagen", year: "2023", img: "/work_3.png" }
  ];

  return (
    <section id="work" className="border-b border-pure-border bg-pure-black scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-pure-border">
        <div className="lg:col-span-4 p-8 md:p-16 lg:p-24 lg:border-r border-pure-border flex items-center bg-pure-black">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl text-pure-grey"
          >
            Selected<br />Works
          </motion.h2>
        </div>
        <div className="lg:col-span-8 p-8 md:p-16 lg:p-24 flex items-center bg-pure-border/5 border-t lg:border-t-0 border-pure-border">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="max-w-2xl text-earth-tone text-xl leading-relaxed font-light"
          >
            A curated selection of our recent architectural implementations.
            Focused on materiality, acoustic comfort, and spatial fluidity. Every project is a study in reduction.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            key={idx}
            className={`group relative aspect-square lg:aspect-[3/4] lg:border-r border-pure-border last:border-r-0 overflow-hidden cursor-pointer ${idx !== projects.length - 1 ? 'border-b lg:border-b-0' : ''}`}
          >
            <div className="absolute inset-0 bg-pure-black/40 z-10 transition-colors duration-700 group-hover:bg-transparent"></div>
            <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1]" />

            {/* Interactive hover overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-pure-black/90 via-pure-black/20 to-transparent opacity-100 lg:opacity-0 transition-opacity duration-700 lg:group-hover:opacity-100 flex flex-col justify-end p-8 md:p-12">
              <div className="transform lg:translate-y-8 transition-transform duration-700 ease-out lg:group-hover:translate-y-0">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-3xl md:text-4xl text-pure-grey mb-2">{project.name}</h3>
                  <div className="flex justify-between items-center border-t border-pure-border/50 pt-4 mt-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-earth-tone">{project.location}</p>
                    <div className="text-[10px] tracking-[0.2em] text-earth-tone font-mono">{project.year}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="studio" className="border-b border-pure-border bg-pure-black scroll-mt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 md:p-16 lg:p-24 lg:border-r border-pure-border flex flex-col justify-center min-h-[50vh] bg-pure-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <div className="mb-16">
            <span className="w-12 h-[1px] bg-pure-border block mb-6"></span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-earth-tone">Studio Philosophy</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pure-grey leading-[1.15] max-w-xl pr-8">
            We believe in the power of subtraction. Removing the unessential to reveal the profound.
          </h2>
        </motion.div>
      </div>
      <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center gap-12 bg-pure-border/[0.03] border-t lg:border-t-0 border-pure-border">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-xl md:text-2xl text-earth-tone leading-relaxed max-w-lg font-light">
          PureSpace is an international design studio founded on the principles of critical regionalism and phenomenological architecture. We don't just design spaces; we orchestrate light, shape acoustics, and curate silence.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-xl md:text-2xl text-earth-tone leading-relaxed max-w-lg font-light">
          Our approach favors natural, aging materials—stone, raw timber, lime wash—that develop patina and tell a story over time. Luxury, we believe, is not ostentation, but peace.
        </motion.p>
      </div>
    </div>
  </section>
);

const Services = () => {
  const servicesList = [
    { title: "Interior Architecture", desc: "Holistic spatial planning and structural modifications to optimize light and flow workflows. Creating seamless transitions between interior and exterior." },
    { title: "Bespoke Furniture", desc: "Custom-designed pieces crafted by local artisans using ethically sourced materials. Each artifact is uniquely tailored to the spatial context." },
    { title: "Lighting Design", desc: "Curated illumination strategies to enhance mood, highlight textures, and simulate natural rhythms. Utilizing both natural and artificial light as sculptural elements." },
    { title: "Art Curation", desc: "Procurement and placement of contemporary pieces that complement the architectural narrative, adding layers of cultural resonance to the space." }
  ];

  return (
    <section id="services" className="border-b border-pure-border grid grid-cols-1 lg:grid-cols-12 bg-pure-black scroll-mt-20">
      <div className="lg:col-span-4 p-8 md:p-16 lg:p-24 lg:border-r border-pure-border flex flex-col justify-between">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="mb-12">
            <span className="w-12 h-[1px] bg-pure-border block mb-6"></span>
            <p className="text-[10px] uppercase tracking-[0.3em] text-earth-tone">Capabilities</p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-pure-grey mb-8 lg:mb-16">Services</h2>
          <p className="text-earth-tone text-lg max-w-xs font-light leading-relaxed">From concept to final curation, a seamless singular vision executed with precision.</p>
        </motion.div>
      </div>
      <div className="lg:col-span-8 flex flex-col">
        {servicesList.map((service, idx) => (
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            key={idx}
            className="group flex flex-col lg:flex-row lg:items-center justify-between p-8 md:p-12 lg:p-16 border-t first:border-t lg:first:border-t-0 border-pure-border cursor-pointer hover:bg-pure-border/5 transition-colors duration-700"
          >
            <h3 className="font-serif text-3xl md:text-5xl text-pure-grey lg:w-5/12 mb-6 lg:mb-0 lg:group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1]">{service.title}</h3>

            {/* Mobile shows desc initially, Desktop hides and shows on hover */}
            <div className="lg:w-6/12 overflow-hidden h-auto opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-100 lg:group-hover:mt-4 transition-all duration-700 ease-in-out">
              <p className="text-earth-tone text-lg leading-relaxed font-light">
                {service.desc}
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-pure-border group-hover:bg-pure-grey group-hover:text-pure-black transition-all duration-700 shrink-0 ml-4 group-hover:-rotate-45">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-pure-black pt-20 md:pt-32 pb-12 px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-pure-border">
    <div className="lg:col-span-7 flex flex-col gap-16">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-pure-grey leading-[0.9]"
      >
        Let's<br /><span className="italic font-light text-earth-tone">discuss.</span>
      </motion.h2>
      <motion.a
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        href="mailto:hello@purespace.studio"
        className="text-2xl md:text-4xl text-pure-grey hover:text-white transition-colors inline-flex items-center gap-6 w-fit group font-light"
      >
        hello@purespace.studio
        <span className="w-16 h-[1px] bg-pure-border group-hover:w-32 group-hover:bg-white transition-all duration-700 ease-out"></span>
      </motion.a>
    </div>

    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-16 mt-8 lg:mt-0">
      <div className="flex flex-col gap-8">
        <h4 className="uppercase tracking-[0.3em] text-pure-border text-[10px] font-medium">Location</h4>
        <p className="text-earth-tone text-lg font-light leading-relaxed">Nyhavn 17<br />1051 Copenhagen<br />Denmark</p>
      </div>

      <div className="flex flex-col gap-8">
        <h4 className="uppercase tracking-[0.3em] text-pure-border text-[10px] font-medium">Connect</h4>
        <div className="flex flex-col gap-4">
          {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
            <a key={social} href="#" className="text-earth-tone text-lg font-light hover:text-pure-grey transition-colors w-fit">{social}</a>
          ))}
        </div>
      </div>
    </div>

    <div className="lg:col-span-12 mt-16 md:mt-32 pt-12 border-t border-pure-border flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs text-pure-border">
      <p>&copy; {new Date().getFullYear()} PureSpace Architecture Studio. All rights reserved.</p>
      <div className="flex gap-12">
        <a href="#" className="hover:text-pure-grey transition-colors uppercase tracking-[0.2em]">Privacy</a>
        <a href="#" className="hover:text-pure-grey transition-colors uppercase tracking-[0.2em]">Terms</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-pure-black text-pure-grey font-sans overflow-x-hidden selection:bg-pure-grey selection:text-pure-black">
      <div className="max-w-[1920px] mx-auto border-x border-pure-border bg-pure-black relative shadow-[0_0_100px_rgba(0,0,0,0.8)]">
        <Header />
        <main>
          <Hero />
          <SelectedWorks />
          <Philosophy />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
