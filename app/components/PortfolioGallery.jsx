"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Masonry from "react-masonry-css";

export default function PortfolioGallery() {
	const [gallery, setGallery] = useState([]);

	useEffect(() => {
		fetch("/api/portfolio")
			.then((res) => res.json())
			.then((data) => setGallery(data));
	}, []);

	console.log(gallery);

	return (
		<Masonry
			breakpointCols={3}
			className="portfolioGrid -ml-8 flex w-auto"
			columnClassName="pl-8 bg-clip-padding"
		>
			{gallery.map((content) =>
				content.isVideo ? (
					<div>
						<video muted autoPlay loop src={content.imageUrl}></video>
					</div>
				) : (
					<div className="relative h-96 bg-gray-500 my-8">
						<Image
							priority
							src={content.imageUrl}
							alt={content.name}
							fill
							className="object-cover"
						/>
					</div>
				)
			)}
		</Masonry>
	);
}
