import { SliderValue } from "@nextui-org/react";
import React from "react";

interface CDNSummarySubComponentProps {
	index: number;
	name: string;
	value: SliderValue;
	rate?: number;
	unitAfter?: string;
	unitBefore?: string;
}

const CDNSummarySubComponent = ({
	index,
	name,
	value,
	rate,
	unitAfter,
	unitBefore,
}: CDNSummarySubComponentProps) => {
	const amt = rate ? (((value as number) * rate) as number) : (value as number);
	return (
		<div className="flex flex-col w-full max-w-md pb-2 border-dashed border-b-1 ">
			<div className="flex justify-between text-[15px] font-bold">
				<div className="flex gap-1">
					<h1 className="">{name}</h1>
				</div>
				<div className="flex gap-1">
					<h1>$</h1>
					{amt}
				</div>
			</div>
			<div className="px-2 text-left">
				{rate && (
					<p className="text-[#FFFFFFB3] text-sm ">{`${value} ${
						unitAfter ? unitAfter : ""
					} x $${rate}`}</p>
				)}
			</div>
		</div>
	);
};

export default CDNSummarySubComponent;
