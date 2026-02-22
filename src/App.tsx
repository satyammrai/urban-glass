import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Mail, 
  Star, 
  ArrowRight, 
  Menu, 
  X, 
  Shield, 
  Zap, 
  Award, 
  Maximize, 
  Layout, 
  Layers, 
  Sparkles, 
  ArrowUpRight,
  Settings,
  Hammer,
  Truck,
  Building2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-dark text-white' : 'py-8 bg-transparent text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
            <span className="text-xl font-bold tracking-tighter">U</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] uppercase">Urban Glass</span>
            <span className="text-[8px] tracking-[0.4em] uppercase opacity-60">अर्बन ग्लास</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8 uppercase text-[10px] font-bold tracking-[0.2em]">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-accent transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9266747433" className="flex items-center gap-2 bg-accent text-dark px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:scale-105 transition-transform">
              <Phone className="w-3 h-3" />
              Call Now
            </a>
            <a href="https://wa.me/9266747433" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-dark transition-all">
              <MessageSquare className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark text-white p-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-bold">
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a href="tel:9266747433" className="bg-accent text-dark py-4 rounded-lg font-bold uppercase tracking-widest">Call Now</a>
                <a href="https://wa.me/9266747433" className="border border-white/20 py-4 rounded-lg font-bold uppercase tracking-widest">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 grayscale"
          alt="Luxury Glass Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
              <Star className="w-3 h-3 text-accent fill-accent" />
              5.0 Rated on Google
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
              <Award className="w-3 h-3 text-accent" />
              Gurgaon's Trusted Experts
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase mb-8">
            Redefining Spaces with <br />
            <span className="gold-gradient">Premium Glass</span>
          </h1>
          
          <p className="text-sm md:text-lg uppercase tracking-[0.4em] font-light mb-12 opacity-80">
            Toughened Glass • Designer Mirrors • LED Mirrors • Windows & Partitions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#contact" className="btn-luxury bg-accent text-dark border-none">
              <span>Get Free Site Visit</span>
            </a>
            <a href="https://wa.me/9266747433" className="btn-luxury text-white">
              <span>WhatsApp Now</span>
            </a>
          </div>

          <div className="mt-20 flex justify-center gap-12 opacity-40 grayscale">
            <div className="text-center">
              <div className="text-3xl font-bold">62+</div>
              <div className="text-[8px] uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-[8px] uppercase tracking-widest">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-[8px] uppercase tracking-widest">Years Exp</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="text-[8px] uppercase tracking-[0.5em] vertical-text">Scroll</div>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-4 bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Maximize className="w-8 h-8" />,
      title: "Consultation & Measurement",
      desc: "On-site visit, expert guidance, and custom sizing for your specific space."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Design & Fabrication",
      desc: "High-quality toughened glass & precision framing tailored to your vision."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Installation & Finish",
      desc: "Clean, safe, on-time professional installation by our expert team."
    }
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-12 border border-black/5 hover:border-accent transition-colors duration-500 relative overflow-hidden"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
              <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-black/[0.02] group-hover:text-accent/[0.05] transition-colors">0{i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      name: "LED Mirror with Frame",
      features: "Custom Colors • Touch Sensor • Anti-Fog",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Toughened Glass Panels",
      features: "High Strength • Safety Glass • Custom Cut",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Shower Glass Partitions",
      features: "Frameless • Sleek • Water Resistant",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Decorative Wall Mirrors",
      features: "Designer Styles • Tinted • Modern",
      image: "https://images.unsplash.com/photo-1616486341351-7973a69605d2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Glass Windows & Doors",
      features: "Energy Efficient • Sound Proof • Secure",
      image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Aluminium Frame Glass",
      features: "Durable • Minimalist • Multiple Finishes",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Commercial Glass Solutions",
      features: "Office Partitions • Shop Fronts • Safety",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Custom Glass Projects",
      features: "Bespoke Designs • Unique Finishes",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-32 bg-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Our Collections</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Premium Solutions</h2>
          </div>
          <p className="max-w-md text-gray-500 font-light leading-relaxed">
            Explore our architectural glass and mirror collections designed for modern luxury interiors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-white border border-black/5 overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={p.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{p.name}</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-6">{p.features}</p>
                <a href="#contact" className="flex items-center justify-between group/btn">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black/20 pb-1 group-hover/btn:border-accent transition-colors">Get Quote</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Toughened Glass",
      desc: "Maximum safety and durability for all installations."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Clean Edge Finishing",
      desc: "Precision polishing for a flawless, luxury look."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Moisture Resistant",
      desc: "Long-life mirrors designed for humid environments."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Factory Pricing",
      desc: "Competitive rates without compromising on quality."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Professional Installation",
      desc: "Expert wiring and safe onsite fitting."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Expertise",
      desc: "Residential and commercial project specialists."
    }
  ];

  return (
    <section id="services" className="py-32 bg-dark text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Why Urban Glass</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 leading-none">
            Uncompromising <br />
            <span className="gold-gradient">Quality Standards</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-12">
            {features.map((f, i) => (
              <div key={i} className="group">
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{f.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square glass-dark p-4 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-60"
              alt="Quality Glass"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Home Owner",
      text: "Amazing quality LED mirrors. The custom framing matches my bathroom perfectly. Professional installation team.",
      stars: 5
    },
    {
      name: "Priya Gupta",
      role: "Interior Designer",
      text: "Urban Glass is my go-to for all my architectural projects. Their toughened glass partitions are top-notch.",
      stars: 5
    },
    {
      name: "Vikram Singh",
      role: "Commercial Client",
      text: "Great experience with their office glass partitions. On-time delivery and very clean finishing.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Trusted by Gurgaon</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-12 border border-black/5 bg-bg/50">
              <div className="flex gap-1 mb-6">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-600 font-light italic leading-relaxed mb-8">"{r.text}"</p>
              <div>
                <div className="font-bold uppercase tracking-widest text-xs">{r.name}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-dark text-white px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Thinking of Glass Work <br />
            <span className="gold-gradient text-4xl md:text-7xl">For Your Home or Office?</span>
          </h2>
          <p className="text-lg md:text-xl font-light opacity-60 mb-12 max-w-2xl mx-auto">
            Get expert consultation, transparent pricing and premium finish. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="tel:9266747433" className="btn-luxury bg-accent text-dark border-none">
              <span>Call Now</span>
            </a>
            <a href="https://wa.me/9266747433" className="btn-luxury text-white">
              <span>WhatsApp for Quote</span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Architecture" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 border-2 border-accent flex items-center justify-center">
              <span className="text-lg font-bold tracking-tighter">U</span>
            </div>
            <span className="text-lg font-bold tracking-[0.2em] uppercase">Urban Glass</span>
          </div>
          <p className="text-xs text-gray-500 font-light leading-relaxed mb-8">
            Gurgaon's premier architectural glass studio specializing in luxury mirrors and toughened glass solutions for modern spaces.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500"><Star className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500"><Star className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-500"><Star className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-accent">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-xs font-light text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-accent">Services</h4>
          <ul className="flex flex-col gap-4 text-xs font-light text-gray-400">
            <li>LED Mirrors</li>
            <li>Toughened Glass</li>
            <li>Shower Partitions</li>
            <li>Glass Railings</li>
            <li>Commercial Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-accent">Contact Details</h4>
          <ul className="flex flex-col gap-6 text-xs font-light text-gray-400">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>Tulip Chowk, Sector 69, Badshahpur, Gurugram, Haryana</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:9266747433">92667 47433</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:urban.glass.in@gmail.com">urban.glass.in@gmail.com</a>
            </li>
            <li className="flex items-center gap-4">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[8px] uppercase tracking-[0.4em] text-gray-600">
          © 2026 URBAN GLASS. All Rights Reserved.
        </div>
        <div className="h-[200px] w-full md:w-[400px] glass-dark overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3248643874!2d77.033824975503!3d28.39465567579659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23143ae727f7%3A0x57100907f465c786!2sURBAN%20GLASS!5e0!3m2!1sen!2sin!4v1740154200000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <WhyUs />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
