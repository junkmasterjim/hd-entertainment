import PortfolioGallery from "@/app/components/PortfolioGallery";
import Loading from "@/app/admin/loading";
import { Suspense } from "react";
import PageFooter from "@/app/components/PageFooter";

export default function Page() {
	return (
		<Suspense fallback={<Loading />}>
			<PortfolioGallery />
		</Suspense>
	);
}
