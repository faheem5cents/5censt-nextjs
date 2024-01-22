import React from 'react';
import Image from 'next/image';
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import { CompareCDNPreformanceFeaturesArray } from '@/constants/CompareCDNPreformanceFeaturesArray';
import Link from 'next/link';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import DiscoveryCall from '@/components/desktop/DiscoveryCall';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import Brands from '@/components/desktop/Brands';

const CompareCDNPerformanceFeaturesArray = [
    {
        heading: 'Unbeatable price',
        description: '5centsCDN takes pride in their super affordable rates without compromising on the quality of their services. Enjoy the no-commitment pricing plan.'
    },
    {
        heading: 'Free trial',
        description: 'Need some time to make up your mind? We got you. You can explore the mighty features for a certain period of time before making a decision.'
    },
    {
        heading: 'NVMe Servers',
        description: 'NVMe disks are integrated on all NODES to offer stable, efficient, and predictable performance with the highest throughput and fastest response times.'
    },
    {
        heading: 'Anti-DDoS',
        description: 'Your payment credentials are safe with us. We ensure protection across all your CDN resources for an optimal level of service'
    },
]

const CompareCDNPerformance = () => {
    return (
        <>
            <div className={` py-[30px] md:py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[2.5rem] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]">Compare CDN Performance</h2>
                        <h3 className='text-[#cfcfcf] text-center text-2xl md:text-[32px] mb-5 leading-[1.4] font-medium '>Make an informed decision and go for a zealous content delivery network</h3>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-4 mx-auto lg:mx-[17%]">
                            Save your time and energy as we provide a full-fledged CDN comparison right here. From streaming speed to run uptime and overall performance.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='max-w-[1140px] mx-auto'>
                <div className='md:mx-[90px] p-[10px] flex justify-center items-center flex-wrap'>
                    {CompareCDNPerformanceFeaturesArray.map((item, index) => (
                        <div key={index} className='w-full md:w-1/2 p-[5px] flex flex-col justify-center items-center'>
                            <div className='bg-[#1b1c1f] p-[30px] md:p-[60px] rounded-[10px] flex flex-col justify-center items-center'>
                                <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                                <h3 className='mb-[10px] mt-2 primary-text text-[22px] text-center font-semibold leading-[1.2]'>{item.heading}</h3>
                                <p className='mb-5 text-[#cfcfcf] text-base text-center lg:h-[96px]'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pt-[90px] md:pt-[120px] pb-[30px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className='mb-5 text-center primary-text text-[30px] md:text-[40px] font-semibold capitalize leading-[1.4em]'>Check CDN Performance Globally</h2>
                        <h3 className='mb-5 text-white text-[20px] md:text-[22px] text-center leading-none'>Compare the robust features and sturdy content delivery</h3>
                        <p className='text-[#cdcdcd] text-center text-base leading-[1.5]'>Make an informed decision when it comes to CDN. Compare the performance globally.</p>
                        <div className='mt-[30px] flex justify-center items-center flex-wrap'>
                            {CompareCDNPreformanceFeaturesArray.map((item, index) => (
                                <div key={index} className='w-full md:w-1/3 py-[10px] md:p-[10px]'>
                                    <div className='w-full bg-[#121315] rounded-[20px] py-10 px-8'>
                                        <div className='w-1/3 m-auto mb-[15px]'>
                                            <Image src={item.img} alt='Japan' />
                                        </div>
                                        <h2 className='text-white text-[30px] md:text-3xl text-center font-semibold leading-[1.2] mt-5 mb-4'>{item.heading}</h2>
                                        <p className='text-center text-base text-[#cfcfcf] leading-[1.5]'>{item.description}</p>
                                        <div className='mt-8 flex justify-center'>
                                            <Link className='text-base primary-text border border-[#4fa83d] leading-none px-10 py-5 rounded-[10px] transition duration-300 hover:bg-[#4fa83d] hover:text-white' href={item.link}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ClientAndExperience description={`Join The Hundreds Of Thousands Of Happy Subscribers. <span class="primary-text">See What They're Saying</span>`} />
            <DiscoveryCall 
            heading={'Want <span class="primary-text">Swift And Uninterrupted </span> Content Delivery?'} 
            subheading={'Looking for swift and uninterrupted content delivery?'}
             description={'Sales & Client solutions team typically responds within 1 business day.'} />
             <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'}/>
             <Brands />
        </>
    )
}

export default CompareCDNPerformance;