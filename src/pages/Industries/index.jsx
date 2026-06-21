import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageBanner from '../../components/layout/PageBanner';
import SectionTitle from '../../components/ui/SectionTitle';
import CTASection from '../../components/ui/CTASection';
import { industries } from '../../data/industries';
import { productCategories } from '../../data/products';
import * as Icons from 'lucide-react';

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries | Marz Global UAE — Industrial Supply Sectors</title>
        <meta
          name="description"
          content="Marz Global UAE serves Construction, Oil & Gas, Mining, Energy and Infrastructure industries in the UAE with quality industrial materials and reliable supply."
        />
        <meta property="og:title" content="Industries Served | Marz Global UAE" />
        <meta property="og:description" content="Specialized industrial material supply for Construction, Oil & Gas, Mining, Energy and Infrastructure sectors across the UAE." />
        <link rel="canonical" href="https://marzglobaluae.com/industries" />
      </Helmet>

      <main>
        <PageBanner
          title="Industries We Serve"
          subtitle="Deep expertise across the UAE's key industrial sectors — we understand your material requirements and deliver."
          breadcrumbs={[{ label: 'Industries' }]}
        />

        {/* Overview cards */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <SectionTitle
              label="Our Sectors"
              title="Powering UAE's Key Industries"
              subtitle="From construction to energy, we supply quality materials that keep the UAE's most important projects moving."
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
              {industries.map((ind, i) => {
                const Icon = Icons[ind.icon] || Icons.Building;
                return (
                  <a
                    key={ind.id}
                    href={`#${ind.id}`}
                    className="group card p-5 rounded text-center border border-gray-100 hover:border-secondary/40 hover:-translate-y-1 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/10 transition-colors">
                      <Icon size={22} className="text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="font-heading text-base font-bold text-primary group-hover:text-secondary transition-colors">
                      {ind.title}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Industry Sections */}
        {industries.map((industry, i) => {
          const Icon = Icons[industry.icon] || Icons.Building;
          const isEven = i % 2 === 0;
          const relatedProducts = productCategories.filter((p) =>
            industry.relevantProducts.includes(p.title)
          );

          return (
            <section
              key={industry.id}
              id={industry.id}
              className={`section-padding ${isEven ? 'bg-light' : 'bg-white'}`}
            >
              <div className="container-xl">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="rounded-lg overflow-hidden shadow-card-hover">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>

                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={!isEven ? 'lg:col-start-1' : ''}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <span className="section-label">{industry.tagline}</span>
                    </div>

                    <h2 className="section-heading text-3xl md:text-4xl mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{industry.overview}</p>

                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Our Supply Capabilities
                    </h4>
                    <div className="space-y-2 mb-7">
                      {industry.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <CheckCircle size={15} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{cap}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" state={{ industry: industry.title }} className="btn-primary">
                      Request {industry.title} Supply Quote <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        <CTASection
          title="Supply Your Next Industrial Project"
          subtitle="Tell us about your project and material requirements — we'll respond with a competitive quote."
        />
      </main>
    </>
  );
}
