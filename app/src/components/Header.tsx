import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, User, Heart, ShoppingBag } from 'lucide-react';
import { slideInFromLeft, ANIMATION } from '@/lib/animations';

const navItems = [
  { label: 'Haute Couture', href: '#haute-couture', exclusive: true },
  { label: 'Fashion', href: '#fashion', exclusive: true },
  { label: 'High Jewelry', href: '#high-jewelry', exclusive: true },
  { label: 'Fine Jewelry', href: '#fine-jewelry', exclusive: true },
  { label: 'Watches', href: '#watches', exclusive: true },
  { label: 'Eyewear', href: '#eyewear', exclusive: false },
  { label: 'Fragrance', href: '#fragrance', exclusive: false },
  { label: 'Makeup', href: '#makeup', exclusive: false },
  { label: 'Skincare', href: '#skincare', exclusive: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
        }`}
      >
        <div className="flex items-center justify-between h-[60px] px-4 md:px-6 lg:px-8">
          {/* Left - Menu Button (Mobile) / Navigation (Desktop) */}
          <div className="flex items-center flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.slice(0, 6).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link flex items-center gap-1"
                >
                  {item.label}
                  {item.exclusive && (
                    <span className="text-[9px] text-gray-500 normal-case tracking-normal ml-1">
                      Exclusively in Boutiques
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="chanel-logo">
              CHANEL
            </a>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center justify-end gap-1 flex-1">
            <button 
              className="icon-button hidden sm:flex"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="icon-button hidden sm:flex"
              aria-label="Account"
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="icon-button hidden sm:flex"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="icon-button"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION.duration.normal }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between h-[60px] px-4 border-b border-gray-200">
                <span className="chanel-logo text-lg">CHANEL</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
              
              <nav className="py-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.exclusive && (
                      <span className="text-[10px] text-gray-500 normal-case">
                        Exclusively in Boutiques
                      </span>
                    )}
                  </a>
                ))}
              </nav>
              
              <div className="border-t border-gray-200 py-4">
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Search className="w-4 h-4" strokeWidth={1.5} />
                  Search
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <User className="w-4 h-4" strokeWidth={1.5} />
                  Account
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                  Wishlist
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
