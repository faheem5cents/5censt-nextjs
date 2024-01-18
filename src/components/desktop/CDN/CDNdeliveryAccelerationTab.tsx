import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CDNDeliveryAccelerationArray } from '@/constants/CDNDeliveryAccelerationArray';
import { CDNDeliveryAccelerationFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import { DeliveryAccelerationPlusFrequentlyAskedQuestionArray } from "@/constants/FrequentlyAskedQuestionArray";
import CDNDeliveryAccelerationImg from "@/assets/CDN/CDNDeliveryAccelerationImg.png";
import CDNTopBanner from '../TopBanner';
import DiscoveryCall from '../DiscoveryCall';
import CDNDASpeedUp from './CDNDASpeedUp';
import FrequentlyAskedQuestion from '../FAQ/FrequentlyAskedQuestion';
import ClientAndExperience from '../ClientAndExperience/ClientAndExperience';
import SeamlessCoverageForm from './SeamlessCoverageForm';
import wordPressIcon from "@/assets/CDN/wordPressIcon.png";
import FrequentlyAskedQuestionDropDown from "@/components/desktop/FAQ/FrequentlyAskedQuestionDropDown";

const CDNdeliveryAcceleration = () => {
    return (
        <>
            <CDNTopBanner
                heading='<span class="text-[#4fa83d]"> Delivery Acceleration</span>'
                subheading='More efficient and lightning-fast browsing enabled'
                description='We accelerate your website or web application’s static and dynamic assets such as style sheets, JavaScript files, and images. Our delivery acceleration solution is used by Gamers, publishers, advertising agencies, OTT / IPTV, and software companies.'
            />
            <div className='w-full'>
                <div className='p-[10px] flex justify-center items-center'>
                    <Image className='w-[850px]' src={CDNDeliveryAccelerationImg} alt='CDN Live Streaming' />
                </div>
            </div>
            <CDNDASpeedUp />
            <div className='pt-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-[40px] text-white text-center font-semibold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>Improve your web performance </span> with our mighty features</h2>
                        </div>
                        <div className='mt-[80px]'>
                            <div className='flex flex-col md:flex-row items-start flex-wrap justify-between gap-y-10'>
                                {CDNDeliveryAccelerationArray.map((item, index) => (
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
            <DiscoveryCall
                heading='How about a <span class="text-[#4fa83d]">lightning-fast browsing </span> experience?'
                subheading="Exceptional performance without any compromise on the quality"
                description="How about a lightning-fast browsing experience?"
            />
            <div className='bg-[#121314] py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className='mb-5 text-center text-[#4fa83d] text-[30px] md:text-[40px] capitalize leading-[1.4em] font-bold'>Easy Integration - Begin Right Away</h2>
                        <p className='mb-5 md:mx-[15%] text-center text-[#cfcfcf] text-base leading-[1.5]'>
                            Streamline all your tools via simple integration at 5centsCDN. All you need is a few minutes and setup guidelines. We take pride in offering user-friendly installation with no need for any prior technical knowledge. Easily enable 5centsCDN on your WordPress website and enjoy greatly improved loading times around the world. Simply enable the plugin and select the pull zone created on the CDN control panel. Enjoy world-class acceleration with 5centsCDN powered by Akamai.
                        </p>
                        <div className="flex justify-center items-center gap-2">
                            <Link className='text-white text-[22px] font-semibold' href="#">Try our WordPress Plugin today!
                            </Link>
                            <Image className='w-[68px]' src={wordPressIcon} alt='' />
                        </div>
                        <div className='flex justify-center'>
                            <Link className='bg-[#4fa83d] text-base font-semibold text-white border border-[#4fa83d] rounded-[10px] px-10 py-5 leading-none transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">Try Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <FrequentlyAskedQuestion
                heading='<span class="text-[#4FA83D]">FAQs</span>'
                FrequentlyAskedQuestionArray={CDNDeliveryAccelerationFAQArray}
            />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4fa83d]"> See What They are Saying <span>'} />
            <SeamlessCoverageForm
                heading='Boost Your Website, NOW!' />
        </>
    )
}

export default CDNdeliveryAcceleration;