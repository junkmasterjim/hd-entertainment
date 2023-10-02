import DashLayout from "@/app/components/DashLayout";
import SessionProv from "@/providers/SessionProv";
import React from "react";

export default async function Layout({ children }) {
	return (
		<SessionProv>
			<DashLayout>{children}</DashLayout>
		</SessionProv>
	);
}
