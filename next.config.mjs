/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Set this to your exact GitHub repository name
const repoName = 'furniture-manufacturing-landing-page';

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;