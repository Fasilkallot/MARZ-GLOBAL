import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

const contactItems = [
  {
    icon: Phone,
    label: 'Mobile',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Phone,
    label: 'Landline',
    value: companyInfo.landline,
    href: `tel:${companyInfo.landline.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: companyInfo.address,
    href: '#',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card p-6 rounded border border-gray-100 hover:border-secondary/40 flex items-start gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <item.icon size={20} className="text-primary group-hover:text-secondary transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">{item.label}</p>
                <p className="text-xs font-medium text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-green-50 border border-green-200 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle size={18} className="text-white" fill="white" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Prefer WhatsApp?</p>
              <p className="text-sm text-gray-600">
                Chat directly with our team for fast inquiries and quotes.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition-colors text-sm"
          >
            <MessageCircle size={16} fill="white" /> Start WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
