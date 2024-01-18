import React from 'react';
import Image from 'next/image';
import CDNTopBanner from '../TopBanner';
import VSLiveTranscodingTopImage from "@/assets/VideoService/VSLiveTranscodingTopImage.png";
import VSLiveTrasncodingFeatures from './VSLiveTrasncodingFeatures';
import DiscoveryCall from '../DiscoveryCall';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';
import { CDNLiveTranscodingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';

const VSLiveTranscodingTab = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Live Transcoding</span>'
                subheading='<span class="hidden"></span>'
                description='Seamless encoding/decoding to ensure easier ingestion over lower-bandwidth connections. 5centsCDN Live Transcoding allows you to deliver a live stream in multiple bitrates to match the viewer’s connection speed.'
            />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='md:w-[800px]' src={VSLiveTranscodingTopImage} alt='CDN Live Streaming' />
                </div>
            </div>
            <VSLiveTrasncodingFeatures />
            <DiscoveryCall
                heading={'Improve your viewer’s experience by <span class="text-[#4fa83d]"> delivering live streams</span> in multiple bitrates.'}
                subheading={'Ensure a buffer-free streaming experience for your viewers'}
                description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={CDNLiveTranscodingFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <SeamlessCoverageForm
                heading='Transcode Your Streams Impeccably' />
        </>
    )
}

export default VSLiveTranscodingTab;