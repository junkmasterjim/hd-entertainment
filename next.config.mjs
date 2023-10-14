/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.dropbox.com",
			},
			{
				protocol: "https",
				hostname: "dl.dropboxusercontent.com",
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

export default withPlaiceholder(nextConfig);
