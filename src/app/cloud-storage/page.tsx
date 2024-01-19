import React from 'react';
import CDNTopBanner from '@/components/desktop/TopBanner';
import CloudStorageTopImg from "/public/assets/CloudStorage/CloudStorageTopImg.png";
import Image from 'next/image';
import CloudStorageFeatures from '@/components/desktop/CloudStorageFeatures';
import DiscoveryCall from '@/components/desktop/DiscoveryCall';
import FrequentlyAskedQuestion from '@/components/desktop/FAQ/FrequentlyAskedQuestion';
import { CloudStorageFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import Brands from '@/components/desktop/Brands';


const page = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Cloud Storage</span>'
                subheading='<span class="hidden"></span>'
                description='State-of-the-Art Cloud Storage service is yet another swift feature that allows the broadcasters to build a custom platform that lets them deliver high-performance, secure and scalable videos by complementing in-house capabilities. This service offers file scheduling to play content for/in a set amount of time, in addition, to live streaming, at a high speed and scale as required.'
            />
            <Image className='w-[850px] mx-auto' src={CloudStorageTopImg} alt='Clout Storage' />
            <CloudStorageFeatures />
            <DiscoveryCall 
            heading={'Enjoy custom platforms with <span class="text-[#4fa83d]"> high-quality, scalable videos.</span>'} 
            subheading={'Unlimited storage for your videos based on your business needs'} 
            description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4fa83d]">FAQs</span>'} FrequentlyAskedQuestionArray={CloudStorageFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4fa83d]"> See What They are Saying</span>'} />
            <TryForFreeForm heading={'Sign Up For Safe & Secure Content Storage'} />
            <Brands/>
        </>
    )
}

export default page;