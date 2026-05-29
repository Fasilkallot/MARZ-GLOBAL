import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection({
  title = 'Need Materials For Your Next Project?',
  subtitle = 'Contact our team for a competitive quote. We supply quality industrial materials across the UAE.',
  primaryCTA = { label: 'Request Quote', to: '/contact' },
  secondaryCTA = { label: 'WhatsApp Us', href: 'https://wa.me/971558826364' },
  variant = 'primary',
}) {
  const bgClasses = {
    primary: 'bg-primary',
    dark: 'bg-dark',
    secondary: 'bg-secondary',
  };

  return (
    <section className={`${bgClasses[variant]} relative overflow-hidden`}>
      {/* Decorative pattern */}
      <div className="absolute inset-0 diagonal-stripe opacity-30" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="relative container-xl py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            <p className="text-white/75 text-base leading-relaxed">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 flex-shrink-0"
          >
            {primaryCTA.to ? (
              <Link
                to={primaryCTA.to}
                className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-7 py-3.5 rounded hover:bg-secondary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {primaryCTA.label} <ArrowRight size={16} />
              </Link>
            ) : (
              <a
                href={primaryCTA.href}
                className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-7 py-3.5 rounded hover:bg-secondary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {primaryCTA.label} <ArrowRight size={16} />
              </a>
            )}

            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded hover:bg-white hover:text-primary transition-all duration-300"
              >
                <MessageCircle size={16} />
                {secondaryCTA.label}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
