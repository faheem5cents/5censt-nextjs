"use client";
import React, { useState } from "react";
import { Slider, SliderValue } from "@nextui-org/react";

interface CDNPricingSubComponentProps {
	index: number;
	name: string;
	description?: string;
	min: number;
	max: number;
	value: SliderValue;
	defaultValue?: number;
	setterFunc: (index: number, newValue: SliderValue) => void;
	unitBefore?: string;
	unitAfter?: string;
}

const CDNPricingSubComponent = ({
	index,
	name,
	description,
	min,
	max,
	value,
	defaultValue,
	setterFunc,
	unitBefore,
	unitAfter,
}: CDNPricingSubComponentProps) => {
	const returnValue = (value: SliderValue) => {
		setterFunc(index, value);
	};

	return (
		<div className="flex flex-col gap-2 w-full max-w-md">
			<div className="flex justify-between text-[15px] font-bold">
				<div className="flex gap-1">
					<h1 className="">{name}</h1>
					{description && (
						<p className="text-[#4fa83d] hidden lg:block">{description}</p>
					)}
				</div>
				<div className="flex gap-1">
					{unitBefore && <h1>{unitBefore}</h1>}
					<h1>{value}</h1>
					{unitAfter && <h1>{unitAfter}</h1>}
				</div>
			</div>
			<Slider
				size="sm"
				step={1}
				minValue={min}
				maxValue={max}
				showTooltip={true}
				aria-label={name}
				className="max-w-md h-10 hover:cursor-pointer"
				color="success"
				onChange={returnValue}
				defaultValue={defaultValue}
				marks={[
					{
						value: 0,
						label: "0",
					},

					{
						value: max,
						label: String(max),
					},
				]}
			/>
		</div>
	);
};

export default CDNPricingSubComponent;
