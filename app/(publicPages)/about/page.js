import PageFooter from "@/app/components/PageFooter";
import MissionStatement from "@/app/components/MissionStatement";
import HeroTiles from "@/app/components/HeroTiles";
import NewsletterCTA from "@/app/components/NewsletterCTA";
import LogoCloud from "@/app/components/LogoCloud";

export default function Page() {
	return (
		<>
			<HeroTiles />
			<MissionStatement />
			<LogoCloud />
			<NewsletterCTA />
		</>
	);
}
