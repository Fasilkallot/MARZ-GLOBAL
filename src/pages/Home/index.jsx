import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/sections/HeroSection';
import AboutPreviewSection from '../../components/sections/AboutPreviewSection';
import ProductCategoriesSection from '../../components/sections/ProductCategoriesSection';
import IndustriesSection from '../../components/sections/IndustriesSection';
import WhyChooseSection from '../../components/sections/WhyChooseSection';
import FeaturedProductsSection from '../../components/sections/FeaturedProductsSection';
import CTASection from '../../components/ui/CTASection';
import ContactInfoSection from '../../components/sections/ContactInfoSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Marz Global UAE | Trusted Industrial Material Supply Partner</title>
        <meta
          name="description"
          content="MARZ GLOBAL TRADING FZE - Trusted industrial material supply partner in the UAE. Supplying Electrical, Mechanical, Civil, Hardware, Timber and Instrumentation Products for Construction, Oil & Gas, Energy and Infrastructure Projects."
        />
        <meta property="og:title" content="Marz Global UAE | Industrial Supply Partner" />
        <meta
          property="og:description"
          content="UAE-based trading company supplying electrical, mechanical, civil, hardware, timber and instrumentation materials for all major industrial projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marzglobaluae.com" />
        <link rel="canonical" href="https://marzglobaluae.com" />
      </Helmet>

      <main>
        <HeroSection />
        <AboutPreviewSection />
        <ProductCategoriesSection />
        <IndustriesSection />
        <WhyChooseSection />
        <FeaturedProductsSection />
        <CTASection />
        <ContactInfoSection />
      </main>
    </>
  );
}
