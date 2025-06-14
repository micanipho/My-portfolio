// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;