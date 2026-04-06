// Vercel Speed Insights initialization
// This script loads and initializes Speed Insights for tracking web vitals

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true to enable debug mode in development
  // You can add other configuration options here:
  // sampleRate: 1, // Sample 100% of page loads (default)
  // beforeSend: (data) => data, // Modify data before sending
});
