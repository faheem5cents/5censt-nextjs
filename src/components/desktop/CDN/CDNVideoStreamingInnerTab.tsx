"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import checkImg from "@/assets/Homepage/Check.svg";
import RightArrow from "@/assets/CDN/RightArrow.svg";
import Link from 'next/link';

const CDNVideoStreamingInnerTab = () => {

    const [activeTab, setActiveTab] = useState<'cloudStorage' | 'videoEncoding'>('cloudStorage');

    const handleTabClick = (tab: 'cloudStorage' | 'videoEncoding') => {
        setActiveTab(tab);
    };


    return (
        <>
            <div className='max-w-[1140px] mx-auto'>
                <div className='mb-5'>
                    <h2 className='text-[40px] text-white text-center font-semibold'>Enhance your <span className='text-[#4fa83d]'> video streaming</span> experience .</h2>
                </div>
                <div className='mt-[30px]'>
                    <div className='mx-[10%] bg-[#18191B] rounded-[10px]'>
                        <ul className='flex items-center w-full'>
                            <li
                                className={`w-1/2 flex justify-center rounded-[10px] p-4 cursor-pointer text-white hover:bg-[#4fa83d] active:bg-[#4fa83d] ${activeTab === 'cloudStorage' ? 'bg-[#4fa83d]' : 'bg-transparent'}`}
                                onClick={() => handleTabClick('cloudStorage')}
                            >
                                <span className='text-base text-center'>Cloud Storage</span>
                            </li>
                            <li
                                className={`w-1/2 flex justify-center rounded-[10px] p-4 cursor-pointer text-white hover:bg-[#4fa83d] active:bg-[#4fa83d] ${activeTab === 'videoEncoding' ? 'bg-[#4fa83d]' : 'bg-transparent'}`}
                                onClick={() => handleTabClick('videoEncoding')}
                            >
                                <span className='text-base text-center'>Video Encoding</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div id='cloudStorageBody' style={{ display: activeTab === 'cloudStorage' ? 'block' : 'none' }}>
                            <div className='md:px-[90px] my-[60px]'>
                                <div className='p-[10px] flex justify-between'>
                                    <div className='bg-[#18191B] rounded-[10px] w-full flex flex-row'>
                                        <div className='p-10 w-full'>
                                            <div className='flex flex-start md:flex-row flex-col flex-wrap w-full'>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> 5 cents per GB</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> 3x redundancy</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> No incoming charges</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> Highly scalable</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> No request pricing</span>
                                                </li>
                                            </div>
                                            <div className='mt-[30px] flex justify-center'>
                                                <Link className='text-[#4fa83d] text-base font-semibold flex items-center' href="#">Read More <Image className='ml-[10px]' src={RightArrow} alt='Read More' /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='videoEncodingBody' style={{ display: activeTab === 'videoEncoding' ? 'block' : 'none' }}>
                            <div className='md:px-[90px] my-[60px]'>
                                <div className='p-[10px] flex justify-between'>
                                    <div className='bg-[#18191B] rounded-[10px] w-full flex flex-row'>
                                        <div className='p-10 w-full'>
                                            <div className='flex flex-start md:flex-row flex-col flex-wrap w-full'>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '>Pay per minute</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> Custom integration available</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> Instant conversion</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> No queuing</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> Integrated with CDN</span>
                                                </li>
                                                <li className='flex items-center mb-4 w-full md:w-1/3'>
                                                    <Image className='mr-5 w-4' src={checkImg} alt='check Image' />
                                                    <span className='text-white text-base '> Multiple profiles</span>
                                                </li>
                                            </div>
                                            <div className='mt-[30px] flex justify-center'>
                                                <Link className='text-[#4fa83d] text-base font-semibold flex items-center' href="#">Read More <Image className='ml-[10px]' src={RightArrow} alt='Read More' /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDNVideoStreamingInnerTab; 