"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import DropRightArrow from "@/assets/GlobalImages/DropRightArrow.svg";

interface SubFeatureBoxProps {
	icon: any;
	name: string;
	description: string;
}

const SubFeatureBox = ({
	index,
	subfeature,
}: {
	index: number;
	subfeature: SubFeatureBoxProps;
}) => {
	const [showDescription, setShowDescription] = useState(false);

	return (
		<div
			key={index}
			className={`border border-[#1C1E20] cursor-pointer p-4 transition-colors ${
				showDescription ? "bg-[#1C1E20]" : ""
			}`}
		>
			<div
				className=" flex justify-between"
				onClick={() => setShowDescription(!showDescription)}
			>
				<div className="flex gap-3">
					<Image
						src={subfeature.icon}
						width={30}
						height={24}
						alt={subfeature.name}
					/>
					<p>{subfeature.name}</p>
				</div>
				<button>
					{showDescription ? (
						<Image
							src={DropRightArrow}
							width={8}
							height={16}
							alt="Down Arrow"
							className="transform rotate-90 transition-all duration-500 "
						/>
					) : (
						<Image
							src={DropRightArrow}
							width={8}
							height={16}
							alt="Up Arrow"
							className="transition-all duration-500"
						/>
					)}
				</button>
			</div>
			<div
				className={`${
					showDescription ? "h-fit py-5" : "h-0"
				} overflow-hidden transition-all duration-500`}
			>
				<p>{subfeature.description}</p>
			</div>
		</div>
	);
};

export default SubFeatureBox;
