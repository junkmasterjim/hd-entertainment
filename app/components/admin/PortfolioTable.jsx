"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Loading from "@/app/admin/loading";
import { Copy, MoreHorizontal } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PortfolioTable() {
	const [isLoading, setIsLoading] = useState();
	const [idToPatch, setIdToPatch] = useState();

	const [portfolio, setPortfolio] = useState();
	const [nameInput, setNameInput] = useState("");
	const [urlInput, setUrlInput] = useState("");
	const [idInput, setIdInput] = useState("");

	const router = useRouter();

	const handleIdChange = (e) => {
		setIdInput(e.target.value);
	};

	const handleNameChange = (e) => {
		setNameInput(e.target.value);
	};

	const handleUrlChange = (e) => {
		setUrlInput(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch("/api/portfolio", {
				method: "PATCH",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					id: idToPatch,
					name: nameInput,
					imageUrl: urlInput,
				}),
			})
				.then((response) => {
					console.log(response.status);
					return response.json();
				})
				.then((data) => console.log(data));

			router.refresh();
			toast.success("Image updated.", {
				duration: 2500,
			});
		} catch (err) {
			console.log(err);
			toast.error("There was an error.");
		}

		console.log(nameInput, urlInput);
	};

	const onDelete = async (id) => {
		try {
			await fetch("/api/portfolio", {
				method: "DELETE",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					id: id,
				}),
			})
				.then((response) => {
					console.log(response.status);
					return response.json();
				})
				.then((data) => console.log(data));

			router.refresh();
			toast.success("Image deleted.", {
				duration: 2500,
			});
		} catch (err) {
			console.log(err);
			toast.error("There was an error.");
		}
	};

	useEffect(() => {
		fetch("/api/portfolio")
			.then((res) => res.json())
			.then((data) => {
				setPortfolio(data);
				setIsLoading(false);
			});
	}, [portfolio]);

	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>ID</th>
						<th>Preview</th>
						<th>Name</th>
						<th>Image URL</th>
						<th>Type</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{portfolio?.map((image) => (
						<tr key={image.id} className="hover">
							<td>
								<form
									onSubmit={async (e) => {
										e.preventDefault();

										// Patch the ID
										try {
											await fetch("/api/portfolio", {
												method: "PATCH",
												headers: { "Content-type": "application/json" },
												body: JSON.stringify({
													id: image.id,
													name: image.name,
													imageUrl: image.imageUrl,
													updateId: parseInt(idInput),
												}),
											})
												.then((response) => {
													console.log(response.status);
													return response.json();
												})
												.then((data) => console.log(data));

											router.refresh();
											toast.success("ID updated.", {
												duration: 2500,
											});
										} catch (error) {
											console.error(error);
											toast.error("There was an error.");
										}
									}}
								>
									<div className="dropdown">
										<div
											tabIndex={0}
											role="button"
											className="btn btn-sm btn-square btn-outline"
										>
											{image.id}
										</div>
										<div
											tabIndex={0}
											className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
										>
											<div className="card-body">
												<div className="flex gap-2 items-center">
													<label htmlFor="id">ID:</label>
													<input
														value={idInput}
														onChange={handleIdChange}
														required
														placeholder={image.id}
														id="id"
														type="number"
														min={1}
														className="input-sm input bg-secondary text-secondary-content"
													/>
												</div>
												<p className="opacity-75 text-xs">
													Elements are sorted by ID in ascending order.
												</p>

												<button className="btn btn-secondary btn-xs">
													Submit
												</button>
											</div>
										</div>
									</div>
								</form>
							</td>
							<td>
								<div>
									<div className="mask mask-circle w-12 h-12">
										{!image.isVideo ? (
											<Image
												loading="lazy"
												className="rounded-full"
												width={96}
												height={96}
												placeholder="blur"
												blurDataURL={image?.base64}
												src={image.imageUrl}
												alt={image.name}
											/>
										) : (
											<video autoPlay muted className="rounded-full h-12 w-12">
												<source src={image.imageUrl} type="video/mp4" />
											</video>
										)}
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2 space-x-3">
									<div>
										<div>{image.name}</div>
									</div>
								</div>
							</td>
							<td className="flex items-center gap-2 space-x-3">
								<button className="btn btn-sm btn-square btn-outline">
									<Copy
										height={20}
										width={20}
										onClick={() => {
											navigator.clipboard.writeText(image.imageUrl);
											toast.success("Copied URL to clipboard.");
										}}
									/>
								</button>
								<div className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[12ch]">
									{image.imageUrl}
								</div>
							</td>
							<td>{!image.isVideo ? "Image" : "Video"}</td>
							<th>
								{/* Open the modal using document.getElementById('ID').showModal() method */}
								<button
									className="btn btn-outline btn-sm btn-square"
									onClick={() =>
										document.getElementById(image.name).showModal()
									}
								>
									<MoreHorizontal />
								</button>
								<dialog id={`${image.name}`} className="modal">
									<div className="modal-box bg-primary text-secondary">
										<h3 className="font-bold flex flex-col text-2xl">
											Actions
											<span className=" text-secondary/75 text-lg flex justify-between">
												{image.name}
												<Image
													unoptimized
													loading="lazy"
													src={image.imageUrl}
													height={48}
													width={48}
													alt=""
												/>
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
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter a name"
												/>
												<label
													htmlFor="urlInput"
													className="label font-bold text-secondary/75"
												>
													Image URL:
												</label>
												<input
													required
													value={urlInput}
													onChange={handleUrlChange}
													id="urlInput"
													type="url"
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter an image URL."
												/>
												<div className="flex mt-8 container justify-between">
													<div
														type={"button"}
														className="btn btn-error text-secondary dark:text-primary"
														onClick={() =>
															document.getElementById(image.id).showModal()
														}
													>
														Delete
													</div>
													<button
														type="submit"
														className="btn btn-secondary text-primary"
														onClick={() => {
															setIdToPatch(image.id);
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
								<dialog id={image.id} className="modal">
									<div className="modal-box max-w-sm bg-secondary text-primary">
										<h3 className="font-bold text-lg">Confirm Delete</h3>
										<p className="py-4">
											Confirm deletion of{" "}
											<span className="font-bold">{image.name}</span>?
											<br />
											<br />
											This action is irreversible.
										</p>
										<div className="modal-action flex justify-between">
											<form method="dialog">
												{/* if there is a button in form, it will close the modal */}
												<button className="btn btn-primary btn-sm text-secondary">
													Cancel
												</button>
											</form>
											<button
												className="btn btn-sm btn-error text-secondary dark:text-primary"
												onClick={() => {
													onDelete(image.id);
													document.getElementById(image.id);
												}}
											>
												Delete
											</button>
										</div>
									</div>
									<form method="dialog" className="modal-backdrop">
										<button></button>
									</form>
								</dialog>
							</th>
						</tr>

						// Actions Modal
					))}
				</tbody>
			</table>
		</div>
	);
}
