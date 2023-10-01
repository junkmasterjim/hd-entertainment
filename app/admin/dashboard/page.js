import Link from "next/link";

export default function Page() {
	return (
		<div>
			<Link href={"/admin"} className="btn btn-primary">
				Return to Admin Panel
			</Link>
		</div>
	);
}
