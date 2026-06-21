import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import logo from '../../assets/logo.png';
import { companyInfo } from '../../data/companyInfo';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
  ],
  'Products': [
    { label: 'Electricals Materials', path: '/products#electricals-materials' },
    { label: 'Specialized Wire Products', path: '/products#specialized-wire' },
    { label: 'Woods & Timber', path: '/products#woods-timber' },
    { label: 'Pipes, Fittings, Valves & Flanges', path: '/products#pipes-fittings-valves-flanges' },
    { label: 'Walkway Systems', path: '/products#walkway-systems' },
    { label: 'HVAC Systems & Components', path: '/products#safety-materials' },
    { label: 'Welding Equipments', path: '/products#welding-equipment' },
    { label: 'General Supply', path: '/products#general-supply' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial text-white">
      {/* Main Footer */}
      <div className="container-xl py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_1.25fr] gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logo}
                alt="Marz Global UAE"
                className="h-12 w-auto bg-white rounded px-3 py-1.5"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {companyInfo.shortDescription}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-secondary flex-shrink-0" />
              <span className="text-gray-300">{companyInfo.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-secondary inline-block" />
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 text-sm hover:text-secondary transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-secondary transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-secondary inline-block" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded bg-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Mobile</p>
                    <p className="text-sm font-medium">{companyInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.landline.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded bg-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Landline</p>
                    <p className="text-sm font-medium">{companyInfo.landline}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded bg-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium lg:whitespace-nowrap">{companyInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded bg-primary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <ExternalLink size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Website</p>
                    <p className="text-sm font-medium">marzglobaluae.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>
            © {currentYear} <span className="text-white font-medium">Marz Global Trading FZE</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-secondary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
