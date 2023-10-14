import PortfolioGallery from "@/app/components/PortfolioGallery";
import Loading from "@/app/admin/loading";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<PortfolioGallery />
		</Suspense>
	);
}
