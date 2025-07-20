// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../src/styles/global.css';

// Lazy load Layout for better performance
const Layout = dynamic(() => import('../src/components/Layout'), {
  loading: () => <div className="min-h-screen bg-[#0E0E10]" />,
});

// Performance monitoring
import { reportWebVitals } from '../src/utils/reportWebVitals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Resource hints for better loading */}
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/documents" />
        <link rel="prefetch" href="/contact" />

      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Enable performance monitoring
export { reportWebVitals };

export default MyApp;