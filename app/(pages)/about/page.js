import PageFooter from "@/app/components/PageFooter";
import MissionStatement from "./MissionStatement";
import HeroTiles from "./HeroTiles";
import NewsletterCTA from "./NewsletterCTA";

export default function Page() {
	return (
		<>
			<HeroTiles />
			<MissionStatement />
			<NewsletterCTA />
			<PageFooter />
		</>
	);
}
