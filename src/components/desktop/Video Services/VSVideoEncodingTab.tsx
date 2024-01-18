import React from 'react';
import Image from 'next/image';
import CDNTopBanner from '../TopBanner';
import VSLiveTranscodingTopImage from "@/assets/VideoService/VSLiveTranscodingTopImage.png";
import VSVideoEncodingFeatures from './VSVideoEncodingFeatures';
import DiscoveryCall from '../DiscoveryCall';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';
import { CDNVideoEncodingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';

 
const VSVideoEncodingTab = () => {
    return (  
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Video Encoding</span>'
                subheading='<span class="hidden"></span>'
                description='For an enhanced streaming experience, 5centsCDN Transcoding services let the broadcasters convert their media files to MP4 format to make the videos viewable across multiple platforms and devices.' />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='md:w-[800px]' src={VSLiveTranscodingTopImage} alt='CDN Live Streaming' />
                </div>
            </div>
            <VSVideoEncodingFeatures />
            <DiscoveryCall
                heading={'Improve your viewer’s experience by <span class="text-[#4fa83d]"> delivering live streams</span> in multiple bitrates.'}
                subheading={'Ensure a buffer-free streaming experience for your viewers'}
                description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={CDNVideoEncodingFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <SeamlessCoverageForm
                heading='Transcode Your Streams Impeccably' />
        </>
    )
}

export default VSVideoEncodingTab;