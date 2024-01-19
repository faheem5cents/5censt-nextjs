"use client"
import React from "react";
import Image from "next/image";
import HighlightDownArrow from "/public/assets/GlobalImages/HighlightDownArrow.svg";
import CountUp from "react-countup";

const HighlightsCounter = () => {
	return (
		<>
			<div className="py-[90px] relative">
				<div className="max-w-[1140px] flex mx-auto">
					<div className="w-full">
						<div className="p-[15px] md:p-[10px] flex flex-col flex-wrap relative text-center">
							<div className="absolute hidden md:block top-[40px] left-[-57px]">
								<Image
									width={20}
									className="w-[300px]"
									src={HighlightDownArrow}
									alt=""
								/>
							</div>
							<h2 className="text-white text-[30px] md:text-[40px] font-semibold leading-[1.4em] mb-5 mx-[5%]">
								Providing a{" "}
								<span className="text-[#4fa83d]"> budget-friendly</span>{" "}
								platform for content delivery that is uninterrupted, swift, and
								secure.
							</h2>
							<p className="text-base text-white mb-[35px] md:mx-[15%]">
								5centsCDN offers a state-of-the-art content delivery network
								with affordable plans and unlimited useful features comprising
								modern server infrastructure utilized in data centers across the
								globe.
							</p>
							<div className="w-full flex flex-col md:flex-row items-center">
								<div className="md:w-1/3 w-full flex justify-center items-center">
									<div className="flex flex-col items-center justify-center p-[10px]">
										<div className="text-[#4fa83d] text-[42px] font-black leading-none">
											<CountUp start={0} end={5000} duration={3}  />
											<span>+</span>
										</div>
										<p className="text-white text-[21px] leading-[2.5]">
											Happy Users
										</p>
									</div>
								</div>
								<div
									className={`md:w-1/3 w-full flex justify-center items-center bg-[url('../assets/GlobalImages/MultiCDNPopsBg.svg')] bg-no-repeat bg-contain bg-center`}
								>
									<div className="flex flex-col items-center justify-center p-[10px]">
										<div className="my-[90px] text-[#4fa83d] text-[42px] font-black leading-none">
											<CountUp start={0} end={70} duration={3} />
											<span>+</span>
										</div>
									</div>
								</div>
								<div className="md:w-1/3 w-full flex justify-center items-center">
									<div className="flex flex-col items-center justify-center p-[10px]">
										<div className="text-[#4fa83d] text-[42px] font-black leading-none">
											<CountUp start={0} end={2} duration={10} />
											<span>+</span>
										</div>
										<p className="text-white text-[21px] leading-[2.5]">
											Network Capacity (Tbps)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HighlightsCounter;
