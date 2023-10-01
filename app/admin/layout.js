import SessionProv from "@/providers/SessionProv";
import { Suspense } from "react";
import Loading from "../(pages)/loading";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen bg-secondary text-primary">
			<SessionProv>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</SessionProv>
		</div>
	);
}
