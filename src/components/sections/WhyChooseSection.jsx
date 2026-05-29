import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';
import { whyChooseUs } from '../../data/companyInfo';

export default function WhyChooseSection({ light = false }) {
  return (
    <section className={`section-padding ${light ? 'bg-industrial' : 'bg-white'}`}>
      <div className="container-xl">
        <SectionTitle
          label="Why Choose Us"
          title="The Marz Global Advantage"
          subtitle="We combine industry expertise with operational excellence to deliver an unmatched supply experience."
          align="center"
          light={light}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
