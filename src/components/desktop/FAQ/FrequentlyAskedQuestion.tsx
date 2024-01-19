import React from "react";
import FrequentlyAskedQuestionDropDown from "./FrequentlyAskedQuestionDropDown";
import FAQTopBorder from "/public/assets/Homepage/FAQTopBorder.svg";
import Image from "next/image";
import { FrequentlyAskedQuestionInterface } from "./FrequentlyAskedQuestionDropDown";

const FrequentlyAskedQuestion = ({
	heading,
	FrequentlyAskedQuestionArray,
}: {
	heading: string;
	FrequentlyAskedQuestionArray: FrequentlyAskedQuestionInterface[];
}) => {
	return (
			<div className="w-[100%] bg-[#1c1e204f] relative py-36">
				<Image
					src={FAQTopBorder}
					alt="Top Border"
					className="absolute top-0 w-full [transform:rotateY(180deg)]"
				></Image>
				<div className="boxLayout mx-auto py-10 flex flex-col justify-center items-center ">
					<h1
						className="text-[40px] font-semibold text-white flex flex-wrap justify-center items-center"
						dangerouslySetInnerHTML={{ __html: heading }}
					></h1>
					<div className="w-full my-10 text-white flex flex-col gap-5">
						{FrequentlyAskedQuestionArray.map((question, index) => (
							<FrequentlyAskedQuestionDropDown
								key={index}
								index={index}
								question={question}
							/>
						))}
					</div>
				</div>
				<Image
					src={FAQTopBorder}
					alt="Top Border"
					className="absolute bottom-[-2px] w-full [transform:rotateX(180deg)]"
				></Image>
			</div>
	);
};

export default FrequentlyAskedQuestion;
