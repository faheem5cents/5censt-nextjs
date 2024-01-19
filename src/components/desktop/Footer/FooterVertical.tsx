import React from "react";
import Link from "next/link";
import RecurringArrow from "/public/assets/GlobalImages/RecurringArrow.svg";
import Image from "next/image";

interface ElementListInterface {
	name: string;
	link: string;
	buttonOption?: {
		buttonName: string;
		link: string;
	};
}

interface FooterVerticalInterface {
	headerName: string;
	elementList: ElementListInterface[];
}

const FooterVertical = ({
	headerName,
	elementList,
}: FooterVerticalInterface) => {
	return (
		<div className="max-w-[150px]">
			<h1 className="text-white font-roboto text-[18px] font-medium leading-5 mb-10">
				{headerName}
			</h1>
			<ul className="text-[#ffffffcc] text-[14px] flex flex-col gap-4">
				{elementList.map((element, index) => (
					<li key={index} className="flex gap-3 items-center">
						<Link href={element.link}>{element.name}</Link>
						{element.buttonOption && (
							<button className="inline-flex text-white px-4 py-1 justify-center items-center rounded-lg bg-[#4FA83D] text-[11px]">
								{element.buttonOption.buttonName}
							</button>
						)}
					</li>
				))}
				{headerName === "Feature" && (
					<li className="flex gap-5 items-center text-[#59A52C]">
						<Link href="/features">All Features</Link>
						<Image src={RecurringArrow} alt="recurring-arrow" />
					</li>
				)}
			</ul>
		</div>
	);
};

export default FooterVertical;
