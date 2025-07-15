import { HeroTopView } from "./components/hero-top/hero-top.view";
import { FeaturedView } from "./components/featured/featured.view";
import { SlackView } from "./components/slack/slack";

export const LandingPageView = () => {
	return (
		<>
			<HeroTopView />
			<FeaturedView />
			<SlackView />
		</>
	);
};
