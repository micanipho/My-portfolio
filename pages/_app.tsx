// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import '../src/styles/global.css';

// Performance monitoring (optional)
// import { reportWebVitals } from '../src/utils/reportWebVitals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Preload critical CSS - Next.js handles CSS automatically */}
        {/* <link rel="preload" href="/_next/static/css/app.css" as="style" /> */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Performance monitoring
// export { reportWebVitals };

export default MyApp;