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
import { AwardWinningArrray } from "@/constants/AwardWinningArrray";
import { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AwardWinningSlider = () => {
	const [awardWinningSwiperRef, setAwardWinningSwiperRef] =
		useState<SwiperClass | null>(null);
	const [awardWinningCurrentIndex, setawardWinningCurrentIndex] = useState(0);
	const [numberOfSlides, setNumberOfSlides] = useState(3);

	const slideTo = (index: number) => {
		awardWinningSwiperRef?.slideTo(index + 1);
	};

	useEffect(() => {
		if (window !== undefined) {
			if (window.innerWidth < 768) {
				setNumberOfSlides(1);
			} else {
				setNumberOfSlides(5);
			}
		}
	}, []);

	useEffect(() => {
		// event listener on window width
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setNumberOfSlides(1);
			} else {
				setNumberOfSlides(5);
			}
		};
		window.addEventListener("resize", handleResize);
	});

	const handleNext = () => {
		awardWinningSwiperRef?.slideNext();
	};

	const handlePrev = () => {
		awardWinningSwiperRef?.slidePrev();
	};

	return (
		<div className="boxLayout mx-auto">
			<div className={`${numberOfSlides === 1 ? "p-5" : "p-0"} awardWinning`}>
				<Swiper
					className={` mx-auto `}
					modules={[
						Virtual,
						Pagination,
						HashNavigation,
						Autoplay,
						EffectCoverflow,
					]}
					onSwiper={(swiper: SwiperClass) => setAwardWinningSwiperRef(swiper)}
					onSlideChange={(swiper: SwiperClass) => {
						setawardWinningCurrentIndex(swiper.realIndex);
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
					{AwardWinningArrray.map((item, index) => (
						<SwiperSlide
							key={index}
							virtualIndex={index}
							className={`overflow-hidden`}
						>
							<div className="flex flex-col gap-10 h-[300px] text-center justify-center items-center text-white">
								<Image src={item.icon} alt={item.title} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="md:w-[60%] relative mx-auto text-white flex items-center justify-center">
					{AwardWinningArrray.map((item, index) =>
						awardWinningCurrentIndex === index ? (
							<div key={index}>
								<div className="text-center">
									<h1 className="text-xl font-semibold">{item.title}</h1>
									<p
										dangerouslySetInnerHTML={{ __html: item.description }}
										className="text-[#adadad] text-lg text font-normal mt-1"
									></p>
								</div>
							</div>
						) : null
					)}
					<div className="swiper-button-next" onClick={handleNext}></div>
					<div className="swiper-button-prev" onClick={handlePrev}></div>
				</div>
			</div>
		</div>
	);
};

export default AwardWinningSlider;
