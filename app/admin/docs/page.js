import Link from "next/link";

const navigation = [
	{ route: "/admin/docs#users", name: "Users" },
	{ route: "/admin/docs#portfolio", name: "Portfolio" },
	{ route: "/admin/docs#products", name: "Products" },
	{ route: "/admin/docs#services", name: "Services" },
];

export default function Page() {
	return (
		<div className="max-w-screen-xl mx-auto my-12">
			<div>
				<h1 className="text-3xl font-semibold">Table of Contents</h1>
				<ul className="list-disc pl-8 p-4 text-lg">
					{navigation.map((route) => (
						<li key={route.name}>
							<Link
								href={route.route}
								className="link text-primary/75 hover:text-primary"
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
