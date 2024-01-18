"use client";
import React, { useState } from "react";
import Image from "next/image";

interface SubRobustFeatureInterface {
	img: string;
	title: string;
	description: string;
}

const SubRobustFeature = ({ item }: { item: SubRobustFeatureInterface }) => {
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			className={`w-[350px] min-h-[250px]  flex flex-col justify-between p-5 pb-0  rounded-xl ${
				isHover ? "verticalLine" : ""
			}`}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				className={`flex flex-col gap-2	h-[270px] text-white  ${
					isHover ? "" : "horizontalLine"
				}  pb-20`}
			>
				<Image
					src={item.img}
					alt="Adaptive Acceleration"
					className="w-[74px] h-[47px]"
				/>
				<h1 className="text-base not-italic font-semibold leading-7">
					{item.title}
				</h1>
				<p className="leading-8 text-[#7A7A7A] text-lg font-normal">
					{item.description}
				</p>
			</div>
		</div>
	);
};

export default SubRobustFeature;
