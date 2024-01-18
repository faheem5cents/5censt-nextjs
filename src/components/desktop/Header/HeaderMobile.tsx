"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import Caret from "@/assets/header-icons/caret.svg";
import DNSSub from "@/assets/header-icons/dns-sub.svg";
import down from "@/assets/header-icons/down.svg";
import EdgeSec from "@/assets/header-icons/edgesec-delivery.svg";
import MenuAutomatic from "@/assets/header-icons/menu-automatic.svg";
import MenuCDN from "@/assets/header-icons/menu-cdn.svg";
import MenuRouting from "@/assets/header-icons/menu-routing.svg";
import MenuStorage from "@/assets/header-icons/menu-storage.svg";
import MenuVideoService from "@/assets/header-icons/menu-videoService.svg";
import ProductsubEncoding from "@/assets/header-icons/product-sub-encoding.svg";
import ProductsubMonitoring from "@/assets/header-icons/product-sub-monitoring.svg";
import ProductsubOptimization from "@/assets/header-icons/product-sub-optimization.svg";
import ProductsubPlayer from "@/assets/header-icons/product-sub-player.svg";
import ProductsubRealtime from "@/assets/header-icons/product-sub-realtime.svg";
import ProductsubStorage from "@/assets/header-icons/product-sub-storage.svg";
import ProductsubStream from "@/assets/header-icons/product-sub-stream.svg";
import ProductsubDNS from "@/assets/header-icons/product-sub-dns.svg";
import RightArrows from "@/assets/header-icons/right-arrows.svg";
import Right from "@/assets/header-icons/right.svg";
import AngleRight from "@/assets/header-icons/AngleRight.svg";
import RightActive from "@/assets/header-icons/right-active.svg";
import SolutionsSubByIndustry from "@/assets/header-icons/solutions-sub-byIndustry.svg";
import SolutionsSubByNeed from "@/assets/header-icons/solutions-sub-byNeed.svg";
import SolutionsSubEcommerce from "@/assets/header-icons/solutions-sub-ecommerce.svg";
import SolutionsSubFinancial from "@/assets/header-icons/solutions-sub-financial.svg";
import SolutionsSubGaming from "@/assets/header-icons/solutions-sub-gaming.svg";
import SolutionsSubIT from "@/assets/header-icons/solutions-sub-it.svg";
import SolutionsSubMedia from "@/assets/header-icons/solutions-sub-media.svg";
import SolutionsSubSaas from "@/assets/header-icons/solutions-sub-saas.svg";
import SolutionsSubSecurity from "@/assets/header-icons/solutions-sub-security.svg";
import SolutionsSubStorage from "@/assets/header-icons/solutions-sub-storage.svg";
import SolutionsSubStreaming from "@/assets/header-icons/solutions-sub-video-streaming.svg";
import SolutionsSubAcceleration from "@/assets/header-icons/solutions-sub-webAcceleration.svg";
import VideoDelivery from "@/assets/header-icons/video-delivery.svg";
import Whatsapp from "@/assets/header-icons/whatsapp-icon.svg";
import MobileAssetOptimization from "@/assets/header-icons/mobileAssetOptimization.svg";
import MobileCDNForEcommerce from "@/assets/header-icons/mobileCDNForEcommerce.svg";
import MobileCDNForFinancial from "@/assets/header-icons/mobileCDNForFinancial.svg";
import MobileCDNForGaming from "@/assets/header-icons/mobileCDNForGaming.svg";
import MobileCDNForSaas from "@/assets/header-icons/mobileCDNForSaas.svg";
import MobileGameServer from "@/assets/header-icons/mobileGameServer.svg";
import MobileImageOptimization from "@/assets/header-icons/mobileImageOptimization.svg";
import MobileIPCamera from "@/assets/header-icons/mobileIPCamera.svg";
import MobileLiveStreaming from "@/assets/header-icons/mobileLiveStreaming-1.svg";
import MobileLiveStreamingEvents from "@/assets/header-icons/mobileLiveStreamingEvents.svg";
import MobileSatellite from "@/assets/header-icons/mobileSatellite.svg";
import MobileOTT from "@/assets/header-icons/mobileOTT.svg";
import MobileSoftware from "@/assets/header-icons/mobileSoftware.svg";
import MobileVideoHosting from "@/assets/header-icons/mobileVideoHosting.svg";
import MobileWebsiteAcceleration from "@/assets/header-icons/mobileWebsiteAcceleration.svg";
import MobileWordPressCDN from "@/assets/header-icons/mobileWordPressCDN.svg";
import HamburgerMenu from "@/assets/header-icons/HamburgerMenu.png";
import Cross from "@/assets/header-icons/Cross.svg";
import CentsLogo from "@/assets/header-icons/CentsLogo.svg";

const HeaderMobile = () => {
	const [isMobileHeader, setisMobileHeader] = useState(false);
	const [isSubMenuProductOpen, setisSubMenuProductOpen] = useState(false);
	const [isFeaturesOpen, setisFeaturesOpen] = useState(false);
	const [isSubMenuProductCDNOpen, setisSubMenuProductCDNOpen] = useState(true);
	const [isSubMenuSolutionsOpen, setisSubMenuSolutionsOpen] = useState(false);
	const [
		isSubMenuProductVideoServiceOpen,
		setisSubMenuProductVideoServiceOpen,
	] = useState(false);
	const [isSubMenuProductAutomaticOpen, setisSubMenuProductAutomaticOpen] =
		useState(false);
	const [isSubMenuProductStorageOpen, setisSubMenuProductStorageOpen] =
		useState(false);
	const [isSubMenuProductRoutingOpen, setisSubMenuProductRoutingOpen] =
		useState(false);
	const [isSubMenuByIndustryOpen, setisSubMenuByIndustryOpen] = useState(false);
	const [isSubMenuByNeedOpen, setisSubMenuByNeedOpen] = useState(false);
	const [isSubGamingOpen, setisSubGamingOpen] = useState(true);
	const [isSubITOpen, setisSubITOpen] = useState(false);
	const [isSubEcomOpen, setisSubEcomOpen] = useState(false);
	const [isSubMediaOpen, setisSubMediaOpen] = useState(false);
	const [isSubFinancialOpen, setisSubFinancialOpen] = useState(false);
	const [isSubSaasOpen, setisSubSaasOpen] = useState(false);
	const [isWebAccelerationOpen, setisWebAccelerationOpen] = useState(false);
	const [isVideoStreamingOpen, setisVideoStreamingOpen] = useState(false);
	const [isSecurityOpen, setisSecurityOpen] = useState(false);
	const [isStorageOpen, setisStorageOpen] = useState(false);

	const toggleMobileHeader = () => {
		setisMobileHeader(!isMobileHeader);
	};

	const transformStyle = {
		transform: isMobileHeader ? "translatex(0%)" : "translatex(-100%)",
		transition: "transform 0.3s ease-in-out",
	};

	const toggleProductSubMenu = () => {
		setisSubMenuProductOpen(!isSubMenuProductOpen);
	};

	const toggleFeaturesSubMenu = () => {
		setisFeaturesOpen(!isFeaturesOpen);
	};

	const toggleProductCDNSubMenu = () => {
		setisSubMenuProductCDNOpen(!isSubMenuProductCDNOpen);
	};
	const subMenuCDNClass = isSubMenuProductCDNOpen ? "active" : "";

	const toggleSolutionsSubMenu = () => {
		setisSubMenuSolutionsOpen(!isSubMenuSolutionsOpen);
	};
	const subMenuSolutionsClass = isSubMenuSolutionsOpen ? "active" : "";

	const toggleProductVideoPlayerSubMenu = () => {
		setisSubMenuProductVideoServiceOpen(!isSubMenuProductVideoServiceOpen);
	};
	const subMenuVPClass = isSubMenuProductVideoServiceOpen ? "active" : "";

	const toggleProductAutomaticSubMenu = () => {
		setisSubMenuProductAutomaticOpen(!isSubMenuProductAutomaticOpen);
	};
	const subMenuAutomaticClass = isSubMenuProductAutomaticOpen ? "active" : "";

	const toggleProductStorageSubMenu = () => {
		setisSubMenuProductStorageOpen(!isSubMenuProductStorageOpen);
	};
	const subMenuStorageClass = isSubMenuProductStorageOpen ? "active" : "";

	const toggleProductRoutingSubMenu = () => {
		setisSubMenuProductRoutingOpen(!isSubMenuProductRoutingOpen);
	};
	const subMenuRoutingClass = isSubMenuProductRoutingOpen ? "active" : "";

	const toggleByIndustrySubMenu = () => {
		setisSubMenuByIndustryOpen(!isSubMenuByIndustryOpen);
	};
	const subMenuByIndustryClass = isSubMenuByIndustryOpen ? "active" : "";

	const toggleByNeedSubMenu = () => {
		setisSubMenuByNeedOpen(!isSubMenuByNeedOpen);
	};
	const subMenuByNeedClass = isSubMenuByNeedOpen ? "active" : "";

	const toggleGamingSubMenu = () => {
		setisSubGamingOpen(!isSubGamingOpen);
	};
	const subMenuGamingClass = isSubGamingOpen ? "active" : "";

	const toggleITSubMenu = () => {
		setisSubITOpen(!isSubITOpen);
	};
	const subMenuITClass = isSubITOpen ? "active" : "";

	const toggleEcomSubMenu = () => {
		setisSubEcomOpen(!isSubEcomOpen);
	};
	const subMenuEcomClass = isSubEcomOpen ? "active" : "";

	const toggleMediaSubMenu = () => {
		setisSubMediaOpen(!isSubMediaOpen);
	};
	const subMenuMediaClass = isSubMediaOpen ? "active" : "";

	const toggleFinancialSubMenu = () => {
		setisSubFinancialOpen(!isSubFinancialOpen);
	};
	const subMenuFinancialClass = isSubFinancialOpen ? "active" : "";

	const toggleSaasSubMenu = () => {
		setisSubSaasOpen(!isSubSaasOpen);
	};
	const subMenuSaasClass = isSubSaasOpen ? "active" : "";

	const toggleWebAppSubMenu = () => {
		setisWebAccelerationOpen(!isWebAccelerationOpen);
	};
	const subMenuWebAppClass = isWebAccelerationOpen ? "active" : "";

	const toggleVideoStrSubMenu = () => {
		setisVideoStreamingOpen(!isVideoStreamingOpen);
	};
	const subMenuVideoStrClass = isVideoStreamingOpen ? "active" : "";

	const toggleSecuritySubMenu = () => {
		setisSecurityOpen(!isSecurityOpen);
	};
	const subMenuSecurityClass = isSecurityOpen ? "active" : "";

	const toggleStorageSubMenu = () => {
		setisStorageOpen(!isStorageOpen);
	};
	const subMenuByNeedStorageClass = isStorageOpen ? "active" : "";

	return (
		<>
			<div className="px-[30px] py-[10px]">
				<div className="flex flex-wrap m-auto relative">
					<div className="w-1/2">
						<div className="p-[10px] flex items-center justify-start">
							<Link href="#">
								<Image
									className="w-[120px]"
									width={20}
									src={CentsLogo}
									alt=""
								/>
							</Link>
						</div>
					</div>
					<div className="w-1/2">
						<div className="p-[10px] flex items-center justify-end">
							<div
								className="p-[10px] cursor-pointer hover:bg-[#4fa83d] rounded-[3px] transition duration-300"
								onClick={toggleMobileHeader}
							>
								<Image width={20} src={HamburgerMenu} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="MenuBg bg-[#0D0E10] absolute top-0 z-50 w-full max-w-full md:max-w-[90%] h-[100vh] overflow-y-scroll"
				style={transformStyle}
			>
				<div className="p-[10px] w-full flex items-center">
					<div className="w-1/2 flex justify-start">
						<Link href="#" className="mt-[15px] ml-[5px] mb-[5px]">
							<Image className="w-[100px]" width={20} src={CentsLogo} alt="" />
						</Link>
					</div>
					<div className="w-1/2 flex justify-end">
						<Link
							href="#"
							className="w-[45px] p-2 border border-[#00000080] rounded-[3px] flex justify-center items-center hover:bg-[#4fa83d] transition duration-300"
						>
							<Image
								className=" "
								width={20}
								src={Cross}
								alt=""
								onClick={toggleMobileHeader}
							/>
						</Link>
					</div>
				</div>
				<div className="w-full">
					<ul className="pt-[10px]">
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Products{" "}
								<Image
									className="w-[45px] h-[22px] px-[15px] py-[4px] rounded-[30px] border border-white group-hover:rotate-180 group-hover:border-[#4fa83d]"
									width={20}
									src={down}
									alt=""
									onClick={toggleProductSubMenu}
								/>
							</Link>
							<div
								className="w-full"
								style={{ display: isSubMenuProductOpen ? "block" : "none" }}
							>
								<div className="bg-[#18191b] p-5 m-0">
									<div className="pr-7px">
										<div className="w-full flex flex-col">
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														isSubMenuProductCDNOpen ? "active" : ""
													}`}
													onClick={toggleProductCDNSubMenu}
												>
													<div
														className={`flex items-center text-white text-[1rem] font-semibold `}
													>
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={MenuCDN}
															alt=""
														/>
														CDN
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuCDNClass}`}
												>
													<div className="w-full">
														<div className="p-5">
															<div className="bg-[#1D1E20] rounded-[8px]">
																<div className="w-full">
																	<div>
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={DNSSub}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Edge Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Delivery Acceleration
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={EdgeSec}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			EdgeSec Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Delivery Acceleration
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={VideoDelivery}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Edge Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Delivery Acceleration
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														isSubMenuProductVideoServiceOpen ? "active" : ""
													}`}
													onClick={toggleProductVideoPlayerSubMenu}
												>
													<div className="flex items-center text-white text-[1rem] font-semibold">
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={MenuVideoService}
															alt=""
														/>
														Video Service
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuVPClass}`}
												>
													<div className="w-full">
														<div className="p-5">
															<div className="bg-[#1D1E20] rounded-[8px]">
																<div className="w-full">
																	<div>
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubEncoding}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Encoding
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					{" "}
																					Video Encoding{" "}
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					{" "}
																					Live Transcoding{" "}
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubStream}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Stream
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Multistreaming
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Scheduler
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Video Manager
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubPlayer}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Player
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Video Player
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Video Player Analytics
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Video Player SDKs (Coming Soon)
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														isSubMenuProductAutomaticOpen ? "active" : ""
													}`}
													onClick={toggleProductAutomaticSubMenu}
												>
													<div className="flex items-center text-white text-[1rem] font-semibold">
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={MenuAutomatic}
															alt=""
														/>
														Automatic Optimization
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuAutomaticClass}`}
												>
													<div className="w-full">
														<div className="p-5">
															<div className="bg-[#1D1E20] rounded-[8px]">
																<div className="w-full">
																	<div>
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubOptimization}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Optimization
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Asset Optimization
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Image Optimization
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														isSubMenuProductStorageOpen ? "active" : ""
													}`}
													onClick={toggleProductStorageSubMenu}
												>
													<div className="flex items-center text-white text-[1rem] font-semibold">
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={MenuStorage}
															alt=""
														/>
														Storage
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuStorageClass}`}
												>
													<div className="w-full">
														<div className="p-5">
															<div className="bg-[#1D1E20] rounded-[8px]">
																<div className="w-full">
																	<div>
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubStorage}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Storage
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Cloud Storage
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Critical Backup (Coming Soon)
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Youtube Sync (Coming Soon)
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														isSubMenuProductRoutingOpen ? "active" : ""
													}`}
													onClick={toggleProductRoutingSubMenu}
												>
													<div className="flex items-center text-white text-[1rem] font-semibold">
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={MenuRouting}
															alt=""
														/>
														Routing and Monitoring
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuRoutingClass}`}
												>
													<div className="w-full">
														<div className="p-5">
															<div className="bg-[#1D1E20] rounded-[8px]">
																<div className="w-full">
																	<div>
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubDNS}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			DNS
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Traffic Director
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					SimpleDNS
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubRealtime}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Realtime User Monitoring
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Web RUM (Coming Soon)
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					DNS RUM (Coming Soon)
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className="mt-5">
																		<div className="flex items-center text-[23px] text-white font-bold">
																			<Image
																				width={20}
																				height={20}
																				src={ProductsubMonitoring}
																				alt="delivery accelertaion"
																				className="w-[50px] rounded mr-[15px]"
																			/>
																			Monitoring
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Website (Coming Soon)
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="text-base leading-6 pl-[68px] text-[#cfcfcf] transition-all duration-300 ease"
																					href="/"
																				>
																					Server (Coming Soon)
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Solutions{" "}
								<Image
									className="w-[45px] h-[22px] px-[15px] py-[4px] rounded-[30px] border border-white group-hover:rotate-180 group-hover:border-[#4fa83d]"
									width={20}
									src={down}
									alt=""
									onClick={toggleSolutionsSubMenu}
								/>
							</Link>
							<div
								className="w-full "
								style={{ display: isSubMenuSolutionsOpen ? "block" : "none" }}
							>
								<div className="bg-[#18191b] p-5 m-0">
									<div className="pr-7px">
										<div className="w-full flex flex-col">
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														subMenuByIndustryClass ? "active" : ""
													}`}
													onClick={toggleByIndustrySubMenu}
												>
													<div
														className={` flex items-center text-white text-[1rem] font-semibold `}
													>
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={SolutionsSubByIndustry}
															alt=""
														/>
														By Industry
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuByIndustryClass}`}
												>
													<div className="w-full">
														<div className="bg-[#18191B] p-5">
															<div className="pr-[7px]">
																<div className="flex flex-col">
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubGamingOpen ? "active" : ""
																			}`}
																			onClick={toggleGamingSubMenu}
																		>
																			<span>Gaming</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuGamingClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileCDNForGaming}
																											alt=""
																										/>
																										CDN for Gaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileGameServer}
																											alt=""
																										/>
																										Game Server Protection
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileSoftware}
																											alt=""
																										/>
																										Software Distribution
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubITOpen ? "active" : ""
																			}`}
																			onClick={toggleITSubMenu}
																		>
																			<span>IT & Technology</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuITClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileImageOptimization
																											}
																											alt=""
																										/>
																										Image Optimizer
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileWebsiteAcceleration
																											}
																											alt=""
																										/>
																										Website Acceleration
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileSoftware}
																											alt=""
																										/>
																										Software Distribution
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileWordPressCDN}
																											alt=""
																										/>
																										WordPress CDN
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubEcomOpen ? "active" : ""
																			}`}
																			onClick={toggleEcomSubMenu}
																		>
																			<span>E-commerce</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuEcomClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileCDNForEcommerce
																											}
																											alt=""
																										/>
																										CDN for E-commerce
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubMediaOpen ? "active" : ""
																			}`}
																			onClick={toggleMediaSubMenu}
																		>
																			<span>Media & Entertainment</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuMediaClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileVideoHosting}
																											alt=""
																										/>
																										Video Hosting
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileLiveStreaming}
																											alt=""
																										/>
																										Live Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileIPCamera}
																											alt=""
																										/>
																										IP Camera Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileLiveStreamingEvents
																											}
																											alt=""
																										/>
																										Live Streaming Events
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileOTT}
																											alt=""
																										/>
																										OTT Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileSatellite}
																											alt=""
																										/>
																										Satellite Downlink
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubFinancialOpen ? "active" : ""
																			}`}
																			onClick={toggleFinancialSubMenu}
																		>
																			<span>Financial Services</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuFinancialClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileCDNForFinancial
																											}
																											alt=""
																										/>
																										CDN For Financial Services
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSubSaasOpen ? "active" : ""
																			}`}
																			onClick={toggleSaasSubMenu}
																		>
																			<span>SaaS</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuSaasClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileCDNForSaas}
																											alt=""
																										/>
																										CDN for SaaS
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="mb-[10px] border-none border-[#4d4d4d]">
												<div
													className={`MobileInnerMenu text-white p-[15px] text-[1rem] leading-[1] transition duration-300 flex justify-between items-center cursor-pointer ${
														subMenuByNeedClass ? "active" : ""
													}`}
													onClick={toggleByNeedSubMenu}
												>
													<div className="flex items-center text-white text-[1rem] font-semibold">
														<Image
															className="mr-[10px] h-[45px] w-[45px] rounded-[8px]"
															width={20}
															src={SolutionsSubByNeed}
															alt=""
														/>
														By Need
													</div>
													<Image
														className={`w-[16px] h-[16px] righti`}
														width={20}
														src={Right}
														alt=""
													/>
													<Image
														className={`w-[16px] h-[16px] rightiActive hidden`}
														width={20}
														src={RightActive}
														alt=""
													/>
												</div>
												<div
													className={`HeaderSubMenu hidden p-[15px] m-0 ${subMenuByNeedClass}`}
												>
													<div className="w-full">
														<div className="bg-[#18191B] p-5">
															<div className="pr-[7px]">
																<div className="flex flex-col">
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isWebAccelerationOpen ? "active" : ""
																			}`}
																			onClick={toggleWebAppSubMenu}
																		>
																			<span>Web Acceleration</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuWebAppClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileWordPressCDN}
																											alt=""
																										/>
																										Wordpress CDN
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileImageOptimization
																											}
																											alt=""
																										/>
																										Image Optimization
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileAssetOptimization
																											}
																											alt=""
																										/>
																										Asset Optimization
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileCDNForSaas}
																											alt=""
																										/>
																										SaaS Delivery
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isVideoStreamingOpen ? "active" : ""
																			}`}
																			onClick={toggleVideoStrSubMenu}
																		>
																			<span>Video Streaming</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuVideoStrClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileVideoHosting}
																											alt=""
																										/>
																										Video Hosting
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileLiveStreaming}
																											alt=""
																										/>
																										Live Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileIPCamera}
																											alt=""
																										/>
																										IP Camera Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={
																												MobileLiveStreamingEvents
																											}
																											alt=""
																										/>
																										Live Streaming Events
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileOTT}
																											alt=""
																										/>
																										OTT Streaming
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileSatellite}
																											alt=""
																										/>
																										Satellite Downlink
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isSecurityOpen ? "active" : ""
																			}`}
																			onClick={toggleSecuritySubMenu}
																		>
																			<span>Security And Protection</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuSecurityClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileCDNForGaming}
																											alt=""
																										/>
																										Bot Protection And
																										Management
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileGameServer}
																											alt=""
																										/>
																										DDoS Protection
																									</Link>
																								</li>
																								<li className="flex items-center mt-[8px]">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileGameServer}
																											alt=""
																										/>
																										Game Server Security
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="flex mb-[10px] w-full flex-col">
																		<div
																			className={`solutionsInner cursor-pointer p-[15px] text-[1rem] text-white font-semibold leading-none transition duration-300 flex justify-between items-center w-full ${
																				isStorageOpen ? "active" : ""
																			}`}
																			onClick={toggleStorageSubMenu}
																		>
																			<span>Storage & Cloud</span>
																			<Image
																				className="w-[12px] rightAngle"
																				width={20}
																				src={AngleRight}
																				alt=""
																			/>
																		</div>
																		<div
																			className={`p-[15px] HeaderSubMenu hidden ${subMenuByNeedStorageClass}`}
																		>
																			<div className="p-5 m-0">
																				<div className="w-full">
																					<div className="bg-[#070202] p-5 rounded-[8px]">
																						<div className="w-full">
																							<ul>
																								<li className="flex items-center">
																									<Link
																										href="#"
																										className="text-base text-white flex items-center"
																									>
																										<Image
																											className="w-[20px] mr-[8px]"
																											width={20}
																											src={MobileSoftware}
																											alt=""
																										/>
																										Software Distribution
																									</Link>
																								</li>
																							</ul>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Networks
							</Link>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Pricing
							</Link>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Log In
							</Link>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								<span className="flex items-center">
									Delivery Acceleration Plus{" "}
									<span className="text-white text-[8px] m-[5px] px-[6px] rounded-[2px] bg-[#4fa83d]">
										New
									</span>
								</span>
							</Link>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Features{" "}
								<Image
									className="w-[45px] h-[22px] px-[15px] py-[4px] rounded-[30px] border border-white group-hover:rotate-180 group-hover:border-[#4fa83d]"
									width={20}
									src={down}
									alt=""
									onClick={toggleFeaturesSubMenu}
								/>
							</Link>
							<div
								className="p-5 mt-[10px] bg-[#18191B]"
								style={{ display: isFeaturesOpen ? "block" : "none" }}
							>
								<div className="w-full pr-[7px]">
									<div className="mb-[14px]">
										<div className="my-[1px] py-[17px] px-[14px] bg-[#1F2022] rounded-[8px]">
											<Link
												className="text-[18px] text-white font-medium text-center hover:text-[#59a52c]"
												href="#"
											>
												Image Optimization
											</Link>
										</div>
									</div>
									<div className="mb-[14px]">
										<div className="my-[1px] py-[17px] px-[14px] bg-[#1F2022] rounded-[8px]">
											<Link
												className="text-[18px] text-white font-medium text-center hover:text-[#59a52c]"
												href="#"
											>
												Asset Optimization
											</Link>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link
								className="px-[15px] py-[10px] text-white text-base flex justify-between group"
								href="#"
							>
								Talk to an expert
							</Link>
						</li>
						<li>
							<div className="flex gap-[10px] items-center mt-5 px-[15px]">
								<Link
									className="border border-[#4fa83d] rounded-[8px] text-center bg-[#4fa83d] flex justify-center items-center text-white py-[10px] px-[10%] lg:px-[20%] transition hover:bg-transparent"
									href="#"
								>
									Try Now
								</Link>
								<Link
									className="w-fit border border-[#4fa83d] rounded-[8px] text-center px-[25px] lg:px-[15px] py-[10px] text-white hover:bg-[#4fa83d] transition"
									href="#"
								>
									Under Attack?
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default HeaderMobile;
