import React from "react";
import phonecallIcon from "/public/assets/GlobalImages/phonecallIcon.png";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "/public/assets/GlobalImages/EmailIcon.png";
import WhatsappIcon from "/public/assets/GlobalImages/WhatsappIcon.svg";
import SayHiIcon from "/public/assets/GlobalImages/SayHi.png";
import DiscoverCallShining from "/public/assets/GlobalImages/DiscoverCallShining.png";

const CDNDiscoveryCall = () => {
    return (
        <>
            <div
                className={`pt-[90px] bg-[url('../assets/GlobalImages/DiscoveryCallBg.png')] bg-cover bg-no-repeat bg-top `}
            >
                <div className="max-w-[1140px] mx-auto">
                    <div className="p-[30px] lg:p-[10px]">
                        <div className="mb-5 mx-[10%]">
                            <h2 className="text-white text-[30px] md:text-[34px] lg:text-[40px] font-bold leading-[1.4em] text-center">
                                Do you have custom or large audience{" "}
                                <span className="text-[#4fa83d]">
                                    {" "}
                                    live event streaming?{" "}
                                </span>{" "}
                            </h2>
                        </div>
                        <p className="text-[#7a7a7a] text-base text-center mb-5 leading-[1.5]">
                            Need a custom or large audience live event streaming platform?
                        </p>
                        <div className="mb-5 flex justify-center">
                            <Link
                                className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent"
                                href="#"
                            >
                                Get Started Now
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-center items-center gap-10 relative">
                                <Image
                                    className="absolute md:w-[123px] lg:w-[190px] md:top-[-11%] md:right-[7%] lg:right-[16%] top-[-52%] hidden md:block"
                                    src={SayHiIcon}
                                    alt=""
                                />
                                <div>
                                    <Link
                                        className="py-5 px-[30px] bg-[#232427] text-white rounded-[100px] flex items-center gap-2"
                                        href="mailto:buy@5centscdn.com"
                                    >
                                        <Image className="w-5" src={EmailIcon} alt="Email Icon" />{" "}
                                        buy@5centscdn.com
                                    </Link>
                                </div>
                                <div>
                                    <Link className="m-5 py-5" href="#">
                                        <Image
                                            className="w-[60px]"
                                            src={WhatsappIcon}
                                            alt="Whatsapp Icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <p className="mb-5 text-[#7a7a7a] text-center text-base leading-[1.5F]">
                                Sales & Client solutions team typically responds within 1 business day.
                            </p>
                            <div
                                className={`p-10 rounded-[10px] bg-[#1B1C1F] bg-[url('../assets/GlobalImages/DiscoevrCallScheduleBg.png')] bg-cover bg-no-repeat bg-top relative`}
                            >
                                <Image
                                    className="absolute top-[-14%] left-[-4%]"
                                    src={DiscoverCallShining}
                                    alt=""
                                />
                                <div className="flex items-center flex-col md:flex-row justify-between w-full">
                                    <div className="w-full md:w-[70%] p-[10px]">
                                        <div className="mb-5">
                                            <h2 className="text-white text-[40px] font-bold leading-[1.4em] text-left">
                                                DISCOVERY CALL
                                            </h2>
                                        </div>
                                        <p className="mb-[30px] text-left text-[#cfcfcf] text-base leading-[1.5]">
                                            We’d love to learn more about you!👂 In this short call,
                                            we’ll figure out your business needs and see if our
                                            product is right for you.
                                        </p>
                                        <a
                                            href="#"
                                            className="text-base leading-[1.5]  bg-transparent px-[35px] py-[13px] text-[#4FA83D] border border-[#4FA83D]  rounded-[10px] hover:bg-white"
                                        >
                                            Schedule Now
                                        </a>
                                    </div>
                                    <div className="w-full md:w-[30%] p-[10px]">
                                        <div className="flex justify-center items-center">
                                            <Image className="w-[186px]" src={phonecallIcon} alt="" />
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
}

export default CDNDiscoveryCall;