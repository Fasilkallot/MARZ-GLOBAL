import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function IndustryCard({ industry, index = 0 }) {
  const Icon = Icons[industry.icon] || Icons.Building;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded overflow-hidden h-64 cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-primary/90 group-hover:via-primary/50 transition-all duration-400" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
            <Icon size={16} className="text-secondary" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white">{industry.title}</h3>
        </div>
        <p className="text-gray-300 text-xs leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {industry.tagline}
        </p>
        <Link
          to={`/industries#${industry.id}`}
          className="flex items-center gap-1.5 text-secondary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:gap-3"
        >
          Learn More <ArrowRight size={12} />
        </Link>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-secondary transition-all duration-500" />
    </motion.div>
  );
}
