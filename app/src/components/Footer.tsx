import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const exploreLinks = [
  'Haute Couture',
  'Fashion',
  'High Jewelry',
  'Fine Jewelry',
  'Watches',
  'Eyewear',
  'Fragrance',
  'Makeup',
  'Skincare',
  'E-gift card',
  'Sitemap',
];

const onlineServices = [
  'Payment Methods',
  'Shipping Options',
  'My Account',
  'Returns',
  'FAQ',
  'Care & Services',
  'E-gift card',
];

const boutiqueServices = [
  'Store Locator',
  'Book an Appointment',
];

const houseOfChanel = [
  'Careers',
  'Legal',
  'Privacy',
  'Do Not Sell or Share My Personal Information',
  'Report to Society',
  'Fighting Counterfeits',
  'Accessibility',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Contact an Advisor
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              CHANEL Client Care is available Monday to Sunday, 7 AM to 12 AM ET. to answer all your questions.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@chanel.com"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                email us
              </a>
              <a
                href="tel:1.800.550.0005"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                call 1.800.550.0005
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                live chat
              </a>
            </div>
          </motion.div>

          {/* Find a Store Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Find a Store
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Enter a location to find the closest CHANEL stores
            </p>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="City or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent border border-white/30 py-3 pl-10 pr-4 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Newsletter
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Subscribe to receive the latest news from CHANEL.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white/30 border-r-0 py-3 px-4 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button className="px-4 border border-white/30 text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Explore Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Explore chanel.com
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Additional Links Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mt-16 pt-16 border-t border-white/20"
        >
          {/* Online Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Online Services
            </h3>
            <ul className="space-y-2">
              {onlineServices.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Boutique Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              Boutique Services
            </h3>
            <ul className="space-y-2">
              {boutiqueServices.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The House of Chanel */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs uppercase tracking-chanel-wide mb-6">
              The House of Chanel
            </h3>
            <ul className="space-y-2">
              {houseOfChanel.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-6 md:px-12 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="text-xl tracking-chanel-logo uppercase">
            CHANEL
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/chanelofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram - CHANEL Official"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/chanel.beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram - CHANEL Beauty"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/Chanel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.youtube.com/user/CHANEL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/company/chanel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Location */}
          <div className="text-xs text-white/70">
            United States - English (US)
          </div>
        </div>
      </div>
    </footer>
  );
}
