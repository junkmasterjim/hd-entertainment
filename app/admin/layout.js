import NavMenu from "@/app/components/admin/NavMenu";
import SessionProv from "@/providers/SessionProv";
import DashLayout from "@/app/components/admin/DashLayout";

export default async function Layout({ children }) {
	return (
		<SessionProv>
			<DashLayout>
				<NavMenu />
				<div className="lg:pl-72 w-full absolute z-[-1] lg:mt-0 mt-16 bg-secondary text-primary min-h-screen overflow-y-auto pb-24">
					<main className="lg:py-8 sm:py-6 py-4">
						<div className="px-4 sm:px-6 lg:px-8">{children}</div>
					</main>
				</div>
			</DashLayout>
		</SessionProv>
	);
}
