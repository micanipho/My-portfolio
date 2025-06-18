// src/components/Layout.tsx
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PerformanceMonitor from './PerformanceMonitor';
import SEO from './SEO';

// Lazy load components for better performance
const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div className="h-16 bg-[#15142b]" />, // Placeholder
});

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-20 bg-[#15142b]" />, // Placeholder
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

      <div className="flex flex-col min-h-screen">
        <Suspense fallback={<div className="h-16 bg-[#15142b]" />}>
          <Navbar />
        </Suspense>

        <main
          className="flex-grow pt-16"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>

        <Suspense fallback={<div className="h-20 bg-[#15142b]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;