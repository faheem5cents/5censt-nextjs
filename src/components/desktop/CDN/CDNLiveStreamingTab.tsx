import React from 'react';
import Image from 'next/image';
import { CDNLivestreamingArray } from '@/constants/CDNLivestreamingArray';
import { CDNLiveStreamingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import CDNLiveStreamingTabImg from "/public/assets/CDN/CDNLiveStreamingTabImage.png";
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from './SeamlessCoverageForm';
import CDNDiscoveryCall from './CDNDiscoveryCall';
import Brands from '../Brands';
import CDNTopBanner from '../TopBanner';
import ProductFeatures from '../ProductFeatures';


const CDNLiveStreamingTab = () => { 
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]">Live Streaming</span>'
                subheading='<span class="hidden"></span>'
                description='Broadcast your live and on-demand content using the HTTP protocol. We integrate and provide custom solutions for OTT / IPTV providers, including custom DNS, real-time routing, Multi-CDN and so much more. Easy integration with middleware, such as stalker, makes us the best choice for a CDN partner.'
            />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='w-[850px]' src={CDNLiveStreamingTabImg} alt='CDN Live Streaming' />
                </div>
            </div>
            <ProductFeatures 
            heading={"<span class='text-[#4fa83d]'>Lightning fast </span> live streaming with advanced features"} 
            CDNLiveStreamingArray={CDNLivestreamingArray} />

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