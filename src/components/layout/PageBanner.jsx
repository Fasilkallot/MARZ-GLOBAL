import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle, breadcrumbs = [], bgImage }) {
  return (
    <section
      className="relative bg-industrial overflow-hidden"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-secondary" />

      <div className="relative container-xl py-16 md:py-20">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-xs text-gray-300 mb-4 font-medium"
          >
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-gray-500" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-secondary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-secondary">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-200 text-lg max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative element */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-1 bg-secondary rounded-full" />
          <div className="w-4 h-1 bg-secondary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
