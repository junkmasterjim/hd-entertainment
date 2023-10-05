"use client";

import { use, useEffect, useState } from "react";
import Loading from "@/app/admin/loading";
import { toast, Toaster } from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UsersCard() {
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState(null);
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [idToPatch, setIdToPatch] = useState();

	const router = useRouter();

	useEffect(() => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setIsLoading(false);
			});
	}, [users]);

	const handleNameChange = (e) => {
		setNameInput(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmailInput(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await fetch("/api/users", {
			method: "PATCH",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				id: idToPatch,
				name: nameInput,
				email: emailInput,
			}),
		})
			.then((response) => {
				console.log(response.status);
				return response.json();
			})
			.then((data) => console.log(data));

		router.refresh();
	};

	const onDelete = async () => {
		await fetch("/api/users", {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				id: idToPatch,
			}),
		})
			.then((response) => {
				console.log(response.status);
				return response.json();
			})
			.then((data) => console.log(data));

		router.refresh();
	};

	return (
		<div className="card overflow-x-hidden bg-secondary-focus text-primary shadow-xl md:py-2 md:px-16 mb-12">
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
				<div className="divider mb-0" />
				<div className="overflow-x-auto relative z-10">
					{isLoading ? (
						<div className="w-full flex justify-center">
							<Loading />
						</div>
					) : (
						<table className="table static z-20">
							{/* head */}
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Actions</th>
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
										<td>
											{/* Open the modal using document.getElementById('ID').showModal() method */}
											<button
												className="btn btn-outline btn-sm btn-square"
												onClick={() =>
													document.getElementById(user.email).showModal()
												}
											>
												<MoreHorizontal />
											</button>
											<dialog id={`${user.email}`} className="modal">
												<div className="modal-box bg-primary text-secondary">
													<h3 className="font-bold flex flex-col text-2xl">
														Actions
														<span className=" text-secondary/75 text-lg">
															{user.email}
														</span>
														<div className="divider before:bg-secondary/50 after:bg-secondary/50 m-0"></div>
													</h3>
													<div className="">
														<form onSubmit={onSubmit} className="form-control">
															<label
																htmlFor="nameInput"
																className="label font-bold text-secondary/75"
															>
																Name:
															</label>
															<input
																required
																onChange={handleNameChange}
																id="nameInput"
																value={nameInput}
																type="text"
																minLength={1}
																className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
																placeholder="Enter a name"
															/>
															<label
																htmlFor="emailInput"
																className="label font-bold text-secondary/75"
															>
																Email:
															</label>
															<input
																required
																value={emailInput}
																onChange={handleEmailChange}
																id="emailInput"
																type="email"
																className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
																placeholder="Enter an email address."
															/>
															<div className="flex mt-8 container justify-between">
																<div
																	type={"button"}
																	className="btn btn-error text-primary"
																	onClick={onDelete}
																>
																	Delete
																</div>
																<button
																	type="submit"
																	className="btn btn-secondary text-primary"
																	onClick={() => {
																		setIdToPatch(user.id);
																	}}
																>
																	Save
																</button>
															</div>
														</form>
													</div>
												</div>
												<form method="dialog" className="modal-backdrop">
													<button></button>
												</form>
											</dialog>
										</td>
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
