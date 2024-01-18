"use client";
import React from "react";
import Image from "next/image";
import DropRightArrow from "@/assets/GlobalImages/DropRightArrow.svg";
import DropRightArrowGreen from "@/assets/GlobalImages/DropRightArrowGreen.svg";
import { useState } from "react";

export interface FrequentlyAskedQuestionInterface {
	title: string;
	description: string;
}

const FrequentlyAskedQuestionDropDown = ({
	index,
	question,
}: {
	index: number;
	question: FrequentlyAskedQuestionInterface;
}) => {
	const [isDropDown, setIsDropDown] = useState(false);
	return (
		<div key={index} className="bg-[#1B1D20] p-6 border-l-2 border-[#4FA83D]">
			<div
				className="flex justify-between hover:cursor-pointer"
				onClick={() => setIsDropDown(!isDropDown)}
			>
				<h1>{question.title}</h1>
				<button>
					{isDropDown ? (
						<Image
							src={DropRightArrowGreen}
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
			{isDropDown && (
				<div className="mt-5">
					<p dangerouslySetInnerHTML={{ __html: question.description }}></p>
				</div>
			)}
		</div>
	);
};

export default FrequentlyAskedQuestionDropDown;
