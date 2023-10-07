/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.dropbox.com",
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
