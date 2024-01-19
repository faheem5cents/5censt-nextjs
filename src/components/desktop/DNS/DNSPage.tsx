"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import SimpleDENTab from './SimpleDNSTab';
import DNSIcon from "/public/assets/DNS/DNSIcon.svg";
import SimpleDNSIcon from "/public/assets/DNS/SimpleDNSIcon.svg";
import TrafficDirectorIcon from "/public/assets/DNS/TrafficDirectorIcon.svg";
import DNSTab from './DNSTab';
import TrafficDirectorTab from './TrafficDirectorTab';

const DNSPage = () => {

    const [activeTab, setActiveTab] = useState('DNS');
 
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    }; 

    return ( 
        <>
            <div className='pt-[100px]'>
                <div className='max-w-[900px] mx-auto'>
                    <div className='bg-[#1E2023] rounded-[50px] flex items-center w-full'>
                        <div id='CDN' className={`w-1/3 rounded-[100px] ${activeTab === 'DNS' ? 'bg-[#4fa83d]' : ''}`}>
                            <div
                                onClick={() => handleTabClick('DNS')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'
                            >
                                <Image className='w-5 mr-[10px]' src={DNSIcon} alt='CDN Tab Icon' />
                                <span>DNS</span>
                            </div>
                        </div>
                        <div className={`w-1/3 rounded-[100px] ${activeTab === 'Simple DNS' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Simple DNS')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={SimpleDNSIcon} alt='Live Stream Tab Icon' />
                                <span>SimpleDNS</span>
                            </div>
                        </div>
                        <div className={`w-1/3 rounded-[100px] ${activeTab === 'Traffic Director' ? 'bg-[#4fa83d]' : ''}`}>
                            <div onClick={() => handleTabClick('Traffic Director')}
                                className='flex items-center justify-center text-white text-base font-semibold border-2 rounded-[100px] bg-transparent border-transparent hover:border-[#4fa83d] hover:bg-[#4fa83d] py-5 cursor-pointer'>
                                <Image className='w-5 mr-[10px]' src={TrafficDirectorIcon} alt='Video Streaming Tab Icon' />
                                <span>Traffic Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                {activeTab === 'Simple DNS' && <SimpleDENTab />}
                {activeTab === 'DNS' && <DNSTab />}
                {activeTab === 'Traffic Director' && <TrafficDirectorTab />}
            </div>
        </>
    )
}

export default DNSPage;