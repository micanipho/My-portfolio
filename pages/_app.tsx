// pages/_app.tsx
import React from 'react';
import Layout from '../src/components/Layout';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;