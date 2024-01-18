import { RobustNetworkArray } from "@/constants/RobustNetworkArray";
import Image from "next/image";
import React from "react";

const RobustNetwork = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center mx-auto boxLayout">
				<div className="flex flex-col gap-5 items-center text-white">
					<h1 className="text-[40px] font-semibold">
						<span className="text-[#4fa83d]">5centsCDN</span> Robust Network.
					</h1>
					<div className="px-[120px] text-center">
						<p className="mb-4">
							Our <span className="text-[#4fa83d]"> 2+ Tbps</span> global
							network features advanced architecture, customized hardware,
							redundant tier-1 carrier connections, and full-stack deployment in
							each location to create a platform thats{" "}
							<span className="text-[#4fa83d]">
								safer, faster, and far more flexible.
							</span>
						</p>
						<p>
							Every edge and origin location is built on a modular approach that
							separates{" "}
							<span className="text-[#4fa83d]">
								LIVE, VOD and HTTP infrastructure.
							</span>{" "}
							Being in a modular architecture with multiple independent{" "}
							<span className="text-[#4fa83d]">tier-1 carriers</span> enables
							enterprise-grade performance and reliability thus enabling our
							traffic director to route CDN traffic intelligently without a
							single point of failure.
						</p>
					</div>
				</div>
				<div className="flex gap-16 justify-center mt-16 p-3 flex-wrap flex-col md:flex-row">
					{RobustNetworkArray.map((item, index) => {
						return (
							<div
								key={index}
								className="flex flex-col gap-5 text-white w-[330px]"
							>
								<Image src={item.img} alt="" width={330} height={330} />
								<h1 className="text-[22px] font-semibold text-[#4FA83D]">
									{item.title}
								</h1>
								<p className="text-[#CFCFCF] text-base">{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RobustNetwork;
