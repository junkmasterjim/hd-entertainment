import SignIn from "@/app/components/auth/SignIn";
import { PrismaClient } from "@prisma/client";

export default async function Page() {
	const prisma = new PrismaClient();

	let data = await prisma.user.findMany();

	console.log(data);
	return (
		<>
			<SignIn />
		</>
	);
}
