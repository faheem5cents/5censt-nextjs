import React from 'react';
import Image from 'next/image';
import CDNLiveStreamingTabImg from "@/assets/CDN/CDNLiveStreamingTabImage.png";
import { CDNLivestreamingArray } from '@/constants/CDNLivestreamingArray';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from './SeamlessCoverageForm';
import CDNDiscoveryCall from './CDNDiscoveryCall';
import Brands from '../Brands';
import CDNTopBanner from '../TopBanner';
import { CDNLiveStreamingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';


const CDNLiveStreamingTab = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Live Streaming</span>'
                subheading='<span class="hidden"></span>'
                description='Broadcast your live and on-demand content using the HTTP protocol. We integrate and provide custom solutions for OTT / IPTV providers, including custom DNS, real-time routing, Multi-CDN and so much more. Easy integration with middleware such as stalker, makes us the best choice for a CDN partner.'
            />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='w-[850px]' src={CDNLiveStreamingTabImg} alt='CDN Live Streaming' />
                </div>
            </div>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-[40px] text-white text-center font-semibold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>Lightning fast </span> live streaming with advanced features</h2>
                        </div>
                        <div className='mt-[80px]'>
                            <div className='flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10'>
                                {CDNLivestreamingArray.map((item, index) => (
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
            <CDNDiscoveryCall />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={CDNLiveStreamingFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <SeamlessCoverageForm
                heading='Seamless Coverage For Your Viewers' />
            <div className='w-full pb-[90px]'>
                <Brands />
            </div>
        </> 
    )
}

export default CDNLiveStreamingTab;