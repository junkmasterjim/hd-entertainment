/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.dropbox.com",
			},
			{
				protocol: "https",
				hostname: "*.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "*.hd-next13.vercel.app",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
