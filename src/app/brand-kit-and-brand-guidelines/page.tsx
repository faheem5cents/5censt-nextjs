import Link from "next/link";
import React from "react";
import Image from "next/image";
import RadiusBackground from "@/assets/HomePage/FeatureProductsRadiusTop.svg";
import Logo from "@/assets/BrandKitAndGuidelines/5centsCDN.svg";
import BrandKitColor from "@/assets/BrandKitAndGuidelines/BrandKitColor.svg";
import TryForFreeForm from "@/components/desktop/TryForFreeForm";
import LondonReal from "@/assets/BrandKitAndGuidelines/LondonReal-300x69-1-1.webp";
import MusicTime from "@/assets/BrandKitAndGuidelines/Muusic-Tyme-1.png";
import SLMedia from "@/assets/BrandKitAndGuidelines/SL-Media-1.png";
import Vivre from "@/assets/BrandKitAndGuidelines/vivre_logo-1.png";
import WhiteAnthym from "@/assets/BrandKitAndGuidelines/WhiteAnthymTV-1.png";

const BrandKitAndGuidelines = () => {
	return (
		<div>
			<div className="text-white text-center relative">
				<div className="bg-[#18191B] py-32 flex flex-col gap-5">
					<div className="text-5xl font-bold flex flex-col gap-3">
						<h1 className="text-[#4fa83d]">5centsCDN</h1>
						<h2>BRAND GUIDELINES</h2>
					</div>
					<div className="flex flex-col gap-4 text-[#CFCFCF] text-lg font-medium">
						<p>
							We have made it easy for you to use our brand in the right way.
						</p>
						<p>You can download our Brand Guidelines from here </p>
					</div>
					<Link
						href="/"
						className={`mx-auto mt-5 w-fit bg-[#4fa83d] border-2 border-[#4fa83d] text-white text-base leading-none transition duration-300 ease-in rounded-lg px-[30px] py-[15px] hover:bg-transparent hover:text-[#4fa83d]`}
					>
						Download Guidelines
					</Link>
				</div>
				<Image
					src={RadiusBackground}
					alt="Curved Background"
					className="w-full absolute bottom-[-1px] transform rotate-0 h-[70px] lg:h-32 "
				></Image>
			</div>
			<div className="boxLayout mx-auto">
				<div className="BrandKitAndGuidelinesBackground my-10 mx-20 rounded-lg p-20">
					<div className="flex gap-10">
						<Image src={Logo} alt="Brand Kit" />
						<div className="flex flex-col gap-5 text-white">
							<h1 className="text-2xl font-semibold text-[#4FA83D]">
								5centsCDN Brand Kit
							</h1>
							<h2 className="text-2xl font-semibold">
								Let&apos;s Get You Started!
							</h2>
							<p className="text-base font-medium">
								Here you will be getting our brand&apos;s templates and Logo.
								You can use this brand kit to feature 5centsCDN in your content
								and help us reach global audience. Our theme colour code is
								#4FA83D
							</p>
							<div className="flex gap-5 items-center">
								<Image src={BrandKitColor} alt="Brand Kit" height={75} />
								<Link
									href="/"
									className={`w-fit bg-[#4fa83d] border-2 border-[#4fa83d] text-white text-base leading-none transition duration-300 ease-in rounded-lg px-[30px] py-[20px] hover:bg-transparent hover:text-[#4fa83d]`}
								>
									Download Brand Kit
								</Link>
							</div>
						</div>
					</div>
				</div>
				
				<div className="flex flex-wrap justify-center gap-10 pb-60">
					<Image src={LondonReal} alt="London Real" height={50} />
					<Image src={MusicTime} alt="Music Time" height={50} />
					<Image src={WhiteAnthym} alt="White Anthym" height={50} />
					<Image src={SLMedia} alt="SL Media" height={50} />
					<Image src={Vivre} alt="Vivre" height={50} />
				</div>
				<div className="boxLayout border border-[#7a7b7c] mx-auto mb-10"></div>
			</div>
		</div>
	);
};

export default BrandKitAndGuidelines;
