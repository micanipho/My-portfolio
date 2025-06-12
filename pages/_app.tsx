// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/global.css'; // Fixed path to CSS file
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;