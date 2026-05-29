import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { productCategories } from '../../data/products';

// Featured products — pick 4 visually rich ones
const featured = productCategories.filter((p) =>
  ['electrical', 'mechanical', 'timber', 'hardware'].includes(p.id)
);

export default function FeaturedProductsSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-xl">
        <SectionTitle
          label="Featured Products"
          title="Industrial Materials Built for Performance"
          subtitle="Explore our most in-demand product categories, trusted by contractors and industrial teams across the UAE."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large feature card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-lg overflow-hidden h-80 md:h-auto md:row-span-2"
          >
            <img
              src={featured[0].image}
              alt={featured[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ minHeight: 320 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-secondary text-xs font-semibold uppercase tracking-widest">
                {featured[0].title}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mt-1 mb-2">
                {featured[0].shortDescription}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured[0].highlights.slice(0, 3).map((h) => (
                  <span key={h} className="text-xs bg-white/15 text-white px-2 py-0.5 rounded border border-white/20">
                    {h}
                  </span>
                ))}
              </div>
              <Link
                to={`/products#${featured[0].id}`}
                className="inline-flex items-center gap-1.5 text-white font-semibold text-sm bg-secondary/80 hover:bg-secondary px-4 py-2 rounded transition-colors"
              >
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right column — 3 smaller cards */}
          <div className="flex flex-col gap-6">
            {featured.slice(1).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-lg overflow-hidden h-44"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-6">
                  <span className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">
                    {product.title}
                  </span>
                  <p className="text-white text-sm font-medium max-w-xs leading-snug mb-3">
                    {product.shortDescription}
                  </p>
                  <Link
                    to={`/products#${product.id}`}
                    className="flex items-center gap-1 text-secondary text-xs font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="btn-primary"
          >
            View All 8 Categories <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
