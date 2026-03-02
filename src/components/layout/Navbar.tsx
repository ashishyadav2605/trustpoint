'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/images/logo.jpeg';

const aboutDropdownItems = [
  { href: '/about#about-trustpoint', label: 'About TrustPoint' },
  { href: '/about#vision-mission', label: 'Vision & Mission' },
  { href: '/about#our-values', label: 'Our Values' },
];

const servicesDropdownItems = [
  { href: '/services#services-offer', label: 'Services We Offer' },
  { href: '/services#industries-serve', label: 'Industries We Serve' },
];

const navLinks = [
  { href: '/about', label: 'About Us', hasDropdown: true, dropdownItems: aboutDropdownItems, dropdownKey: 'about' },
  { href: '/services', label: 'Our Services', hasDropdown: true, dropdownItems: servicesDropdownItems, dropdownKey: 'services' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === key ? null : key);
  };

  return (
    <nav 
      className="shadow-lg sticky top-0 z-50"
      style={{ background: 'linear-gradient(to right, white 0%, white 20%, #3D5A7F 40%, #3D5A7F 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center overflow-hidden -ml-8 md:-ml-12 lg:-ml-16" style={{ height: '85px' }}>
            <Image
              src={logo}
              alt="TrustPoint Logo"
              height={85}
              width={280}
              className="object-contain object-left"
              style={{ height: '85px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.dropdownKey === 'about' && pathname.startsWith('/about')) || (link.dropdownKey === 'services' && pathname.startsWith('/services'));
              
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                        isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === link.href ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl overflow-hidden"
                          style={{ backgroundColor: '#3D5A7F' }}
                        >
                          {link.dropdownItems?.map((item, index) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors border-b border-white/10 last:border-b-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 overflow-hidden"
            style={{ backgroundColor: '#3D5A7F' }}
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                
                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => toggleMobileDropdown(link.dropdownKey!)}
                        className="w-full flex items-center justify-between py-3 px-4 text-base font-medium rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/10"
                      >
                        {link.label}
                        <ChevronDown size={18} className={`transition-transform duration-200 ${mobileDropdownOpen === link.dropdownKey ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.dropdownKey && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 px-4 text-sm text-white/70 hover:text-white transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
