"use client";

import { useEffect, useState } from "react";

const Page = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch("/api/products", {
			headers: {
				isFromSite: true,
			},
		});
		const data = await response.json();

		setProducts(data);
		setIsLoading(false);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<div className="pt-32 md:pt-48 max-w-screen-xl mx-auto p-4 justify-center flex flex-wrap gap-4">
				{isLoading && <h1>Loading...</h1>}
				{products.map((product, i) => (
					<div
						className=" bg-secondary/25 text-secondary-content backdrop-blur-lg max-w-[18rem] max-h-96 w-full overflow-hidden grid grid-rows-2 rounded-lg border border-primary/25"
						key={i}
					>
						<div>
							<a target="_blank" href={product.url}>
								<img
									className="object-cover h-full w-full hover:scale-95 duration-300 ease-in-out rounded-lg hover:opacity-80 transition"
									src={product.imageUrl}
									alt={product.name + " image"}
									onClick={() => {
										console.log(products);
									}}
								/>
							</a>
						</div>
						<div className="py-3 px-4 flex flex-col justify-between  h-full ">
							<div className="space-y-1">
								<h1 className="text-xl font-bold">{product.name}</h1>
								<p className="text-sm italic">{product.description}</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="font-semibold">
									{product.price === 0 ? "Free" : "$" + product.price}
								</p>
								<div>
									<a
										target="_blank"
										href={product.url}
										className="btn btn-sm btn-accent"
									>
										{product.price === 0 ? "Download" : "Buy Now"}
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Page;
