import React from 'react';
import Image from 'next/image';
import CDNSupportYou from "/public/assets/CDN/CDNSupportYou.png"

const SupportYou = () => {
    return (
        <>
            <div className='p-5 py-[30px] md:py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className={`w-full`}>
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
        </>
    )
}

export default SupportYou;