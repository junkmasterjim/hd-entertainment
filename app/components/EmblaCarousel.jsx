"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";

import { pageRoutes } from "@/pageRoutes";

export const EmblaCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "center",
		loop: true,
	});

	const scrollPrevious = () => {
		if (emblaApi) emblaApi.scrollPrev();
	};
	const scrollNext = () => {
		if (emblaApi) emblaApi.scrollNext();
	};

	return (
		<div className="mt-8 md:flex items-center hidden">
			<button
				className="btn bg-transparent border-none hover:text-secondary dark:hover:text-primary hover:bg-neutral text-primary "
				onClick={scrollPrevious}
			>
				<ChevronsLeft width={"48"} height={"48"} />
			</button>
			<div className="embla overflow-hidden text-center" ref={emblaRef}>
				<div className="embla__container flex mx-[-10rem] lg:mx-[-8rem]">
					{pageRoutes.map((route) => (
						<div
							key={route.name}
							className="embla__slide flex-[0_0_100%] min-w-0"
						>
							<Link
								href={`${route.route}`}
								className="hover:text-secondary dark:hover:text-primary btn bg-transparent border-none uppercase font-black text-4xl tracking-widest italic hover:bg-neutral text-primary"
							>
								{route.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={scrollNext}
				className="btn bg-transparent border-none hover:bg-neutral text-primary hover:text-secondary dark:hover:text-primary"
			>
				<ChevronsRight width={"48"} height={"48"} />
			</button>
		</div>
	);
};
