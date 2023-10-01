"use client";

import Link from "next/link";

import { pageRoutes } from "@/pageRoutes";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function BurgerMenu() {
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
		<div className="drawer p-1 transition-all rounded-lg hover:bg-neutral active:text-secondary text-primary hover:text-secondary">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content cursor-pointer" onClick={toggleAnimation}>
				{/* Page content here */}
				<label
					htmlFor="my-drawer"
					className="h-6 w-6 dark:text-primary"
					aria-hidden="true"
				>
					<Menu className="cursor-pointer" />
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer" className="drawer-overlay"></label>
				<ul className="menu p-4 w-9/12 h-full text-center bg-base-100 dark:bg-primary backdrop-blur-md bg-opacity-60 dark:bg-opacity-25 text-base-content dark:text-secondary">
					{/* Sidebar content here */}
					{pageRoutes?.map((route) => (
						<li
							key={route.name}
							className={`my-4 flex items-center ${slideTrigger}`}
						>
							<Link
								href={`${route.route}`}
								className={`uppercase font-black w-full text-3xl tracking-widest italic dark:hover:bg-neutral hover:bg-neutral hover:text-secondary dark:hover:text-primary ${revealTrigger}`}
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
