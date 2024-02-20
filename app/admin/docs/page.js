import Link from "next/link";
import Image from "next/image";

export default function Page() {
	return (
		<div id="home" className="max-w-screen-xl mx-auto my-12">
			<Intro />
			<Users />
			<Portfolio />
			<Products />
		</div>
	);
}

const Intro = () => {
	const navigation = [
		{ route: "/admin/docs#users", name: "Users" },
		{ route: "/admin/docs#portfolio", name: "Portfolio" },
		{ route: "/admin/docs#products", name: "Products" },
		{ route: "/admin/docs#services", name: "Services" },
	];
	return (
		<>
			<div className="grid sm:grid-cols-3 grid-cols-1 sm:pt-0 pt-16">
				<div className="p-4 card col-span-2 ">
					<h1 className="card-title font-bold text-5xl">HD Entertainment</h1>
					<h2 className="menu-title py-2 px-0 text-2xl">Docs</h2>
					<div className="divider" />
					<p className="">
						This page is designed to give you a comprehensive breakdown on the
						details and actions of the admin dashboard. Please reach out to{" "}
						<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
							noahpittman00@gmail.com
						</code>{" "}
						with any issues, or message me on discord.
						<br />
						<br /> Use the table of contents to jump to any section!
					</p>
				</div>

				<div className="card card-bordered menu w-full max-w-sm ">
					<h2 className="text-3xl text-primary font-semibold menu-title">
						Table of Contents
						<div className="divider m-0" />
					</h2>
					<ul className="text-lg">
						{navigation.map((route) => (
							<li key={route.name}>
								<Link
									scroll
									href={route.route}
									className="link text-primary/75 hover:text-primary"
								>
									{route.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="divider" />
		</>
	);
};

const DocsHeading = ({ title }) => {
	return (
		<h2 className="font-semibold text-4xl max-w-xl">
			<div className="flex justify-between">
				<Link scroll href={`/admin/docs#${title}`} className="capitalize">
					{title} <span className="menu-title text-3xl">#</span>
				</Link>
				<Link scroll href={"/admin/docs#home"} className="menu-title">
					Back to Top
				</Link>
			</div>
			<div className="divider mt-0" />
		</h2>
	);
};

const Users = () => {
	return (
		<div id="users" className="sm:pt-0 pt-16 ">
			<DocsHeading title={"users"} />
			<div>
				<p>
					The users card represents all the{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						User
					</code>{" "}
					entries in your PlanetScale database. It features a{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						Copy to Clipboard
					</code>{" "}
					button which allows you to copy all of the user emails in the
					database, formatted for{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						emailTo:
					</code>{" "}
					fields.{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						(e.g: {"im.yfk.hd@gmail.com, noahpittman00@gmail.com"})
					</code>
				</p>
				<div className="leading-8">
					<p className="underline py-8 pb-4 decoration-primary/25 decoration-2">
						These users consist of:
					</p>

					<ul className="pl-4 flex flex-col gap-4">
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								id
							</code>{" "}
							: An integer. Generated automatically upon user creation.
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								name
							</code>{" "}
							{": A string representing the user's name. This defaults to"}{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								undefined
							</code>{" "}
							unless provided.
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								email
							</code>{" "}
							{
								": A string representing the user's email address. Must be unique. A user cannot be generated without at least providing an email."
							}
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className="card mt-16 card-bordered p-4 max-w-screen-lg grid sm:grid-cols-2 grid-cols-1">
					<div>
						<h2 className="font-semibold text-2xl text-primary w-fit">
							Add User
						</h2>
						<div className="divider mt-0" />
						<div className="flex flex-col gap-12">
							<div className="alert bg-primary text-secondary">
								<p>Name:</p>
								<p>• Used internally only.</p>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Email:</p>
								<p>
									• Required in API call. <br />• Used in Copy to Clipboard
								</p>
							</div>
							<span className="menu-title">
								*all fields are required when creating a user from{" "}
								<code className="badge rounded-md p-2 bg-secondary menu-title ">
									/admin
								</code>
							</span>
						</div>
					</div>
					<div className="pl-4 mt-8 sm:mt-0">
						<Image
							alt=""
							className="w-full rounded-xl"
							src={"/createUser.png"}
							placeholder="blur"
							blurDataURL="/createUser.png"
							width={360}
							height={480}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="card mt-16 card-bordered p-4 max-w-screen-lg grid sm:grid-cols-2 grid-cols-1">
					<div>
						<h2 className="font-semibold text-2xl text-primary w-fit">
							Actions
						</h2>
						<div className="divider mt-0" />
						<div className="flex flex-col gap-12">
							<div className="alert bg-primary text-secondary">
								{"Edit a user's information from the actions menu."}
							</div>
							<div className="alert bg-primary text-secondary">
								<p>
									Delete users from the actions menu. <br />
									<span className="menu-title text-secondary/75 px-0 font-normal">
										This action is irreversible.
									</span>
								</p>
							</div>
							<span className="menu-title">
								*all fields are required when updating a user
							</span>
						</div>
					</div>
					<div className="pl-4 mt-8 sm:mt-0">
						<Image
							alt=""
							className="w-full rounded-xl"
							src={"/userActions.png"}
							placeholder="blur"
							blurDataURL="/userActions.png"
							width={360}
							height={480}
						/>
					</div>
				</div>
			</div>
			<div className="divider" />
		</div>
	);
};

const Portfolio = () => {
	return (
		<div id="portfolio" className="sm:pt-0 pt-16">
			<DocsHeading title={"portfolio"} />
			<div>
				<p>
					The portfolio card represents all the{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						PortfolioImage
					</code>{" "}
					entries in your PlanetScale database.
				</p>
				<div className="leading-8">
					<p className="underline py-8 pb-4 decoration-primary/25 decoration-2">
						The content model consists of:
					</p>

					<ul className="pl-4 flex flex-col gap-4">
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								id
							</code>{" "}
							: An integer. Generated automatically upon user creation.
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								name
							</code>{" "}
							{
								": A string representing content's name. Content cannot be added without providing a name."
							}
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								imageUrl
							</code>{" "}
							: A string containing the dropbox image URL. This link MUST start
							with{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								https://dl.dropbox.com/
							</code>
							.
							<br />
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								isVideo
							</code>{" "}
							: A boolean with a value of true or false. Content with{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								true
							</code>{" "}
							will be rendered as a{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								{"<video>"}
							</code>{" "}
							rather than an{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								{"<image>"}
							</code>{" "}
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								base64
							</code>{" "}
							: String generated automatically by the API at runtime when
							creating content. Most compatible with{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								.jpg
							</code>{" "}
							&{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								.png
							</code>{" "}
							files. This is the string used to generate the blurred placeholder
							while loading. Very important for performance.
						</li>
					</ul>
				</div>
			</div>

			<div>
				<div className="card mt-16 card-bordered p-4 max-w-screen-lg grid sm:grid-cols-2 grid-cols-1">
					<div>
						<h2 className="font-semibold text-2xl text-primary w-fit">
							Create Content
						</h2>
						<div className="divider mt-0" />
						<div className="flex flex-col gap-12">
							<div className="alert bg-primary text-secondary">
								<p>Name:</p>
								<p>• Used internally only.</p>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Image URL:</p>
								<div>
									<div>
										<Image
											alt=""
											className="w-full rounded-xl"
											src={"/copyLinkFromDropbox.png"}
											placeholder="blur"
											blurDataURL="/createUser.png"
											width={360}
											height={480}
										/>
										<p>Copy the image URL from dropbbox.</p>
										<br />
										<p className="font-bold text-lg">
											Replace{" "}
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												www.dropbox.com
											</code>{" "}
											with{" "}
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												dl.dropboxusercontent.com
											</code>{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Video:</p>
								<p>
									When checked, sets{" "}
									<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
										isVideo
									</code>{" "}
									to true. You cannot change this after creating content.
								</p>
							</div>
						</div>
					</div>
					<div className="pl-4 mt-8 sm:mt-0">
						<Image
							alt=""
							className="w-full rounded-xl sm:mt-4"
							src={"/createContent.png"}
							placeholder="blur"
							blurDataURL="/createUser.png"
							width={360}
							height={480}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="card mt-16 card-bordered p-4 max-w-screen-lg grid sm:grid-cols-2 grid-cols-1">
					<div>
						<h2 className="font-semibold text-2xl text-primary w-fit">
							Actions
						</h2>
						<div className="divider mt-0" />
						<div className="flex flex-col gap-12">
							<div className="alert bg-primary text-secondary">
								Edit a posts information from the actions menu. Be sure to
								properly format the Image URL (see above).
							</div>
							<div className="alert bg-primary text-secondary">
								<p>
									Delete content from the actions menu. <br />
									<span className="menu-title text-secondary/75 px-0 font-normal">
										This action is irreversible.
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="pl-4 mt-8 sm:mt-0">
						<Image
							alt=""
							className="w-full rounded-xl"
							src={"/contentActions.png"}
							placeholder="blur"
							blurDataURL="/userActions.png"
							width={360}
							height={480}
						/>
					</div>
				</div>
			</div>
			<div className="divider" />
		</div>
	);
};

const Products = () => {
	return (
		<div id="products" className="sm:pt-0 pt-16">
			<DocsHeading title={"products"} />
			<div>
				<p>
					The products card represents all the{" "}
					<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
						Product
					</code>{" "}
					entries in your PlanetScale database.
				</p>
				<div className="leading-8">
					<p className="underline py-8 pb-4 decoration-primary/25 decoration-2">
						The product model consists of the following{" "}
						<strong>required</strong> fields:
					</p>

					<ul className="pl-4 flex flex-col gap-4">
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								id
							</code>{" "}
							: An integer. Generated automatically upon user creation.
						</li>
						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								name
							</code>{" "}
							{": A string representing product's name."}
						</li>

						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								description
							</code>{" "}
							{": A string representing product description."}
						</li>

						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								url
							</code>{" "}
							{
								": A string representing product URL. This is the product you add to your cart."
							}
						</li>

						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								imageUrl
							</code>{" "}
							: A string containing the gumroad (or dropbox) image URL. This
							link MUST start with{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								https://public-files.gumroad.com
							</code>
							or{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								https://dl.dropbox.com/
							</code>
							.
							<br />
						</li>

						<li>
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								base64
							</code>{" "}
							: String generated automatically by the API at runtime when
							creating content. Most compatible with{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								.jpg
							</code>{" "}
							&{" "}
							<code className="badge rounded-md p-2 bg-secondary-focus/50 text-primary">
								.png
							</code>{" "}
							files. This is the string used to generate the blurred placeholder
							while loading. Very important for performance.
						</li>
					</ul>
				</div>
			</div>

			<div>
				<div className="card mt-16 card-bordered p-4 max-w-screen-lg grid sm:grid-cols-2 grid-cols-1">
					<div>
						<h2 className="font-semibold text-2xl text-primary w-fit">
							Create Product
						</h2>
						<div className="divider mt-0" />
						<div className="flex flex-col gap-12">
							<div className="alert bg-primary text-secondary">
								<p>Name:</p>
								<p>• Viewed by the user.</p>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Desc:</p>
								<p>• Viewed by the user.</p>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Price:</p>
								<p>
									• Viewed by the user with cent reduced. <br />
									i.e. 10 = 9.99, 5 = 4.99, 2.50 = 1.49, 0 = 0, etc
								</p>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Product URL:</p>
								<div>
									<div>
										<Image
											alt=""
											className="w-full rounded-xl"
											src={"/gumroadLink.png"}
											placeholder="blur"
											blurDataURL="/createUser.png"
											width={360}
											height={480}
										/>
										<p>
											Copy the product URL from gumroad. This is the page the
											user will be directed to.
										</p>
										<br />
										<p className="font-bold text-lg">
											Replace{" "}
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												?layout=profile
											</code>{" "}
											with{" "}
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												?layout=product
											</code>{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="alert bg-primary text-secondary">
								<p>Image URL:</p>
								<div>
									<div>
										<Image
											alt=""
											className="w-full rounded-xl"
											src={"/gumroadLink.png"}
											placeholder="blur"
											blurDataURL="/createUser.png"
											width={360}
											height={480}
										/>
										<p>
											Copy the image URL from gumroad. <br />
											Url must start with
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												https://public-files.gumroad.com
											</code>{" "}
											or
											<code className="badge rounded-md p-2 bg-primary-focus/50 text-secondary">
												https://dl.dropbox.com/
											</code>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pl-4 mt-8 sm:mt-0">
						<Image
							alt=""
							className="w-full rounded-xl sm:mt-4"
							src={"/addProduct.png"}
							placeholder="blur"
							blurDataURL="/createUser.png"
							width={360}
							height={480}
						/>
					</div>
				</div>
			</div>
			<div className="divider" />
		</div>
	);
};
