// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../src/styles/global.css';

const Layout = dynamic(() => import('../src/components/Layout'), {
  loading: () => <div className="min-h-screen bg-[#0A121C]" />,
});

import { reportWebVitals } from '../src/utils/reportWebVitals';

// Hand-written <link> hrefs are not rewritten by basePath the way next/link is.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="prefetch" href={`${BASE_PATH}/projects`} />
        <link rel="prefetch" href={`${BASE_PATH}/about`} />
        <link rel="prefetch" href={`${BASE_PATH}/documents`} />
        <link rel="prefetch" href={`${BASE_PATH}/contact`} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export { reportWebVitals };

export default MyApp;
