"use client";
import React, { useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

const WebAcceleration = () => {
	const ref = useRef(null);
	React.useEffect(() => {
		import("@lottiefiles/lottie-player");
	});

	useEffect(() => {
		let player = document.getElementById("desktopLottie");

		player!.addEventListener("ready", () => {
			create({
				mode: "scroll",
				player: "#desktopLottie",
				actions: [
					{
						visibility: [0, 1.0],
						type: "seek",
						frames: [0, 300],
					},
				],
			});
		});
	});
	useEffect(() => {
		let player = document.getElementById("mobileLottie");

		player!.addEventListener("ready", () => {
			create({
				mode: "scroll",
				player: "#mobileLottie",
				actions: [
					{
						visibility: [0, 1.0],
						type: "seek",
						frames: [0, 300],
					},
				],
			});
		});
	});

	return (
		<>
			<div className="relative text-white my-16 lg:py-16 ">
				<div className="w-full px-10 h-[700px] lg:hidden">
					<lottie-player
						id="mobileLottie"
						ref={ref}
						loop
						mode="normal"
						src="https://lottie.host/249bc2aa-4edf-484a-ad04-14c6a9a5050c/4dCXU2OoDi.json"
					></lottie-player>
				</div>
				<div className="w-full px-10 hidden lg:block">
					<lottie-player
						id="desktopLottie"
						ref={ref}
						loop
						mode="normal"
						src="https://lottie.host/ff2084bc-0203-4db2-9338-da673c02a3ad/HVGi1CiEIz.json"
					></lottie-player>
				</div>
				<div className="flex flex-col absolute top-0 h-full my-auto justify-center left-[60%] gap-[150px] lg:flex-row lg:justify-evenly lg:left-0 lg:gap-0 lg:w-full">
					<div className="max-w-[200px]">
						<h1 className="text-[#56B743] uppercase text-[22px] mb-2">
							Planning
						</h1>
						<p className="text-[#DCDBDB] text-sm">
							Let us help you review your current plan and map out a strategy
							for success.
						</p>
					</div>
					<div className="max-w-[250px]">
						<h1 className="text-[#56B743] uppercase text-[22px] mb-2">
							MAINTENANCE <br /> PROCESSES
						</h1>
						<p className="text-[#DCDBDB] text-sm">
							Keep your site running smoothly with our easy-to-follow
							maintenance processes.
						</p>
					</div>
					<div className="max-w-[250px]">
						<h1 className="text-[#56B743] uppercase text-[22px] mb-2">
							DEPLOY
						</h1>
						<p className="text-[#DCDBDB] text-sm">
							Launch your site with confidence, knowing that our team is here to
							support you
						</p>
					</div>
				</div>
				<div className="flex flex-col absolute top-0 h-full my-auto justify-center items-end right-[60%] gap-[150px] text-end lg:flex-row lg:bottom-0 lg:text-center lg:gap-[13%] lg:right-0 lg:w-full">
					<div className="max-w-[250px]">
						<h1 className="text-[#56B743] uppercase text-[22px] mb-2">
							Configuring
						</h1>
						<p className="text-[#DCDBDB] text-sm">
							Get the best performance from your new platform with expert
							configuration guidance.
						</p>
					</div>
					<div className="max-w-[250px]">
						<h1 className="text-[#56B743] uppercase text-[22px] mb-2">
							Testing
						</h1>
						<p className="text-[#DCDBDB] text-sm">
							Test your site and ensure everything is working as it should
							before launch.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WebAcceleration;
