import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, ShieldCheck, Clock, HeartHandshake, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    desc: 'Products meeting international standards',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: Network,
    title: 'Reliable Network',
    desc: 'Vetted supplier relationships',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'On-schedule supply, every project',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    desc: 'Tailored solutions for your needs',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
];

export default function AboutPreviewSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main box */}
            <div className="relative bg-primary rounded-lg overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <img
                  src={logo}
                  alt="Marz Global UAE"
                  className="w-full max-w-xs mb-6 bg-white rounded px-6 py-4"
                />
                <p className="text-white/80 text-sm leading-relaxed font-body">
                  UAE-Based Industrial Trading Company
                </p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <div className="w-6 h-0.5 bg-secondary/60" />
                  <span className="text-secondary/80 text-xs font-semibold tracking-widest uppercase">UAE</span>
                  <div className="w-6 h-0.5 bg-secondary/60" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary clip-corner" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-lg px-5 py-4 shadow-xl hidden md:block">
              <p className="font-heading text-2xl font-bold">8</p>
              <p className="text-xs text-white/80">Product Categories</p>
            </div>

            {/* Left accent bar */}
            <div className="absolute top-6 -left-3 w-1.5 h-24 bg-secondary rounded-full" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-heading mt-2 mb-5">
              Your Reliable Industrial Supply Partner in the UAE
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Marz Global Trading FZE is a UAE-based trading company
                specializing in the supply of Electricals Materials, General
                Supply, Safety Materials (PPE), Pipes, Fittings, Valves &amp;
                Flanges, Industrial Walkway Systems, Woods &amp; Timber,
                Welding Equipment &amp; Consumables, and Specialized Wire
                Products.
              </p>
              <p>
                We support key industries including civil construction,
                oil and gas, mining, energy, and infrastructure projects
                across the UAE. Through a strong network of reliable
                suppliers, we deliver quality products meeting international
                standards.
              </p>
              <p>
                Committed to efficiency, reliability, and customer
                satisfaction, we provide tailored solutions and timely
                delivery to meet the demands of every project.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded p-4 shadow-sm border border-gray-100">
                  <div className={`w-9 h-9 rounded ${p.bg} flex items-center justify-center flex-shrink-0`}>
                    <p.icon size={17} className={p.color} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary leading-tight">{p.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
