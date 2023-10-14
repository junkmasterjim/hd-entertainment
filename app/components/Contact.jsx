export default function Contact() {
	return (
		<div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-xl lg:max-w-4xl">
				<h2 className="text-4xl font-bold tracking-tight text-primary">
					Let’s discuss{" "}
					<span className=" font-black underline tracking-wide">your</span>{" "}
					vision
				</h2>
				<p className="mt-2 text-lg leading-8 text-primary/75">
					Send a message directly to my inbox.
				</p>
				<div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
					<form action="#" method="POST" className="lg:flex-auto">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label
									htmlFor="name"
									className="block text-sm font-semibold leading-6 text-primary"
								>
									Name
								</label>
								<div className="mt-2.5">
									<input
										placeholder="Enter your name"
										type="text"
										name="name"
										id="name"
										autoComplete="given-name"
										className="input block w-full rounded-md border-0 px-3.5 py-2 bg-secondary/20 focus:bg-secondary/30 text-primary shadow-sm placeholder:text-primary/60 focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-primary"
								>
									Message
								</label>
								<div className="mt-2.5">
									<textarea
										placeholder="Enter your message"
										id="message"
										name="message"
										rows={4}
										className="textarea block w-full rounded-md border-0 px-3.5 py-2 text-primary bg-secondary/20 focus:bg-secondary/30 shadow-sm placeholder:text-primary/60 focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>

						<div className="mt-16">
							<button
								type="submit"
								className="btn btn-primary dark:btn-secondary block w-full rounded-md px-3.5 py-2.5 text-sm font-semibold text-secondary dark:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/25 dark:hover:bg-primary hover:border-none border-none dark:hover:text-secondary"
							>
								Let’s talk
							</button>
						</div>
					</form>
					<div className="lg:mt-6 lg:w-80 lg:flex-none">
						<img
							className="h-12 w-auto"
							src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
							alt=""
						/>
						<figure className="mt-10">
							<blockquote className="text-lg font-semibold leading-8 text-primary">
								<p>
									“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
									expedita voluptas culpa sapiente alias molestiae. Numquam
									corrupti in laborum sed rerum et corporis.”
								</p>
							</blockquote>
							<figcaption className="mt-10 flex gap-x-6">
								<img
									src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
									alt=""
									className="h-12 w-12 flex-none rounded-full bg-gray-50"
								/>
								<div>
									<div className="text-base font-semibold text-primary">
										Brenna Goyette
									</div>
									<div className="text-sm leading-6 text-gray-600">
										CEO of Workcation
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
