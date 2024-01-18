import React from 'react';
import Image from 'next/image';
import DNSTopBanner from './DNSTopBanner';
import TrafficDirectorImage from "@/assets/DNS/TrafficDirectorImage.png";
import { TrafficDirectorFeaturesArray } from '@/constants/TrafficDiretorFeaturesArray';
import DNSSecurityFeatures from "@/components/desktop/DNS/DNSSecurityFeatures";
import StraightForwardPricing from './StraightForwardPricing';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import DiscoveryCall from '../DiscoveryCall';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import { TrafficDirectorFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';


const TrafficDirectorTab = () => {
    return (
        <>
            <DNSTopBanner heading={'<span class="text-[#4fa83d]">Traffic Director</span>'}
                subheading={'Optimize your domains with effective strategy'}
                description={'Our intelligent traffic management service makes it easy to implement a multi-CDN infrastructure that puts you in control of performance and cost. You can simply start with a strategy that directs traffic to the preferred CDN based on the country, state, or ASN (autonomous system number) of your users. All these capabilities are fully integrated into our CDN package as a custom solution.'} />
            <div className='w-full'>
                <div className='pt-[50px] p-[10px] flex justify-center items-center'>
                    <Image className='md:w-[800px]' src={TrafficDirectorImage} alt='Traffic Director Image' />
                </div>
            </div>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-[40px] text-white text-center font-semibold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>What’s in </span> it for you?</h2>
                        </div>
                        <div className='mt-[80px]'>
                            <div className='flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10'>
                                {TrafficDirectorFeaturesArray.map((item, index) => (
                                    <div key={index} className='w-full md:w-[29.5%]'>
                                        <div className='flex flex-col'>
                                            <div className='mb-5 flex justify-center'>
                                                <Image className='w-full max-w-[378px] md:w-full' src={item.img} alt='Live Recording DVR' />
                                            </div>
                                            <div className='mb-5'>
                                                <h3 className='text-[22px] text-[#4fa83d] text-left leading-none'>{item.heading}</h3>
                                            </div>
                                            <p className='text-[#cfcfcf] text-base leading-[1.5]'>{item.description}</p>
                                        </div>
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DNSSecurityFeatures />
            <StraightForwardPricing />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <DiscoveryCall
                heading='Need a reliable, <span class="text-[#4fa83d]"> cost effective DNS </span> to manage your domain names?'
                subheading="5centsCDN for intelligent traffic management service"
                description="Sales & Client solutions team typically responds within 1 business day."
            />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={TrafficDirectorFAQArray} />
            <SeamlessCoverageForm
                heading='Get Started With Seamless Encoding' />
        </>
    )
}

export default TrafficDirectorTab;