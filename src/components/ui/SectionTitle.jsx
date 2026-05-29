import { motion } from 'framer-motion';

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 mb-10 md:mb-14 ${alignClasses[align]} ${className}`}
    >
      {label && (
        <span className="section-label text-secondary tracking-widest uppercase text-xs font-semibold">
          {label}
        </span>
      )}
      <h2
        className={`section-heading ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subheading max-w-2xl ${
            light ? 'text-gray-300' : 'text-gray-600'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
