// src/utils/reportWebVitals.ts
import { NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(metric);
  }
  // Wire up an analytics service here when one exists.
}
