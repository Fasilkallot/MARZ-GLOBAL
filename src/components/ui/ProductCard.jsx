import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ProductCard({ product, index = 0, compact = false }) {
  const Icon = Icons[product.icon] || Icons.Package;

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group card p-5 rounded hover:-translate-y-1 border border-gray-100 hover:border-secondary/30"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
            <Icon size={18} className="text-primary group-hover:text-secondary transition-colors" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>
          </div>
        </div>
        <Link
          to={`/products#${product.id}`}
          className="mt-3 text-xs font-semibold text-secondary flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ArrowRight size={12} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card rounded overflow-hidden border border-gray-100 hover:border-secondary/30 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <div className="w-9 h-9 rounded bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <Icon size={16} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-xs bg-light text-gray-600 px-2 py-0.5 rounded border border-gray-200"
            >
              {h}
            </span>
          ))}
        </div>

        <Link
          to={`/products#${product.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-3 transition-all"
        >
          View Details <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
