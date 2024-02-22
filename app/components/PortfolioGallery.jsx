"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Masonry from "react-masonry-css";
import Loading from "../(publicPages)/loading";

export default function PortfolioGallery() {
	const [gallery, setGallery] = useState([]);

	const breakpoints = {
		default: 4,
		1100: 3,
		700: 2,
	};

	useEffect(() => {
		fetch("/api/portfolio", {
			headers: { "Content-type": "application/json", isFromSite: "true" },
		})
			.then((res) => res.json())
			.then((data) => setGallery(data));
	}, []);

	return gallery.length === 0 ? (
		<Loading />
	) : (
		<div className="flex w-full justify-center p-4 py-36">
			<Masonry
				breakpointCols={breakpoints}
				className="-ml-8 flex w-auto max-w-screen-xl"
				columnClassName="pl-8 bg-clip-padding"
			>
				{typeof gallery == "object" &&
					gallery.map((content) =>
						content.isVideo ? (
							<div key={content.name}>
								<video
									muted
									loop
									autoPlay
									className="rounded-xl my-8 max-h-[512px]"
									controls
									src={content.imageUrl}
								></video>
							</div>
						) : (
							<div className="my-8" key={content.name}>
								<Image
									src={content.imageUrl}
									alt={content.name}
									loading="lazy"
									height={512}
									width={512}
									className="rounded-xl"
									placeholder="blur"
									blurDataURL={content.base64}
								/>
							</div>
						)
					)}
			</Masonry>
		</div>
	);
}
