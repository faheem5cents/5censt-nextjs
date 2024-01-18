"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CDNTabIcon from "@/assets/CDN/CDNTab.svg";
import LiveStreamTabIcon from "@/assets/CDN/LiveStreamTab.svg";
import VideoStreamingTabIcon from "@/assets/CDN/VideoStreamingTab.svg";
import VSEncodingTab from './VSEncodingTab';
import VSLiveTranscodingTab from './VSLiveTranscodingTab';
import VSVideoEncodingTab from './VSVideoEncodingTab';

const VSVideoEncodingPage = () => {
    const [activeTab, setActiveTab] = useState('Video Encoding');
 
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return ( 
        <>
            <div className='pt-[100px]'>
                <div className='max-w-[900px] mx-auto'>
                    <div className='bg-[#1E2023] rounded-[50px] flex items-center w-full'>
                        <div id='CDN' className={`w-1/3 rounded-[100px] ${activeTab === 'Encoding' ? 'bg-[#4fa83d]' : ''}`}>
                            <div
                                onClick={() => handleTabClick('Encoding')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'
                            >
                                <Image className='w-5 mr-[10px]' src={CDNTabIcon} alt='CDN Tab Icon' />
                                <span>Encoding</span>
                            </div>
                        </div>
                        <div className={`w-1/3 rounded-[100px] ${activeTab === 'Live Transcoding' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Live Transcoding')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={LiveStreamTabIcon} alt='Live Stream Tab Icon' />
                                <span>Live Transcoding</span>
                            </div>
                        </div>
                        <div className={`w-1/3 rounded-[100px] ${activeTab === 'Video Encoding' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Video Encoding')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={VideoStreamingTabIcon} alt='Video Streaming Tab Icon' />
                                <span>Video Encoding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                {activeTab === 'Encoding' && <VSEncodingTab />}
                {activeTab === 'Live Transcoding' && <VSLiveTranscodingTab />}
                {activeTab === 'Video Encoding' && <VSVideoEncodingTab />}
            </div>
        </>
    )
} 

export default VSVideoEncodingPage;