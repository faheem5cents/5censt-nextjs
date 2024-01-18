import React from "react";
import Image from "next/image";
import RadiusBackground from "@/assets/HomePage/FeatureProductsRadiusTop.svg";

import { FeatureBoxArray } from "@/constants/FeatureBoxArray";
import SubFeatureBox from "./SubFeatureBox";

const Feature = () => {
	return (
		<div className="bg-[#18191b49] relative text-white py-[90px] pt-[90px] lg:pb-[180px] lg:p-0">
			<Image
				src={RadiusBackground}
				alt="Curved Background"
				className="w-full absolute top-[-1px] transform rotate-180 h-[70px] lg:h-32 "
			></Image>
			<div className="boxLayout mx-auto p-10 py-10 flex flex-col gap-16">
				{FeatureBoxArray.map((feature, index) => (
					<div
						key={index}
						className="flex flex-col even:flex-col justify-center items-center gap-10 py-10 lg:flex-row lg:even:flex-row-reverse"
					>
						<Image
							src={feature.img}
							className="lg:w-1/2 w-full"
							alt={feature.heading}
						/>
						<div className="lg:w-1/2 w-full p-3 flex flex-col gap-5">
							<h1 className="text-[22px] text-[#4FA83D] font-medium">
								{feature.heading}
							</h1>
							<h3 className="text-[32px] leading-10 font-medium">
								{feature.subheading}
							</h3>
							<p className="text-base text-[#CFCFCF] font-normal leading-7">
								{feature.description}
							</p>
							{feature.subfeatures && (
								<div className="flex flex-col gap-3">
									{feature.subfeatures.map((subfeature, index) => (
										<SubFeatureBox
											key={index}
											index={index}
											subfeature={subfeature}
										/>
									))}
								</div>
							)}
							{feature.buttonType && (
								<button className="w-fit text-white px-10 py-5 justify-center items-center rounded-lg bg-[#4FA83D] font-medium border border-[#4FA83D] hover:bg-transparent hover:border hover:border-[#4FA83D]  transition-colors delay-150 hover:text-[#4FA83D]">
									{feature.buttonType.text}
								</button>
							)}
						</div>
					</div>
				))}
			</div>
			<Image
				src={RadiusBackground}
				alt="Curved Background"
				className="w-full absolute bottom-[-1px] transform rotate-0 h-[70px] lg:h-32 "
			></Image>
		</div>
	);
};

export default Feature;
