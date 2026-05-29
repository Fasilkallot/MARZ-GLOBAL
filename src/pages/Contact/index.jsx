import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, Loader } from 'lucide-react';
import PageBanner from '../../components/layout/PageBanner';
import { companyInfo } from '../../data/companyInfo';

const PRODUCT_OPTIONS = [
  'Electrical Materials',
  'Mechanical Materials',
  'Civil Materials',
  'Hardware & Safety',
  'Metal Products',
  'Building Materials',
  'Timber & Wood',
  'Instrumentation',
  'Other / Multiple',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with actual key
          subject: `New Quote Request from ${formData.name} — ${formData.company}`,
          from_name: 'Marz Global UAE Website',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Marz Global UAE — Request a Quote</title>
        <meta
          name="description"
          content="Contact Marz Global Trading FZE for industrial material quotes and inquiries. Phone: +971 55 882 6364 | Email: muhammed@marzglobaluae.com | Ajman Free Zone, UAE."
        />
        <meta property="og:title" content="Contact Marz Global UAE" />
        <meta property="og:description" content="Get in touch with our team for industrial material supply quotes and inquiries." />
        <link rel="canonical" href="https://marzglobaluae.com/contact" />
      </Helmet>

      <main>
        <PageBanner
          title="Contact Us"
          subtitle="Ready to discuss your material requirements? Get in touch and we'll respond with a competitive quote."
          breadcrumbs={[{ label: 'Contact' }]}
        />

        <section className="section-padding bg-light">
          <div className="container-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left: Contact Info */}
              <div className="lg:col-span-1 space-y-4">
                <div>
                  <span className="section-label">Get In Touch</span>
                  <h2 className="font-heading text-3xl font-bold text-primary mt-2 mb-3">
                    We're Here to Help
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you need a quick quote, want to discuss a large project, or just have a question — reach out through any channel below.
                  </p>
                </div>

                {/* Contact Cards */}
                {[
                  { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  { icon: MapPin, label: 'Location', value: companyInfo.address, href: '#' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-secondary/40 hover:shadow-card group transition-all"
                  >
                    <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                      <item.icon size={18} className="text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-sm font-medium text-gray-700 mt-0.5">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} fill="white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider font-semibold">WhatsApp</p>
                    <p className="text-sm font-semibold mt-0.5">Chat with us instantly</p>
                  </div>
                </motion.a>

                {/* Map Placeholder */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm h-52">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center gap-2 text-primary">
                    <MapPin size={32} className="opacity-40" />
                    <p className="text-sm font-semibold opacity-60">Ajman Free Zone</p>
                    <p className="text-xs text-gray-400">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-lg shadow-card border border-gray-100 p-7 md:p-9">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Request a Quote
                  </h3>
                  <p className="text-gray-500 text-sm mb-7">
                    Fill in the form below and we'll get back to you within one business day.
                  </p>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name <span className="text-secondary">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address <span className="text-secondary">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 xx xxx xxxx"
                            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Product Category
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
                        >
                          <option value="">Select a product category</option>
                          {PRODUCT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Message / Requirements <span className="text-secondary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your material requirements, quantities, project timeline, or any specific questions..."
                          className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded px-4 py-2.5">
                          Something went wrong. Please try again or contact us via WhatsApp.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded hover:bg-secondary-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        id="submit-quote-btn"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader size={18} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} /> Send Quote Request
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to our{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
