import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye } from 'lucide-react';
import PageBanner from '../../components/layout/PageBanner';
import SectionTitle from '../../components/ui/SectionTitle';
import FeatureCard from '../../components/ui/FeatureCard';
import CTASection from '../../components/ui/CTASection';
import { companyInfo, whyChooseUs } from '../../data/companyInfo';
import { industries } from '../../data/industries';
import logo from '../../assets/logo.png';
import * as Icons from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Marz Global UAE — Industrial Trading Company</title>
        <meta
          name="description"
          content="Learn about Marz Global Trading FZE — a UAE-based industrial material supply company. Committed to quality, reliability, and timely delivery."
        />
        <meta property="og:title" content="About Marz Global UAE" />
        <meta property="og:description" content="UAE-based industrial trading company specializing in electrical, mechanical, civil, and instrumentation materials." />
        <link rel="canonical" href="https://marzglobaluae.com/about" />
      </Helmet>

      <main>
        {/* Banner */}
        <PageBanner
          title="About Marz Global UAE"
          subtitle="A trusted industrial material supply partner, serving the UAE's most demanding projects."
          breadcrumbs={[{ label: 'About Us' }]}
        />

        {/* Company Overview */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label">Company Overview</span>
                <h2 className="section-heading mt-2 mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {companyInfo.fullDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Location', value: 'Ajman, UAE' },
                    { label: 'Market', value: 'United Arab Emirates' },
                    { label: 'Categories', value: '8 Product Lines' },
                  ].map((item) => (
                    <div key={item.label} className="bg-light rounded p-4 border border-gray-100">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">{item.label}</p>
                      <p className="text-primary font-bold font-heading text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-primary rounded-lg overflow-hidden p-10 aspect-square max-w-md mx-auto flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="relative text-center">
                    <img src={logo} alt="Marz Global" className="w-full max-w-xs mx-auto bg-white rounded px-6 py-4 mb-6" />
                    <p className="text-white/70 text-sm">UAE</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-secondary text-white rounded px-6 py-4 shadow-xl hidden md:block">
                  <p className="font-heading text-3xl font-bold">8</p>
                  <p className="text-xs text-white/80">Product Categories</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-light">
          <div className="container-xl">
            <SectionTitle
              label="Our Purpose"
              title="Mission & Vision"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-card border-l-4 border-secondary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                    <Target size={20} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{companyInfo.mission}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-8 shadow-card border-l-4 border-primary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center">
                    <Eye size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{companyInfo.vision}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <SectionTitle
              label="Industries"
              title="Industries We Serve"
              subtitle="We have deep expertise in supplying materials for these key sectors across the UAE."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {industries.map((ind, i) => {
                const Icon = Icons[ind.icon] || Icons.Building;
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group card p-6 rounded text-center border border-gray-100 hover:border-secondary/40 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                      <Icon size={22} className="text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{ind.tagline}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-light">
          <div className="container-xl">
            <SectionTitle
              label="Our Strengths"
              title="Why Choose Marz Global"
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseUs.map((f, i) => (
                <FeatureCard
                  key={f.id}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Project?"
          subtitle="Get in touch with our team to discuss your material requirements and receive a competitive quote."
        />
      </main>
    </>
  );
}
