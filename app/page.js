import HdLogoBG from "./components/HdLogoBG";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Drawer from "./components/ui/Drawer";

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-[url('/imageBackground.svg')] absolute z-[-2] bg-cover bg-center bg-no-repeat bg-black/[0.08] bg-blend-overlay dark:bg-gray-700 dark:bg-blend-overlay">
			<HdLogoBG />
			<div className="relative flex justify-center w-full mt-[80%] md:mt-[60%] lg:mt-[35%]">
				<div className="md:hidden" aria-hidden="true">
					<Drawer />
				</div>
				<EmblaCarousel />
			</div>
		</div>
	);
}
