import React from "react";
import hollowCircle from "/public/assets/SwitchCDN/hollowCircle.svg";
import Image from "next/image";
import { CDNProviderArray } from "@/constants/CDNProviderArray";
import CDNTab from "@/components/desktop/CDN/CDNTab";
import QuarterCircleLeft from "/public/assets/CDN/QuarterCircleLeft.svg";
import CurveLinesRight from "/public/assets/CDN/CurveLinesRight.svg";
import { CDNArray } from "@/constants/CDNArray";
import { SwitchCDNArray } from "@/constants/SwitchCDNArray";
import CDNSupportYou from "/public/assets/CDN/CDNSupportYou.png";
import ClientAndExperience from "@/components/desktop/ClientAndExperience/ClientAndExperience";
import TryForFreeForm from "@/components/desktop/TryForFreeForm";
import Brands from "@/components/desktop/Brands";

const CDNAssistArray = [
	{
		heading: "Contact 5centsCDN For Migration Support",
		description:
			"Don’t sweat over disrupted services, our skilled and highly dedicated team is at your service 24/7.",
	},
	{
		heading: "24/7 Live Support",
		description:
			"Don’t sweat if you can’t figure something out regarding our features or services. Our dedicated and highly professional support team is ready to help you at all times.",
	},
	{
		heading: "Social Media Channels",
		description:
			"Join us on our highly interactive and informative social channels for constant updates where we engage in productive conversations about all aspects of content delivery.",
	},

	{
		heading: "Basecamp Channel",
		description:
			"Communication is the key! Stay in touch with our team through an active basecamp channel, in case you need help with anything regarding our services or features.",
	},
];

const SwitchCDN = () => {
	return (
		<div className="text-white">
			<div className="w-full">
				<div className="boxLayout mx-auto py-20">
					<div className="flex flex-col gap-5 justify-center items-center py-20">
						<h1 className="text-[#4fa83d] text-5xl font-bold">
							Looking to switch your CDN provider?
						</h1>
						<h3 className="text-xl">
							Switching a CDN provider is not like moving from one hairdresser
							to another. It’s complex and should be thought through.
						</h3>
						<p className="text-xl">
							Ask yourself this question:{" "}
							<span className="text-[#4fa83d]">
								{" "}
								what is it that you’re looking for in an ideal CDN provider?
							</span>
						</p>
					</div>
					<div className="flex items-center flex-col md:flex-row mt-[15px] gap-4 relative">
						<Image
							className="absolute left-[-3%] top-[58%] w-[59px] hidden lg:block"
							src={QuarterCircleLeft}
							alt="QuarterCircleLeft"
						/>
						<Image
							className="absolute right-[-3%] top-[54%] w-[94.5px] hidden lg:block"
							src={CurveLinesRight}
							alt="CurveLinesRight"
						/>
						{SwitchCDNArray.map((item, index) => (
							<div key={index} className="w-full z-10">
								<div className="p-5 bg-[#18191b] rounded-[10px] min-h-[230px]">
									<div className="mb-5 flex items-center gap-[15px] text-[#4fa83d] text-xl font-bold flex-wrap">
										<p className="border-2 rounded-[100%] p-3">0{index + 1}</p>
										<span>{item.heading}</span>
									</div>
									<div className="mb-4">
										<p className="text-[#cfcfcf] text-sm leading-[1.5]">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* CDN Provider */}
			<div className="bg-[#121314] w-full py-36">
				<div className="boxLayout mx-auto">
					<h1 className="text-center text-[48px] font-bold px-[250px]">
						Here&apos;s your{" "}
						<span className="text-[#4fa83d]"> step by step guide</span> to
						switch your CDN Provider
					</h1>
					<ul className="flex flex-col gap-5 mt-10">
						{CDNProviderArray.map((item, index) => (
							<li
								key={index}
								className="flex items-center gap-3 text-[20px] font-normal"
							>
								<Image src={hollowCircle} alt="Hollow Circle" width={25} />
								<p>{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={`boxLayout mx-auto pt-24 w-full`}>
				<div className="flex items-center flex-col-reverse lg:flex-row">
					<div className="w-full lg:w-1/2 text-left">
						<div className="mb-5 flex flex-col gap-5">
							<h2 className="text-white text-[30px] md:text-[40px] font-semibold text-left capitalize">
								Checkout Our
								<span className="text-[#4fa83d]"> CDN Assist Migration?</span>
							</h2>
						</div>
						<div className="flex flex-col gap-5">
							{CDNAssistArray.map((item, index) => (
								<div key={index} className="flex flex-col gap-2">
									<h3 className="text-[#4fa83d] text-[22px] text-left capitalize">
										{item.heading}
									</h3>
									<p className="text-[#cfcfcf] text-base leading-[1.5]">
										{item.description}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="w-full lg:w-1/2">
						<Image
							className="w-full"
							src={CDNSupportYou}
							alt="CDN Support You"
						/>
					</div>
				</div>
			</div>
			<div className="w-full">
				<ClientAndExperience
					description={
						"Join The Hundreds Of Thousands Of Happy Subscribers. <span class='text-[#4fa83d]'> See What They're Saying </span>"
					}
				/>
			</div>
			<div className="py-20">
				<TryForFreeForm heading={"Give Your Customers The Best Viewing Experience."} />
			</div>
			<div className="w-full pb-40">
				<Brands />
			</div>
			<div className="boxLayout border border-[#7a7b7c] mx-auto mb-10"></div>
		</div>
	);
};

export default SwitchCDN;
