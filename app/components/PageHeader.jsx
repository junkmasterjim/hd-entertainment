"use client";

import React from "react";
import BurgerMenu from "./ui/BurgerMenu";
import { pageRoutes } from "@/pageRoutes";
import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

export default function PageHeader() {
	// const pathname = usePathname();
	// console.log(pathname);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="mx-auto flex max-w-7xl items-center text-primary dark:text-secondary justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link
						className="-m-1.5 p-1.5 hover:scale-100 sm:hover:scale-110 transition-all"
						href={"/"}
					>
						<span className="sr-only">HD Entertainment</span>
						<Image
							width={84}
							height={84}
							src={"/hd_simple_logo.svg"}
							priority
							className="flex invert dark:filter-none"
							alt=""
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<BurgerMenu />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{pageRoutes.map((route) => (
						<Link
							key={route.name}
							href={route.route}
							className="btn btn-md border-none bg-transparent text-primary tracking-wide hover:bg-neutral hover:text-secondary dark:hover:text-primary"
						>
							{route.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#"
						className="text-sm font-semibold leading-6 text-gray-900 pointer-events-none opacity-0"
					>
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	);
}
