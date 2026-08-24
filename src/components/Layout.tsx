// src/components/Layout.tsx
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PerformanceMonitor from './PerformanceMonitor';
import SEO from './SEO';

const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div className="h-[94px] bg-unit-bg" />,
});

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-24 bg-unit-bg" />,
});

interface LayoutProps {
  children: React.ReactNode;
  seoProps?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    keywords?: string[];
  };
}

const Layout: React.FC<LayoutProps> = ({ children, seoProps }) => {
  return (
    <>
      <SEO {...seoProps} />
      <PerformanceMonitor />

      <div className="flex flex-col min-h-screen bg-unit-bg">
        <Suspense fallback={<div className="h-[94px] bg-unit-bg" />}>
          <Navbar />
        </Suspense>

        <main
          className="flex-grow pt-[94px]"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>

        <Suspense fallback={<div className="h-24 bg-unit-bg" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
