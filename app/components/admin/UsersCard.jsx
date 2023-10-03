"use client";

import { useEffect, useState } from "react";
import Loading from "@/app/admin/loading";
import { toast, Toaster } from "react-hot-toast";

export default function UsersCard() {
	const [users, setUsers] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="card overflow-x-hidden bg-secondary-focus text-primary shadow-xl md:py-2 md:px-16 mb-12 static">
			<div className="card-body">
				<div className="flex justify-between">
					<h2 className=" card-title text-2xl">Users</h2>
					<div className="flex gap-8">
						{/* <p className="btn btn-sm btn-ghost">Export to CSV</p> */}
						<button
							onClick={() => {
								navigator.clipboard.writeText(
									users?.map((user) => user.email).join(", ")
								);
								toast.success("Copied emails to clipboard.");
							}}
							className="btn btn-sm btn-primary"
						>
							Copy to Clipboard
						</button>
					</div>
				</div>
				<div className="divider mb-0"></div>
				<div className="overflow-x-auto">
					{isLoading ? (
						<div className="w-full flex justify-center">
							<Loading />
						</div>
					) : (
						<table className="table static">
							{/* head */}
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th className="">Actions</th>
								</tr>
							</thead>
							<tbody>
								{users?.map((user) => (
									<tr key={user.id} className="lg:hover">
										{user.name !== "undefined" && user.name ? (
											<td>{user.name}</td>
										) : (
											<td className="text-error">No Name Set</td>
										)}
										<td>{user.email}</td>
										<td>...</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
			{users?.length == 0 ? (
				<div className="w-full text-center py-4">
					<p>No users found.</p>
				</div>
			) : (
				<></>
			)}
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	);
}
