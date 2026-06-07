import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/layout/PageBanner';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marz Global UAE</title>
        <meta name="description" content="Privacy Policy for Marz Global Trading FZE — How we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://marzglobaluae.com/privacy-policy" />
      </Helmet>

      <main>
        <PageBanner
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information."
          breadcrumbs={[{ label: 'Privacy Policy' }]}
        />

        <section className="section-padding bg-white">
          <div className="container-xl max-w-4xl">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

              {[
                {
                  title: '1. Introduction',
                  content: `Marz Global Trading FZE ("we," "our," or "us"), operating as Marz Global UAE, is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website marzglobaluae.com or contact us for business purposes.`,
                },
                {
                  title: '2. Information We Collect',
                  content: `We may collect information that you voluntarily provide to us when you:
                  • Fill out our contact or quote request forms
                  • Send us an email or contact us via WhatsApp
                  • Call our phone number
                  
                  The types of information we may collect include: full name, company name, email address, phone number, and details about your material requirements.`,
                },
                {
                  title: '3. How We Use Your Information',
                  content: `We use the information we collect to:
                  • Respond to your quote requests and inquiries
                  • Provide you with product and pricing information
                  • Communicate with you about our products and services
                  • Improve our website and customer service
                  • Comply with legal obligations`,
                },
                {
                  title: '4. Disclosure of Your Information',
                  content: `We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.`,
                },
                {
                  title: '5. Data Security',
                  content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
                },
                {
                  title: '6. Cookies',
                  content: `Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. Please refer to our Cookie Policy for more information.`,
                },
                {
                  title: '7. Third-Party Links',
                  content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.`,
                },
                {
                  title: '8. Your Rights',
                  content: `You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at sales@marzglobaluae.com.`,
                },
                {
                  title: '9. Contact Us',
                  content: `If you have questions about this Privacy Policy, please contact us:\n\nMarz Global Trading FZE\nUAE\nEmail: sales@marzglobaluae.com\nPhone: +971 55 882 6364`,
                },
              ].map((section) => (
                <div key={section.title} className="mb-8">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
