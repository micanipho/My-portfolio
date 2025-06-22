// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to external domains for faster loading */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://images.unsplash.com" />
          <link rel="preconnect" href="https://cdn.sanity.io" />

          {/* Document viewing services */}
          <link rel="preconnect" href="https://mozilla.github.io" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

          {/* Optimized font loading with font-display: swap */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags for SEO and performance */}
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          {/* Document viewing optimizations */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Nhlakanipho Portfolio" />

          {/* Security headers for document handling */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

          {/* Preload critical resources - commented out until fonts are added */}
          {/* <link rel="preload" href="/fonts/custom-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}

          {/* DNS prefetch for external resources */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//images.unsplash.com" />
          <link rel="dns-prefetch" href="//mozilla.github.io" />
          <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

          {/* Preload document viewer resources */}
          <link rel="modulepreload" href="https://mozilla.github.io/pdf.js/build/pdf.min.js" />

          {/* Document MIME type associations */}
          <meta name="file-types" content="pdf,doc,docx,ppt,pptx" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;