import React from 'react';
import Image from 'next/image';
import CDNTopBanner from '@/components/desktop/TopBanner';
import VSMultistreamingStreamingImage from "/public/assets/RestreamMultistreamingStreaming/RestreamMultistreamingStreaming.png";
import RMStreamingFeatures from '@/components/desktop/RestreamMultistreamingStreaming/VSMultiStreamingFeatures';
import DiscoveryCall from '@/components/desktop/DiscoveryCall';
import VSMultiStreamingPlansPricing from '@/components/desktop/Video Services/VSMultiStreamingPlansPricing';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import Brands from '@/components/desktop/Brands';

const RestreamMultistreamingStreaming = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Multistreaming</span>'
                subheading='<span class="hidden"></span>'
                description='Experience the broadcasting of programs across multiple mediums, or more than one service on the same medium, at the same time. The source stream can either be within 5centsCDN or any other external CDN.' />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='md:w-[800px]' src={VSMultistreamingStreamingImage} alt='CDN Live Streaming' />
                </div>
            </div>
            <RMStreamingFeatures />
            <DiscoveryCall
                heading={'Looking to <span class="text-[#4fa83d]"> multistream on any platform?</span>'}
                subheading={'Broadcast your content on multiple platforms at the same time'}
                description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <VSMultiStreamingPlansPricing />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying </span> '} />
            <TryForFreeForm heading={'Start Delivering Content To Multiplatforms'} />
            <div className='mb-[90px]'>
                <Brands />
            </div>
        </>
    )
}

export default RestreamMultistreamingStreaming;