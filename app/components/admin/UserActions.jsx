"use client";

import { MoreHorizontal } from "lucide-react";

export default function UserActions() {
	return (
		<div className="flex justify-start">
			<div className="dropdown flex relative dropdown-top justify-center">
				
				<button tabIndex={0} className="btn btn-sm btn-square btn-outline">
					<MoreHorizontal />
				</button>
				<ul className="dropdown-content absolute  z-50 bg-gray-100 menu py-2 mt-1 rounded-box overflow-auto justify-center ">
					<li>
						<div className="px-12">item</div>
					</li>
					<li>
						<div className="px-12">item</div>
					</li>
					<li>
						<div className="px-12">item</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
