// src/components/Navbar.tsx
import React, { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Memoized logo component to prevent unnecessary re-renders
const Logo = memo(() => (
    <div className="w-9 h-9 bg-[#191F3A] rounded-full border border-[#00FFFF] flex items-center justify-center relative overflow-hidden">
      <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#191F3A]/50 via-transparent to-[#00FFFF]/30 opacity-70"
          animate={{
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-sm font-bold text-[#00FFFF]">NM</span>
    </div>
));
Logo.displayName = 'Logo';

// Memoized nav item to prevent unnecessary re-renders
const NavItem = memo(({
  item,
  index,
  isMobile = false,
  onClick = () => {}
}: {
  item: { name: string; href: string };
  index: number;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const animationDelay = isMobile ? index * 0.05 : index * 0.1;

  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, [isMobile ? 'x' : 'y']: isMobile ? -10 : -10 }}
      animate={{ opacity: 1, [isMobile ? 'x' : 'y']: 0 }}
      transition={{ duration: 0.2, delay: animationDelay }}
      whileHover={!isMobile ? { scale: 1.1, y: -2 } : undefined}
    >
      <Link
        href={item.href}
        className={`${isMobile ? 'block py-2' : ''} text-[#B2BABB] hover:text-[#C4FF00] text-lg font-medium transition-all duration-300 relative group`}
        onClick={onClick}
      >
        {item.name}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFFF] transition-all duration-300 group-hover:w-full"></span>
        )}
      </Link>
    </motion.div>
  );
});
NavItem.displayName = 'NavItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#0E0E10] via-[#191F3A] to-[#0E0E10] shadow-lg border-b border-[#00FFFF]/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-2xl font-bold tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavItem key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#B2BABB] hover:text-[#00FFFF] focus:outline-none transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with AnimatePresence for proper exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0E0E10]/95 border-b border-[#00FFFF]/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  item={item}
                  index={index}
                  isMobile={true}
                  onClick={closeMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;