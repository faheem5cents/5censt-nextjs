import React from "react";
import SubRobustFeature from "./SubRobustFeature";
import { RobustFeatureArray } from "@/constants/RobustFeatureArray";
import { RobustFeatureBackground } from "@/assets/RobustFeature/index";

const RobustFeature = () => {
	return (
		<div className={`robustFeatureBackground bg-[--background-color] `}>
			<div
				className={`boxLayout relative mx-auto text-white flex flex-col p-16 lg:py-48 lg:flex-row lg:px-0`}
			>
				<div className="pb-24 lg:sticky top-[50px] lg:pb-0 self-start">
					<h1 className="text-4xl font-bold leading-tight sticky">
						Explore
						<br />
						<span className="text-[#59A52C;]"> Robust Features</span>
					</h1>
					<p className="text-[#7A7A7A] mt-10 text-lg font-normal">
						Offering multiple video formats so your content flows in a smooth
						and seamless manner. High-quality videos are hard to download,
						convert, share and manage but 5centsCDN makes it simple and
						effecient.
					</p>
				</div>
				<div className=" flex flex-wrap justify-center gap-10">
					{RobustFeatureArray.map((item, index) => (
						<SubRobustFeature key={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RobustFeature;
