"use client";
import React, { useState } from "react";
import CDNPricingSubComponent from "./CDNPricingSubComponent";
import { SliderValue } from "@nextui-org/react";
import { CDNPricingArray } from "@/constants/CDNPricingArray";
import CDNSummarySubComponent from "@/components/desktop/Pricing/CDNSummarySubComponent";
import Image from "next/image";
import DropDown from "@/assets/CDN/DropDownSummary.svg";

type CDNPricingTypeId = "standard-network" | "enterprise-network";

const CDNPricingType: {
	name: string;
	id: CDNPricingTypeId;
}[] = [
	{
		name: "Standard Network",
		id: "standard-network",
	},
	{
		name: "Enterprise Network",
		id: "enterprise-network",
	},
];

const CDNPricing = () => {
	const [values, setValues] = useState<SliderValue[]>(() =>
		CDNPricingArray.map((item) =>
			item.default !== undefined ? item.default : 0
		)
	);

	const handleSubComponentChange = (index: number, newValue: SliderValue) => {
		setValues((prevValues) => {
			const newValues = [...prevValues];
			newValues[index] = newValue;
			return newValues;
		});
	};

	const [toggleSummary, setToggleSummary] = useState<boolean>(true);

	const [activeTab, setActiveTab] =
		useState<CDNPricingTypeId>("standard-network");

	const handleTabClick = (tabName: CDNPricingTypeId) => {
		setActiveTab(tabName);
	};

	const totalAmount = values.reduce((prev, curr, index) => {
		const rate = CDNPricingArray[index].rate?.[activeTab];
		if (rate) {
			return (prev as number) + (((curr as number) * rate) as number);
		}
		return (prev as number) + (curr as number);
	}, 0);

	return (
		<>
			<div className="w-[80%] mx-auto flex bg-[#1e2023] rounded-[100px]">
				{CDNPricingType.map((item, index) => {
					return (
						<div
							id={item.id}
							key={index}
							className={`w-full rounded-[100px] ${
								activeTab === item.id ? "bg-[#4fa83d]" : ""
							}`}
						>
							<div
								onClick={() => handleTabClick(item.id)}
								className="flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer"
							>
								<span>{item.name}</span>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex gap-10 px-20 py-16">
				<div className="bg-[#18191b] w-1/2 p-10 rounded-lg">
					<h1 className="text-[21px] font-bold">
						Monthly Standard Network CDN Price Estimator
					</h1>
					<div className="py-10 flex flex-col gap-3">
						{CDNPricingArray.map((item, index) => {
							return (
								<CDNPricingSubComponent
									key={index}
									index={index}
									name={item.name}
									description={item.description}
									min={item.min}
									max={item.max}
									value={values[index]}
									defaultValue={item.default}
									setterFunc={handleSubComponentChange}
									unitAfter={item.afterUnit}
									unitBefore={item.beforeUnit}
								/>
							);
						})}
					</div>
				</div>
				<div className="bg-[#18191b] h-fit w-1/2 p-10 rounded-lg">
					<div className="flex justify-between">
						<h1 className="text-[21px] font-bold">Summary</h1>
						<Image
							src={DropDown}
							alt="DropDown"
							className={`w-7 rounded-[50%] bg-[#2f3032] transition-all duration-150 ${
								toggleSummary ? "transform rotate-180" : ""
							}`}
							onClick={() => setToggleSummary((prev) => !prev)}
						/>
					</div>
					{toggleSummary && (
						<div className="bg-[#303032] w-full mt-5 flex justify-between p-1 px-2">
							<h1 className="font-bold">Name</h1>
							<h1 className="font-bold">Total</h1>
						</div>
					)}
					<div className="pb-10 pt-4 flex flex-col gap-3">
						{toggleSummary && (
							<>
								{CDNPricingArray.map((item, index) => {
									return (
										<CDNSummarySubComponent
											key={index}
											index={index}
											name={item.name}
											rate={item.rate?.[activeTab]}
											value={values[index]}
											unitAfter={item.afterUnit}
											unitBefore={item.beforeUnit}
										/>
									);
								})}
							</>
						)}
						<div className="flex justify-between text-[18px] border-dashed border-b-1 border-[#303032] font-extrabold mt-4">
							<div className="flex gap-1">
								<h1 className="">Total</h1>
							</div>
							<div className="flex gap-1">
								<h1>$</h1>
								{(totalAmount as number).toFixed(2)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CDNPricing;
