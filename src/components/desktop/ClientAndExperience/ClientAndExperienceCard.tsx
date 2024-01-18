import React from "react";
import Image from "next/image";
import StarFilled from "@/assets/ClientExperience/StarFilled.svg";
import StarEmpty from "@/assets/ClientExperience/StarEmpty.svg";

interface ClientAndExperienceCardProps {
	image: string;
	name: string;
	numberOfStars: number;
	date: string;
	subject: string;
	description: string;
}

const ClientAndExperienceCard = ({
	index,
	props,
}: {
	index: number;
	props: ClientAndExperienceCardProps;
}) => {
	const starArray = new Array(5).fill(0);
	return (
		<div className="h-auto max-w-full">
			<div
				className={`px-[30px] py-10 bg-[url('../assets/ClientExperience/ReviewBg.svg')] bg-cover bg-no-repeat bg-top rounded-[20px]`}
			>
				<div className="flex items-center gap-2 mb-5">
					<Image
						width={20}
						className="w-20"
						src={props.image}
						alt={props.name}
					/>
					<div className="flex flex-col p-[10px]">
						<h3 className="text-white text-xl mb-[10px]">{props.name}</h3>
						<div className="flex flex-col">
							<div className="flex">
								{starArray.map((_, index) =>
									index < props.numberOfStars ? (
										<Image
											key={index}
											src={StarFilled}
											alt="Star Filled"
											width={20}
											height={20}
										/>
									) : (
										<Image
											key={index}
											src={StarEmpty}
											alt="Star Empty"
											width={20}
											height={20}
										/>
									)
								)}
							</div>
							<span className="text-[#B4B4B4] text-sm leading-7 mt-[1px]">
								{props.date}
							</span>
						</div>
					</div>
				</div>
				<h2 className="text-white mb-5 text-[22px] font-semibold leading-[1]">
					{props.subject}
				</h2>
				<div
					className="text-[#BEBEBE] text-base leading-[1.3em]"
					dangerouslySetInnerHTML={{ __html: props.description }}
				></div>
			</div>
		</div>
	);
};

export default ClientAndExperienceCard;
