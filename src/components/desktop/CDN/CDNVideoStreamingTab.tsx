import React from 'react';
import Image from 'next/image';
import { CDNVideoStreamingArray } from '@/constants/CDNVideoStreamingArray';
import { CDNVideoStreamingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import CDNVideoStreamingTabImg from "/public/assets/CDN/CDNVideoStreamingTabImg.png";
import CDNVideoStreamingInnerTab from './CDNVideoStreamingInnerTab';
import DiscoveryCall from '../DiscoveryCall';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from './SeamlessCoverageForm';
import CDNTopBanner from '../TopBanner';
import ProductFeatures from '../ProductFeatures';

const CDNVideoStreaming = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Video Streaming</span>'
                subheading='<span class="hidden"></span>'
                description='With 5centsCDN’s swift and modern network infrastructure, you can now enable your end viewers to watch video content on-demand. All you need to do to experience seamless content delivery is to upload your videos to our origin servers.'
            />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='w-[850px]' src={CDNVideoStreamingTabImg} alt='CDN Live Streaming' />
                </div>
            </div>
            <ProductFeatures heading={"<span class='text-[#4fa83d]'>On-Demand </span> video content anytime, anywhere"} 
            CDNLiveStreamingArray={CDNVideoStreamingArray} />
            <div className='mb-5'>
                <div className='py-[90px] max-w-[1140px] mx-auto'>
                    <div className="w-full border-t-[0.5px] border-[#ffffff20]"></div>
                </div>
            </div>
            <CDNVideoStreamingInnerTab />
            <DiscoveryCall
                heading='Looking for <span class="text-[#4fa83d]">on-demand video content </span> with the best features?'
                subheading="Experience the best content delivery across the board"
                description="Sales & Client solutions team typically responds within 1 business day."
            />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={CDNVideoStreamingFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <SeamlessCoverageForm
                heading='Opt for scalable cloud-based video streaming' />
        </>
    )
}
 
export default CDNVideoStreaming;