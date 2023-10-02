"use client";

import { pageRoutes } from "@/pageRoutes";

import Image from "next/image";
import { Home, Users2, LogOut, File } from "lucide-react";
import Link from "next/link";

const navigation = [
	{ name: "Home", route: "/admin/dashboard", icon: Home },
	{ name: "Users", route: "/admin/dashboard", icon: Users2 },
];

export default function DashLayout({ children }) {
	return (
		<>
			<div>
				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-secondary-focus px-6 pt-4">
						<div className="flex h-16 items-center px-2">
							<Image
								height={96}
								width={96}
								alt={"HD Entertainment"}
								src="/hd_simple_logo.svg"
								className="invert dark:filter-none"
							/>
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-8">
								<li>
									<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
										<p className="menu-title">Navigation</p>
										{navigation.map((route) => (
											<li key={route.name} className="text-lg">
												<Link href={route.route}>
													<route.icon className="h-4 w-4 mr-2" />

													{route.name}
												</Link>
											</li>
										))}
										<li className="text-lg">
											<Link href={"/admin"}>
												<LogOut className="h-4 w-4 mr-2" />
												Exit Dashboard
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<ul role="list" className="-mx-2 pb-4 space-y-1 menu">
										<p className="menu-title">Public Pages</p>
										{pageRoutes.map((route) => (
											<li key={route.name} className="text-lg">
												<Link href={route.route}>
													<File className="h-4 w-4 mr-2" />

													{route.name}
												</Link>
											</li>
										))}
									</ul>
								</li>
								<li className="-mx-6 mt-auto">
									<a
										href="#"
										className="flex items-center gap-x-4 px-6 py-4 text-sm font-semibold leading-6 text-primary hover:bg-accent-content dark:hover:bg-primary-content"
									>
										<img
											className="h-8 w-8 rounded-full bg-gray-800"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<span className="sr-only">Your profile</span>
										<span aria-hidden="true">Tom Cook</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="lg:pl-72">
					<main className="py-10">
						<div className="px-4 sm:px-6 lg:px-8">{children}</div>
					</main>
				</div>
			</div>
		</>
	);
}
