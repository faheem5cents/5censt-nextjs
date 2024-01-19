import React from 'react';
import Image from 'next/image';
import AnycastNetwork from "/public/assets/TrafficDirector/AnycastNetwork.svg";
import PointClickTrafficManagement from "/public/assets/TrafficDirector/PointClickTrafficManagement.svg";
import CloudBased from "/public/assets/TrafficDirector/CloudBased.svg";
import HighAvailability from "/public/assets/TrafficDirector/HighAvailability.svg";
import CountryBasedRouting from "/public/assets/TrafficDirector/CountryBasedRouting.svg";
import ASNBasedRouting from "/public/assets/TrafficDirector/ASNBasedRouting.svg";

const TrafficDirectorFeatures = () => {
    return (
        <>
            <div className='px-[10px] md:px-[30px] lg:px-0'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px] lg:py-[10px] lg:px-[90px]'>
                        <div className={`bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pr-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Anycast Network</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>By continuous improvement to our network, the team at 5centsCDN offers a network addressing and routing methodology that has multiple routing paths using a single destination address.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={AnycastNetwork} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pl-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Point & Click Traffic Management</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>With the help of exceptional DNS domain proficiency, maximal system scalability, and round-the-clock client support, 5centsCDN ensures advanced traffic management solutions.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={PointClickTrafficManagement} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pr-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Cloud-Based</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>Traffic Director is delivered as a SaaS solution where we control every aspect of your DNS load balancing to save you the trouble of buying hardware, installing software, or hiring more IT engineers.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={CloudBased} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pl-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>High Availability</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>We make sure that your website content and applications are available 24/7, 365 days a year to ensure customer satisfaction while providing a high-caliber, A-Grade user experience throughout.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={HighAvailability} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pr-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Country Based Routing</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>{`With the help of a powerful set of tools and a modern technological network framework, we manage and segment your traffic based on your users'  location or network.`}</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={CountryBasedRouting} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pl-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>ASN Based Routing</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>Manage your content delivery using a group of networks with a single routing policy that restricts the answers where the Autonomous System (AS) of requester IP matches the list.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={ASNBasedRouting} alt='Anycast Network' />
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrafficDirectorFeatures;