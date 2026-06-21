import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="container-xl flex justify-between items-center">
          <span className="flex items-center gap-1.5 opacity-90">
            <span>📍</span> UAE
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:sales@marzglobaluae.com"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Mail size={12} />
              sales@marzglobaluae.com
            </a>
            <a
              href="tel:+971558826364"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone size={12} />
              +971 55 882 6364
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-nav'
            : 'bg-white border-b border-gray-100'
          }`}
      >
        <div className="container-xl">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Marz Global UAE"
                className="h-16 md:h-[4.5rem] w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link font-medium text-sm tracking-wide ${isActive ? 'text-primary active' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-primary rounded hover:bg-blue-50 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <img src={logo} alt="Marz Global UAE" className="h-[3.25rem] w-auto" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `block px-6 py-4 text-base font-medium border-b border-gray-50 transition-colors ${isActive
                          ? 'text-primary bg-blue-50 border-l-4 border-l-secondary pl-5'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-gray-100 space-y-3">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/971558826364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-green-600 transition-colors w-full"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:+971558826364"
                  className="flex items-center justify-center gap-2 text-primary font-medium text-sm py-2"
                >
                  <Phone size={14} /> +971 55 882 6364
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
