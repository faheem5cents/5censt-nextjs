import AwardWinning from "@/components/desktop/AwardWinning/AwardWinning";
import Brands from "@/components/desktop/Brands";
import ClientAndExperience from "@/components/desktop/ClientAndExperience/ClientAndExperience";
import FrequentlyAskedQuestion from "@/components/desktop/FAQ/FrequentlyAskedQuestion";
import Feature from "@/components/desktop/Features/Feature";
import HighlightsCounter from "@/components/desktop/HighlightsCounter";
import ExploreCPanel from "@/components/desktop/Homepage/ExploreCPanel";
import HomeComparePlans from "@/components/desktop/Homepage/HomeComparePlans";
import HomePricing from "@/components/desktop/Homepage/HomePricing";
import Infographics from "@/components/desktop/Homepage/Infographics";
import MultiPopsAnimation from "@/components/desktop/Homepage/MultiPopsAnimation";
import TopBanner from "@/components/desktop/Homepage/HomeTopBanner";
import TryForFreeForm from "@/components/desktop/TryForFreeForm";
import React from "react";
import { FrequentlyAskedQuestionArray } from "@/constants/FrequentlyAskedQuestionArray";

const HomePage = () => {
	return (
		<>
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
					heading='<span class="text-[#4FA83D]">Have some questions </span> before
					getting started?'
					FrequentlyAskedQuestionArray={FrequentlyAskedQuestionArray}
				/>
				<ClientAndExperience description="Let us introduce you to our clients & their experience with us" />
				<TryForFreeForm heading={" Give Your Customers The Best Viewing Experience."} />
			</div>
		</>
	);
};

export default HomePage;
