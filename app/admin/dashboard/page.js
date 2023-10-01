import prismadb from "@/lib/prismadb";

import Link from "next/link";

export default async function Page() {
	const users = await prismadb.user.findMany();

	console.log(users);

	return (
		<div>
			<div>
				{users.map((user) => (
					<div key={user.id}>
						{user.name}: {user.email}
					</div>
				))}
			</div>
			<Link href={"/admin"} className="btn btn-primary">
				Return to Admin Panel
			</Link>
		</div>
	);
}
