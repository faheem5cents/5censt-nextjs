import React from 'react';
import Image from 'next/image';
import DNSTopBanner from "@/components/desktop/DNS/DNSTopBanner";
import QuarterCircleLeft from "/public/assets/CDN/QuarterCircleLeft.svg";
import CurveLinesRight from "/public/assets/CDN/CurveLinesRight.svg";
import LiveStreaming from "/public/assets/CDN/LiveStreaming.svg";
import VideoStreaming from "/public/assets/CDN/VideoStreaming.svg";
import HighlightsCounter from '../HighlightsCounter';
import HowDNSWorks from './HowDNSWorks';
import Refresher from './Refresher';
import { DNSFeaturesArray } from '@/constants/DNSFeaturesArray';
import VerticalLine from "/public/assets/GlobalImages/VerticalLine.svg";
import DNSExploreDashboardImg from "/public/assets/DNS/DNSExploreDashboardImg.png";
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from '../CDN/SeamlessCoverageForm';
import DiscoveryCall from '../DiscoveryCall';
import { DNSFAQArray } from '@/constants/FrequentlyAskedQuestionArray';


export const DNSArray = [ 
    {
        img: LiveStreaming,
        heading: "SimpleDNS",
        description:
            "5centsCDN DNS is the most cost-effective way to manage your domain names along with CDN. Enabling CDN is just one button away. Our SimpleDNS service provides a 100% uptime Service Level Agreement (SLA).",
    },
    {
        img: VideoStreaming,
        heading: "Traffic Director",
        description:
            "Our intelligent traffic management service makes it easy to implement a multi-CDN infrastructure that puts you in control of performance and cost. You can simply start with a strategy that directs traffic to the preferred CDN based on the country, state, or ASN (autonomous system number) of your users.",
    },
]

const DNSTab = () => {
    return (
        <>
            <DNSTopBanner heading={'<span class="text-[#4fa83d]">Process millions of queries each second</span> to simplify content delivery with enterprise DNS network'} 
            subheading={''} description={'Take complete control of your content delivery based on your business logic with fast and secure DNS Hosting'} />
            <div className='w-full'>
                <div className='max-w-[800px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='flex items-center flex-col md:flex-row mt-[15px] gap-4 relative'>
                            <Image className='absolute left-[-3%] top-[58%] w-[59px] hidden lg:block' src={QuarterCircleLeft} alt='QuarterCircleLeft' />
                            <Image className='absolute right-[-3%] top-[54%] w-[94.5px] hidden lg:block' src={CurveLinesRight} alt='CurveLinesRight' />
                            {DNSArray.map((item, index) => (
                                <div key={index} className='w-full md:w-1/2 h-full z-10'>
                                    <div className='p-5 bg-[#18191b] rounded-[10px] h-auto md:min-h-[250.28px]'>
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
            <HighlightsCounter/>
            <HowDNSWorks />
            <Refresher/>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-[40px] text-white text-center font-semibold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>Some powerful infra details </span> about 5centsCDN DNS</h2>
                        </div>
                        <div className='mt-[80px]'>
                            <div className='flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10'>
                                {DNSFeaturesArray.map((item, index) => (
                                    <div key={index} className='w-full md:w-[29.5%]'>
                                        <div className='flex flex-col'>
                                            <div className='mb-5 flex justify-center'>
                                                <Image className='w-full max-w-[378px] md:w-full' src={item.img} alt='Live Recording DVR' />
                                            </div>
                                            <div className='mb-5'>
                                                <h3 className='text-[22px] text-[#4fa83d] text-left leading-none'>{item.heading}</h3>
                                            </div>
                                            <p className='text-[#cfcfcf] text-base leading-[1.5]'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5 md:mx-[10%]'>
                            <h2 className='text-white text-center text-[30px] md:text-[40px] font-bold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>Unique UI</span> awith extended control DNS management
                            </h2>
                        </div>
                        <div className="mb-5 flex justify-center items-center">
                            <a href="#" className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent">Explore Dashboard</a>
                        </div>
                        <div className='mb-5 mt-[30px]'>
                            <div className='flex justify-center items-center'>
                                <Image className='w-[3px]' src={VerticalLine} alt='' />
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center'>
                            <Image className='lg:max-w-[800px]' src={DNSExploreDashboardImg} alt='Explore Dashboard' />
                        </div>
                    </div>
                </div>
            </div>
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <DiscoveryCall
                heading='Need a reliable, <span class="text-[#4fa83d]"> cost effective DNS </span> to manage your domain names?'
                subheading="5centsCDN for intelligent traffic management service"
                description="Sales & Client solutions team typically responds within 1 business day."
            />
            <FrequentlyAskedQuestion heading={'<span class="text-[#4FA83D]">FAQs</span>'} FrequentlyAskedQuestionArray={DNSFAQArray} />
            <SeamlessCoverageForm
                heading='Get Started With Seamless Encoding' />
        </>
        
    )
}

export default DNSTab; 