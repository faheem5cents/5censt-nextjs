"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CDNTab from '@/components/desktop/CDN/CDNTab';
import CDNTabIcon from "/public/assets/CDN/CDNTab.svg";
import LiveStreamTabIcon from "/public/assets/CDN/LiveStreamTab.svg";
import VideoStreamingTabIcon from "/public/assets/CDN/VideoStreamingTab.svg";
import DeliveryAccelerationTabIcon from "/public/assets/CDN/DeliveryAccelerationTab.svg";
import CDNLiveStreamingTab from '@/components/desktop/CDN/CDNLiveStreamingTab';
import CDNVideoStreamingTab from '@/components/desktop/CDN/CDNVideoStreamingTab';
import CDNdeliveryAccelerationTab from '@/components/desktop/CDN/CDNdeliveryAccelerationTab';

const CDNVideoStreamingPage = () => {

    const [activeTab, setActiveTab] = useState('Video Streaming');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='pt-[100px]'>
                <div className='max-w-[900px] mx-auto'>
                    <div className='bg-[#1E2023] rounded-[50px] flex items-center w-full'>
                        <div id='CDN' className={`w-1/4 rounded-[100px] ${activeTab === 'CDN' ? 'bg-[#4fa83d]' : ''}`}>
                            <div
                                onClick={() => handleTabClick('CDN')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'
                            >
                                <Image className='w-5 mr-[10px]' src={CDNTabIcon} alt='CDN Tab Icon' />
                                <span>CDN</span>
                            </div>
                        </div>
                        <div id='sive-streaming' className={`w-1/4 rounded-[100px] ${activeTab === 'Live Streaming' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Live Streaming')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={LiveStreamTabIcon} alt='Live Stream Tab Icon' />
                                <span>Live Streaming</span>
                            </div>
                        </div>
                        <div id='video-streaming' className={`w-1/4 rounded-[100px] ${activeTab === 'Video Streaming' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Video Streaming')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={VideoStreamingTabIcon} alt='Video Streaming Tab Icon' />
                                <span>Video Streaming</span>
                            </div>
                        </div>
                        <div id='delivery-scceleration' className={`w-1/4 rounded-[100px] ${activeTab === 'Delivery Acceleration' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Delivery Acceleration')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={DeliveryAccelerationTabIcon} alt='Delivery Acceleration Tab Icon' />
                                <span>Delivery Acceleration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                {activeTab === 'CDN' && <CDNTab />}
                {activeTab === 'Live Streaming' && <CDNLiveStreamingTab />}
                {activeTab === 'Video Streaming' && <CDNVideoStreamingTab />}
                {activeTab === 'Delivery Acceleration' && <CDNdeliveryAccelerationTab />}
            </div>
        </>
    )
}

export default CDNVideoStreamingPage;