/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "49.13.105.56",
        port: "2211",
        pathname: "**/**/**",
      },
    ],
  },
  optimizeFonts: false,
};

export default nextConfig;
