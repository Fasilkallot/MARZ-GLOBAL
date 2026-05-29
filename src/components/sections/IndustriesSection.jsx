import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import IndustryCard from '../ui/IndustryCard';
import { industries } from '../../data/industries';

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-xl">
        <SectionTitle
          label="Industries We Serve"
          title="Specialized Supply Across Key Industries"
          subtitle="We understand the unique material requirements of each industry. Our team delivers the right products, on time, every time."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-primary font-semibold border-2 border-primary px-8 py-3.5 rounded hover:bg-primary hover:text-white transition-all duration-300"
          >
            Explore All Industries <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
