import React from 'react';
import CDNTopBanner from '../TopBanner';
import Image from 'next/image';
import { VideoEndocingVideoTranscodingArray } from '@/constants/VideoEndocingVideoTranscodingArray';
import { VSEncodingFeaturesArray } from '@/constants/VSEncodingFeaturesArray';
import QuarterCircleLeft from "/public/assets/CDN/QuarterCircleLeft.svg";
import CurveLinesRight from "/public/assets/CDN/CurveLinesRight.svg";
import HighlightsCounter from '../HighlightsCounter';
import ExploreDashboard from '../ExploreDashboard';
import VSConstantMonitor from './VSConstantMonitor';
import DiscoveryCall from '../DiscoveryCall';
import VSQuestionsAndBlog from './VSQuestionsAndBlog';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';
import ProductFeatures from '../ProductFeatures';

const VSVideoEncodingTab = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Secure data delivery</span> without<br>
                compromising on the quality'
                subheading='<span class="hidden"></span>'
                description='Experience safe and secure content delivery with the A-Grade encoding services that 5centsCDN has to offer. Seamless and smooth encoding ensures easier ingestion over lower-bandwidth connections for a global audience.'
            />
            <div className='w-full'>
                <div className='max-w-[800px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='flex items-center flex-col md:flex-row mt-[15px] gap-4 relative'>
                            <Image className='absolute left-[-3%] top-[58%] w-[59px] hidden lg:block' src={QuarterCircleLeft} alt='QuarterCircleLeft' />
                            <Image className='absolute right-[-3%] top-[54%] w-[94.5px] hidden lg:block' src={CurveLinesRight} alt='CurveLinesRight' />
                            {VideoEndocingVideoTranscodingArray.map((item, index) => (
                                <div key={index} className='w-full md:w-1/2 h-full z-10'>
                                    <div className='p-5 bg-[#18191b] rounded-[10px] h-auto md:min-h-[209.28px]'>
                                        <div className='mb-5 flex items-center gap-[10px] w-full'>
                                            <span className='text-[#4fa83d] text-center text-xl font-bold w-full'>{item.heading}</span>
                                        </div>
                                        <div className='mb-4'>
                                            <p className='text-[#cfcfcf] text-sm leading-[1.5]'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <HighlightsCounter />
            <div className='bg-[#121314]'>
                <ProductFeatures
                    heading={"<span class='text-[#4fa83d]'>Gateway to enterprise networks </span> with <br /> sturdy features"}
                    CDNLiveStreamingArray={VSEncodingFeaturesArray} />
            </div>
            <ExploreDashboard />
            <VSConstantMonitor />
            <DiscoveryCall
                heading='Improve your content broadcasting quality with state of the art <span class="text-[#4fa83d]"> Video Encoding.'
                subheading="Opt for a future-centric approach for your video stack"
                description="Sales & Client solutions team typically responds within 1 business day."
            />
            <VSQuestionsAndBlog />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying </span> '} />
            <SeamlessCoverageForm
                heading='Get Started With Seamless Encoding' />
        </>
    )
}

export default VSVideoEncodingTab;