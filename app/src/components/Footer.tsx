import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-black text-white">
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[10px] uppercase tracking-mm-wide mb-6">
              Contact
            </h3>
            <p className="text-xs text-white/60 leading-relaxed mb-6">
              For enquiries, custom orders, and collaborations — reach us
              directly.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/2348023055212"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-white/70 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/monamatthewsng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                @monamatthewsng
              </a>
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[10px] uppercase tracking-mm-wide mb-6">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Collection', to: '/' },
                { label: 'Catalogue', to: '/catalogue' },
                { label: 'About', to: '/about' },
                { label: 'Size Guide', to: '/size-guide' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/2348023055212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Made to Order
                </a>
              </li>
            </ul>
          </motion.div>

          {/* The House */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[10px] uppercase tracking-mm-wide mb-6">
              The House
            </h3>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Established 2002 in Lagos, Nigeria.
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              Handcrafted footwear in extended sizes — designed for those who
              refuse to compromise on elegance.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-display text-sm italic text-white/50">
                Made in Lagos.
              </p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[10px] uppercase tracking-mm-wide mb-6">
              Newsletter
            </h3>
            <p className="text-xs text-white/60 leading-relaxed mb-6">
              New collections, lookbooks, and exclusive updates.
            </p>
            {subscribed ? (
              <p className="text-xs text-white/70 font-display italic">
                Thank you — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 bg-transparent border border-white/20 border-r-0 py-3 px-4 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 border border-white/20 text-[10px] uppercase tracking-mm-wide text-white/70 hover:bg-white hover:text-black transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-16 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/40 tracking-mm">
            © Mona Matthews — Established 2002, Lagos, Nigeria
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/monamatthewsng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-white/50" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/2348023055212"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white/50" />
            </a>
          </div>
        </div>
      </div>

      {/* Large wordmark */}
      <div className="overflow-hidden px-4 pb-4 pt-0">
        <p
          className="font-display font-normal uppercase text-white leading-[0.85] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 16rem)', letterSpacing: '-0.02em' }}
        >
          Mona Matthews
        </p>
      </div>
    </footer>
  );
}
