"use client";

import { useEffect, useState } from "react";

const Page = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch("/api/products");
		const data = await response.json();
		// console.log(data);
		setProducts([data]);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleCheckout = async (event) => {
		event.preventDefault();
	};

	return (
		<div className="pt-32 p-4 flex justify-center items-center">
			{products.map((product) => (
				<div key={product.id} className="space-y-2">
					<h1>{product.name}</h1>
					<p>
						{product.description} {}
					</p>
					<img
						className="object-cover h-64 w-64 rounded-lg"
						src={product.images[0]}
						alt="product image"
					/>

					<button onClick={async () => {}} className="btn btn-secondary">
						Buy Now
					</button>
				</div>
			))}
		</div>
	);
};

export default Page;
