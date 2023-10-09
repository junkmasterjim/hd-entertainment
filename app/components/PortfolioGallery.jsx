"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Masonry from "react-masonry-css";

export default function PortfolioGallery() {
	const [gallery, setGallery] = useState([]);

	useEffect(() => {
		fetch("/api/portfolio", {
			headers: { "Content-type": "application/json", isFromSite: "true" },
		})
			.then((res) => res.json())
			.then((data) => setGallery(data));
	}, []);

	return (
		<Masonry
			breakpointCols={3}
			className="portfolioGrid -ml-8 flex w-auto"
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
								controls
								src={content.imageUrl}
							></video>
						</div>
					) : (
						<div className="relative h-96 bg-gray-500 my-8" key={content.name}>
							<Image
								priority
								src={content.imageUrl}
								alt={content.name}
								fill
								className="object-cover "
							/>
						</div>
					)
				)}
		</Masonry>
	);
}
