/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.previews.dropboxusercontent.com",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
