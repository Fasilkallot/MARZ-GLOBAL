import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import PageBanner from '../../components/layout/PageBanner';
import { companyInfo } from '../../data/companyInfo';

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// Web3Forms sends the email server-side without any backend.
// 1. Go to https://web3forms.com
// 2. Enter sales@marzglobaluae.com → click "Create Access Key"
// 3. Replace the key below with your key
// Until then, the form falls back to a mailto: link that opens the email client.
const WEB3FORMS_KEY = '4fc117c4-ab5f-462a-b5e3-bf7415c683f4';
const RECIPIENT_EMAIL = 'sales@marzglobaluae.com';
// ──────────────────────────────────────────────────────────────────────────────

const PRODUCT_OPTIONS = [
  'Electricals Materials',
  'General Supply',
  'Safety Materials (PPE)',
  'Pipes, Fittings, Valves & Flanges',
  'Industrial and Commercial Walkway Systems',
  'Woods & Timber',
  'Welding Equipments & Consumables',
  'Specialized Wire Products',
  'Other / Multiple Categories',
];

const buildMailtoBody = (data) => {
  return [
    `QUOTE REQUEST — MARZ GLOBAL UAE`,
    ``,
    `Full Name:      ${data.name}`,
    `Company:        ${data.company || 'Not provided'}`,
    `Email:          ${data.email}`,
    `Phone:          ${data.phone || 'Not provided'}`,
    `Product:        ${data.product || 'Not specified'}`,
    ``,
    `Message / Requirements:`,
    `${data.message}`,
    ``,
    `─────────────────────────────────`,
    `Sent via marzglobaluae.com`,
  ].join('\n');
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | mailto | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendViaMailto = (data) => {
    const subject = encodeURIComponent(
      `Quote Request from ${data.name}${data.company ? ` — ${data.company}` : ''}`
    );
    const body = encodeURIComponent(buildMailtoBody(data));
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // If Web3Forms key is still placeholder, use mailto directly
    if (WEB3FORMS_KEY === 'YOUR_WEB3FORMS_KEY') {
      setTimeout(() => {
        sendViaMailto(formData);
        setStatus('mailto');
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
      }, 600);
      return;
    }

    // Try Web3Forms (server-side email delivery)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote Request from ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`,
          from_name: 'Marz Global UAE Website',
          replyto: formData.email,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
      } else {
        // Web3Forms failed — fall back to mailto
        sendViaMailto(formData);
        setStatus('mailto');
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
      }
    } catch {
      // Network error — fall back to mailto
      sendViaMailto(formData);
      setStatus('mailto');
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Marz Global UAE — Request a Quote</title>
        <meta
          name="description"
          content="Contact Marz Global Trading FZE for industrial material quotes and inquiries. Phone: +971 55 882 6364 | Email: sales@marzglobaluae.com | UAE."
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

              {/* ── Left: Contact Info ── */}
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

                {[
                  { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}`, target: '_self' },
                  { icon: Mail,  label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}`, target: '_self' },
                  { icon: MapPin, label: 'Location', value: companyInfo.address, href: 'https://maps.app.goo.gl/M8caYb8m9xZqAhkg8', target: '_blank' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.target}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
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
                <a
                  href="https://maps.app.goo.gl/M8caYb8m9xZqAhkg8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm h-52 hover:border-secondary/40 hover:shadow-card transition-all group"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center gap-2 text-primary">
                    <MapPin size={32} className="opacity-40 group-hover:opacity-70 group-hover:text-secondary transition-all" />
                    <p className="text-sm font-semibold opacity-60 group-hover:opacity-90 transition-opacity">UAE</p>
                    <p className="text-xs text-gray-400">Click to open in Google Maps</p>
                  </div>
                </a>
              </div>

              {/* ── Right: Form ── */}
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

                  {/* ── Success state (Web3Forms) ── */}
                  {status === 'success' && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-secondary hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  )}

                  {/* ── Mailto fallback success state ── */}
                  {status === 'mailto' && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                        <Mail size={32} className="text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">Email Client Opened!</h3>
                      <p className="text-gray-600 max-w-sm mx-auto">
                        Your email client should have opened with the message pre-filled.
                        Please click <strong>Send</strong> to submit your quote request to{' '}
                        <span className="text-primary font-medium">{RECIPIENT_EMAIL}</span>.
                      </p>
                      <p className="text-xs text-gray-400 mt-3">
                        If nothing opened,{' '}
                        <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-primary hover:underline">
                          click here to email us directly
                        </a>.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm text-secondary hover:underline"
                      >
                        Go back to form
                      </button>
                    </div>
                  )}

                  {/* ── Form ── */}
                  {(status === 'idle' || status === 'loading' || status === 'error') && (
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
                        <div className="flex items-start gap-3 text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
                          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                          <p className="text-sm">
                            Something went wrong. Please{' '}
                            <button
                              type="button"
                              onClick={() => sendViaMailto(formData)}
                              className="underline font-medium hover:text-red-700"
                            >
                              click here to email us directly
                            </button>{' '}
                            or contact us via WhatsApp.
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        id="submit-quote-btn"
                        className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded hover:bg-secondary-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5"
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
                        Your message will be sent to{' '}
                        <span className="text-primary font-medium">{RECIPIENT_EMAIL}</span>.{' '}
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
