import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function FeatureCard({ icon, title, description, index = 0, accent = false }) {
  const Icon = Icons[icon] || Icons.Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group card p-6 md:p-7 rounded border-l-4 hover:-translate-y-1 ${
        accent ? 'border-l-secondary' : 'border-l-transparent hover:border-l-secondary'
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
        <Icon
          size={22}
          className="text-primary group-hover:text-secondary transition-colors"
        />
      </div>

      <h3 className="font-heading text-xl font-bold text-primary mb-2.5 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
