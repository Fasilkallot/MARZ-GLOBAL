import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PageBanner from '../../components/layout/PageBanner';
import SectionTitle from '../../components/ui/SectionTitle';
import CTASection from '../../components/ui/CTASection';
import { productCategories } from '../../data/products';
import * as Icons from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const selectedProduct = activeCategory
    ? productCategories.find((p) => p.id === activeCategory)
    : null;

  return (
    <>
      <Helmet>
        <title>Products | Marz Global UAE — Industrial Material Supply</title>
        <meta
          name="description"
          content="Browse our complete range of industrial materials: Electrical, Mechanical, Civil, Hardware, Metal Products, Building Materials, Timber, and Instrumentation. Trusted supply in UAE."
        />
        <meta property="og:title" content="Industrial Products | Marz Global UAE" />
        <meta property="og:description" content="Comprehensive industrial material categories for construction, oil & gas, energy and infrastructure projects in the UAE." />
        <link rel="canonical" href="https://marzglobaluae.com/products" />
      </Helmet>

      <main>
        <PageBanner
          title="Our Product Categories"
          subtitle="A complete industrial material supply portfolio — everything your project needs from one trusted partner."
          breadcrumbs={[{ label: 'Products' }]}
        />

        {/* Category Navigation */}
        <section className="bg-white border-b border-gray-100 sticky top-[80px] z-30 shadow-sm">
          <div className="container-xl">
            <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
              {productCategories.map((cat) => {
                const Icon = Icons[cat.icon] || Icons.Package;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-primary hover:bg-primary/5 flex-shrink-0"
                  >
                    <Icon size={14} />
                    {cat.title}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products Detail Sections */}
        <div className="bg-light">
          {productCategories.map((product, i) => {
            const Icon = Icons[product.icon] || Icons.Package;
            const isEven = i % 2 === 0;

            return (
              <section
                key={product.id}
                id={product.id}
                className={`section-padding ${isEven ? 'bg-white' : 'bg-light'}`}
              >
                <div className="container-xl">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    >
                      <div className="rounded-lg overflow-hidden shadow-card-hover">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-72 md:h-80 object-contain bg-white"
                        />
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 shadow-sm">
                        <Icon size={14} className="text-primary" />
                        <span className="text-xs font-semibold text-primary">{product.title}</span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={!isEven ? 'lg:col-start-1' : ''}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <span className="section-label">{product.title}</span>
                      </div>

                      <h2 className="section-heading text-3xl md:text-4xl mb-4">
                        {product.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                      {/* Highlights */}
                      <div className="mb-7">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Product Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2">
                              <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                              <span className="text-sm text-gray-600">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        state={{ product: product.title }}
                        className="btn-primary"
                      >
                        Request Quote for {product.title.split(' ')[0]} <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <CTASection
          title="Can't Find What You Need?"
          subtitle="We source a wide range of industrial materials. Contact us with your requirements and we'll find a solution."
          primaryCTA={{ label: 'Contact Our Team', to: '/contact' }}
        />
      </main>
    </>
  );
}
