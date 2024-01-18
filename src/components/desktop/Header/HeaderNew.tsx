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
import CentsLogo from "@/assets/header-icons/CentsLogo.svg";
import HeaderMobile from "./HeaderMobile";

const HeaderNew = () => {
	const [activeTab, setActiveTab] = useState("header_cdn_body");
	const [activeSolution, setActiveSolution] = useState(
		"header_solution_byIndustry_body"
	);

	const handleHover = (tabId: string) => {
		setActiveTab(tabId);
	};

	const handleSolutionHover = (solutionId: string) => {
		setActiveSolution(solutionId);
	};

	return (
		<>
			<div className="hidden lg:block">
				<div className="w-full bg-[url('../assets/header-icons/TopBarBg.svg')] bg-cover bg-no-repeat bg-[unset]">
					<div className="max-w-[1200px] m-auto">
						<div className="w-full flex justify-center items-center">
							<div className="w-1/2">
								<div className="p-[10px] flex items-center content-center">
									<Link className="text-base text-[#4fa83d]" href="/delivery-acceleration-plus">
										Introducing Delivery Acceleration Plus ›
									</Link>
								</div>
							</div>
							<div className="w-1/2 flex justify-end">
								<div className="p-[10px]">
									<div className="flex items-center">
										<ul className="flex items-center text-white">
											<li className="relative group">
												<Link
													className="flex items-center text-white text-sm font-semibold px-5"
													href="#"
												>
													Feature{" "}
													<Image
														className="w-[8.58px] h-[9.8px] ml-[10px]"
														width={20}
														src={down}
														alt=""
													/>
												</Link>
												<div
													className="absolute group-hover:block hidden w-auto min-w-[10rem] py-[5px] bg-[#ffffff1c] border border-[#4A4A4A] rounded-lg top-full ml-0 mt-0 z-10"
													style={{
														boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
														backdropFilter: "blur(10.5px)",
													}}
												>
													<ul>
														<li className="flex justify-center items-center">
															<Link
																className="px-5 py-[13px] w-full text-center transition duration-[400ms] hover:bg-[#4FA83D] leading-5 text-[13px] font-semibold"
																href="#"
															>
																Image Optimizer
															</Link> 
														</li>
														<li className="flex justify-center items-center">
															<Link
																className="px-5 py-[13px] w-full text-center transition duration-[400ms] hover:bg-[#4FA83D] leading-5 text-[13px] font-semibold"
																href="#"
															>
																Asset Optimizer
															</Link>
														</li>
													</ul>
												</div>
											</li>
											|
											<li>
												<Link
													className=" text-white text-sm font-semibold px-5"
													href="#"
												>
													Talk to an expert
												</Link>
											</li>
											|
											<li>
												<Link
													className=" text-white text-sm font-semibold px-5"
													href="#"
												>
													Login
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#020101] w-full">
					<div className="max-w-[1200px] m-auto">
						<div className="flex items-center">
							<div className="w-[15%]">
								<div className="p-[10px] w-full">
									<div className="flex justify-start">
										<Link href="/">
											<Image
												width={20}
												className="w-[120px]"
												src={CentsLogo}
												alt=""
											/>
										</Link>
									</div>
								</div>
							</div>
							<div className="w-[49.664%]">
								<div className="p-[10px]">
									<div className={`w-full flex items-center`}>
										<div
											className={`${styles.headerProducts} flex justify-start relative h-full`}
										>
											<Link
												className="flex justify-center items-center text-base text-white px-[16px] py-[30px] h-full group"
												href="#"
											>
												Products
												<Image
													width={20}
													className="w-[11px] ml-[6px] group-hover:rotate-180"
													src={Caret}
													alt=""
												/>
											</Link>
											<div
												className={` ${styles.products_submenu} w-full md:w-[1250px] hidden absolute ml-auto mr-auto group-hover:block left-[367%] md:top-[218%] bg-[#18191B] rounded-[15px] border border-[#4A4A4A] p-[30px] mt-[30px] mb-0 z-10`}
												style={{
													transform: "translate(-50%, -22%)",
													backdropFilter: "blur(28px)",
												}}
											>
												<div className={`flex flex-col md:flex-row`}>
													<div className="flex pr-[20px] flex-col md:flex-row w-full md:w-[65%]">
														<div className={`w-full md:w-1/2`}>
															<div
																className={`${styles.product_tile} group p-0 pr-[25px] text-lg font-medium bg-[#4FA83D00] text-white rounded-lg`}
																id="header_cdn_tab"
																onMouseOver={() =>
																	handleHover("header_cdn_body")
																}
															>
																<div className=" flex items-center rounded-[7px] bg-[#1d1e2000] pl-5 pr-[20px] py-[15px] cursor-pointer group-hover:bg-[#1D1E20]">
																	<Image
																		width={20}
																		height={20}
																		className={`${styles.product_tile_icon} mr-[10px] w-[45px] group-hover:border-2 group-hover:border-[#4FA83D] group-hover:rounded-lg group-hover:shadow-[0px 0px 10px #4FA83D]`}
																		src={MenuCDN}
																		alt="CDN"
																	/>
																	CDN
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[10px] group-hover:hidden`}
																		src={Right}
																		alt="CDN"
																	/>
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[13.5px] hidden group-hover:block`}
																		src={RightActive}
																		alt="CDN"
																	/>
																</div>
															</div>
															<div
																className={`${styles.product_tile} group p-0 pr-[25px] text-lg font-medium bg-[#4FA83D00] text-white rounded-lg`}
																id="header_video_service_tab"
																onMouseOver={() =>
																	handleHover("header_video_service_body")
																}
															>
																<div className=" flex items-center rounded-[7px] bg-[#1d1e2000] pl-5 pr-[20px] py-[15px] cursor-pointer group-hover:bg-[#1D1E20]">
																	<Image
																		width={20}
																		height={20}
																		className={`${styles.product_tile_icon} mr-[10px] w-[45px]`}
																		src={MenuVideoService}
																		alt="CDN"
																	/>
																	Video Service
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[10px] group-hover:hidden`}
																		src={Right}
																		alt=""
																	/>
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[13.5px] hidden group-hover:block`}
																		src={RightActive}
																		alt=""
																	/>
																</div>
															</div>
															<div
																className={`${styles.product_tile} group p-0 pr-[25px] text-lg font-medium bg-[#4FA83D00] text-white rounded-lg`}
																id="header_auto_optimization_tab"
																onMouseOver={() =>
																	handleHover("header_auto_optimization_body")
																}
															>
																<div className=" flex items-center rounded-[7px] bg-[#1d1e2000] pl-5 pr-[20px] py-[15px] cursor-pointer group-hover:bg-[#1D1E20]">
																	<Image
																		width={20}
																		height={20}
																		className={`${styles.product_tile_icon} mr-[10px] w-[45px]`}
																		src={MenuAutomatic}
																		alt="CDN"
																	/>
																	Automactic Optimization
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[10px] group-hover:hidden`}
																		src={Right}
																		alt=""
																	/>
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[13.5px] hidden group-hover:block`}
																		src={RightActive}
																		alt=""
																	/>
																</div>
															</div>
															<div
																className={`${styles.product_tile} group p-0 pr-[25px] text-lg font-medium bg-[#4FA83D00] text-white rounded-lg`}
																id="header_storage_tab"
																onMouseOver={() =>
																	handleHover("header_storage_body")
																}
															>
																<div className=" flex items-center rounded-[7px] bg-[#1d1e2000] pl-5 pr-[20px] py-[15px] cursor-pointer group-hover:bg-[#1D1E20]">
																	<Image
																		width={20}
																		height={20}
																		className={`${styles.product_tile_icon} mr-[10px] w-[45px]`}
																		src={MenuStorage}
																		alt="CDN"
																	/>
																	Storage
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[10px] group-hover:hidden`}
																		src={Right}
																		alt=""
																	/>
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[13.5px] hidden group-hover:block`}
																		src={RightActive}
																		alt=""
																	/>
																</div>
															</div>
															<div
																className={`${styles.product_tile} group p-0 pr-[25px] text-lg font-medium bg-[#4FA83D00] text-white rounded-lg`}
																id="header_routing_tab"
																onMouseOver={() =>
																	handleHover("header_routing_body")
																}
															>
																<div className=" flex items-center rounded-[7px] bg-[#1d1e2000] pl-5 pr-[20px] py-[15px] cursor-pointer group-hover:bg-[#1D1E20]">
																	<Image
																		width={20}
																		height={20}
																		className={`${styles.product_tile_icon} mr-[10px] w-[45px]`}
																		src={MenuRouting}
																		alt="CDN"
																	/>
																	Routing and Monitoring
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[10px] group-hover:hidden`}
																		src={Right}
																		alt=""
																	/>
																	<Image
																		width={10}
																		height={10}
																		className={`ml-auto relative w-[13.5px] hidden group-hover:block`}
																		src={RightActive}
																		alt=""
																	/>
																</div>
															</div>
														</div>
														<div className={`w-full md:w-1/2`}>
															<div
																className={` bg-[#1D1E20] rounded-[4px] p-[25px] h-full hidden ${styles.active}`}
																id="header_cdn_body"
																style={{
																	display:
																		activeTab === "header_cdn_body"
																			? "block"
																			: "none",
																}}
															>
																<div className={`h-full`}>
																	<div className={` mt-0`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={DNSSub}
																				alt="delivery accelertaion"
																			/>
																			Edge Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cdn-delivery-acceleration"
																				>
																					Delivery Acceleration
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={EdgeSec}
																				alt="delivery accelertaion"
																			/>
																			EdgeSec Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/delivery-acceleration-plus"
																				>
																					Delivery Acceleration Plus
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={VideoDelivery}
																				alt="delivery accelertaion"
																			/>
																			Video Delivery
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cdn-live-streaming"
																				>
																					Live Streaming
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cdn-video-streaming"
																				>
																					Video Delivery
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div
																className={` bg-[#1D1E20] rounded-[4px] p-[25px] h-full hidden`}
																id="header_video_service_body"
																style={{
																	display:
																		activeTab === "header_video_service_body"
																			? "block"
																			: "none",
																}}
															>
																<div className={`h-full`}>
																	<div className={` mt-0`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubEncoding}
																				alt="delivery accelertaion"
																			/>
																			Encoding
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cdn-video-encoding"
																				>
																					Video Encoding
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cdn-live-transcoding"
																				>
																					Live Transcoding
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubStream}
																				alt="delivery accelertaion"
																			/>
																			Stream
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Multistreaming
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Scheduler
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Video Manager
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubPlayer}
																				alt="delivery accelertaion"
																			/>
																			Player
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Video Player
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Video Player Analytics
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Video Player SDKs
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div
																className={` bg-[#1D1E20] rounded-[4px] p-[25px] h-full hidden`}
																id="header_auto_optimization_body"
																style={{
																	display:
																		activeTab ===
																		"header_auto_optimization_body"
																			? "block"
																			: "none",
																}}
															>
																<div className={`h-full`}>
																	<div className={` mt-0`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubOptimization}
																				alt="delivery accelertaion"
																			/>
																			Optimization
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Asset Optimization
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Image Optimization
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div
																className={` bg-[#1D1E20] rounded-[4px] p-[25px] h-full hidden`}
																id="header_storage_body"
																style={{
																	display:
																		activeTab === "header_storage_body"
																			? "block"
																			: "none",
																}}
															>
																<div className={`h-full`}>
																	<div className={` mt-0`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubStorage}
																				alt="Storage"
																			/>
																			Storage
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/cloud-storage"
																				>
																					Cloud Storage
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Critical Backup
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Youtube Sync
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div
																className={` bg-[#1D1E20] rounded-[4px] p-[25px] h-full hidden`}
																id="header_routing_body"
																style={{
																	display:
																		activeTab === "header_routing_body"
																			? "block"
																			: "none",
																}}
															>
																<div className={`h-full`}>
																	<div className={` mt-0`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubDNS}
																				alt="DNS"
																			/>
																			DNS
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					SimpleDNS
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Traffic Director
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubRealtime}
																				alt="delivery accelertaion"
																			/>
																			Realtime User Monitoring
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Web RUM
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					DNS RUM
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div className={` mt-5`}>
																		<div
																			className={`text-[23px] font-bold text-white flex items-center`}
																		>
																			<Image
																				className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																				width={20}
																				height={20}
																				src={ProductsubMonitoring}
																				alt="website"
																			/>
																			Monitoring
																		</div>
																		<ul>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Website
																				</Link>
																			</li>
																			<li>
																				<Link
																					className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																					href="/"
																				>
																					Server
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="w-full md:w-[35%]">
														<div
															className={`rounded-[4px] bg-[#1D1E20] px-[30px] py-[25px] `}
														>
															<h2 className="text-white text-[22px] font-semibold leading-[1.4em]">
																Looking to migrate your current CDN?
															</h2>
															<ul className="mt-[5px]">
																<li className="py-[10px] px-0">
																	<Link
																		className="text-[#FFFFFF8F] text-base flex justify-between hover:text-[#4fa83d]"
																		href="/"
																	>
																		Switch to 5centsCDN
																		<Image
																			width={50}
																			src={RightArrows}
																			alt=""
																		/>
																	</Link>
																</li>
																<li className="py-[10px] px-0">
																	<Link
																		className="text-[#FFFFFF8F] text-base flex justify-between hover:text-[#4fa83d]"
																		href="/"
																	>
																		Assist CDN Migration
																		<Image
																			width={50}
																			src={RightArrows}
																			alt=""
																		/>
																	</Link>
																</li>
																<li className="py-[10px] px-0">
																	<Link
																		className="text-[#FFFFFF8F] text-base flex justify-between hover:text-[#4fa83d]"
																		href="/"
																	>
																		CDN Price Estimater
																		<Image
																			width={50}
																			src={RightArrows}
																			alt=""
																		/>
																	</Link>
																</li>
																<li className="py-[10px] px-0">
																	<Link
																		className="text-[#FFFFFF8F] text-base flex justify-between hover:text-[#4fa83d]"
																		href="/"
																	>
																		Bandwidth Calculator
																		<Image
																			width={50}
																			src={RightArrows}
																			alt=""
																		/>
																	</Link>
																</li>
															</ul>
														</div>
														<div
															className={`rounded-[4px] bg-[#1D1E20] px-[25px] py-[25px] mt-5`}
														>
															<h2 className="text-white text-xl font-medium text-center">
																<span className="text-[#4fa83d]">
																	Simplify the discovery process{" "}
																</span>
																and save time by scheduling a call at your
																convenience.
															</h2>
															<Link
																href="/"
																className={`w-full block text-center text-white bg-[#4FA83D] px-[35px] rounded-[5px] py-[15px] border border-[#4FA83D] mt-5 hover:text-[#4FA83D] hover:bg-transparent`}
															>
																Book a Discovery Call
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className={`${styles.solutionProducts} flex justify-start relative h-full`}
										>
											<Link
												className="flex justify-center items-center text-base text-white px-[16px] py-[30px] h-full group"
												href="#"
											>
												Solutions
												<Image
													width={20}
													className="w-[11px] ml-[6px] group-hover:rotate-180"
													src={Caret}
													alt=""
												/>
											</Link>
											<div
												className={`${styles.solutions_submenu} w-full md:w-[1250px] hidden absolute left-[262%] md:top-[220%] ml-auto mr-auto  bg-[#18191B] rounded-[15px] border border-[#4A4A4A] p-[30px] mt-[30px] mb-0 z-10`}
												style={{
													transform: "translate(-50%, -22%)",
													backdropFilter: "blur(28px)",
												}}
											>
												<div
													className={` ${styles.solutions_submenu_wrapper} flex`}
												>
													<div className="w-[25%]">
														<div className="w-full">
															<div
																className={`${styles.solutions_tabs} w-full`}
															>
																<div
																	className={`${styles.solution_tile} p-0 text-lg font-medium bg-[#4FA83D00] text-white rounded-lg group`}
																	id="header_solution_byIndustry"
																	onMouseOver={() =>
																		handleSolutionHover(
																			"header_solution_byIndustry_body"
																		)
																	}
																>
																	<div className="flex items-center rounded-[7px] bg-[#1d1e2000] px-5 py-[10px] cursor-pointer group-hover:bg-[#1D1E20]">
																		<Image
																			width={20}
																			height={20}
																			className={`${styles.solution_tile_icon} w-[45px]`}
																			src={SolutionsSubByIndustry}
																			alt="By Industry"
																		/>
																		By Industry
																		<Image
																			width={10}
																			height={10}
																			className="block group-hover:hidden ml-auto w-[10px]"
																			src={Right}
																			alt=""
																		/>
																		<Image
																			width={10}
																			height={10}
																			className="hidden group-hover:block ml-auto w-[13.5px]"
																			src={RightActive}
																			alt=""
																		/>
																	</div>
																</div>
																<div
																	className={`${styles.solution_tile} p-0 text-lg font-medium bg-[#4FA83D00] text-white rounded-lg group`}
																	id="header_solution_byNeed"
																	onMouseOver={() =>
																		handleSolutionHover(
																			"header_solution_byNeed_body"
																		)
																	}
																>
																	<div className="flex items-center rounded-[7px] bg-[#1d1e2000] px-5 py-[10px] cursor-pointer group-hover:bg-[#1D1E20]">
																		<Image
																			width={20}
																			height={20}
																			className={`${styles.solution_tile_icon} w-[45px]`}
																			src={SolutionsSubByNeed}
																			alt="By Industry"
																		/>
																		By Need
																		<Image
																			width={10}
																			height={10}
																			className="block group-hover:hidden ml-auto w-[10px]"
																			src={Right}
																			alt=""
																		/>
																		<Image
																			width={10}
																			height={10}
																			className="hidden group-hover:block ml-auto w-[13.5px]"
																			src={RightActive}
																			alt=""
																		/>
																	</div>
																</div>
															</div>
														</div>
														<div
															className={`rounded-[4px] bg-[#1D1E20] px-5 py-[25px] mt-[25px]`}
														>
															<h2 className="text-white text-[22px] font-semibold">
																Why 5centsCDN
															</h2>
															<ul className="mt-2">
																<li>
																	<Link
																		className="text-[#FFFFFF8C] text-[13px] hover:text-[#4fa83d]"
																		href="/"
																	>
																		Service Status
																	</Link>
																</li>
																<li>
																	<Link
																		className="text-[#FFFFFF8C] text-[13px] hover:text-[#4fa83d]"
																		href="/"
																	>
																		Compare Performanc
																	</Link>
																</li>
																<li>
																	<Link
																		className="text-[#FFFFFF8C] text-[13px] hover:text-[#4fa83d]"
																		href="/"
																	>
																		Case Studies
																	</Link>
																</li>
															</ul>
															<div className="mt-5">
																<Link
																	className={`text-justify text-white bg-[#4fa83d] w-full px-[30px] py-[15px] rounded-[5px] border border-[#4fa83d] hover:bg-transparent hover:text-[#4fa83d]`}
																	href="/"
																>
																	Custom Development
																</Link>
															</div>
														</div>
														<div
															className={` rounded-[4px] bg-[#1D1E20] px-5 py-[25px] mt-[25px]`}
														>
															<h2 className="text-white text-[15px] font-medium">
																<span className="text-[#4fa83d]">
																	Fast and Easy Soultions{" "}
																</span>
																at Your Command with a Simple Click
															</h2>
															<div
																className={`flex items-center justify-center gap-[10px] mt-[15px]`}
															>
																<Link
																	href="/"
																	className={`w-full text-[10px] font-medium leading-[1em] text-[#4fa83d] bg-[#4FA83D00] border border-[#4fa83d] rounded-[10px] py-[10px] px-[5px] flex items-center`}
																>
																	<Image
																		className="w-[10px] mr-1"
																		width={20}
																		height={20}
																		src={Whatsapp}
																		alt=""
																	/>
																	Chat on WhatsApp
																</Link>
																<Link
																	href="/"
																	className={`w-full text-center text-white text-[10px] font-medium bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] p-[10px]`}
																>
																	Schedule a Meeting
																</Link>
															</div>
														</div>
													</div>
													<div className={`w-[72%] flex`}>
														<div
															className={`${styles.solutions_tab_content} w-full`}
														>
															<div
																className={`h-full bg-[#1D1E20] rounded-[4px] p-[25px] ml-[40px] hidden w-full ${styles.active}`}
																id="header_solution_byIndustry_body"
																style={{
																	display:
																		activeSolution ===
																		"header_solution_byIndustry_body"
																			? "block"
																			: "none",
																}}
															>
																<div className="flex justify-between">
																	<div className="w-1/2 flex flex-col gap-[20px]">
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubGaming}
																					alt="delivery accelertaion"
																				/>
																				Gaming
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						CDN for Gaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Game Server Protection
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Software Distribution
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubIT}
																					alt="delivery accelertaion"
																				/>
																				IT & Technology
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Image Optimization
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Website Acceleration
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Asset Optimization
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						WordPress CDN
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubEcommerce}
																					alt="delivery accelertaion"
																				/>
																				E-commerce
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						CDN for E_commerce
																					</Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="w-1/2 flex flex-col gap-[20px]">
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubMedia}
																					alt="delivery accelertaion"
																				/>
																				Media & Entertainment
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Video Hosting
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						IP Camera Streaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Live Streaming Events
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						OTT Streaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Satellite Downlink
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubFinancial}
																					alt="delivery accelertaion"
																				/>
																				Financial Services
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						CDN For Financial Services
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubSaas}
																					alt="delivery accelertaion"
																				/>
																				SaaS
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						SaaS
																					</Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div
																className={`h-full bg-[#1D1E20] rounded-[4px] p-[25px] ml-[40px] hidden w-full`}
																id="header_solution_byNeed_body"
																style={{
																	display:
																		activeSolution ===
																		"header_solution_byNeed_body"
																			? "block"
																			: "none",
																}}
															>
																<div className="flex">
																	<div className="w-1/2 flex flex-col gap-[20px]">
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubAcceleration}
																					alt="delivery accelertaion"
																				/>
																				Web Acceleration
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Wordpress CDN
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Image Optimization
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Asset Optimization
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						SaaS Delivery
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubSecurity}
																					alt="delivery accelertaion"
																				/>
																				Security And Protection
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Bot Protection And Management
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						DDoS Protection
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Game Server Security
																					</Link>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="w-1/2 flex flex-col gap-[20px]">
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubStreaming}
																					alt="delivery accelertaion"
																				/>
																				Video Streaming
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Video Hosting
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Live Streaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						IP Camera Streaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Live Streaming Events
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						OTT Streaming
																					</Link>
																				</li>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
																						Satellite Downlink
																					</Link>
																				</li>
																			</ul>
																		</div>
																		<div>
																			<div
																				className={`text-[23px] font-bold text-white flex items-center`}
																			>
																				<Image
																					className="rounded-[5px] w-[50px] h-[50px] mr-[10px]"
																					width={20}
																					height={20}
																					src={SolutionsSubStorage}
																					alt="delivery accelerIP Camera Streamingtaion"
																				/>
																				Storage & Cloud
																			</div>
																			<ul>
																				<li>
																					<Link
																						className="transition duration-300 text-base leading-[22px] pl-[61px] text-[#FFFFFFAD] hover:text-[#4FA83D]"
																						href="/"
																					>
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
										<div className="flex justify-start relative h-full">
											<Link
												className="flex justify-center items-center text-base text-white px-[16px] py-[30px] h-full group"
												href="#"
											>
												Networks
											</Link>
										</div>
										<div className="flex justify-start relative h-full">
											<Link
												className="flex justify-center items-center text-base text-white px-[16px] py-[30px] h-full group"
												href="#"
											>
												Pricing
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[35%]">
								<div className="p-[10px]">
									<div className="flex justify-end items-center">
										<Link
											href="/"
											className="relative bg-transparent text-[#4fa83d] border-2 border-[#4fa83d] text-base rounded-lg px-[30px] py-[15px] leading-none font-medium hover:border-[#ff0000] hover:text-[#ff0000]"
										>
											Under Attack ?
										</Link>
										<Link
											href="/"
											className={`ml-[10px] bg-[#4fa83d] border-2 border-[#4fa83d] text-white text-base leading-none transition duration-300 ease-in rounded-lg px-[30px] py-[15px] hover:bg-transparent hover:text-[#4fa83d]`}
										>
											Try Now
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="block lg:hidden sticky top-0 z-10 bg-[#0D0E10]">
				<HeaderMobile />
			</div>
		</>
	);
};

export default HeaderNew;
