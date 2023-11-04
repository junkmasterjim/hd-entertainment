import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "donebyhd",
	description:
		"Your premier destination for industry standard music production, as well as graphic design, and video production expertise. Where rhythms resonate and visuals abound; we transform your vision into a reality.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="no-scrollbar scroll-smooth"
			suppressHydrationWarning
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
