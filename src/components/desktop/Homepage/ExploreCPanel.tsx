import React from "react";
import Image from "next/image";
import ExploreCpanelImage from "@/assets/GlobalImages/ExploreCpanelImage.png";
import LiveEventStreaming from "@/assets/GlobalImages/LiveEventStreaming.svg";
import IPCamRestreaming from "@/assets/GlobalImages/IPCamRestreaming.svg";
import WebsiteAcceleration from "@/assets/GlobalImages/WebsiteAcceleration.svg";
import WebApplicationAcceleration from "@/assets/GlobalImages/WebApplicationAcceleration.svg";
import SoftwareDistribution from "@/assets/GlobalImages/SoftwareDistribution.svg";
import SatelliteDownlink from "@/assets/GlobalImages/SatelliteDownlink.svg";
import OTTPlatform from "@/assets/GlobalImages/OTTPlatform.svg";
import Link from "next/link";

const ExploreCPanel = () => {
	return (
		<>
			<div className="md:py-[90px]">
				<div className="max-w-[1140px] m-auto">
					<div className="w-full text-center">
						<div className="lg:p-[10px] p-[30px] flex flex-col items-center justify-center">
							<div className="mb-5 mx-[10%]">
								<h2 className="text-white text-[40px] font-semibold leading-[1.4em] capitalize">
									<span className="text-[#4fa83d]">Unique UI</span> With
									Extended Control Of Your CDN Delivery
								</h2>
							</div>
							<div className="mb-5 mx-[15%]">
								<h2 className="text-[#cfcfcf] text-base leading-[1.4em] capitalize mb-[0.9rem]">
									Easily adaptable for anyone with basic CDN knowledge!
								</h2>
							</div>
							<div className="mb-5 flex justify-center items-center">
								<a
									href="#"
									className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent"
								>
									Explore Control Panel
								</a>
							</div>
							<div className="mb-5 mt-[40px] flex justify-center items-center">
								<Image
									className="max-w-[800px] w-full"
									src={ExploreCpanelImage}
									alt=""
								/>
							</div>
							<div className="mb-[60px] mt-[40px] w-full border-t-[0.5px] border-[#ffffff20]"></div>
						</div>
						<div className="lg:p-[10px] p-[30px] pt-0">
							<div className="mb-5 mx-[5%]">
								<h2 className="text-white text-[40px] font-semibold leading-[1.4em] capitalize">
									Step aboard and experience the
									<span className="text-[#4fa83d]">
										{" "}
										A-grade streaming, web acceleration, and storage services
									</span>
								</h2>
							</div>
							<div className="mb-5 mx-[15%]">
								<h2 className="text-[#cfcfcf] text-base leading-[1.4em] capitalize mb-[0.9rem]">
									Discover the unlimited features of 5centsCDN and find the
									answer to all your content delivery needs
								</h2>
							</div>
							<div className="w-full">
								<div className="max-w-[1140px] m-auto flex items-center flex-wrap">
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5 m-0 md:mr-[10px] lg:mr-[10px] rounded-[10px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={LiveEventStreaming}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">Live Event Streaming</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm">
														{`Don't let your viewers miss out on anything by giving them the best live streaming experience across devices no matter where you are. Even on limited bandwidth, we make sure that the quality of your content remains high definition no matter what.`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5 m-0 md:ml-[10px] lg:mx-[5px] mt-5 md:mt-0 rounded-[10px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={IPCamRestreaming}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">IP cam Restreaming</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm">
														{`Modern CDN at 5centsCDN offers robust options for embedding IP camera streams into websites. Broadcast over the internet to a wider audience or specific audiences and let your IP camera restreams be viewed by an unlimited number of concurrent users.`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/3 md:w-full w-full">
										<div className="bg-[#18191B] p-5 m-0 lg:ml-[10px] rounded-[10px] mt-5 lg:mt-0">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={WebsiteAcceleration}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">Website Acceleration</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm p-0 md:pb-5">
														{`Minimize the response time over network connections for your website to ensure user satisfaction. 5centsCDN website acceleration service is extraordinary and seamlessly overcomes bandwidth congestion or WAN latency.`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5  m-0 md:mr-[10px] lg:mr-[10px] rounded-[10px] mt-5 lg:mt-[15px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={WebApplicationAcceleration}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">Web Application Acceleration</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm">
														{`Improved performance and faster application delivery are offered without compromising in quality. 5centsCDN web application acceleration service is extraordinary and seamlessly overcomes bandwidth congestion or WAN latency.`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5 m-0 md:ml-[10px] lg:mx-[5px] rounded-[10px] mt-5 lg:mt-[15px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={SoftwareDistribution}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">Software Distribution</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm">
														{`The scalable, fast, and reliable solution of 5centsCDN’s global network lets you distribute large amounts of data seamlessly. We enable you to access a variety of control features for an absolutely wonderful content delivery experience.`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5 m-0 md:mr-[10px] lg:mr-[10px] rounded-[10px] mt-5 lg:mt-[15px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={SatelliteDownlink}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">Satellite Downlink</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm">
														{`Do you own a TV channel and want to live stream. Do not worry we have you covered, we cdn set up the hardware, software, servers, networking components, and satellite equipment for you. Not only do we publish the content to your CDN or via 5centsCDN from our data center but also deliver the content via our CDN using HLS or DASH!`}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 md:w-1/2 w-full">
										<div className="bg-[#18191B] p-5 m-0 md:ml-[10px] lg:mx-[5px] rounded-[10px] mt-5 lg:mt-[15px]">
											<div className="w-full flex justify-center items-center lg:items-start lg:justify-normal flex-col lg:flex-row">
												<div className="mr-[15px] w-full lg:w-[51.38px] flex justify-center">
													<Link href="#">
														<Image
															className="w-[50px]"
															src={OTTPlatform}
															alt=""
														/>
													</Link>
												</div>
												<div className="lg:text-left text-center w-full lg:w-[80%]">
													<h3 className="text-white text-xl font-bold mb-3 leading-[1.2] mt-2">
														<Link href="#">OTT Platform</Link>
													</h3>
													<p className="text-[#cfcfcf] text-sm pb-5 p-0">
														{`OTT allows the users to enjoy live TV, video on demand, and recorded streams on the go anytime and anywhere. Our middleware solution allows you to manage your customer subscription, content management, and customer billing. Launch your own OTT platform like Netflix or Prime today!`}
													</p>
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
		</>
	);
};

export default ExploreCPanel;
