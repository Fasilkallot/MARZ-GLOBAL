import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import heroImg from '../../assets/products/general-supply.png';

const stats = [
  { value: '8', label: 'Product Categories' },
  { value: '5+', label: 'Industries Served' },
  { value: 'UAE', label: 'Nationwide Supply' },
  { value: '2025', label: 'Est. in UAE' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Industrial Supply"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Left Orange Accent Bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-secondary" />

      {/* Content */}
      <div className="relative container-xl py-20 md:py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 text-secondary text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Ajman Free Zone, UAE
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Trusted Industrial{' '}
            <span className="text-secondary">Material Supply</span>{' '}
            Partner in the UAE
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Supplying Electrical, Mechanical, Civil, Hardware, Timber and
            Instrumentation Products for Construction, Oil & Gas, Energy and
            Infrastructure Projects.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              to="/contact"
              id="hero-request-quote-btn"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-4 rounded hover:bg-secondary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 text-base"
            >
              Request Quote <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/971558826364?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20materials."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded hover:bg-white hover:text-primary transition-all duration-300 text-base"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>

          {/* Phone */}
          <motion.a
            href="tel:+971558826364"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors text-sm"
          >
            <Phone size={14} /> +971 55 882 6364
          </motion.a>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded p-4 text-center"
            >
              <p className="font-heading text-3xl font-bold text-secondary">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
