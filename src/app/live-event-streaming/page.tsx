import React from 'react';
import Image from 'next/image';
import CDNTopBanner from '@/components/desktop/TopBanner';
import ChurchStreamingImg from "/public/assets/LiveStreamingEvent/ChurchStreaming.png";
import SportsStreaming from "/public/assets/LiveStreamingEvent/SportsStreaming.png";
import CheckRounded from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import DiscoveryCall from '@/components/desktop/DiscoveryCall';
import ProductFeatures from '@/components/desktop/ProductFeatures';
import { LiveEventStreamingFeaturesArray } from '@/constants/LiveEventStreamingFeaturesArray';
import Link from 'next/link';
import FrequentlyAskedQuestion from '@/components/desktop/FAQ/FrequentlyAskedQuestion';
import { LiveEventStreamingFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';

const LiveEventStreamingArray = [
    {
        heading: "Church Streaming",
        description: "Broadcasting solution for your house of worship to reach the viewers at the comfort of their living rooms. We help people find Jesus and build a community with uninterrupted and smooth live streaming of the service.",
        img: ChurchStreamingImg,
    },
    {
        heading: "Sports Streaming",
        description: "Enjoy the fast and smooth streaming of your favorite sport and get to have a stadium-like experience in the comfort of your living room. Don’t miss out on hockey, cricket, football, tennis, boxing, or golfing.",
        img: SportsStreaming,
    },
]

const LiveEventStreaming = () => {
    return (
        <>
            <CDNTopBanner
                heading={'<span class="primary-text">Live event streaming</span>'}
                subheading={'Be a part of every event anywhere in the world via live stream'}
                description={'Don’t let your viewers miss out on anything by giving them the best live streaming experience across devices and multiple platforms, no matter where you are. Even on limited bandwidth, we make sure that the quality of your content remains high definition no matter what.'} />
            <div className='max-w-[1140px] mx-auto'>
                {LiveEventStreamingArray.map((item, index) => (
                    <div key={index} className='p-[10px] flex flex-col-reverse md:flex-row items-center'>
                        <div className='w-full md:w-[43%] p-[10px] flex flex-col items-start justify-start'>
                            <h4 className='mb-5 md:text-[20px] lg:text-[22px] primary-text font-semibold leading-none'>{item.heading}</h4>
                            <p className='text-[#cfcfcf] text-base leading-[1.5]'>{item.description}</p>
                        </div>
                        <div className='w-full md:w-[57%] p-[10px] flex items-center justify-end'>
                            <div className='md:w-[80%] lg:w-[497px]'>
                                <Image src={item.img} alt='Church Streaming' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <DiscoveryCall
                heading={'Looking for <span class="text-[#4fa83d]"> live event streaming</span> for a custom or large audience?'}
                subheading={'Let your users experience the best CDN with exceptional live event streaming'}
                description={'Sales & Client solutions team typically responds within 1 business day.'} />
            <div className='bg-[#121314]'>
                <ProductFeatures
                    heading={'Reach maximum number of audience with <br/><span class="primary-text"> minimum effort</span>'}
                    CDNLiveStreamingArray={LiveEventStreamingFeaturesArray} />
            </div>
            <div className='max-w-[800px] mx-auto'>
                <div>
                    <div className={`py-[70px] bg-[url('../assets/LiveStreamingEvent/LargeScaleBg.png')] bg-cover bg-no-repeat bg-center`}>
                        <h2 className='mb-5 text-[30px] md:text-[40px] primary-text text-center font-semibold leading-[1.4em]'>Large-Scale Live Streams</h2>
                        <div className='py-10 flex items-center flex-col md:flex-row justify-center gap-5'>
                            <Link className='text-[30px] primary-text font-medium px-[60px] py-[30px] bg-[#252729] leading-none rounded-[10px] transition duration-300 hover:text-white flex items-center justify-center w-full md:w-auto gap-3' href="#">
                                <Image className='w-[30px]' src={CheckRounded} alt='Check' /> Developers</Link>
                            <Link className='text-[30px] primary-text font-medium px-[60px] py-[30px] bg-[#252729] leading-none rounded-[10px] transition duration-300 hover:text-white flex items-center justify-center w-full md:w-auto gap-3' href="#">
                                <Image className='w-[30px]' src={CheckRounded} alt='Check' /> Engineers</Link>
                        </div>
                        <h2 className='text-white text-[20px] md:text-[22px] text-center font-semibold leading-[1.4em]'>For managing the event.</h2>
                    </div>
                </div>
            </div>
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D] pr-2">FAQs</span>'} FrequentlyAskedQuestionArray={LiveEventStreamingFAQArray} />
            <TryForFreeForm heading={'Stream your event at lightning fast speed'} />
        </>
    )
}

export default LiveEventStreaming;