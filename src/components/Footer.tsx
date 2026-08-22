// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-unit-bg border-t border-unit-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-[3px] h-[18px] bg-unit-orange inline-block" aria-hidden="true" />
            <span className="font-display text-sm font-semibold tracking-[0.1em] uppercase text-unit-steel-3">
              Nhlakanipho Masilela
            </span>
          </div>

          <div className="flex items-center gap-6 font-display text-sm font-semibold tracking-[0.12em] uppercase text-unit-steel-2">
            <a
              href="https://github.com/micanipho"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-unit-bone transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nqmasilela"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-unit-bone transition-colors duration-200"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="hover:text-unit-bone transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-unit-border-dim">
          <p className="text-unit-steel text-xs font-display tracking-[0.08em] uppercase">
            &copy; {currentYear} Nhlakanipho Masilela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
