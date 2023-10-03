import PageFooter from "@/app/components/PageFooter";
import MissionStatement from "@/app/components/MissionStatement";
import HeroTiles from "@/app/components/HeroTiles";
import NewsletterCTA from "@/app/components/NewsletterCTA";

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
