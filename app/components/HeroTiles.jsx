import Image from "next/image";
import Link from "next/link";

export default function HeroTiles() {
	return (
		<main>
			<div className="relative isolate">
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-50 lg:px-8 lg:pt-16">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							{/* Hero Content */}

							<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-primary  sm:text-6xl">
									Experience creativity like no other.
								</h1>
								<p className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
									Your premier destination for industry standard music
									production, as well as graphic design, and video production
									expertise. Where rhythms resonate and visuals abound; we
									transform your vision into a reality.
								</p>
								<div className="mt-10 relative z-10 flex items-center gap-x-6">
									<Link
										className="bg-primary hover:bg-neutral dark:bg-neutral dark:hover:bg-neutral-focus text-secondary dark:text-primary btn border-none"
										href={"/about#about"}
										scroll={true}
									>
										Learn More <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>

							{/* Image Gallery */}

							<div className="z-0 -mt-4 flex justify-center gap-4 sm:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 sm:scale-100 scale-[85%]">
								{/* Grid Left */}
								<div className="ml-auto w-52 flex-none sm:space-y-8 space-y-4 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/a43w6m1yyuik4av1dgg2m/testing-loop-kit.svg?rlkey=pb3x71g9lsk1yu4t53ygldgyk&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/dl3yppl38yvvcjq0fq92a/tre-shit.svg?rlkey=5bybetn1fuv35e8dq1wi1g673&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Center */}

								<div className="mr-auto w-52 flex-none sm:space-y-8 space-y-4 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/96x44lj80dwcea9xveb4o/tmag-shit.svg?rlkey=z7qzfhhy40idqbbc8qivt4u4p&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/su0kun9wkbqbpysfb82hn/astronaut.svg?rlkey=y47sjvh5hzciepwdey35ivf0h&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/mdqzja143o7i20xm3x85i/MM-2.svg?rlkey=1vgdx3s89dy64jmstd0bdr79g&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Right */}

								<div className="w-52 flex-none sm:space-y-8 space-y-4 pt-32 sm:pt-0">
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/8kux7lqosnrpx7awmh4m2/BRANDOsvg.svg?rlkey=eavvngqnxj8nhmdcolovn8x8r&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/eztk9ocy1v8suysj404tp/DEMONS-COVER-ART-yfk.hd.svg?rlkey=8ya6w01vaxrqzdb1pxxnil7ht&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											placeholder="empty"
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/zpzyahnopprryigd77z56/suto-shit-1.svg?rlkey=9wwtebeookg4wh8i92o2difai&dl=0"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
