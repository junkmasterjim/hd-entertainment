/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [require("daisyui"), require("@tailwindcss/forms")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#111827",
					secondary: "#f5f5f5",
					accent: "#000",
					neutral: "#3f2442",
					"base-100": "#dfe9f8",
					info: "#ffedd5",
					success: "#4ade80",
					warning: "#f59e0b",
					error: "#e11d48",
				},
			},
			{
				mythemeDark: {
					primary: "#f5f5f5",
					secondary: "#111827",
					accent: "#000",
					neutral: "#3f2442",
					"base-100": "#5c7499",
					info: "#ffedd5",
					success: "#4ade80",
					warning: "#f59e0b",
					error: "#e11d48",
				},
			},
		],
		darkTheme: "mythemeDark",
	},
};
