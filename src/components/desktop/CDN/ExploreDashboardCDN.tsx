import React from "react";
import Image from "next/image";
import ExploreCpanelImage from "@/assets/GlobalImages/ExploreCpanelImage.png";
import CDNSupportYou from "@/assets/CDN/CDNSupportYou.png"

const ExploreDashboardCDN = () => {
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
                            <div className={`py-[90px] w-full`}>
                                <div className="flex items-center flex-col-reverse lg:flex-row">
                                    <div className="w-full lg:w-1/2 text-left">
                                        <div className="mb-5">
                                            <h2 className="text-white text-[30px] md:text-[40px] font-semibold text-left capitalize">We’re Here To <span className="text-[#4fa83d]"> Support You</span></h2>
                                        </div>
                                        <div className="mb-10">
                                            <p className="text-[#cfcfcf] text-base leading-[1.5]">Don’t sweat over disrupted services, our skilled and highly dedicated team is at your service 24/7.</p>
                                        </div>
                                        <div className="mb-5">
                                            <h3 className="text-[#4fa83d] text-[22px] font-medium text-left capitalize mb-5">24/7 Live Support</h3>
                                            <p className="text-[#cfcfcf] text-base leading-[1.5]">Don’t sweat if you can’t figure something out regarding our features or services. Our dedicated and highly professional support team is ready to help you at all times.</p>
                                        </div>
                                        <div className="mb-5">
                                            <h3 className="text-[#4fa83d] text-[22px] font-medium text-left capitalize mb-5">24/7 Live Support</h3>
                                            <p className="text-[#cfcfcf] text-base leading-[1.5]">Don’t sweat if you can’t figure something out regarding our features or services. Our dedicated and highly professional support team is ready to help you at all times.</p>
                                        </div>
                                        <div className="mb-5">
                                            <h3 className="text-[#4fa83d] text-[22px] font-medium text-left capitalize mb-5">24/7 Live Support</h3>
                                            <p className="text-[#cfcfcf] text-base leading-[1.5]">Don’t sweat if you can’t figure something out regarding our features or services. Our dedicated and highly professional support team is ready to help you at all times.</p>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <Image className="w-full" src={CDNSupportYou} alt="CDN Support You" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExploreDashboardCDN;