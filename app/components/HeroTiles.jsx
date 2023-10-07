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
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/1omsrj8w79fmpsc2ghinp/testing-loop-kit.jpg?rlkey=2gxzks2y6pq7axpefh3d2kmon&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/sv9xg96pyx25kxoslq81b/tre-shit.jpg?rlkey=y0n9o8u8sxm0osbufejvkwazq&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Center */}

								<div className="mr-auto w-52 flex-none sm:space-y-8 space-y-4 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/s/snv89a9yzd8qldx/tmag%20shit.jpg?dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/ezbxhb5dcsqbbho2be2wb/astronaut.jpg?rlkey=feanh8hjxfafgi02fqbs57njl&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/1wzfa6ye3eh389asonx3h/MM-2.jpg?rlkey=56qfp93j51rjbb5o1eruofogl&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>

								{/* Grid Right */}

								<div className="w-52 flex-none sm:space-y-8 space-y-4 pt-32 sm:pt-0">
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/lus812ygdap6eqrtk4qun/fendii-art.jpg?rlkey=fkrqjqagaa7qo2yimb84jxv1t&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/9wivg9jjufwdv5xik6qef/DEMONS-COVER-ART-yfk.hd.jpg?rlkey=q9x1pgsnopupchfv6i00hnkxm&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://www.dropbox.com/scl/fi/38f6zdj5hv8if3ghytaxi/suto-shit-1.jpg?rlkey=h5t8sgzck5pr6bnpodzr2zl8e&dl=1"
											alt=""
											className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
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
