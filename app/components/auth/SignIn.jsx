"use client";

import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";

export default function SignIn() {
	const { data } = useSession();

	if (data && data.user) {
		return (
			<div>
				<div className="flex">
					<img
						src={data.user.image}
						className="h-12 w-12 rounded-full"
						alt=""
					/>
					<p>{data.user.name}</p>
				</div>
				<p>{data.user.email}</p>
				<button onClick={() => signOut()} className="btn btn-error ">
					Sign Out
				</button>
				<Link href={"/admin/dashboard"}>Enter Dashboard</Link>
			</div>
		);
	}

	return (
		<div className="flex w-full min-h-screen justify-center items-center">
			<button onClick={() => signIn()} className="btn btn-success btn-lg">
				Sign In
			</button>
		</div>
	);
}
