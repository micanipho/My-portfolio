// src/components/Navbar.tsx
import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import Link from 'next/link';

interface NavItemType {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItemType[] = [
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
];

// Slim status strip — repeats the hero's "operational" signal on every page.
const StatusStrip = memo(() => (
  <div className="flex items-stretch h-[30px] border-b border-unit-border bg-unit-strip">
    <div
      className="hidden sm:block w-16 unit-hazard"
      aria-hidden="true"
    />
    <div className="flex-grow flex items-center justify-between px-4 sm:px-6 font-display text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-unit-teal inline-block" aria-hidden="true" />
        <span className="text-unit-teal">Operational</span>
        <span className="hidden sm:inline-block w-px h-3 bg-unit-border-2" aria-hidden="true" />
        <span className="hidden sm:inline text-unit-steel-2">Johannesburg &middot; UTC+2</span>
      </div>
      <div className="text-unit-orange">Open to opportunities</div>
    </div>
  </div>
));
StatusStrip.displayName = 'StatusStrip';

const Logo = memo(() => (
  <span className="flex items-center gap-3">
    <span className="w-[3px] h-[22px] bg-unit-orange inline-block" aria-hidden="true" />
    <span className="font-display text-xl font-bold tracking-[0.1em] uppercase text-unit-bone">
      N. Masilela
    </span>
  </span>
));
Logo.displayName = 'Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <StatusStrip />

      <nav className="h-16 bg-unit-bg/95 backdrop-blur-sm border-b border-unit-border">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-9 font-display text-sm font-semibold tracking-[0.14em] uppercase text-unit-steel-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-unit-bone transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-unit-steel-2 hover:text-unit-bone transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-unit-bg border-b border-unit-border">
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-2.5 font-display text-base font-semibold tracking-[0.1em] uppercase text-unit-steel-2 hover:text-unit-bone transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
