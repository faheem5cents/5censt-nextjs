import React from "react";
import FooterVertical from "./FooterVertical";
import { FooterVerticalArray } from "@/constants/FooterVerticalArray";
import Image from "next/image";
import whatsappChat from "/public/assets/GlobalImages/whatsappChat.svg";
import CentsCDN from "/public/assets/GlobalImages/CentsCDN.svg";
import { SocialMediaArray } from "@/constants/SocialMediaArray";
import Link from "next/link";
import FooterVerticalMobile from "@/components/desktop/Footer/FooterVerticalMobile";

const Footer = () => {
	return (
		<>
			{/* Mobile View Starts Here  */}
			<div className={`w-[90%] mx-auto md:hidden`}>
				<div className="flex flex-col">
					{FooterVerticalArray.map((footerVertical, index) => (
						<FooterVerticalMobile key={index} {...footerVertical} />
					))}
				</div>
				{/* Subscribe and fast and easy solutions at your command with a simple click */}
				<div className="flex flex-col gap-3 mt-10">
					<div className="bg-[#111913] rounded-lg p-8">
						<div className="text-white">
							<h1 className="text-white font-roboto text-[20px] font-semibold leading-6">
								Subscribe to our newsletter
							</h1>
							<p className="text-[15px] font-roboto leading-6">
								A monthly digest of the latest 5centsCDN news, articles and
								resources.
							</p>
						</div>
						<div className="flex flex-col p-3 justify-between bg-[#1D251F] mt-5 rounded-lg">
							<input
								type="text"
								className="border-none outline-none px-4 py-2 bg-inherit text-white placeholder-[#7A7A7A]"
								placeholder="Enter your email address"
							/>
							<button className="inline-flex text-white px-8 py-4 justify-center items-center rounded-lg bg-[#59A52C]">
								Subscribe
							</button>
						</div>
					</div>
					<div
						className="border border-solid border-green-500 bg-[#1D1E20] rounded-lg p-8"
						style={{
							boxShadow: "0px 5px 13px 2px #4fa83d33",
						}}
					>
						<h1 className="text-white font-roboto text-[20px] font-semibold leading-7">
							<span className="text-[#4FA83D]">Fast and Easy Soultions</span> at
							Your Command with a Simple Click
						</h1>
						<div className="flex flex-col justify-between mt-7 gap-5">
							<button className="w-full h-[70px] border border-[#4FA83D] rounded-lg flex justify-center items-center gap-2 ml:border-red-500">
								<Image
									src={whatsappChat}
									alt="whatsapp"
									width={20}
									height={20}
								/>
								<h1 className="text-white items-center">Chat on WhatsApp</h1>
							</button>
							<button className="w-full h-[70px] border border-[#4FA83D] rounded-lg bg-[#4FA83D] text-white flex items-center justify-center">
								<p>Schedule a Meeting</p>
							</button>
						</div>
					</div>
				</div>
				<div className="mt-10 mb-5 border w-full border-[#ffffff73]"></div>
				{/* Social Media Link and Powered by */}
				<div className="w-full flex flex-col justify-center items-center gap-5 text-white">
					<div className="h-[100px] w-full flex flex-col items-center gap-4 justify-star">
						<p className="text-[30px]">© 5centsCDN Inc 2023</p>
						<div className="flex gap-5">
							{SocialMediaArray.map((socialMedia, index) => (
								<Link
									key={index}
									href={socialMedia.link}
									className="bg-[#4FA83D] w-14 h-14 rounded-full flex items-center justify-center"
								>
									<Image src={socialMedia.icon} alt={socialMedia.name} />
								</Link>
							))}
						</div>
					</div>
					<div className="h-[100px] w-full flex flex-wrap items-center justify-center m-5 text-[30px] text-[grey]">
						<p
							className="px-5 py-1"
							style={{ borderRight: "1px solid #DDDDDD" }}
						>
							Privacy Policy
						</p>
						<p
							className="px-5 py-1"
							style={{ borderRight: "1px solid #DDDDDD" }}
						>
							Usage Policy
						</p>
						<div className="px-5 py-1">
							<Image src={CentsCDN} alt="5centsCDN" width={100} />
						</div>
					</div>
				</div>
			</div>
			{/* Mobile View End here*/}
			{/* Desktop View starts here */}
			<div className={`w-[100%] boxLayout mx-auto hidden md:block pt-10`}>
				<div className="flex justify-between">
					{FooterVerticalArray.map((footerVertical, index) => (
						<FooterVertical key={index} {...footerVertical} />
					))}
				</div>
				{/* Subscribe and fast and easy solutions at your command with a simple click */}
				<div className="flex gap-5 mt-5">
					<div className="w-[55%] h-[200px] bg-[#111913] rounded-lg px-16 py-8">
						<div className="text-white">
							<h1 className="text-white font-roboto text-2xl font-semibold leading-7">
								Subscribe to our newsletter
							</h1>
							<p className="text-[15px] font-roboto font-semibold leading-7">
								A monthly digest of the latest 5centsCDN news, articles and
								resources.
							</p>
						</div>
						<div className="flex h-16 px-4 py-2 justify-between bg-[#1D251F] mt-5 rounded-lg">
							<input
								type="text"
								className="w-[70%] border-none outline-none  bg-inherit text-white placeholder-[#7A7A7A]"
								placeholder="Enter your email address"
							/>
							<button className="inline-flex text-white px-8 py-2 justify-center items-center rounded-lg bg-[#59A52C]">
								Subscribe
							</button>
						</div>
					</div>
					<div
						className="w-[45%] h-[200px] border border-solid border-green-500 bg-[#131313] rounded-lg px-16 py-8"
						style={{
							boxShadow: "0px 5px 13px 2px #4fa83d33",
						}}
					>
						<h1 className="text-white font-roboto text-2xl font-semibold leading-7">
							<span className="text-[#4FA83D]">Fast and Easy Soultions</span> at
							Your Command with a Simple Click
						</h1>
						<div className="flex justify-between mt-7 gap-5">
							<button className="w-full h-[45px] border border-[#4FA83D] rounded-lg flex justify-center items-center gap-2 ml:border-red-500">
								<Image
									src={whatsappChat}
									alt="whatsapp"
									width={20}
									height={20}
								/>
								<h1 className="text-[#4FA83D] items-center">
									Chat on WhatsApp
								</h1>
							</button>
							<button className="w-full h-[45px] border border-[#4FA83D] rounded-lg bg-[#4FA83D] text-white flex items-center justify-center">
								<p>Schedule a Meeting</p>
							</button>
						</div>
					</div>
				</div>
				<div className="my-10 border w-full border-[#ffffff73]"></div>
				{/* Social Media Link and Powered by */}
				<div className="w-full flex gap-5 text-white">
					<div className="h-[100px] w-full flex flex-col gap-4 justify-start p-4">
						<p>© 5centsCDN Inc 2023</p>
						<div className="flex gap-5">
							{SocialMediaArray.map((socialMedia, index) => (
								<Link
									key={index}
									href={socialMedia.link}
									className="bg-[#4FA83D] w-10 h-10 rounded-full flex items-center justify-center"
								>
									<Image src={socialMedia.icon} alt={socialMedia.name} />
								</Link>
							))}
						</div>
					</div>
					<div className="h-[100px] w-full flex justify-end items-center mb-5">
						<p
							className="px-5 py-1"
							style={{ borderRight: "1px solid #DDDDDD" }}
						>
							Privacy Policy
						</p>
						<p
							className="px-5 py-1"
							style={{ borderRight: "1px solid #DDDDDD" }}
						>
							Usage Policy
						</p>
						<div className="px-5 py-1">
							<Image src={CentsCDN} alt="5centsCDN" width={100} />
						</div>
					</div>
				</div>
			</div>
			{/* Desktop View End here */}
		</>
	);
};

export default Footer;
