import { Suspense } from "react";

import PageHeader from "../components/PageHeader";
import Loading from "./loading";
import PageFooter from "../components/PageFooter";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen w-full bg-[url('/imageBackgroundBlurred.svg')] absolute z-[-2] bg-cover bg-fixed overflow-auto bg-center bg-no-repeat bg-black/[0.08] bg-blend-overlay dark:bg-gray-700 dark:bg-blend-overlay">
			<PageHeader />
			<Suspense fallback={<Loading />}>
				{children}
				<PageFooter />
			</Suspense>
		</div>
	);
}
