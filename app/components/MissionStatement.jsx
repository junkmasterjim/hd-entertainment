import Link from "next/link";

const stats = [
	{ label: "Graphic design experience", value: "6 years" },
	{ label: "Music production experience", value: "4 years" },
	{ label: "Client satisfaction. Guaranteed.", value: "100%" },
];

export default function MissionStatement() {
	return (
		<div id="about" className="-my-24 pt-12 sm:-my-12 pb-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
						High Definition
					</h2>
					<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
						<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
							<p className="text-xl leading-8 text-neutral dark:text-neutral-content">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
								ullam eum iure adipisci nam deserunt nisi odio illo. Doloribus
								velit quas nemo assumenda natus quia explicabo eius in
								exercitationem eaque earum, cum aut delectus iusto libero
								quaerat nobis debitis adipisci excepturi, distinctio tempore
								amet. Illo cumque sequi obcaecati mollitia, illum libero
								accusamus in nihil atque consequuntur quam at odit?
							</p>
							<div className="mt-10 relative z-10 flex items-center gap-x-6">
								<Link
									className="bg-primary hover:bg-neutral dark:bg-neutral dark:hover:bg-neutral-focus text-secondary dark:text-primary btn border-none"
									href={"/portfolio"}
									scroll={true}
								>
									View Portfolio
								</Link>
								<a
									href="#"
									className="bg-transparent dark:bg-transparent text-primary  btn border-neutral hover:bg-neutral-focus hover:text-secondary dark:hover:text-primary dark:border-neutral hover:border-opacity-0"
								>
									Contact
								</a>
							</div>
						</div>
						<div className="lg:flex lg:flex-auto lg:justify-center">
							<dl className="w-64 space-y-8 xl:w-80">
								{stats.map((stat) => (
									<div
										key={stat.label}
										className="flex flex-col-reverse gap-y-4"
									>
										<dt className="text-base leading-7 text-neutral dark:text-neutral-content">
											{stat.label}
										</dt>
										<dd className="text-5xl font-semibold tracking-tight text-primary">
											{stat.value}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
