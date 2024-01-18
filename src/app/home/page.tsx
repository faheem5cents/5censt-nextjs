import AwardWinning from "@/components/desktop/AwardWinning/AwardWinning";
import Brands from "@/components/desktop/Brands";
import ClientAndExperience from "@/components/desktop/ClientAndExperience/ClientAndExperience";
import FrequentlyAskedQuestion from "@/components/desktop/FAQ/FrequentlyAskedQuestion";
import Feature from "@/components/desktop/Features/Feature";
import Footer from "@/components/desktop/Footer/Footer";
import HighlightsCounter from "@/components/desktop/HighlightsCounter";
import ExploreCPanel from "@/components/desktop/Homepage/ExploreCPanel";
import HomeComparePlans from "@/components/desktop/Homepage/HomeComparePlans";
import HomePricing from "@/components/desktop/Homepage/HomePricing";
import Infographics from "@/components/desktop/Homepage/Infographics";
import MultiPopsAnimation from "@/components/desktop/Homepage/MultiPopsAnimation";
import TopBanner from "@/components/desktop/Homepage/HomeTopBanner";
import TryForFreeForm from "@/components/desktop/TryForFreeForm";
import React from "react";
import DiscoveryCall from "@/components/desktop/DiscoveryCall";
import { FrequentlyAskedQuestionArray } from "@/constants/FrequentlyAskedQuestionArray";

const home = () => {
	return (
		<div>
			<TopBanner />
			<Brands />
			<HighlightsCounter />
			<Feature />
			<AwardWinning />
			<ExploreCPanel />
			<MultiPopsAnimation />
			<HomePricing />
			<Infographics />
			<HomeComparePlans />
			<FrequentlyAskedQuestion
				heading={
					'<span class="text-[#56B743]">Have some questions</span> before getting started?'
				}
				FrequentlyAskedQuestionArray={FrequentlyAskedQuestionArray}
			/>
			<ClientAndExperience
				description={
					'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#56B743]">See What They&apos;re Saying </span>'
				}
			/>
			<TryForFreeForm heading={">Give Your Customers The Best Viewing Experience."} />
			<Footer />
		</div>
	);
};

export default home;
