// src/config/performance.ts

// Performance configuration constants
export const PERFORMANCE_CONFIG = {
  // Image optimization settings
  IMAGE: {
    QUALITY: 85,
    FORMATS: ['image/webp', 'image/avif'],
    DEVICE_SIZES: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    IMAGE_SIZES: [16, 32, 48, 64, 96, 128, 256, 384],
    BLUR_DATA_URL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  },

  // Lazy loading settings
  LAZY_LOADING: {
    THRESHOLD: 0.1,
    ROOT_MARGIN: '50px',
    TRIGGER_ONCE: true,
  },

  // Animation settings
  ANIMATION: {
    DURATION: {
      FAST: 150,
      NORMAL: 300,
      SLOW: 500,
    },
    EASING: {
      EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
      EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
      EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Bundle optimization
  BUNDLE: {
    MAX_CHUNK_SIZE: 244 * 1024, // 244KB
    MAX_ASSET_SIZE: 250 * 1024, // 250KB
  },

  // Cache settings
  CACHE: {
    STATIC_ASSETS: 31536000, // 1 year
    API_RESPONSES: 300, // 5 minutes
    IMAGES: 31536000, // 1 year
  },

  // Core Web Vitals thresholds
  WEB_VITALS: {
    LCP: {
      GOOD: 2500,
      NEEDS_IMPROVEMENT: 4000,
    },
    FID: {
      GOOD: 100,
      NEEDS_IMPROVEMENT: 300,
    },
    CLS: {
      GOOD: 0.1,
      NEEDS_IMPROVEMENT: 0.25,
    },
    TTFB: {
      GOOD: 800,
      NEEDS_IMPROVEMENT: 1800,
    },
  },
};

// Performance monitoring utilities
export const performanceUtils = {
  // Measure function execution time
  measureTime: <T extends (...args: any[]) => any>(
    fn: T,
    label?: string
  ): T => {
    return ((...args: Parameters<T>) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ ${label || fn.name}: ${(end - start).toFixed(2)}ms`);
      }
      
      return result;
    }) as T;
  },

  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Check if device prefers reduced motion
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Get device memory (if available)
  getDeviceMemory: (): number | undefined => {
    if (typeof navigator === 'undefined') return undefined;
    return (navigator as any).deviceMemory;
  },

  // Get connection speed (if available)
  getConnectionSpeed: (): string | undefined => {
    if (typeof navigator === 'undefined') return undefined;
    const connection = (navigator as any).connection;
    return connection?.effectiveType;
  },
};

// Resource hints for better performance
export const RESOURCE_HINTS = {
  PRECONNECT: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com',
    'https://cdn.sanity.io',
  ],
  DNS_PREFETCH: [
    '//fonts.googleapis.com',
    '//images.unsplash.com',
    '//cdn.sanity.io',
  ],
  PRELOAD: [
    // Add custom fonts here when available
    // {
    //   href: '/fonts/roboto-v30-latin-regular.woff2',
    //   as: 'font',
    //   type: 'font/woff2',
    //   crossOrigin: 'anonymous',
    // },
  ],
};
