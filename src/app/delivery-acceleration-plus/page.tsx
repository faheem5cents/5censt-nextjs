import DiscoveryCall from "@/components/desktop/DiscoveryCall";
import RobustFeature from "@/components/desktop/Features/RobustFeature";
import SecurityFeature from "@/components/desktop/Security Feature/SecurityFeature";
import WebAcceleration from "@/components/desktop/WebAcceleration/WebAcceleration";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DeliveryAccelerationPlusDashboard from "@/assets/RobustFeature/Delivery-Acceleration-Plus-Dashboard.gif";
import Globe from "@/assets/GlobalImages/Globe.svg";
import ClientAndExperience from "@/components/desktop/ClientAndExperience/ClientAndExperience";
import { DeliveryAccelerationPlusFrequentlyAskedQuestionArray } from "@/constants/FrequentlyAskedQuestionArray";
import FrequentlyAskedQuestionDropDown from "@/components/desktop/FAQ/FrequentlyAskedQuestionDropDown";
import AwardWinningSlider from "@/components/desktop/AwardWinning/AwardWinningSlider";

const DeliveryAccelerationPlus = () => {
	return (
		<div>
			{/* Heading  */}
			<div className="relative">
				<div className=" boxLayout mx-auto">
					{/* <Image
						src={Globe}
						alt="Globe"
						className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
					/> */}
					<div className="flex flex-col items-center justify-center text-center text-white gap-2 py-10">
						<div className="px-20">
							<h1 className="text-[48px] font-semibold">
								Delivery Acceleration{" "}
								<span className="bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-transparent bg-clip-text">
									{" "}
									Plus
								</span>
							</h1>
							<h3 className="text-[#59A52C] text-[64px] font-semibold tracking-wider">
								Security. Optimization. Speed.
							</h3>
							<p className="text-[#DCDBDB] text-lg font-normal tracking-[0.36px]">
								The SOS flare that your website fired has been answered by over
								50 edge rules, and image optimizer. Provide maximum security and
								speed, ensuring your website runs smoothly and efficiently.
							</p>
						</div>
						<Link
							className="text-white text-base mt-10 font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent hover:text-[#4fa83d]"
							href="#"
						>
							Get Started Today
						</Link>
						<Image
							src={DeliveryAccelerationPlusDashboard}
							alt="Delivery Acceleration Plus Dashboard"
						/>
					</div>
					{/* <Image
						src={Globe}
						alt="Globe"
						className="absolute  bottom-0 right-0 translate-x-1/2 translate-y-1/2 "
					/> */}
				</div>
			</div>
			{/* Heading End  */}
			<RobustFeature />
			<SecurityFeature />
			{/* Web Acceleration Description  */}
			<div className="boxLayout mx-auto flex flex-col justify-center items-center text-white p-10">
				<h1 className="text-5xl text-center font-bold leading-tight">
					Upgrade Your{" "}
					<span className="text-[#56B743]"> Web Acceleration </span>To A New
					Level Of Security With
					<span className="text-[#56B743]"> CDN Assist Migrate</span>
				</h1>
				<p className="mt-3 text-center text-[#DCDBDB] text-lg leading-6">
					Navigating The World Of Secured Adaptive Web Acceleration Can Be
					Daunting, But Thats Where We Come In. Our Mission Is To Make Sure Our
					Platform Is Simple, Easy To Use, And Accessible To Everyone. If Youre
					Struggling With Choosing The Right Features For Your Needs, Take
					Advantage Of Our CDN Assist Migrate Program.
				</p>
				<p className="text-[#56B743] mt-16 text-center text-xl leading-6">
					Here&apos;s What You Can Expect From Our CDN Assist Migrate Program
				</p>
			</div>
			{/* Web Acceleration Description End  */}
			<WebAcceleration />
			<DiscoveryCall
				heading='Ready to take your website to <span class="text-[#4fa83d]"> the next level? </span>'
				subheading="Looking for a comprehensive solution for website security, delivery, and acceleration?"
				description="Sales & Client solutions team typically responds within 1 business day."
			/>
			{/* Award Winning Description  */}
			<div className="boxLayout mx-auto py-48">
				<div className="flex flex-col justify-center items-center text-white  ">
					<h1 className="text-5xl text-center font-bold leading-tight">
						Our Award Wining{" "}
						<span className="text-[#56B743]">CDN Services</span> Have Proven
						Itself Multiple Time On{" "}
						<span className="text-[#56B743]">Reputed Platforms</span> Like{" "}
						<span className="text-[#56B743]">G2</span>, Trustpilot And GetApp.
					</h1>
				</div>
				<AwardWinningSlider />
			</div>
			{/* Award Winning Description End  */}
			<div className="boxLayout mx-auto">
				<div className="flex flex-col items-center justify-center text-center text-white gap-2 py-10">
					<p className="text-[#DCDBDB] text-center text-2xl font-normal leading-8 tracking-[0.75px] px-28">
						Don&apos;t Let The{" "}
						<span className="text-[#56B743]">Complexities</span> Of Web
						Acceleration <span className="text-[#56B743]">Hold You Back.</span>
						With <span className="text-[#56B743]">
							CDN Assist Migrate,
						</span>{" "}
						You&apos;ll Get{" "}
						<span className="text-[#56B743]">The Security And Performance</span>{" "}
						You Need To{" "}
						<span className="text-[#56B743]">
							{" "}
							Take Your Site To The Next Level.
						</span>
					</p>
					<Link
						className="text-white text-base mt-5 font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent hover:text-[#4fa83d]"
						href="#"
					>
						Get Started Today
					</Link>
				</div>
			</div>
			<div className="boxLayout mx-auto">
				<div className="flex flex-col items-center justify-center text-center text-white gap-2 py-10">
					<ClientAndExperience
						description='Join The Hundreds Of Thousands Of Happy Subscribers. 
						<span class="text-[#56B743]">See What They&apos;re Saying</span>'
					/>
				</div>
			</div>
			<div className="w-[100%] relative py-16">
				<div className="boxLayout mx-auto py-10 flex flex-col justify-center items-center ">
					<h1 className="text-[40px] font-semibold text-white flex flex-wrap justify-center items-center">
						Got questions?
						<span className="text-[#56B743]">
							{"  "}
							We&apos;ve got answers!
						</span>{" "}
						Discover everything you need to know about
						<span className="text-[#56B743]">
							{" "}
							Delivery Acceleration Plus
						</span>{" "}
						right here.
					</h1>
					<div className="w-full my-10 text-white flex flex-col gap-5">
						{DeliveryAccelerationPlusFrequentlyAskedQuestionArray.map(
							(question, index) => (
								<FrequentlyAskedQuestionDropDown
									key={index}
									index={index}
									question={question}
								/>
							)
						)}
					</div>
					<Link
						className="text-white text-base mt-5 font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent hover:text-[#4fa83d]"
						href="#"
					>
						View More
					</Link>
				</div>
			</div>
			<div className="boxLayout border border-[#7a7b7c] mx-auto mb-10"></div>
		</div>
	);
};

export default DeliveryAccelerationPlus;
