// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-unit-bg border-t border-unit-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-[3px] h-[18px] bg-unit-orange inline-block" aria-hidden="true" />
            <span className="font-display text-sm font-semibold tracking-[0.1em] uppercase text-unit-steel-3">
              Nhlakanipho Masilela
            </span>
          </div>

          <p className="text-unit-steel text-xs font-display tracking-[0.08em] uppercase">
            &copy; {currentYear} Nhlakanipho Masilela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
