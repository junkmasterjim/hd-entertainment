"use client";

import Link from "next/link";
import { useState } from "react";

import { pageRoutes } from "@/pageRoutes";

export default function Drawer() {
	const [slideTrigger, setSlideTrigger] = useState("");
	const [revealTrigger, setRevealTrigger] = useState("");

	const toggleAnimation = () => {
		if (slideTrigger !== "slide-in-left") {
			setSlideTrigger("slide-in-left");
		}
		if (revealTrigger !== "top-reveal") {
			setRevealTrigger("top-reveal");
		}
	};

	return (
		<div className="drawer justify-center">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					htmlFor="my-drawer"
					className="btn drawer-button uppercase italic tracking-widest font-black text-4xl bg-transparent border-none md:hidden mt-8 dark:hover:bg-neutral"
					onClick={toggleAnimation}
				>
					Menu
				</label>
			</div>
			<div className="drawer-side z-10">
				<label htmlFor="my-drawer" className="drawer-overlay"></label>
				<ul className="menu p-4 w-9/12 h-full text-center bg-base-100 dark:bg-primary backdrop-blur-md bg-opacity-60 dark:bg-opacity-25 text-base-content dark:text-secondary">
					{/* Sidebar content here */}
					{pageRoutes?.map((route) => (
						<li
							key={route.name}
							className={`my-4 flex items-center tracking-widest ${slideTrigger}`}
						>
							<Link
								href={`${route.route}`}
								className={`uppercase font-black w-full text-3xl italic dark:hover:bg-neutral dark:hover:text-primary ${revealTrigger}`}
							>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
