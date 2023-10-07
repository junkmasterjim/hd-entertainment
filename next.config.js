/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["dropbox.com", "googleusercontent.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.dropbox.com",
			},
			{
				protocol: "https",
				hostname: "*.googleusercontent.com",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
