/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    // ลดขนาด chunk ขณะ build
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 2000000, // 2 MB
    }
    return config
  },
}

export default nextConfig