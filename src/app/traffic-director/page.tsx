import React from 'react';
import Image from 'next/image';
import CDNTopBanner from '@/components/desktop/TopBanner';
import TrafficDirectorImg from "/public/assets/TrafficDirector/TrafficDirectorImg.png";
import TrafficDirectorFeatures from '@/components/desktop/TrafficDirectorFeatures';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import Brands from '@/components/desktop/Brands';

const page = () => {
    return (
        <>
            <CDNTopBanner
                heading={'<span class="primary-text">Traffic Director</span>'}
                subheading={''}
                description={'Our intelligent traffic management service makes it easy to implement a multi-CDN infrastructure that puts you in control of performance and cost. You can simply start with a strategy that directs traffic to the preferred CDN based on the country, state, or ASN (autonomous system number) of your users. All these capabilities are fully integrated into our CDN package as a custom solution.'} />
            <div className='w-full pb-[80px]'>
                <div className='pt-[50px] p-[10px] flex justify-center items-center'>
                    <Image className='md:w-[800px]' src={TrafficDirectorImg} alt='Simple DNS' />
                </div>
            </div>
            <TrafficDirectorFeatures />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'} />
            <Brands />
        </>
    )
}

export default page;