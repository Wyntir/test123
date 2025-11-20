import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages optimization
  output: 'export',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
