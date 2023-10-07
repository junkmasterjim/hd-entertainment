export default function PortfolioModal() {
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
						<form onSubmit={""} className="form-control gap-4">
							<label
								htmlFor="nameInput"
								className="label font-bold text-secondary/75"
							>
								Name:
							</label>
							<input
								required
								onChange={""}
								id="nameInput"
								value={""}
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
								value={""}
								onChange={""}
								id="imageUrlInput"
								type={"url"}
								className="input text-secondary placeholder:text-secondary/75 bg-primary-focus/50"
								placeholder="Enter the Image URL."
							/>
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
		</div>
	);
}
