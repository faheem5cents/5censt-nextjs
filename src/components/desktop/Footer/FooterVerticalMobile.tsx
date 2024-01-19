"use client";
import React from "react";
import Link from "next/link";
import RecurringArrow from "/public/assets/GlobalImages/RecurringArrow.svg";
import Image from "next/image";
import DropDownArrow from "/public/assets/GlobalImages/DropDownArrow.svg";
import DropUpArrow from "/public/assets/GlobalImages/DropUpArrow.svg";
import { useState } from "react";

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

const FooterVerticalMobile = ({
	headerName,
	elementList,
}: FooterVerticalInterface) => {
	const [isDropDown, setIsDropDown] = useState(false);
	return (
		<div className="">
			<div className="flex justify-between w-100 items-center p-5 border-y border-[#1f1f1f]">
				<h1 className="text-white font-roboto text-[16px] font-bold leading-5">
					{headerName}
				</h1>
				<button onClick={() => setIsDropDown(!isDropDown)}>
					{isDropDown ? (
						<Image
							src={DropUpArrow}
							width={20}
							height={20}
							alt="Up Arrow"
							className=""
						/>
					) : (
						<Image
							src={DropDownArrow}
							width={20}
							height={20}
							alt="Down Arrow"
							className=""
						/>
					)}
				</button>
			</div>
			{isDropDown && (
				<ul className="text-[#FFFFFFAB] text-[14px] leading-8 p-5 flex flex-col gap-4">
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
			)}
		</div>
	);
};

export default FooterVerticalMobile;
