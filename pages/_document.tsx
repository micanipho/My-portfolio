// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document Component
 * Enhances the default Next.js document with:
 * - Performance optimizations
 * - SEO improvements
 * - Document viewing capabilities
 * - Security headers
 * - Font optimizations
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ========================================
              🚀 PRECONNECT TO EXTERNAL DOMAINS
              Establishes early connections to external
              resources for faster loading
              ======================================== */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://images.unsplash.com" />
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="preconnect" href="https://mozilla.github.io" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

          {/* ========================================
              🎨 FONT OPTIMIZATION
              Loads Google Fonts with performance
              optimizations and font-display: swap
              ======================================== */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* ========================================
              📱 META TAGS FOR SEO & PERFORMANCE
              Optimizes mobile experience and PWA
              capabilities for better user experience
              ======================================== */}
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Nhlakanipho Portfolio" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          {/* ========================================
              🔒 SECURITY HEADERS
              Protects against common web vulnerabilities
              and ensures secure document handling
              ======================================== */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

          {/* ========================================
              ⚡ DNS PREFETCH FOR PERFORMANCE
              Pre-resolves DNS for external resources
              to reduce connection time
              ======================================== */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//images.unsplash.com" />
          <link rel="dns-prefetch" href="//mozilla.github.io" />
          <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
          <link rel="dns-prefetch" href="//github.com" />
          <link rel="dns-prefetch" href="//linkedin.com" />

          {/* ========================================
              📄 DOCUMENT VIEWER RESOURCES
              Optimizes document viewing capabilities
              for PDF, Word, and PowerPoint files
              ======================================== */}
          <link rel="modulepreload" href="https://mozilla.github.io/pdf.js/build/pdf.min.js" />
          <meta name="file-types" content="pdf,doc,docx,ppt,pptx,txt,html" />
          <meta name="document-viewer" content="enabled" />
          <meta name="pdf-viewer" content="mozilla-pdf-js" />

          {/* ========================================
              🎯 CUSTOM FONTS & RESOURCES
              Placeholder for future custom fonts and
              additional resource optimizations
              ======================================== */}
          {/*
          <link
            rel="preload"
            href="/fonts/custom-font.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          */}

          {/* ========================================
              🎨 THEME & BRANDING
              Portfolio-specific meta tags and branding
              ======================================== */}
          <meta name="author" content="Nhlakanipho Quinton Masilela" />
          <meta name="designer" content="Nhlakanipho Portfolio" />
          <meta name="portfolio-theme" content="dark-cyan-lime" />
          <meta name="color-scheme" content="dark" />
        </Head>

        {/* ========================================
            📱 BODY WITH OPTIMIZATIONS
            Antialiased text rendering and proper
            semantic structure for accessibility
            ======================================== */}
        <body className="antialiased bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10]">
          {/* Main application content */}
          <Main />

          {/* Next.js scripts and hydration */}
          <NextScript />

          {/* ========================================
              🔧 DEVELOPMENT HELPERS
              Only visible in development mode
              ======================================== */}
          {process.env.NODE_ENV === 'development' && (
            <div
              id="dev-info"
              style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                background: 'rgba(0, 255, 255, 0.1)',
                color: '#00FFFF',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                fontFamily: 'monospace',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                zIndex: 9999
              }}
            >
              🚀 Dev Mode
            </div>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;