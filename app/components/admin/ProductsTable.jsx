"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Loading from "@/app/admin/loading";
import { Copy, MoreHorizontal } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProductsTable() {
	const [isLoading, setIsLoading] = useState();
	const [idToPatch, setIdToPatch] = useState();

	const [products, setProducts] = useState();
	const [nameInput, setNameInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");
	const [priceInput, setPriceInput] = useState("");
	const [urlInput, setUrlInput] = useState("");
	const [imageUrlInput, setImageUrlInput] = useState("");
	const [idInput, setIdInput] = useState("");

	const router = useRouter();

	const handleNameChange = (e) => {
		setNameInput(e.target.value);
	};
	const handleImageUrlChange = (e) => {
		setImageUrlInput(e.target.value);
	};
	const handleDescriptionChange = (e) => {
		setDescriptionInput(e.target.value);
	};
	const handlePriceChange = (e) => {
		setPriceInput(e.target.value);
	};
	const handleUrlChange = (e) => {
		setUrlInput(e.target.value);
	};
	const handleIdChange = (e) => {
		setIdInput(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch("/api/products", {
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
			await fetch("/api/products", {
				method: "DELETE",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					id: id,
				}),
			})
				.then((response) => {
					// console.log(response.status);
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
		fetch("/api/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(false);
			});
	}, [products]);

	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>ID</th>
						<th>Preview</th>
						<th>Name</th>
						<th>Desc</th>
						<th>URL</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{products?.map((product) => (
						<tr key={product.id} className="hover">
							<td>
								<div>
									{/* PREVIEW IMAGES */}

									<form
										onSubmit={async (e) => {
											e.preventDefault();

											// Patch the ID
											try {
												await fetch("/api/products", {
													method: "PATCH",
													headers: { "Content-type": "application/json" },
													body: JSON.stringify({
														id: product.id,
														name: product.name,
														imageUrl: product.imageUrl,
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
												{product.id}
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
															placeholder={product.id}
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
								</div>
							</td>
							<td>
								<div>
									{/* PREVIEW IMAGES */}

									<div className="mask mask-circle w-12 h-12">
										<Image
											loading="lazy"
											className="rounded-full"
											width={96}
											height={96}
											placeholder="blur"
											blurDataURL={product?.base64}
											src={product.imageUrl}
											alt={product.name}
										/>
									</div>
								</div>
							</td>
							<td>
								<div className="flex items-center gap-2 space-x-3">
									{/* NAME */}
									<div>
										<div>{product.name}</div>
									</div>
								</div>
							</td>
							<td>
								{/* DESCRIPTION */}
								{product.description}
							</td>
							<td>
								<div className="flex items-center gap-2">
									<button className="btn btn-sm btn-square btn-outline">
										<Copy
											height={20}
											width={20}
											onClick={() => {
												navigator.clipboard.writeText(product.url);
												toast.success("Copied URL to clipboard.");
											}}
										/>
									</button>
									<div className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[12ch]">
										{/* DESCRIPTION */}
										{product.url}
									</div>
								</div>
							</td>
							<th>
								{/* Open the modal using document.getElementById('ID').showModal() method */}
								<button
									className="btn btn-outline btn-sm btn-square"
									onClick={() =>
										document.getElementById(product.name).showModal()
									}
								>
									<MoreHorizontal />
								</button>
								<dialog id={`${product.name}`} className="modal">
									<div className="modal-box bg-primary text-secondary">
										<h3 className="font-bold flex flex-col text-2xl">
											Actions
											<span className=" text-secondary/75 text-lg flex justify-between">
												{product.name}
												<Image
													unoptimized
													loading="lazy"
													src={product.imageUrl}
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
													minLength={1}
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter a name."
												/>

												<label
													htmlFor="descriptionInput"
													className="label font-bold text-secondary/75"
												>
													Description (visible to users):
												</label>
												<input
													required
													onChange={handleDescriptionChange}
													id="descriptionInput"
													value={descriptionInput}
													type="text"
													minLength={1}
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter a brief description."
												/>

												<label
													htmlFor="priceInput"
													className="label font-bold text-secondary/75"
												>
													Price:
												</label>
												<input
													required
													onChange={handlePriceChange}
													id="priceInput"
													value={priceInput}
													type="number"
													minLength={1}
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Select a price."
												/>

												<label
													htmlFor="urlInput"
													className="label font-bold text-secondary/75"
												>
													URL:
												</label>
												<input
													required
													onChange={handleUrlChange}
													id="urlInput"
													value={urlInput}
													type="url"
													minLength={1}
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter the product URL."
												/>

												<label
													htmlFor="imageUrlInput"
													className="label font-bold text-secondary/75"
												>
													Image URL:
												</label>
												<input
													required
													value={imageUrlInput}
													onChange={handleImageUrlChange}
													id="imageUrlInput"
													type={"url"}
													className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
													placeholder="Enter the Image URL."
												/>

												<div className="flex mt-8 container justify-between">
													<div
														type={"button"}
														className="btn btn-error text-secondary dark:text-primary"
														onClick={() =>
															document
																.getElementById(`delete-${product.id}`)
																.showModal()
														}
													>
														Delete
													</div>
													<button
														type="submit"
														className="btn btn-secondary text-primary"
														onClick={() => {
															setIdToPatch(product.id);
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
								<dialog id={`delete-${product.id}`} className="modal">
									<div className="modal-box max-w-sm bg-secondary text-primary">
										<h3 className="font-bold text-lg">Confirm Delete</h3>
										<p className="py-4">
											Confirm deletion of{" "}
											<span className="font-bold">{product.name}</span>?
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
													onDelete(product.id);
													document.getElementById(product.id);
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
