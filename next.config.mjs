/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

// Configure PWA options
const withPWAConfig = withPWA({
  pwa: {
    dest: "public", // Directory to store service worker
    register: true, // Automatically registers the service worker
    skipWaiting: true, // Updates service worker immediately after installation
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  },
});

// Merge with other Next.js configurations
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ms"], // Supported languages
    defaultLocale: "en", // Default language
  },
  ...withPWAConfig, // Spread PWA config into the final configuration
};

export default nextConfig;
