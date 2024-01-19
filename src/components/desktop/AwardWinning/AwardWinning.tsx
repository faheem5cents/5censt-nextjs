import React from "react";
import Image from "next/image";
import AsiapacificWinter23 from "/public/assets/AwardWinning/AsiapacificWinter23.svg";
import MidMarketMidMarket23 from "/public/assets/AwardWinning/MidMarketMidMarket23.svg";
import SourceforgeFall22 from "/public/assets/AwardWinning/SourceforgeFall22.svg";
import SourceforgeWinter23 from "/public/assets/AwardWinning/SourceforgeWinter23.svg";
import UsersLoveUs from "/public/assets/AwardWinning/UsersLoveUs.svg";

const AwardWinning = () => {
	return (
		<>
			<div className="py-[90px] px-[30px] lg:px-0 lg:py-[90px]">
				<div className="max-w-[1200px] m-auto">
					<div className="w-full">
						<div
							className={`bg-[url('../assets/GlobalImages/AwardWinningBg.svg)] bg-cover bg-no-repeat bg-center py-[50px] rounded-[25px] flex flex-col justify-center items-center text-center`}
						>
							<div className="w-full">
								<div className="lg:w-[85%] m-auto mb-[1%]">
									<h1 className="text-white text-[28px] md:text-[50px] font-bold leading-[1.1em] capitalize">
										{`Making Waves: Our Company's`}{" "}
										<span className="text-[#4fa83d]">Award-Winning</span>{" "}
										Accomplishments.
									</h1>
								</div>
								<div className="w-full">
									<h2 className="text-white font-semibold capitalize text-[20px] leading-[1.4em]">
										See the badges that showcase our commitment to excellence.
									</h2>
								</div>
							</div>
							<div className="w-full md:px-10">
								<div className="w-full pt-[2%] md:px-[8%] flex justify-center items-end content-end">
									<div className="w-[15%] self-end">
										<Image
											className="w-full"
											src={SourceforgeWinter23}
											alt=""
										/>
									</div>
									<div className="w-[18%] self-end">
										<Image
											className="w-full"
											src={AsiapacificWinter23}
											alt=""
										/>
									</div>
									<div className="w-[22%] self-end">
										<Image className="w-full" src={UsersLoveUs} alt="" />
									</div>
									<div className="w-[18%] self-end">
										<Image
											className="w-full"
											src={MidMarketMidMarket23}
											alt=""
										/>
									</div>
									<div className="w-[15%] self-end">
										<Image className="w-full" src={SourceforgeFall22} alt="" />
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

export default AwardWinning;
