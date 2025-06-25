import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
    // If you ever need more granular control (e.g. path patterns), you can use remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'picsum.photos',
    //     port: '',
    //     pathname: '/300/300/**',
    //   },
    // ],
  },
  // other Next.js config options go here
}

export default nextConfig
