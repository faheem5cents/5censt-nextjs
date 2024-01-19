import React from "react";
import Check from "/public/assets/Homepage/Check.svg";
import Image from "next/image";
import Link from "next/link";
import { HomePricingArray } from "@/constants/HomePricingArray";

const HomePricing = () => {
	return (
		<>
			<div className="w-full p-[10px]">
				<div>
					<div className="mb-5">
						<h2 className="text-[40px] text-white font-semibold capitalize leading-[1.4] text-center">
							Pricing
						</h2>
					</div>
					<div className="mb-7">
						<p className="text-[#cfcfcf] text-base text-center">
							Simple and Transparent pricing.
						</p>
					</div>
				</div>
				<div className="my-[60px]">
					<div className="flex flex-col flex-wrap justify-center md:flex-row w-full gap-3">
						{HomePricingArray.map((item, index) => (
							<div
								key={index}
								className="flex items-center justify-center w-full lg:w-[400px] md:w-1/2"
							>
								<div className="py-5 bg-[#18191B] rounded-[10px] relative group w-full">
									<div className="absolute top-0 right-0">
										<div className="bg-[#333436] px-5 py-[10px] rounded-tr-[10px] rounded-bl-[10px]">
											<p className="text-[#4fa83d] text-center text-lg font-bold tracking-[1px] leading-none group-hover:text-white">
												{item.monthly} <br />
												<span className="text-xs"> Monthly</span>
											</p>
										</div>
									</div>
									<div className="flex flex-col">
										<div className="mt-[50px] mx-5 mb-5">
											<h3 className="text-white text-[22px] font-semibold leading-none">
												{item.heading}
											</h3>
										</div>
										<div className="mb-5">
											<ul>
												{item.subHeading.map((subItem, subIndex) => (
													<li
														key={subIndex}
														className="py-[5px] px-5 flex items-center hover:bg-[#4FA83D10]"
													>
														<Image
															className="mr-[10px] w-[17px] "
															src={Check}
															alt=""
														/>
														<span className="text-[#cfcfcf] text-base transition duration-300 pl-[7px]">
															{subItem}
														</span>
													</li>
												))}
											</ul>
										</div>
										<div className="m-5 mb-0 flex justify-center">
											<Link
												className="text-base font-semibold text-white border border-[#4fa83d] bg-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent hover:text-[#4fa83d]"
												href={item.button.link}
											>
												{item.button.text}
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePricing;
