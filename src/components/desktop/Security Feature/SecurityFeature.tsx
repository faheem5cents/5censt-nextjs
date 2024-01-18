"use client";
import React, { useEffect, useState } from "react";
import {
	Virtual,
	Pagination,
	HashNavigation,
	Autoplay,
	EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SecurityFeatureArray } from "@/constants/SecurityFeatureArray";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SecurityFeature = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [numberOfSlides, setNumberOfSlides] = useState(3);

	const slideTo = (index: number) => {
		swiperRef?.slideTo(index + 2);
	};

	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth < 768) {
				setNumberOfSlides(1);
			} else {
				setNumberOfSlides(3);
			}
		}
	}, []);

	useEffect(() => {
		// event listener on window width
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setNumberOfSlides(1);
			} else {
				setNumberOfSlides(3);
			}
		};
		window.addEventListener("resize", handleResize);
	});

	return (
		<div className="py-20">
			<div className="flex flex-col justify-center items-center text-white">
				<h1 className="text-[40px] font-semibold mb-3">
					Explore <span className="text-[#4fa83d]">Security Features</span>
				</h1>
				<p className="text-lg text-center">
					Protect Your Data, Protect Your Peace Of Mind With Our Comprehensive
					Security Measures.
				</p>
			</div>
			<div>
				<div
					className={`${numberOfSlides === 1 ? "p-5" : "p-0"} securityFeature`}
				>
					<Swiper
						className={`my-10 mx-auto`}
						modules={[
							Virtual,
							Pagination,
							HashNavigation,
							Autoplay,
							EffectCoverflow,
						]}
						onSwiper={(swiper: SwiperClass) => setSwiperRef(swiper)}
						onSlideChange={(swiper: SwiperClass) => {
							setCurrentIndex(swiper.realIndex);
						}}
						slidesPerView={numberOfSlides}
						loop={true}
						centeredSlides={true}
						spaceBetween={30}
						hashNavigation={{
							watchState: true,
						}}
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
						}}
						speed={1500}
						virtual
					>
						{SecurityFeatureArray.map((item, index) => (
							<SwiperSlide
								key={index}
								virtualIndex={index}
								className={`border border-[#ffffff97] rounded-2xl text-white overflow-hidden p-10 `}
							>
								<div className="flex flex-col gap-5 h-[300px]">
									<Image src={item.icon} alt={item.title} />
									<h1 className="text-3xl font-medium uppercase">
										{item.title}
									</h1>
									<p
										dangerouslySetInnerHTML={{ __html: item.description }}
										className="text-[#DCDBDB] text-2xl font-light"
									></p>
									<button className="text-[#59A52C] underline text-left">
										{item.buttonType.text}
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="hidden md:flex flex-wrap justify-center gap-5 mt-10">
					{SecurityFeatureArray.map((item, index) => (
						<button
							key={index}
							className={`text-[#DCDBDB] text-[11px] font-light border border-[#4A4A4A] h-[56px] w-[160px] rounded-full flex items-center justify-center uppercase transition-all duration-3000 ${
								currentIndex === index
									? "bg-[#56B743] border border-[#56B743] rounded-3xl text-white"
									: ""
							}`}
							onClick={() => slideTo(index)}
						>
							{item.title}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default SecurityFeature;
