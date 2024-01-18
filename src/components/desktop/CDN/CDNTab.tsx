import React from "react";
import Image from "next/image";
import { CDNArray } from "@/constants/CDNArray";
import { CDNAdvancedSolutionsArray } from "@/constants/CDNAdvancedSolutionsArray";
import QuarterCircleLeft from "@/assets/CDN/QuarterCircleLeft.svg";
import CurveLinesRight from "@/assets/CDN/CurveLinesRight.svg";
import HighlightsCounter from '../HighlightsCounter';
import DiscoveryCall from '../DiscoveryCall';
import ExploreDashboardCDN from './ExploreDashboardCDN';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import CDNTopBanner from '../TopBanner';
import SeamlessCoverageForm from './SeamlessCoverageForm';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import { CDNFAQArray } from '@/constants/FrequentlyAskedQuestionArray';


const CDNTab = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Fast, reliable, and secure</span> <br>content delivery experience each time'
                subheading='<span class="hidden"></span>'
                description='Gone are the days of slow streaming and interrupted content delivery. Now is the time to reach a larger audience in the blink of an eye anywhere in the world. 5centsCDN offers the modern infrastructure to cater to all your content delivery needs.'
            />
            <div className='w-full'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='flex items-center flex-col md:flex-row mt-[15px] gap-4 relative'>
                            <Image className='absolute left-[-3%] top-[58%] w-[59px] hidden lg:block' src={QuarterCircleLeft} alt='QuarterCircleLeft' />
                            <Image className='absolute right-[-3%] top-[54%] w-[94.5px] hidden lg:block' src={CurveLinesRight} alt='CurveLinesRight' />
                            {CDNArray.map((item, index) => (
                                <div key={index} className='w-full md:w-1/3 h-full z-10'>
                                    <div className='p-5 bg-[#18191b] rounded-[10px] h-auto md:min-h-[275.28px]'>
                                        <div className='mb-5 flex items-center gap-[10px]'>
                                            <Image className='w-[55px]' src={item.img} alt='' />
                                            <span className='text-[#4fa83d] text-xl font-bold'>{item.heading}</span>
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
            <div className={`py-[90px] bg-[url('../assets/CDN/AdvancedSolutionsBg.png')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5 md:mx-[10%]'>
                            <h2 className="text-white text-center text-[30px] md:text-[40px] font-semibold leading-[1.4em]">
                                <span className="text-[#4fa83d]"> Hop on and find advanced solutions</span>{" "}
                                to address all your content delivery concerns
                            </h2>
                        </div>
                        <div className='mt-10'>
                            <div className='flex items-center flex-wrap'>
                                {CDNAdvancedSolutionsArray.map((item, index) => (
                                    <div key={index} className='w-full md:w-1/3 p-[10px] flex flex-col items-center'>
                                        <div className='mx-5'>
                                            <div className='mb-5 flex justify-center'>
                                                <Image src={item.img} alt='Cloud Storage' />
                                            </div>
                                            <div className='mb-5'>
                                                <h4 className='text-[#4fa83d] text-center text-[22px] font-medium leading-none'>{item.heading}</h4>
                                            </div>
                                            <div className='mb-4'>
                                                <p className='text-[#cfcfcf] text-base leading-[1.5] text-center'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DiscoveryCall
                heading='Want <span class="text-[#4fa83d]">swift and uninterrupted  </span> content delivery?'
                subheading="Exceptional quality and high speed delivery of your content across board"
                description="Sales & Client solutions team typically responds within 1 business day."
            />
            <ExploreDashboardCDN />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={CDNFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <SeamlessCoverageForm
                heading='Sign Up For Demo Account. It’s Absolutely Free!' />
        </>
    )
}

export default CDNTab;
