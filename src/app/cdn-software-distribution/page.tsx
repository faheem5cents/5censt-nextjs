"use client"
import React from 'react';
import CountUp from 'react-countup';
import SSLGlobalScaledNetwork from "/public/assets/SoftwareDistribution/SSLGlobalScaledNetwork.svg";
import SecurityGuaranteed from "/public/assets/SoftwareDistribution/SecurityGuaranteed.svg";
import CostEffective from "/public/assets/SoftwareDistribution/CostEffective.svg";
import WideDataCentersNetwork from "/public/assets/SoftwareDistribution/WideDataCentersNetwork.svg";
import SpeedyDownload from "/public/assets/SoftwareDistribution/SpeedyDownload.svg";
import Image from 'next/image';
import DiscoveryCall from '@/components/desktop/DiscoveryCall';
import SupportYou from '@/components/desktop/SupportYou';
import Link from 'next/link';
import Brands from '@/components/desktop/Brands';


const SoftwareDistributionFeatures = [
    {
        img: SSLGlobalScaledNetwork,
        heading: "SSLGlobal Scaled Network",
        description: "Stay ahead of the competition as we provide a scaled network that requires less support and less troubleshooting as well.",
    },
    {
        img: SecurityGuaranteed,
        heading: "Security Guaranteed",
        description: "SRest assured that your content delivery is secure. Software and application delivery at 5centsCDN is clear from any kinds of cyber attacks.",
    },
    {
        img: CostEffective,
        heading: "Cost-Effective",
        description: "No hidden charges that secretly rip you off in the name of efficient software delivery. We offer cost-effective services without compromising the quality.",
    },
    {
        img: WideDataCentersNetwork,
        heading: "Wide Data Centers Network",
        description: "SWe have the most advanced and complex arrangement of the network infrastructure that works in a seamless manner to offer smooth software distribution.",
    },
    {
        img: SpeedyDownload,
        heading: "Speedy Download",
        description: "Gone are the days when downloading took a long time. Experience lightning-fast downloads without compromising on the quality of the content.",
    },
]


const CDNSoftwareDistribution = () => {
    return (
        <>
            <div className={`px-[30px] py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[34px] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]">Software Distribution</h2>
                        <h3 className='text-white text-[30px] md:text-[32px] text-center mb-5 leading-[1.4] font-semibold'>Groundbreaking and efficient digital distribution infrastructure </h3>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-4 mx-auto lg:mx-[17%]">
                            The scalable, fast, and reliable solution of 5centsCDN’s global network lets you distribute large amounts of data seamlessly. We enable you to access a variety of control features for an absolutely wonderful content delivery experience.
                        </h4>
                        <div className='w-full mt-5 md:mt-10 px-[10%] flex items-center flex-col md:flex-row'>
                            <div className='w-1/2 md:w-1/3 flex justify-center flex-col items-center p-[10px]'>
                                <h2 className='primary-text text-[22px] md:text-[32px] font-bold leading-[1.8em] flex items-center justify-center'>
                                    <CountUp start={0} end={2} duration={10} /> <span>+<span className='pl-2'>Tbps</span></span></h2>
                                <p className='text-white text-base leading-10'>Network Backbone</p>
                            </div>
                            <div className='w-1/2 md:w-1/3 flex justify-center flex-col items-center p-[10px]'>
                                <h2 className='primary-text text-[22px] md:text-[32px] font-bold leading-[1.8em] flex items-center justify-center'>
                                    <CountUp start={0} end={5000} duration={2} /> <span>+</span></h2>
                                <p className='text-white text-base leading-10'>Happy Users</p>
                            </div>
                            <div className='w-1/2 md:w-1/3 flex justify-center flex-col items-center p-[10px]'>
                                <h2 className='primary-text text-[22px] md:text-[32px] font-bold leading-[1.8em] flex items-center justify-center'>
                                    <CountUp start={0} end={70} /> <span>+</span></h2>
                                <p className='text-white text-base leading-10'>{`Global PoP's`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto p-[10px]'>
                    <h2 className='mb-5 primary-text text-[40px] text-center font-semibold leading-[1.4em]'>Supported by robust features</h2>
                    <h3 className='mb-5 text-white text-[22px] text-center font-semibold leading-none'>Reliable software download and efficient management features</h3>
                    <div className='mt-5 flex flex-col md:flex-row items-center justify-center flex-wrap'>
                        {SoftwareDistributionFeatures.map((item, index) => (
                            <div key={index} className='w-full md:w-[33%] px-5 pt-5 md:p-5'>
                                <div className={`lg:h-[340px] flex items-center justify-center flex-col rounded-[20px] bg-[url('../assets/SoftwareDistribution/SoftwareFeaturesBg.png')] bg-cover bg-no-repeat bg-center p-5`}>
                                    <Image className='mb-5 w-[50px]' src={item.img} alt='SSLGlobal Scaled Network' />
                                    <h2 className='mb-5 mt-2 text-[28px] font-bold primary-text text-center'>S{item.heading}</h2>
                                    <p className='text-[#cfcfcf] text-base text-center'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <DiscoveryCall
                heading={'How about distributing large amounts of <span class="text-[#4fa83d]"> data seamlessly?'}
                subheading={''}
                description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <div className='bg-[#121315]'>
                <SupportYou />
            </div>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto p-[10px]'>
                    <h2 className="primary-text text-center text-[34px] md:text-[40px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]">Looking To Optimize Your Software Delivery?</h2>
                    <h3 className='text-white text-[20px] md:text-[22px] text-center mb-5 leading-[1.4] font-semibold'>We can help! Reach out to the 24/7 support to learn how we do it.</h3>
                    <div className="mb-5 flex justify-center">
                        <Link className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent" href="#">Contact Us</Link>
                    </div>
                    <div className="mb-[60px] mt-[40px] w-full border-t-[0.5px] border-[#ffffff20]"></div>
                    <h2 className="primary-text text-center text-[34px] md:text-[40px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%] mb-5">Start Effective Data Distribution</h2>
                    <div className='w-full lg:w-auto flex justify-center mt-[1%] mx-auto lg:mx-[20%]'>
                        <div className='border border-[#4fa83d] rounded-[10px] p-[5px] w-[90%] lg:w-[658px] flex flex-col md:flex-row justify-between'>
                            <input type="email" placeholder='Enter your email to sign-in' className='bg-transparent md:w-[70%] min-h-[59px] px-3 outline-0 text-white' />
                            <button className='bg-[#4fa83d] text-white text text-base font-medium min-h-[59px] md:w-[30%] py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]'>Get Started</button>
                        </div>
                    </div>
                    <p className='text-[#e8e8e8] text-xs text-center mt-[20px]'>Unlock a 15-day Trial with our 24/7 customer support to help you.</p>
                </div>
            </div>
            <Brands />
        </>
    )
}

export default CDNSoftwareDistribution;