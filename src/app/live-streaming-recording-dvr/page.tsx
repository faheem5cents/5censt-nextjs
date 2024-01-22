import React from 'react';
import { LiveRecordingDVRFeaturesArray } from '@/constants/LiveRecordingDVRFeaturesArray';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import ProductFeatures from '@/components/desktop/ProductFeatures';
import CDNTopBanner from '@/components/desktop/TopBanner';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';

const LiveStreamingRecordingDVR = () => {
    return (
        <>
            <CDNTopBanner
                heading={'<span class="primary-text">Live Recording (DVR)</span>'}
                subheading={''}
                description={'5centsCDN DVR lets you deliver a range of time-shifted TV and network digital video recorder (DVR) services. Record, Rewind, and Pause your desired programs with an integrated time-shift feature. DVR also works well with live programs.'} />
                            <ProductFeatures
                heading={'<span class="primary-text"> Experience our DVR</span> with the best features.'}
                CDNLiveStreamingArray={LiveRecordingDVRFeaturesArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'} />
        </>
    )
}

export default LiveStreamingRecordingDVR;