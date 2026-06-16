import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for MAAF — produces a fully static site in `out/`
  output: 'export',

  // MAAF serves apps with relative paths from a CDN
  basePath: '',
  assetPrefix: './',

  // Disable image optimization (requires a server)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
