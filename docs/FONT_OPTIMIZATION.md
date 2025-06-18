# Font Optimization Guide

## Current Font Setup

The portfolio currently uses Google Fonts with optimized loading:

### Fonts Used
- **Roboto**: Primary body text (300, 400, 500, 700 weights)
- **Montserrat**: Headings and display text (400, 500, 600, 700 weights)

### Optimization Features
- `font-display: swap` for better performance
- Preconnect to Google Fonts domains
- DNS prefetch for faster resolution

## Adding Custom Fonts (Optional)

If you want to use custom fonts instead of Google Fonts:

### 1. Add Font Files
Place your font files in `public/fonts/`:
```
public/fonts/
├── roboto-v30-latin-regular.woff2
├── roboto-v30-latin-700.woff2
├── montserrat-v25-latin-regular.woff2
└── montserrat-v25-latin-700.woff2
```

### 2. Update Font Preloading
Uncomment and update the preload links in:
- `pages/_document.tsx`
- `src/components/SEO.tsx`
- `src/config/performance.ts`

### 3. Add Font Face Declarations
Add to `src/styles/global.css`:

```css
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/roboto-v30-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/roboto-v30-latin-700.woff2') format('woff2');
}
```

### 4. Update CSS Variables
Update font families in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Roboto', 'sans-serif'],
  heading: ['Montserrat', 'sans-serif'],
},
```

## Performance Benefits

### Google Fonts (Current)
- ✅ Cached across sites
- ✅ Optimized delivery
- ✅ Automatic font-display: swap
- ❌ External request dependency

### Self-Hosted Fonts
- ✅ No external dependencies
- ✅ Better privacy
- ✅ Full control over loading
- ❌ Larger initial bundle
- ❌ No cross-site caching

## Font Loading Strategy

The current implementation uses:

1. **Preconnect**: Establishes early connection to Google Fonts
2. **DNS Prefetch**: Resolves DNS early
3. **Font-display: swap**: Shows fallback font immediately
4. **Optimized weights**: Only loads necessary font weights

## Measuring Font Performance

Use the Performance Monitor component to track:
- **LCP**: Largest Contentful Paint
- **CLS**: Cumulative Layout Shift
- **Font loading time**: Custom metrics

## Best Practices

1. **Limit font weights**: Only load what you need
2. **Use font-display: swap**: Prevents invisible text
3. **Preload critical fonts**: For above-the-fold content
4. **Subset fonts**: Include only necessary characters
5. **Use modern formats**: WOFF2 for better compression

## Current Status

✅ **Optimized Google Fonts loading**
✅ **Font-display: swap enabled**
✅ **Preconnect and DNS prefetch**
✅ **No 404 errors for font files**
✅ **Performance monitoring ready**

The font setup is now optimized and error-free!
