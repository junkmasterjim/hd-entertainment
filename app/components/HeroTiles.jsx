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
											src="https://dl.dropboxusercontent.com/scl/fi/s8hmm4hz2yb1rd1bcb4jo/testing-loop-kit.jpg?rlkey=cq7jg5i4qa8c8itgpdjsem636&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/APPz8vr5+vr5+efn5wCxrqw6NixKSD6sq6kAsa+tDAYABAQAurq5AOTk5NXV1NLS0f7+/lDRH8sigNObAAAAAElFTkSuQmCC"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/n4ufn2i3fbdskfaaaeacg/tre-shit.jpg?rlkey=vesezquf8mreuam5u3us8pwd1&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAP0lEQVR4nAE0AMv/AIZQeL2GnOrCyrOfswBHOksQDAeGc3aWkJoAnpOz/+/////V6ezLAAYAJSUZMxMHHQ0IH6RUFxKw0WCKAAAAAElFTkSuQmCC"
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
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/xg96p7dgdm4k8ja2egtpq/tmag-shit.jpg?rlkey=q9lxp1rksbxeheb2mix67fylr&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAP0lEQVR4nAE0AMv/ABgZG8q5voV4fgABAQAmJSf25+x9cnUCBAUAYFVX/vz/p6apX1RRAKSam5uPj7yqp1BERA6TFiu6hazaAAAAAElFTkSuQmCC"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/7lor60rszr8lzww3ubf3s/astronaut.jpg?rlkey=v0wcbihh9qenkzc28403uro63&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAPElEQVR4nGNQkpdRUVTg5+GUkhBhMDbQ72iu7+1o5uPhYOBgZnj14Maf3595OFkYZCRFo0MDkxKiZCTFADT+DWU9HXcjAAAAAElFTkSuQmCC"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/tuenn948nefpjusz5fusp/MM-2.jpg?rlkey=2petxgf33340k0azwnemiymjc&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAP0lEQVR4nAE0AMv/ANCkr6h/gbuRib2MnQB8VVQcAAA3KiE2IiIA/8PI36e3VjhA/8fXAOexvf/n9nlXX/rF2IHtGu1X0zNiAAAAAElFTkSuQmCC"
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
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/qfhr9fz8a2h4w5s57plui/BRANDO.jpg?rlkey=7k4l770814rcpmhj1bbd4h9l0&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAP0lEQVR4nAE0AMv/AA4ODvHw8NDMzNrY2gAFBQX/9/epoKDX09MAERQUmoKCXENI5eXjACkuLm1HSy0AAMfLy7k9GMt9Fjo9AAAAAElFTkSuQmCC"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/x9ydxxhjj0fywuh86ic7b/DEMONS-COVER-ART-yfk.hd.jpg?rlkey=6poo350qcvo5juzl32bi3a0a7&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAP0lEQVR4nAE0AMv/AOTj6szK0dzb4vDw9gD09P1lXmRCPED//v8AysjQMSktEAAEiYSJAGplaBwUFzkxNU5JSk0qGd87DByNAAAAAElFTkSuQmCC"
											alt=""
											className="aspect-[1/1] pointer-events-none w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<Image
											priority
											width={208}
											height={208}
											src="https://dl.dropboxusercontent.com/scl/fi/t2yrfmxe9mkw9f27zckra/suto-shit-1.jpg?rlkey=96whz4u8d4v4iu323dis6fbzw&dl=0"
											placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAPUlEQVR4nGMQ4WCQkZISFxPi4GBg8HI1DvD39fLySE7wZwhwNDu6bcH5XcvtbKwZymJT/1/f9//tEW0RWQA4LxD3ynoVCAAAAABJRU5ErkJggg=="
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
