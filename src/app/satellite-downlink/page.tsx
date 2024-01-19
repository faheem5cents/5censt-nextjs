import Link from "next/link";
import Image from "next/image";
import React from "react";
// import RadiusBackground from "/public/assets/HomePage/FeatureProductsRadiusTop.svg";
import Satellite from "/public/assets/SatelliteDownlink/Satellite.svg";
import Tickmark from "/public/assets/SatelliteDownlink/tickMark.svg";

const SatelliteDownlink = () => {
	return (
		<div className="text-white ">
			<div className="bg-[#121315] relative text-center py-32 flex flex-col gap-5">
				<div className="boxLayout mx-auto p-10 flex flex-col gap-5">
					<div className="font-bold flex flex-col gap-3">
						<h1 className="text-[#4fa83d] text-5xl ">Satellite Downlink</h1>
						<h2 className="text-3xl">
							Seamless coverage with effective signal transmission and reception
						</h2>
					</div>
					<p className="px-32 text-base text-[#CFCFCF]">
						We set up the hardware, software, servers, networking components,
						and satellite equipment for you. Not only do we publish the content
						to your CDN but also deliver the content via our CDN using advanced
						HLS.
					</p>
					<div className="border-2 border-[#4fa83d] rounded-lg w-[70%] p-2 pl-5 mx-auto mt-10 flex justify-between">
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
					<p>
						Unlock a 15-day Trial with our 24/7 customer support to help you.
					</p>
				</div>
				{/* <Image
					src={RadiusBackground}
					alt="Curved Background"
					className="w-full absolute bottom-[-1px] transform rotate-0 h-[70px] lg:h-32 "
				></Image> */}
			</div>
			<div className="w-[50%] mx-auto text-center flex flex-col gap-10 py-20">
				<h1 className="text-[#4fa83d] text-5xl font-bold">
					Live Encoding As A Service
				</h1>
				<p>
					We set up the hardware, software, servers, networking components, and
					satellite equipment for you. Not only do we publish the content to
					your CDN but also deliver the content via our CDN using advanced{" "}
					<span className="text-[#c36]"> HLS.</span>
				</p>
				<div className="w-full mx-auto">
					<Image
						src={Satellite}
						alt="Satellite Downlink"
						className="mx-auto"
					></Image>
					<div className="flex justify-between">
						<div className="w-1/2 p-10 text-center">
							<h1 className="text-xl font-bold">Ours CDN</h1>
							<button className="border px-10 rounded-md py-2 mt-5 border-[#172416] flex gap-3 mx-auto">
								<Image src={Tickmark} alt="Tickmark" width={20}></Image>
								<p className="text-[#2a2a2a]">Published</p>
							</button>
						</div>
						<div className="w-1/2 p-10 text-center">
							<h1 className="text-xl font-bold">Yours CDN</h1>
							<button className="border px-10 rounded-md py-2 mt-5 border-[#172416] flex gap-3 mx-auto">
								<Image src={Tickmark} alt="Tickmark" width={20}></Image>
								<p className="text-[#2a2a2a]">Published</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SatelliteDownlink;
