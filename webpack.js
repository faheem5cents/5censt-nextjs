// next.config.js
import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	...nextConfig,
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	) => {
		config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/assets": path.resolve(__dirname, "src/assets"),
      //   '@/components': path.resolve(__dirname, 'components'),
    };
		return config;
	},
};
