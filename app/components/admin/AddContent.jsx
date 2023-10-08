"use client";

import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddContent() {
	const [nameInput, setNameInput] = useState("");
	const [urlInput, setUrlInput] = useState("");
	const [isVideoInput, setIsVideoInput] = useState(false);

	const toggleIsVideoInput = () => {
		setIsVideoInput(!isVideoInput);
	};

	const router = useRouter();

	const handleNameChange = (e) => {
		setNameInput(e.target.value);
	};
	const handleUrlChange = (e) => {
		setUrlInput(e.target.value);
	};
	const handleIsVideoInputChange = () => {
		setIsVideoInput(!isVideoInput);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			await fetch("/api/portfolio", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: nameInput,
					isVideo: isVideoInput,
					imageUrl: urlInput,
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
				onClick={() => document.getElementById("addContent").showModal()}
				className="btn btn-sm btn-primary"
			>
				Add Content
			</button>
			<dialog id="addContent" className="modal">
				<div className="modal-box bg-primary text-secondary">
					<h3 className="font-bold flex flex-col text-2xl">
						Add Portfolio Content
						<span className=" text-secondary/75 text-lg">
							All fields required
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
								htmlFor="imageUrlInput"
								className="label font-bold text-secondary/75"
							>
								Image URL:
							</label>
							<input
								required
								value={urlInput}
								onChange={handleUrlChange}
								id="imageUrlInput"
								type={"url"}
								className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
								placeholder="Enter the Image URL."
							/>
							<div className="flex items-center gap-4">
								<label
									htmlFor="toggle"
									className="label font-bold text-secondary/75"
								>
									Video? :
								</label>
								<input
									type="checkbox"
									id="toggle"
									value={isVideoInput}
									onChange={handleIsVideoInputChange}
									className="checkbox checkbox-secondary"
								/>
							</div>
							<button
								type="submit"
								className="btn my-2 btn-secondary text-primary"
							>
								Add Content
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
