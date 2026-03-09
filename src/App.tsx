/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Droplets, 
  HardHat, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Users,
  Trophy,
  Construction,
  Linkedin,
  Map,
  MessageCircle,
  Send,
  FileDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface Project {
  id: number;
  title: string;
  location: string;
  category: 'Dam' | 'Infrastructure' | 'Industrial';
  description: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Omo Valley Hydroelectric Complex",
    location: "Southern Nations, Ethiopia",
    category: "Dam",
    description: "A multi-stage dam project providing renewable energy to the southern grid."
  },
  {
    id: 2,
    title: "Addis-Djibouti Logistics Hub",
    location: "Dire Dawa, Ethiopia",
    category: "Infrastructure",
    description: "Large-scale industrial park and logistics center facilitating international trade."
  },
  {
    id: 3,
    title: "Blue Nile Irrigation System",
    location: "Amhara Region, Ethiopia",
    category: "Dam",
    description: "Extensive irrigation network supporting agricultural development in the basin."
  },
  {
    id: 4,
    title: "Bole International Expansion",
    location: "Addis Ababa, Ethiopia",
    category: "Infrastructure",
    description: "Modernization and terminal expansion for East Africa's busiest aviation hub."
  },
  {
    id: 5,
    title: "Awash River Bridge",
    location: "Afar Region, Ethiopia",
    category: "Infrastructure",
    description: "Critical infrastructure connecting the eastern corridor with high-durability engineering."
  },
  {
    id: 6,
    title: "Tekeze Power Plant Upgrade",
    location: "Tigray Region, Ethiopia",
    category: "Industrial",
    description: "Technical overhaul and capacity increase for one of the region's largest power plants."
  }
];

// --- Components ---

const Navbar = ({ navLinks }: { navLinks: { name: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="transition-transform group-hover:scale-110">
            <img src="https://www.svgrepo.com/show/443026/construction-crane.svg" alt="Simiya PLC Logo" className="w-12 h-12 object-contain brightness-0 invert" />
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter ${scrolled ? 'text-primary' : 'text-slate-900'}`}>
            SIMIYA<span className="text-primary-light">PLC</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-bold transition-colors text-blue-600 hover:text-orange-500 uppercase tracking-wide text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-slate-900'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-slate-900'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-50 border-b border-blue-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-blue-600 font-bold hover:text-orange-500 uppercase tracking-wide text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TowerCrane = () => {
  return (
    <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block" style={{ perspective: '2500px' }}>
      <motion.div 
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
        className="absolute right-[12%] bottom-0 w-16 h-[90%] preserve-3d"
        style={{ transformOrigin: 'bottom' }}
      >
        {/* Crane Base (Concrete Block) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 preserve-3d">
          <div className="absolute inset-0 bg-slate-700 border border-slate-600 translate-z-16"></div>
          <div className="absolute inset-0 bg-slate-700 border border-slate-600 translate-z-[-16px]"></div>
          <div className="absolute inset-0 bg-slate-800 border border-slate-600 rotate-y-90 translate-z-16"></div>
          <div className="absolute inset-0 bg-slate-800 border border-slate-600 rotate-y-90 translate-z-[-16px]"></div>
          <div className="absolute inset-0 bg-slate-600 border border-slate-500 rotate-x-90 translate-z-16"></div>
        </div>

        {/* Ground Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-20 bg-black/40 blur-2xl rounded-full -rotate-x-90 translate-y-10"></div>

        {/* Mast (Vertical Truss) */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-10 h-full preserve-3d">
          {/* 4 sides of the mast */}
          <div className="absolute inset-0 bg-slate-800/95 border-x-2 border-slate-700 translate-z-5">
            <div className="absolute inset-0 truss-pattern opacity-40"></div>
          </div>
          <div className="absolute inset-0 bg-slate-800/95 border-x-2 border-slate-700 translate-z-[-5px]">
            <div className="absolute inset-0 truss-pattern opacity-40"></div>
          </div>
          <div className="absolute inset-0 bg-slate-900/95 border-x-2 border-slate-700 rotate-y-90 translate-z-5">
            <div className="absolute inset-0 truss-pattern opacity-40"></div>
          </div>
          <div className="absolute inset-0 bg-slate-900/95 border-x-2 border-slate-700 rotate-y-90 translate-z-[-5px]">
            <div className="absolute inset-0 truss-pattern opacity-40"></div>
          </div>
        </div>

        {/* Slewing Unit (The part that rotates) */}
        <motion.div 
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 left-1/2 -translate-x-1/2 preserve-3d w-0 h-0"
        >
          {/* Slewing Ring */}
          <div className="absolute -top-4 -left-6 w-12 h-8 bg-slate-950 rounded-full border-2 border-slate-800 translate-z-0 rotate-x-90"></div>

          {/* Operator Cabin */}
          <div className="absolute -top-10 -left-12 w-14 h-14 bg-primary border-2 border-primary-dark rounded-md shadow-2xl translate-z-8">
            <div className="absolute inset-1.5 bg-blue-300/40 rounded-sm border border-white/20"></div>
            <div className="absolute -right-1 top-2 w-1 h-8 bg-black/20"></div>
            {/* Blinking Safety Light */}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-1 right-2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"
            ></motion.div>
          </div>

          {/* Jib Structure */}
          <div className="absolute top-0 left-[-180px] w-[700px] h-10 preserve-3d">
            {/* Counter Jib */}
            <div className="absolute left-0 w-[180px] h-full bg-slate-800 border-2 border-slate-700 preserve-3d">
              <div className="absolute inset-0 truss-pattern opacity-20"></div>
              {/* Concrete Counterweights */}
              <div className="absolute left-6 top-1 w-24 h-12 bg-slate-400 border-2 border-slate-500 translate-z-4 shadow-xl"></div>
              <div className="absolute left-6 top-1 w-24 h-12 bg-slate-400 border-2 border-slate-500 translate-z-[-4px] shadow-xl"></div>
              {/* Blinking Safety Light */}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                className="absolute top-0 left-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_red]"
              ></motion.div>
            </div>

            {/* Main Jib */}
            <div className="absolute left-[180px] w-[520px] h-full preserve-3d">
              {/* 3D Box for Jib */}
              <div className="absolute inset-0 bg-slate-800/90 border-y-2 border-slate-700 translate-z-4">
                <div className="absolute inset-0 truss-pattern opacity-30"></div>
              </div>
              <div className="absolute inset-0 bg-slate-800/90 border-y-2 border-slate-700 translate-z-[-4px]">
                <div className="absolute inset-0 truss-pattern opacity-30"></div>
              </div>
              <div className="absolute inset-0 bg-slate-900/90 border-x-2 border-slate-700 rotate-x-90 translate-z-4">
                <div className="absolute inset-0 truss-pattern opacity-30"></div>
              </div>
              {/* Blinking Safety Light at the end of Jib */}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute top-0 right-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_red]"
              ></motion.div>

              {/* Trolley & Hook System */}
              <motion.div 
                animate={{ x: [40, 460, 40] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-full preserve-3d"
              >
                {/* Trolley */}
                <div className="w-10 h-6 bg-slate-950 border-2 border-slate-700 -translate-x-5 shadow-lg"></div>
                {/* Steel Cables */}
                <div className="w-0.5 h-64 bg-slate-400/60 mx-auto -translate-x-0.25 shadow-sm"></div>
                {/* Hook Block */}
                <motion.div 
                  animate={{ y: [0, 30, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-12 bg-primary rounded-b-2xl mx-auto -translate-x-4 shadow-2xl flex flex-col items-center justify-center border-2 border-primary-dark"
                >
                  <div className="w-3 h-3 bg-primary-dark rounded-full mb-1"></div>
                  <div className="w-1 h-4 bg-slate-800 rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Tower Head (Apex) */}
          <div className="absolute -top-28 left-0 w-4 h-28 bg-slate-800 border-x-2 border-slate-700 -translate-x-2 preserve-3d">
            <div className="absolute inset-0 truss-pattern opacity-40"></div>
            {/* Guy Wires */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-28 pointer-events-none opacity-50">
              <svg className="w-full h-full overflow-visible">
                <line x1="350" y1="0" x2="0" y2="28" stroke="#94a3b8" strokeWidth="1" />
                <line x1="350" y1="0" x2="180" y2="28" stroke="#94a3b8" strokeWidth="1" />
                <line x1="350" y1="0" x2="700" y2="28" stroke="#94a3b8" strokeWidth="1" />
                <line x1="350" y1="0" x2="450" y2="28" stroke="#94a3b8" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-blue-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-transparent to-blue-50"></div>
      </div>
      
      <TowerCrane />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Building Ethiopia's Future
          </span>
          <h1 className="text-5xl md:text-7xl text-slate-900 mb-6 leading-[1.1] font-display font-bold">
            Engineering Excellence <br />
            <span className="text-primary">Across the Nation</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Simiya PLC is a premier construction firm based in Addis Ababa, specializing in large-scale infrastructure, dam construction, and industrial projects that power Ethiopia's growth.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-16 text-slate-400 hidden lg:flex">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-slate-900">21+</span>
          <span className="text-sm uppercase tracking-wider font-bold">Major Projects</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-slate-900">100+</span>
          <span className="text-sm uppercase tracking-wider font-bold">Expert Staff</span>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Dam' | 'Infrastructure' | 'Industrial'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl text-slate-900 mb-4">Our Landmark Projects</h2>
            <p className="text-slate-600 max-w-xl">
              From the highlands of Amhara to the valleys of the South, we are proud to have contributed to Ethiopia's most significant infrastructure developments.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Dam', 'Infrastructure', 'Industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors font-display font-bold">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="text-primary text-sm font-bold flex items-center gap-2 group/btn uppercase tracking-wider">
                    Project Details <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Dam & Hydroelectric",
      desc: "Specialized engineering for large-scale water management and renewable energy generation."
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "Civil Infrastructure",
      desc: "Road networks, bridges, and urban developments designed for longevity and efficiency."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Project Management",
      desc: "End-to-end oversight ensuring projects are delivered on time, within budget, and to international standards."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Industrial Construction",
      desc: "Manufacturing plants, warehouses, and specialized industrial facilities for the modern economy."
    }
  ];

  return (
    <section id="services" className="section-padding bg-blue-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-light/5 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-slate-900 mb-4">Our Core Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine technical innovation with local knowledge to deliver complex projects that meet the highest global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-xl text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-primary-light font-semibold uppercase tracking-widest mb-6 block">About Simiya PLC</span>
        <h2 className="text-4xl md:text-6xl mb-10 leading-tight font-display font-bold">
          Engineering Ethiopia's <br />
          <span className="text-primary-light">Grandest Visions.</span>
        </h2>
        <div className="space-y-8 text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Simiya PLC stands at the forefront of Ethiopia's infrastructure revolution. Specializing in high-impact projects like the Grand Ethiopian Renaissance Dam and major national road networks, we bring world-class engineering expertise to local challenges.
          </p>
          <p>
            Our commitment goes beyond construction; we are building the foundations for national prosperity, energy independence, and sustainable growth for generations to come.
          </p>
          <div className="pt-6">
            <a 
              href="/Simiya_Corporate_Profile.pdf" 
              download="Simiya_Corporate_Profile.pdf"
              className="inline-flex bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold items-center gap-3 mx-auto transition-all shadow-lg hover:shadow-primary/20 group"
            >
              <FileDown className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
              Download Company Profile (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl text-slate-900 mb-6">Let's Build Together</h2>
              <p className="text-slate-600 mb-10">
                Have a project in mind? Our team of experts is ready to discuss how we can bring your vision to life.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Headquarters</div>
                    <div className="text-lg text-slate-900">Bole District, Addis Ababa, Ethiopia</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Contact Us</div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-900 font-bold">Amanuel Bekele</p>
                        <p className="text-xs text-slate-500">General Manager</p>
                        <a href="tel:+251911239815" className="text-lg text-slate-900 hover:text-primary transition-colors">+251 911 239 815</a>
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold">Bogdan A. Bekele</p>
                        <p className="text-xs text-slate-500">Deputy General Manager</p>
                        <a href="tel:+251911409165" className="text-lg text-slate-900 hover:text-primary transition-colors">+251 911 409 165</a>
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold">Office Number</p>
                        <a href="tel:+251967590000" className="text-lg text-slate-900 hover:text-primary transition-colors">+251 96 759 0000</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Us</div>
                    <div className="text-lg text-slate-900">info@simiyaplc.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 p-10 md:p-16 border-l border-blue-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                    <option>New Project Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ navLinks }: { navLinks: { name: string, href: string }[] }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="transition-transform hover:scale-110">
                <img src="https://www.svgrepo.com/show/443026/construction-crane.svg" alt="Simiya PLC Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                SIMIYA<span className="text-primary-light">PLC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading the way in Ethiopia's construction industry with innovative engineering and sustainable infrastructure solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all" title="LinkedIn Profile">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://maps.google.com/?q=Bole+District,+Addis+Ababa,+Ethiopia" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all" title="Our Location (Google Maps)">
                <Map className="w-5 h-5" />
              </a>
              <a href="https://wa.me/251111234567" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all" title="WhatsApp Chat">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://t.me/simiyaplc" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all" title="Telegram Channel">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">Home</a></li>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-light transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-white font-medium">Amanuel Bekele</p>
                <p className="text-xs mb-1 text-slate-500">General Manager</p>
                <a href="tel:+251911239815" className="hover:text-primary transition-colors">+251 911 239 815</a>
              </div>
              <div>
                <p className="text-white font-medium">Bogdan A. Bekele</p>
                <p className="text-xs mb-1 text-slate-500">Deputy General Manager</p>
                <a href="tel:+251911409165" className="hover:text-primary transition-colors">+251 911 409 165</a>
              </div>
              <div>
                <p className="text-white font-medium">Office Number</p>
                <a href="tel:+251967590000" className="hover:text-primary transition-colors">+251 96 759 0000</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm mb-6">Stay updated with our latest projects and industry news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-primary" />
              <button className="bg-primary p-2 rounded-lg text-white hover:bg-primary-dark transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p>© {new Date().getFullYear()} Simiya PLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [navLinks, setNavLinks] = useState<{ name: string, href: string }[]>([]);

  useEffect(() => {
    fetch('/api/navigation')
      .then(res => res.json())
      .then(data => setNavLinks(data))
      .catch(err => console.error('Error fetching navigation:', err));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar navLinks={navLinks} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer navLinks={navLinks} />
    </div>
  );
}
