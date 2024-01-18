import Link from "next/link";
import Image from "next/image";
import React from "react";
import RadiusBackground from "@/assets/HomePage/FeatureProductsRadiusTop.svg";
import Tickmark from "@/assets/SatelliteDownlink/tickMark.svg";
import Football from "@/assets/OTTPlatform/Football.png";
import { OTTPlatformArray } from "@/constants/OTTPlatformArray";
import DiscoveryCall from "@/components/desktop/DiscoveryCall";
import SeamlessCoverageForm from "@/components/desktop/CDN/SeamlessCoverageForm";
import Brands from "@/components/desktop/Brands";
import SetTopBox from "@/assets/OTTPlatform/SetTopBox.png";

const OTTPlatformAudience = [
	{
		heading: "Reduce Latency",
		description:
			"With multiple PoPs across the globe, there is limited to no possibility of long buffering or interruption in your content delivery.",
	},
	{
		heading: "Seamless & Smooth Delivery",
		description:
			"By optimizing our platform for streaming, we ensure the most seamless content delivery without having to compromise on quality.",
	},
	{
		heading: "No Limitations",
		description:
			"We are here to offer you a free hand to deliver high-quality content to any screen or device, anywhere in the world",
	},
];

const OTTPlatform = () => {
	return (
		<div className="text-white">
			<div className="bg-[#121315] relative text-center py-32 flex flex-col gap-5">
				<div className="boxLayout mx-auto p-10 flex flex-col gap-7">
					<div className="font-bold flex flex-col gap-3">
						<h1 className="text-[#4fa83d] text-5xl ">OTT Platform</h1>
						<h2 className="text-3xl">
							Superior user experience across all major platforms
						</h2>
					</div>
					<p className="px-48 text-base text-[#CFCFCF]">
						Over the Top (OTT) allows the users to enjoy live TV, video on
						demand, and recorded streams on the go anytime and anywhere. Our
						middleware allows you to manage your customer subscription, content
						management, and customer billing.
					</p>
					<div className="border-2 border-[#4fa83d] rounded-lg w-[70%] p-2 pl-5 mx-auto mt-5 flex justify-between">
						<input
							type="text"
							placeholder="Enter your email to sign in"
							className="rounded-lg text-lg w-full bg-transparent text-white leading-none transition duration-300 ease-in focus:outline-none"
						/>
						<Link
							href="/"
							className={`min-w-max bg-[#4fa83d] border-2 border-[#4fa83d] text-white text-base leading-none transition duration-300 ease-in rounded-lg hover:bg-transparent hover:text-[#4fa83d] py-4 px-10`}
						>
							Get Started
						</Link>
					</div>
				</div>
				<Image
					src={RadiusBackground}
					alt="Curved Background"
					className="w-full absolute bottom-[-1px] transform rotate-0 h-[70px] lg:h-32 "
				></Image>
			</div>
			<div className="boxLayout mx-auto py-24 flex justify-between gap-10">
				<div className="flex flex-col gap-5">
					<div className="flex gap-5 items-start">
						<Image
							src={Tickmark}
							alt="TickMark"
							className="mt-[6px]"
							width={20}
						></Image>
						<div className="flex flex-col gap-5">
							<h1 className="text-[#4fa83d] text-2xl ">
								OTT Platform as Service
							</h1>
							<p>
								Experience the luxury of delivering pre-recorded content as well
								as live streams to internet-enabled devices such as mobiles,
								tablets, smart TV, smartphones, streaming sticks, laptops, and
								personal computers.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex gap-5 items-start">
						<Image
							src={Tickmark}
							alt="TickMark"
							className="mt-[6px]"
							width={20}
						></Image>
						<div className="flex flex-col gap-5">
							<h1 className="text-[#4fa83d] text-2xl ">
								Audio/Video Broadcast
							</h1>
							<p>
								Along with the seamless video transmission, you can enjoy smooth
								and uninterrupted Podcasts, internet radio, and any other audio
								content one can think of with our advanced CDN solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Image src={Football} alt="Football" className="mx-auto py-20"></Image>
			<div className="boxLayout mx-auto">
				<div className="text-center px-20 flex flex-col gap-5">
					<h1 className="text-[40px] font-semibold">
						<span className="text-[#4fa83d]">Reach your audience</span> anywhere
						in the world
					</h1>
					<p className="text-[#CFCFCF] font-normal text-base">
						Advanced solutions let you deliver modern TV services while
						maintaining quality regardless of the distribution technology.
						Eliminate the latency or any interruption in your content delivery.
					</p>
				</div>
				<div className="flex flex-col gap-5 py-10">
					{OTTPlatformAudience.map((item, index) => (
						<div className="flex flex-col gap-5 p-10 bg-[#111214]" key={index}>
							<h1 className=" text-2xl font-bold">{item.heading}</h1>
							<p className="text-[#CFCFCF] text-lg">{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className="boxLayout w-full mx-auto bg-[#4fa83d] flex gap-10 justify-between p-10">
				<Image src={SetTopBox} alt="SetTopBox" className="w-1/2"></Image>
				<div className="flex flex-col gap-5">
					<h1 className="text-black text-2xl font-semibold">Set-Top Box</h1>
					<h3 className="text-4xl font-bold">
						Ready for your platform to take off? Let’s get in touch to learn how
						we can offer you customized CDN solutions for high-quality OTT
						delivery.
					</h3>
					<div className="flex gap-5">
						<Link
							href="/"
							className={`bg-white text-center text-black text-base leading-none transition duration-300 ease-in rounded-lg px-10 py-5 hover:bg-black hover:text-white`}
						>
							Contact Us
						</Link>
						<Link
							href="/"
							className={`bg-white  text-black text-base leading-none transition duration-300 ease-in rounded-lg px-10 py-5 hover:bg-black hover:text-white`}
						>
							Get Free Trial
						</Link>
					</div>
				</div>
			</div>

			<div className="boxLayout mx-auto py-20 flex flex-col gap-16">
				<div>
					<h2 className="text-[40px] text-white text-center font-semibold leading-[1.4em]">
						<span className="text-[#4fa83d]">Why 5centsCDN </span> For OTT
						Platforms?
					</h2>
				</div>
				<div>
					<div className="flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10">
						{OTTPlatformArray.map((item, index) => (
							<div key={index} className="w-full md:w-[29.5%]">
								<div className="flex flex-col text-center">
									<div className="mb-5 flex justify-center">
										<Image
											className="w-full max-w-[378px] md:w-full"
											src={item.img}
											alt={item.heading}
										/>
									</div>
									<div className="mb-5">
										<h3 className="text-[22px] text-[#4fa83d] font-semibold leading-none">
											{item.heading}
										</h3>
									</div>
									<p className="text-[#cfcfcf] text-base leading-[1.5]">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<DiscoveryCall
				heading='<span class="text-[#4fa83d]">Enjoy the video streams </span> on the go anytime and anywhere'
				subheading=""
				description="Sales & Client solutions team typically responds within 1 business day."
			/>
			<SeamlessCoverageForm heading="Opt For The Modern Content Delivery" />
			<div className="w-full pb-[90px]">
				<Brands />
			</div>
			<div className="boxLayout border border-[#7a7b7c] mx-auto mb-10"></div>
		</div>
	);
};

export default OTTPlatform;
