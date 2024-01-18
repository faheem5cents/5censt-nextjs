import React from "react";
import Image from "next/image";
import RightArrows from "@/assets/GlobalImages/RightArrows.svg";

const TopBanner = () => {
	return (
		<>
			<div
				className={`py-5 min-h-[700px] flex items-center justify-center bg-[url('../assets/GlobalImages/TopBanner.png')] bg-cover bg-no-repeat bg-center md:mt-auto mt-[94.5px]`}
			>
				<div className="max-w-[1140px]">
					<div className="w-full flex flex-col flex-wrap items-center">
						<h2 className="text-white text-center text-[2.5rem] md:text-[56px] font-medium md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]">
							<span className="text-[#4fa83d]">A comprehensive solution</span>{" "}
							to all your content delivery concerns
						</h2>
						<h4 className="text-white text-center text-base md:text-lg mb-4 mx-auto lg:mx-[17%]">
							A game-changing infrastructure of content delivery that provides
							advanced solutions including Web acceleration, live streaming,
							cloud storage, and encoding services.
						</h4>
						<div className="flex items-center gap-2">
							<Image src={RightArrows} width={20} className="w-14" alt="" />
							<span className="text-[#4fa83d] text-lg">
								Starting at 5 cents per GB
							</span>
						</div>
						<div className="w-full lg:w-auto flex justify-center mt-[6.5%] mx-auto lg:mx-[20%]">
							<div className="border border-[#4fa83d] rounded-[10px] p-[5px] w-[90%] lg:w-[658px] flex flex-col md:flex-row justify-between">
								<input
									type="email"
									placeholder="Enter your email to sign-in"
									className="bg-transparent md:w-[70%] min-h-[59px] px-3 outline-0 text-white"
								/>
								<button className="bg-[#4fa83d] text-white text text-base font-medium min-h-[59px] md:w-[30%] py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]">
									Get Started
								</button>
							</div>
						</div>
						<p className="text-[#e8e8e8] text-xs mt-[20px]">
							Unlock a 15-day Trial with our 24/7 customer support to help you.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBanner;
