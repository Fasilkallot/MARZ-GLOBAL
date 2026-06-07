import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/layout/PageBanner';

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Marz Global UAE</title>
        <meta name="description" content="Cookie Policy for Marz Global Trading FZE — How we use cookies and similar technologies on our website." />
        <link rel="canonical" href="https://marzglobaluae.com/cookie-policy" />
      </Helmet>

      <main>
        <PageBanner
          title="Cookie Policy"
          subtitle="How we use cookies and similar technologies on our website."
          breadcrumbs={[{ label: 'Cookie Policy' }]}
        />

        <section className="section-padding bg-white">
          <div className="container-xl max-w-4xl">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

              {[
                {
                  title: '1. What Are Cookies',
                  content: `Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, such as your preferences, and can help make your next visit easier and the site more useful to you.`,
                },
                {
                  title: '2. How We Use Cookies',
                  content: `Marz Global UAE uses cookies to:
                  • Ensure our website functions correctly
                  • Remember your preferences
                  • Analyze how visitors use our website
                  • Improve our website performance and user experience`,
                },
                {
                  title: '3. Types of Cookies We Use',
                  content: `Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas.
                  
                  Performance Cookies: These cookies help us understand how visitors interact with our website by collecting anonymous information. This helps us improve the website.
                  
                  Functional Cookies: These cookies allow the website to remember choices you make and provide enhanced features.`,
                },
                {
                  title: '4. Managing Cookies',
                  content: `You can control cookies through your browser settings. Most browsers allow you to:
                  • View what cookies are stored on your device
                  • Delete cookies individually or all at once
                  • Block cookies from specific websites
                  • Block all cookies from being set
                  
                  Note that disabling cookies may affect the functionality of our website.`,
                },
                {
                  title: '5. Third-Party Cookies',
                  content: `We may use third-party services that set cookies on your device. These include analytics services that help us understand website usage. We do not control these third-party cookies.`,
                },
                {
                  title: '6. Updates to This Policy',
                  content: `We may update this Cookie Policy from time to time. We encourage you to review this page periodically for any changes.`,
                },
                {
                  title: '7. Contact Us',
                  content: `If you have questions about our use of cookies, please contact us:\n\nMarz Global Trading FZE\nEmail: sales@marzglobaluae.com\nPhone: +971 55 882 6364`,
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
