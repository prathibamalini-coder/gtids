/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add trailing slashes for better SEO and compatibility with static hosting
  trailingSlash: true,
  // Ensure images are unoptimized for static export if using next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
