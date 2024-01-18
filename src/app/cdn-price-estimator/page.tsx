import Brands from "@/components/desktop/Brands";
import CDNPricing from "@/components/desktop/Pricing/CDNPricing";
import TryForFreeForm from "@/components/desktop/TryForFreeForm";
import React from "react";

const CDNPriceEstimator = () => {
	return (
		<div>
			<div className="boxLayout min-h-screen mx-auto py-40">
				<div className="text-white text-center flex flex-col gap-5">
					<h1 className="text-[#4FA83D] text-6xl font-bold">
						Estimate your CDN pricing per month
					</h1>
					<p className="text-[23px] font-normal">
						Check out how much you{" "}
						<span className="text-[#4FA83D]"> pay for month</span> out of your
						pocket! via our cdn monthly price estimator.
					</p>
					<div className="mt-20 flex flex-col gap-10 w-full min-h-screen bg-[#1b1c1f] p-5 rounded-3xl">
						<CDNPricing />
					</div>
					<TryForFreeForm
						heading={"Give Your Customers The Best Viewing Experience."}
					/>
				</div>
			</div>
			<div className="w-full pb-40">
				<Brands />
			</div>
			<div className="boxLayout border border-[#7a7b7c] mx-auto mb-10"></div>
		</div>
	);
};

export default CDNPriceEstimator;
