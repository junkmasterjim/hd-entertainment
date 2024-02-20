"use client";

import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddContent() {
	const [nameInput, setNameInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");
	const [priceInput, setPriceInput] = useState("");
	const [urlInput, setUrlInput] = useState("");
	const [imageUrlInput, setImageUrlInput] = useState("");

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

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch("/api/products", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: nameInput,
					description: descriptionInput,
					price: priceInput,
					url: urlInput,
					imageUrl: imageUrlInput,
				}),
			})
				.then((response) => {
					console.log(response.status);
					return response.json();
				})
				.then((data) => console.log(data));

			router.refresh();
			toast.success("Content created.", { duration: 2500 });
		} catch (err) {
			console.log(err);
			toast.error("There was an error.");
		}
	};

	return (
		<div className="flex justify-between py-8">
			<span></span>
			<button
				onClick={() => document.getElementById("addProduct").showModal()}
				className="btn btn-sm btn-primary"
			>
				Add Product
			</button>
			<dialog id="addProduct" className="modal">
				<div className="modal-box bg-primary text-secondary">
					<h3 className="font-bold flex flex-col text-2xl">
						Add Product
						<span className=" text-secondary/75 text-lg">
							All fields are required
						</span>
						<div className="divider before:bg-secondary/50 after:bg-secondary/50 m-0"></div>
					</h3>

					<div className="">
						<form onSubmit={onSubmit} className="form-control gap-4">
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

							<button
								type="submit"
								className="btn my-2 btn-secondary text-primary"
							>
								Add Product
							</button>
						</form>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button></button>
				</form>
			</dialog>
			<Toaster position={"top-center"} reverseOrder={false} />
		</div>
	);
}
