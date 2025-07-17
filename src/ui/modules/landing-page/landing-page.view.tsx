import { HeroTopView } from "./components/hero-top/hero-top.view";
import { FeaturedView } from "./components/featured/featured.view";
import { SlackView } from "./components/slack/slack";
import { CurentCourceCtaView } from "./components/curent-course-cta/curent-course-cta.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";
import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";

export const LandingPageView = () => {
	return (
		<>
			<HeroTopView />
			<FeaturedView />
			<SlackView />
			<CurentCourceCtaView />
			<HighlightListView />
			<CallToActionView />
		</>
	);
};
