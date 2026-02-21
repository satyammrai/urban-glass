import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Star, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Mail,
  Shield,
  Zap,
  Award,
  Maximize,
  Layout,
  Layers,
  Sparkles,
  Menu,
  X,
  ArrowDown,
  Building2,
  Briefcase,
  Scale,
  CreditCard,
  Plane,
  Home,
  CloudUpload,
  Trash2,
  Play,
  ArrowUpRight,
  Calendar,
  FilePlus
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed flex z-50 text-white mix-blend-difference w-full px-6 md:px-12 py-6 md:py-8 top-0 items-center justify-between">
        <a href="#" className="block">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-white flex items-center justify-center">
              <span className="text-lg font-display font-bold">U</span>
            </div>
            <span className="text-sm font-display font-bold tracking-widest uppercase hidden sm:block">Urban Glass</span>
          </div>
        </a>
        <div className="hidden md:flex gap-10 uppercase text-[10px] font-semibold tracking-[0.3em]">
          <a href="#collections" className="hover:text-gray-300 transition-colors">Collections</a>
          <a href="#gallery" className="hover:text-gray-300 transition-colors">Gallery</a>
          <a href="#studio" className="hover:text-gray-300 transition-colors">The Studio</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-dark z-[45] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {['Collections', 'Gallery', 'The Studio', 'Contact'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '')}`}
            onClick={() => setIsOpen(false)}
            className="text-bg font-display text-2xl uppercase tracking-tighter hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="mt-8 flex flex-col items-center gap-4">
          <a href="tel:9266747433" className="text-bg/60 text-xs uppercase tracking-widest">9266747433</a>
          <div className="flex gap-6">
            <MessageSquare className="w-5 h-5 text-accent" />
            <Phone className="w-5 h-5 text-accent" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-[0.4]" 
        autoPlay loop muted playsInline
      >
        <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      <div className="text-white text-center mix-blend-difference z-10 px-4 relative">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="font-display text-[10vw] leading-[0.85] tracking-tighter uppercase"
        >
          URBAN GLASS
        </motion.h1>
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
          className="font-display text-[10vw] leading-[0.85] tracking-tighter uppercase"
        >
          STUDIO
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] leading-relaxed mb-8">
            Premium Toughened Glass & Mirror Solutions in Gurgaon
          </p>
          <div className="flex justify-center gap-8">
            <a href="#collections" className="btn-line uppercase text-[10px] tracking-[0.3em] pb-1">
              View Collections
            </a>
            <a href="#contact" className="btn-line text-[10px] uppercase tracking-[0.3em] pb-1">
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

const StudioSpotlight = () => {
  return (
    <section id="studio" className="relative h-screen flex flex-col items-center justify-between py-16 overflow-hidden bg-slate-900 text-white border-b border-white/10">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="https://videos.pexels.com/video-files/7034458/7034458-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center mt-12"
      >
        <div className="mb-8 opacity-90">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="20" cy="20" r="18" strokeOpacity="0.5"></circle>
            <circle cx="20" cy="20" r="12"></circle>
            <path d="M20 8v24M8 20h24" strokeOpacity="0.3"></path>
          </svg>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.5em] mb-2 font-light">The</p>
        <h2 className="font-serif text-6xl md:text-8xl tracking-[0.2em] uppercase font-light text-center leading-none mb-6">
          STUDIO
        </h2>
        
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">
          <span>LED Mirrors</span>
          <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
          <span>Toughened Glass</span>
          <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
          <span>Partitions</span>
        </div>
      </motion.div>

      <div className="relative z-10">
        <button className="group flex items-center gap-3 backdrop-blur-md bg-white/10 border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500">
          <span className="uppercase text-[10px] tracking-[0.3em] font-semibold">Watch Studio Tour</span>
          <div className="bg-white text-black rounded-full p-1 group-hover:bg-black group-hover:text-white transition-colors">
            <Play className="w-3 h-3 fill-current" />
          </div>
        </button>
      </div>

      <div className="relative z-10 mb-8 text-center">
        <h3 className="text-2xl font-serif tracking-[0.3em] uppercase">URBAN GLASS</h3>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mt-2">Gurugram's Luxury Standard</p>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-bg relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[3/4] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/craftsman/800/1000" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
              alt="Master Craftsman"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/3205626/3205626-hd_1920_1080_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-dark text-white p-8 w-max max-w-xs z-10 shadow-2xl">
            <div className="font-display text-xl">PRECISION</div>
            <div className="text-[10px] uppercase tracking-widest opacity-60 mt-2">
              Our Core Philosophy
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-gray-400"></span> Luxury Glass Specialists
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-8 tracking-tight leading-tight uppercase">
            YOUR TRUSTED
            <br />
            <span className="text-accent">GLASS PARTNER</span>
          </h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
            <p>
              Welcome to URBAN GLASS, your trusted glass and mirror experts in Sector 69, Darbaripur Road, Gurgaon. We specialize in toughened glass, decorative mirrors, designer glass, and high-quality fittings for residential, commercial, and industrial spaces.
            </p>
            <p>
              With years of experience in the glass industry, our team delivers precision, durability, and modern designs in every project. From glass partitions and shower cabins to wall mirrors and custom furniture glass, we provide complete solutions tailored to your needs.
            </p>
            <div className="py-6 border-t border-b border-gray-300">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Premium Quality
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Custom Solutions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Expert Installation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Affordable Pricing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Customer Satisfaction
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Local Gurgaon Service
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center gap-3 uppercase text-[10px] tracking-[0.3em] border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300">
              Book Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardStack = () => {
  const products = [
    {
      id: "01",
      title: "TOUGHENED GLASS",
      location: "8mm, 10mm, 12mm",
      desc: "Strong, durable & stylish glass for partitions, railings, shower cubicles, and doors. Engineered for maximum safety and modern aesthetics.",
      price: "Premium Quality Guaranteed",
      image: "https://picsum.photos/seed/toughened/800/1000",
      video: null
    },
    {
      id: "02",
      title: "DECORATIVE MIRRORS",
      location: "Custom Wall Mirrors",
      desc: "Tinted mirrors and designer styles to enhance modern interiors. Perfect for living rooms, bedrooms, and offices to create a spacious feel.",
      price: "Bespoke Designs",
      image: "https://picsum.photos/seed/dec-mirror/800/1000",
      video: null
    },
    {
      id: "03",
      title: "FROSTED & DESIGNER GLASS",
      location: "Privacy & Aesthetics",
      desc: "Elegant frosted and patterned glass for office cabins, bathrooms, and decorative interiors. Combines privacy with sophisticated design.",
      price: "Custom Patterns",
      image: "https://picsum.photos/seed/frosted/800/1000",
      video: null
    },
    {
      id: "04",
      title: "INSTALLATION SERVICE",
      location: "Professional Support",
      desc: "Expert repair, cutting, polishing & drilling services. Reliable fitting for homes, offices, and commercial projects by local Gurgaon experts.",
      price: "Onsite Support Available",
      image: "https://picsum.photos/seed/install/800/1000",
      video: null
    }
  ];

  return (
    <section id="collections" className="stack-section py-32">
      <div className="text-center mb-24 px-6">
        <div className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-50">
          Selected Collections
        </div>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase">
          PRODUCT SHOWCASE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {products.map((p, i) => (
          <div key={p.id} className="card-item">
            <div className="card-inner">
              <div className="card-content">
                <div>
                  <div className="text-4xl font-display mb-4 text-bg opacity-30">
                    {p.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                    {p.title}
                  </h3>
                  <p className="text-[10px] mt-4 opacity-70 uppercase tracking-[0.3em] flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </p>
                </div>
                <div className="text-gray-400 font-light text-sm md:text-base leading-relaxed my-6">
                  {p.desc}
                  <br /><br />
                  <span className="text-white block mt-2 text-lg font-normal">
                    {p.price}
                  </span>
                </div>
                <button className="text-left uppercase tracking-[0.3em] text-[10px] border-b border-white/30 pb-2 w-max hover:text-white transition-colors group flex items-center gap-2">
                  Request Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative overflow-hidden group">
                {p.video ? (
                  <video 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                    autoPlay loop muted playsInline
                  >
                    <source src={p.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={p.image} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                    alt={p.title}
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur px-3 py-1 text-[8px] uppercase tracking-wider text-white border border-white/20">
                  {p.video ? "Video Preview" : "Visual Reference"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyInvest = () => {
  return (
    <section className="py-32 bg-bg relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-tight uppercase">
              WHY CHOOSE URBAN GLASS
            </h2>
            <div className="h-px w-20 bg-black/20 mb-8"></div>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
              We bring Gurgaon's finest homes and commercial spaces to life with glass work that defines luxury, durability, and precision.
            </p>
          </div>
          <div className="bg-white/50 p-10 border border-white/60 backdrop-blur-sm shadow-lg">
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] mb-1">
                    Premium Quality Glass & Mirrors
                  </h4>
                  <p className="text-xs text-gray-500">
                    Toughened, decorative, and custom solutions using only high-grade products.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] mb-1">
                    Expert Craftsmanship
                  </h4>
                  <p className="text-xs text-gray-500">
                    Precision glass cutting, polishing, and edge finishing for a perfect look.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] mb-1">
                    Professional Installation
                  </h4>
                  <p className="text-xs text-gray-500">
                    Reliable and safe fitting for homes, offices, and commercial projects.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] mb-1">
                    Custom Designs
                  </h4>
                  <p className="text-xs text-gray-500">
                    Tailored solutions that fit your style and space requirements perfectly.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkGallery = () => {
  const projects = [
    {
      title: "Office Glass Partitions",
      desc: "Create a professional and modern environment with natural light flow and noise control.",
      image: "https://picsum.photos/seed/office-part/800/600"
    },
    {
      title: "Shower Glass Cabins",
      desc: "Luxury toughened safety glass cabins, custom-designed to be water-resistant and durable.",
      image: "https://picsum.photos/seed/shower-cabin/800/600"
    },
    {
      title: "Balcony & Stair Railings",
      desc: "Strong, secure toughened glass railings that create an open and spacious look.",
      image: "https://picsum.photos/seed/railing/800/600"
    },
    {
      title: "Glass Tables & Furniture",
      desc: "Custom-cut glass for dining tables and office desks with a smooth, premium finish.",
      image: "https://picsum.photos/seed/furniture/800/600"
    },
    {
      title: "Gym & Dance Studio Mirrors",
      desc: "Premium distortion-free mirrors with strong mounting for effective performance.",
      image: "https://picsum.photos/seed/gym-mirror/800/600"
    },
    {
      title: "Wall & Bathroom Mirrors",
      desc: "Moisture-resistant, elegant mirrors designed to make spaces appear larger and brighter.",
      image: "https://picsum.photos/seed/bathroom-mirror/800/600"
    },
    {
      title: "Custom Designer Mirrors",
      desc: "Creative shapes, patterns, and finishes to bring your unique vision to life.",
      image: "https://picsum.photos/seed/custom-mirror/800/600"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-dark text-bg relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-semibold mb-4 block">Our Work Gallery</span>
          <h2 className="font-display text-4xl md:text-6xl uppercase">Glass Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden aspect-[4/5] bg-black/20"
            >
              <img 
                src={p.image} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                alt={p.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-lg font-display mb-2 uppercase leading-tight">{p.title}</h4>
                <p className="text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-32 bg-bg relative z-10 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6">
              Visit Our Studio
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-8 tracking-tight uppercase">
              GURUGRAM
              <br />
              HEADQUARTERS
            </h2>
            <div className="space-y-8 text-gray-600 font-light text-lg leading-relaxed">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <p>Sector 69, Darbaripur Road,<br />Gurgaon, Haryana 122101</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <p className="font-semibold text-dark uppercase text-[10px] tracking-widest mb-1">Studio Hours</p>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a 
                href="https://www.google.com/maps/place/URBAN+GLASS/@28.394651,77.0363999,698m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d23143ae727f7:0x57100907f465c786!8m2!3d28.394651!4d77.0363999!16s%2Fg%2F11x6dj0z3c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 uppercase text-[10px] tracking-[0.3em] bg-dark text-white px-8 py-4 hover:bg-accent transition-colors duration-300"
              >
                Open in Google Maps
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="h-[500px] w-full bg-white shadow-2xl relative overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3248643874!2d77.033824975503!3d28.39465567579659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23143ae727f7%3A0x57100907f465c786!2sURBAN%20GLASS!5e0!3m2!1sen!2sin!4v1740154200000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-black/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaManager = () => {
  const [activeTab, setActiveTab] = React.useState<'upload' | 'embed'>('upload');
  
  return (
    <section className="py-32 bg-bg relative z-10 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6">
              Our Process
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-8 tracking-tight uppercase">
              DESIGN & MEDIA
              <br />
              COLLABORATION
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
              We work closely with interior designers and architects. Use our portal to share your site measurements and design inspirations seamlessly.
            </p>
          </div>
          <div className="bg-white p-8 shadow-2xl border border-white/60 relative">
            <div className="flex gap-6 mb-8 border-b border-gray-100">
              <button 
                onClick={() => setActiveTab('upload')}
                className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all ${activeTab === 'upload' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}
              >
                Upload Inspiration
              </button>
              <button 
                onClick={() => setActiveTab('embed')}
                className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-semibold transition-all ${activeTab === 'embed' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}
              >
                Embed Reference
              </button>
            </div>
            
            {activeTab === 'upload' ? (
              <div className="border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors p-12 text-center cursor-pointer relative group rounded-lg">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" multiple />
                <div className="pointer-events-none transition-transform group-hover:scale-105">
                  <CloudUpload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                  <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-500">
                    Drag & Drop or Click to Upload
                  </p>
                  <p className="text-[8px] text-gray-400 mt-2 uppercase tracking-widest">
                    JPG, PNG, PDF Supported
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-0">
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:border-black outline-none transition-colors font-medium placeholder:text-gray-400" 
                  placeholder="Paste Reference Link..." 
                />
                <button className="bg-black text-white px-6 text-[10px] uppercase tracking-[0.3em] hover:bg-accent transition-colors">
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterReveal = () => {
  return (
    <footer className="footer-sticky" id="contact">
      <motion.div 
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 w-full max-w-4xl"
      >
        <div className="text-[10px] uppercase tracking-[0.5em] mb-4 text-gray-500">
          Ready to elevate your space?
        </div>
        <h2 className="font-display text-[5vw] leading-none mb-12 uppercase">
          LET'S DISCUSS
          <br />
          YOUR VISION
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto w-full">
          <a href="https://wa.me/9266747433" className="group border border-white/20 p-6 hover:bg-white hover:text-black transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
              <Calendar className="w-6 h-6" />
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left text-[10px] uppercase tracking-[0.3em] font-semibold">
              Book Site Visit
            </div>
          </a>
          <a href="tel:9266747433" className="group border border-white/20 p-6 hover:bg-white hover:text-black transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
              <FilePlus className="w-6 h-6" />
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left text-[10px] uppercase tracking-[0.3em] font-semibold">
              Call 9266747433
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-20 text-[10px] uppercase tracking-[0.3em] text-gray-500">
          <a href="https://share.google/9H56va3hvw9McAQ6S" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Profile</a>
          <a href="mailto:urban.glass.in@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="tel:9266747433" className="hover:text-white transition-colors">Phone</a>
          <a href="https://wa.me/9266747433" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        <div className="mt-12 text-[8px] text-gray-700 uppercase tracking-widest">
          © Urban Glass 2025 --- Premium Glass & Mirror Solutions
        </div>
      </motion.div>
      <img 
        src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2800&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale" 
        alt="Glass Texture"
      />
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Navbar />
      
      <div className="footer-reveal-container">
        <Hero />
        <StudioSpotlight />
        <Intro />
        <CardStack />
        <WhyInvest />
        <WorkGallery />
        <LocationSection />
        <MediaManager />
      </div>

      <FooterReveal />
    </div>
  );
}
