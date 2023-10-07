"use client";

import Loading from "@/app/admin/loading";
import AddContent from "@/app/components/admin/AddContent";

import { toast, Toaster } from "react-hot-toast";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

export default function PortfolioCard() {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="card overflow-x-hidden bg-secondary-focus text-primary shadow-xl md:py-2 md:px-16 mb-12">
			<div className="card-body">
				<div className="flex justify-between">
					<h2 className=" card-title text-xl sm:text-2xl">Portfolio Content</h2>
					<div className="flex gap-8">
						<AddContent />
					</div>
				</div>
				<div className="divider mb-0" />
				<div className="overflow-x-auto relative z-10"></div>
			</div>

			<Toaster position={"top-center"} reverseOrder={false} />
		</div>
	);
}
