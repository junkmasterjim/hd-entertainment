"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Loading from "@/app/admin/loading";
import { MoreHorizontal } from "lucide-react";

export default function PortfolioTable() {
	const [isLoading, setIsLoading] = useState();

	const [portfolio, setPortfolio] = useState();
	const [nameInput, setNameInput] = useState("");
	const [urlInput, setUrlInput] = useState("");

	const handleNameChange = (e) => {
		setNameInput(e.target.value);
	};

	const handleUrlChange = (e) => {
		setUrlInput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(nameInput, urlInput);
	};

	useEffect(() => {
		fetch("/api/portfolio")
			.then((res) => res.json())
			.then((data) => {
				setPortfolio(data);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Image URL</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{portfolio?.map((image) => (
						<tr key={image.id}>
							<td>
								<div>
									<div className="mask mask-circle w-12 h-12">
										<Image
											loading="lazy"
											className="rounded-full"
											width={96}
											height={96}
											src={image.imageUrl}
											alt={image.name}
										/>
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
							<td className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[12ch]">
								{image.imageUrl}
							</td>
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
														// onClick={onDelete}
														onClick={() =>
															document.getElementById(image.id).showModal()
														}
													>
														Delete
													</div>
													<button
														type="submit"
														className="btn btn-secondary text-primary"
														onClick={() => {}}
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
