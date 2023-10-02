import UsersCard from "@/app/components/admin/UsersCard";

export default function Page() {
	// const users = await prismadb.user.findMany();

	return (
		<div>
			<UsersCard />
		</div>
	);
}
