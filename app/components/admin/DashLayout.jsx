"use client";

import Loading from "@/app/admin/loading";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashLayout({ children }) {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		return <div>{children};</div>;
	}

	if (status === "loading") {
		return (
			<div className="min-h-screen w-full flex items-center justify-center">
				Loading...
			</div>
		);
	}

	return (
		<div className="w-full flex justify-center items-center min-h-screen bg-secondary">
			<Link href={"/api/auth/signin"} className="btn-primary btn btn-wide">
				Sign In
			</Link>
		</div>
	);
}
