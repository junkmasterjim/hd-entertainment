"use client";

import { Toaster } from "react-hot-toast";
import ProductsTable from "./ProductsTable";
import AddProduct from "./AddProduct";

export default function ProductsCard() {
	return (
		<div className="card overflow-x-hidden bg-secondary-focus text-primary shadow-xl md:py-2 md:px-16 mb-12">
			<div className="card-body">
				<div className="flex justify-between">
					<h2 className=" card-title text-xl sm:text-2xl">Products</h2>
					<div className="flex gap-8">
						<AddProduct />
					</div>
				</div>
				<div className="divider mb-0" />
				<div className="overflow-x-auto relative z-10">
					{/* TODO: build product table to fit schema */}
					<ProductsTable />
				</div>
			</div>

			<Toaster position={"top-center"} reverseOrder={false} />
		</div>
	);
}
