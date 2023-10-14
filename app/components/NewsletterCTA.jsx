"use client";

import axios from "axios";

import { CalendarDaysIcon, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function NewsletterCTA() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue({ email: e.target.value, userName: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { email, userName } = inputValue;

		const data = await axios.post("/api/users", { email, userName });
		console.log(data?.data.message);
		if (data?.data.message == undefined) {
			toast.success("Thanks! Your email has been added.", {
				style: {
					padding: "16px",
				},
			});
		} else
			toast.error(
				"There was an error adding your email. Please try again later.",
				{
					style: {
						padding: "16px",
					},
				}
			);
	};

	return (
		<div className="relative isolate overflow-hidden backdrop:blur-md py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
							Stay up to date.
						</h2>
						<p className="mt-4 text-lg leading-8 text-neutral dark:text-secondary-content">
							Enter your email to be notified of any updates, important news, or
							free samples.
						</p>
						<form onSubmit={handleSubmit}>
							<div className="mt-6 flex max-w-md gap-x-4">
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									onChange={handleChange}
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="min-w-0 flex-auto rounded-md border-0 bg-secondary/20 focus:bg-secondary/30 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary/5 focus:ring-2 focus:ring-inset focus:ring-primary-focus sm:text-sm sm:leading-6 placeholder:text-primary/75"
									placeholder="Enter your email"
								/>
								<button
									type="submit"
									className="flex-none rounded-md bg-primary hover:bg-neutral dark:hover:bg-secondary dark:hover:text-primary px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
								>
									Keep Me Posted
								</button>
							</div>
						</form>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-primary/5 p-2 ring-1 ring-white/10">
								<CalendarDaysIcon
									className="h-6 w-6 text-primary"
									aria-hidden="true"
								/>
							</div>
							<dt className="mt-4 font-semibold text-primary">Monthly kits</dt>
							<dd className="mt-2 leading-7 text-neutral dark:text-secondary-content">
								Fresh music production & graphic design assets delivered right
								to your inbox monthly.
							</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-primary/5 p-2 ring-1 ring-white/10">
								<HeartHandshake
									className="h-6 w-6 text-primary"
									aria-hidden="true"
								/>
							</div>
							<dt className="mt-4 font-semibold text-primary">No spam</dt>
							<dd className="mt-2 leading-7 text-neutral dark:text-secondary-content">
								We will never spam you. Only the important things. No BS.
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
				aria-hidden="true"
			></div>
			<Toaster />
		</div>
	);
}
