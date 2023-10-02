import NavMenu from "@/app/components/admin/NavMenu";
import SessionProv from "@/providers/SessionProv";
import Toaster from "react-hot-toast";

export default async function Layout({ children }) {
	return (
		<SessionProv>
			<NavMenu />
			<div className="lg:pl-72 lg:mt-0 mt-16 bg-secondary text-primary">
				<main className="lg:py-8 sm:py-6 py-4">
					<div className="px-4 sm:px-6 lg:px-8">{children}</div>
				</main>
			</div>
		</SessionProv>
	);
}
