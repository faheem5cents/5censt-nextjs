import React from "react";
import Image from "next/image";
import Link from "next/link";
import BestCDN from "@/assets/BestCDN/IndiaFlag.png";
import CheckRounded from "@/assets/BestCDN/CheckRounded.svg";
import HttpPull from "@/assets/BestCDN/HttpPull.svg";
import HttpPush from "@/assets/BestCDN/HttpPush.svg";
import OTTMarketBg from "@/assets/BestCDN/OTTMarketBg.png";
import TryForFreeForm from '@/components/desktop/TryForFreeForm';

const BestContentDeliveryNetwork = () => {
	return (
		<>
			<div className="py-[90px] bg-[#121416]">
				<div className="max-w-[1140px] mx-auto">
					<div className="p-[10px] text-center ">
						<div className="pb-5 flex items-center justify-center gap-3">
							<h1 className="text-[#4fa83d] text-5xl font-bold capitalize leading-[1.4em]">
								Best Content Delivery Network In India
							</h1>{" "}
							<span>
								<Image src={BestCDN} alt="BestCDN" />
							</span>
						</div>
						<div className="pb-5">
							<h2 className="text-[#cfcfcf] text-[32px] capitalize leading-[1.4em]">
								Take Your Content Delivery Experience To The Next Level
							</h2>
						</div>
						<div className="mx-[15%]">
							<p className="text-[#cfcfcf] text-base ">
								<Link href="#" className="text-[#4fa83d]">
									5centsCDN
								</Link>{" "}
								is capable of delivering uninterrupted content and supports a
								wide range of static and streaming content types. Powered by
								Akamai, we ensure protection and reliability and help you pick
								your own custom plan as per your content delivery needs.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-[#121416]">
				<div className="p-[10px]">
					<div className="pb-5 flex items-center justify-center gap-3">
						<h1 className="text-[#4fa83d] text-[40px] font-bold capitalize leading-[1.4em]">
							What Sets Us Apart
						</h1>
					</div>
					<div>
						<div className="flex items-center text-center flex-wrap gap-[10px] md:gap-0">
							<div className="w-full md:w-1/3">
								<div className="bg-[#FFFFFF05] mr-[6px] p-[30px] lg:p-[60px] rounded-[10px]">
									<div className="mb-5 flex justify-center">
										<Image className="w-7" src={CheckRounded} alt="" />
									</div>
									<h3 className="mb-[15px] mt-2 text-[22px] font-medium text-[#4FA83D] leading-none">
										Superior Content Delivery Network
									</h3>
									<p className="text-[#cfcfcf] text-base leading-[1.5]">
										70+ PoPs across the globe including India enable a
										next-generation superior content delivery platform.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/3">
								<div className="bg-[#FFFFFF05] mr-[6px] p-[30px] lg:p-[60px] rounded-[10px]">
									<div className="mb-5 flex justify-center">
										<Image className="w-7" src={CheckRounded} alt="" />
									</div>
									<h3 className="mb-[15px] mt-2 text-[22px] font-medium text-[#4FA83D] leading-none">
										Matchless CDN Expertise
									</h3>
									<p className="text-[#cfcfcf] text-base leading-[1.5]">
										The team at 5centsCDN is highly dedicated and fully equipped
										to offer you a world-class streaming experience.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/3">
								<div className="bg-[#FFFFFF05] mr-[6px] p-[30px] lg:p-[60px] rounded-[10px]">
									<div className="mb-5 flex justify-center">
										<Image className="w-7" src={CheckRounded} alt="" />
									</div>
									<h3 className="mb-[15px] mt-2 text-[22px] font-medium text-[#4FA83D] leading-none">
										Custom Plan
									</h3>
									<p className="text-[#cfcfcf] text-base leading-[1.5]">
										Can’t find the right package that fulfills all your content
										delivery needs? We can help you with a customized plan that
										suits your business.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-[90px]">
				<div className="max-w-[1140px] m-auto">
					<div className="p-[10px]">
						<div className="mb-5 px-[90px]">
							<div className="py-[15px]">
								<span className="flex w-full border-t-[0.5px] border-[#ffffff20]"></span>
							</div>
						</div>
						<div className="mt-10 mb-5">
							<h2 className="text-center text-[#4FA83D] text-[40px] font-bold leading-[1.4em] capitalize">
								HTTP Push And Pull Protocols
							</h2>
						</div>
						<div className="mt-5 lg:px-[90px]">
							<div>
								<div className="flex flex-col md:flex-row items-center w-full bg-[#FFFFFF05] rounded-[10px]">
									<div className="w-full md:w-[70%] lg:w-4/5 p-[30px] md:p-10 flex flex-col justify-center">
										<h6 className="mb-5 text-left text-white text-2xl font-bold leading-[1.4em]">
											HTTP Push
										</h6>
										<p className="text-[#cfcfcf] text-base leading-[1.8em]">
											Content is distributed to edge servers in CDN locations.
											This is usually recommended in cases where file sizes are
											relatively large.
										</p>
									</div>
									<div className="w-full md:w-[30%] lg:w-1/5 p-10">
										<div className="w-full flex justify-center items-center">
											<Image className="w-full" src={HttpPush} alt="" />
										</div>
									</div>
								</div>
								<div className="flex flex-col md:flex-row items-center w-full bg-[#FFFFFF05] rounded-[10px] mt-[15px]">
									<div className="w-full md:w-[70%] lg:w-4/5 p-[30px] md:p-10 flex flex-col justify-center">
										<h6 className="mb-5 text-left text-white text-2xl font-bold leading-[1.4em]">
											HTTP Pull
										</h6>
										<p className="text-[#cfcfcf] text-base leading-[1.8em]">
											Content is pulled from the origin server to edge servers
											closest to the user when the content is smaller i.e
											images, JavaScript, or HTML.
										</p>
									</div>
									<div className="w-full md:w-[30%] lg:w-1/5 p-10">
										<div className="w-full flex justify-center items-center">
											<Image className="w-full" src={HttpPull} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`py-[90px] bg-[url('../assets/BestCDN/OTTMarketBg.png')] bg-cover bg-no-repeat bg-center`}
			>
				<div className="max-w-[1140px] mx-auto flex flex-col justify-center items-center">
					<div className="mb-5">
						<h2 className="text-center text-[#4FA83D] text-[40px] font-semibold capitalize leading-[1.4em]">
							OTT Market Share In India
						</h2>
					</div>
					<div className="w-full">{/* <OTTMarketGraph /> */}</div>
					<div className="mb-5 px-[90px] w-full">
						<div className="py-[15px]">
							<span className="flex w-full border-t-[0.5px] border-[#ffffff20]"></span>
						</div>
					</div>
					<div className="mt-[30px] max-w-[80%] text-center">
						<p className="text-[#cfcfcf] text-base leading-[1.6em]">
							The Indian CDN market valued $435.2 million a couple of years ago
							and is expected to reach $2846.8 million by 2027. The market is
							expected to witness a crazy growth CAR of 23.3%.
						</p>
					</div>
				</div>
			</div>

			<TryForFreeForm heading={""} />
		</>
	);
};

export default BestContentDeliveryNetwork;
