import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import SectionTitle from '../ui/SectionTitle';
import { productCategories } from '../../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <SectionTitle
          label="What We Supply"
          title="Our Product Categories"
          subtitle="From electrical materials to specialized wire products — 8 industrial categories available from one trusted UAE supply partner."
          align="center"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productCategories.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} compact />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded hover:bg-primary-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
