import React from 'react';
import Image from 'next/image';
import { IPCameraRestoringFeaturesArray } from '@/constants/IPCameraRestreamingFeaturesArray';
import CDNTopBanner from '@/components/desktop/TopBanner';
import IPCameraRestreamingImg from "/public/assets/IPCameraRestreaming/IPCameraRestreamingImg.png";
import IPCameraBlogImg from "/public/assets/IPCameraRestreaming/IPCameragBlogImg.png";
import ProductFeatures from '@/components/desktop/ProductFeatures';
import Link from 'next/link';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';


const page = () => {
    return (
        <>
            <CDNTopBanner
                heading={' <span class="primary-text">IP Camera Restreaming</span>'}
                subheading={'Advanced network of IP camera recording and streaming'}
                description={'Modern content delivery network at 5centsCDN offers robust options for embedding IP camera streams into websites. Broadcast over the internet to a wider audience or specific audiences and let your IP camera restreams be viewed by an unlimited number of concurrent users.'} />
            <div className='pt-[90px] pb-[30px]'>
                <div className='max-w-[1140px] mx-auto p-[10px]'>
                    <div className='mb-5'>
                        <h2 className='text-white text-center text-[40px] font-semibold leading-[1.4em]'>Monitoring And Surveillance</h2>
                    </div>
                    <div className='mb-7 mx-[15%]'>
                        <p className='text-[#cfcfcf] text-base text-center'>Simplify your streams by combining low latency and reliable video delivery. The high functionality of this technology ensures security and convenience for every user anywhere in the world.</p>
                    </div>
                    <div className='mt-10'>
                        <Image className='w-full lg:w-[800px] mx-auto' src={IPCameraRestreamingImg} alt='IP Camera Restreaming' />
                    </div>
                </div>
            </div>
            <ProductFeatures
                heading={`Experience the robust <span class="primary-text"> IP camera features</span>`}
                CDNLiveStreamingArray={IPCameraRestoringFeaturesArray} />
            <div className='max-w-[1140px] mx-auto p-[30px] lg:p-0'>
                <div className='flex items-center flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 primary-bg md:bg-transparent rounded-t-[20px] md:rounded-t-none' style={{ "backgroundImage": "linear-gradient(115deg, #00000000 10%, #4fa83d 10%)" }}>
                        <div className='p-5 lg:pl-[90px] flex items-center justify-center lg:justify-start'>
                            <p className='text-white text-[32px] font-semibold text-center lg:text-left leading-[1.4em] lg:pr-[60px]'>Start using 5centsCDN for your content delivery</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 primary-bg md:bg-transparent rounded-b-[20px] md:rounded-b-none' style={{ "backgroundImage": "linear-gradient(115deg, #4FA83D 90%, #00000000 90%)" }}>
                        <div className='p-5 lg:py-9 lg:pr-[90px] flex items-center justify-center gap-5'>
                            <Link className='text-base text-white font-semibold border border-white leading-none px-10 py-5 rounded-[10px] transition duration-300 hover:bg-white hover:text-[#4fa83d]' href="#">Visit Pricing</Link>
                            <Link className='text-base text-white font-semibold border border-white leading-none px-10 py-5 rounded-[10px] transition duration-300 hover:bg-white hover:text-[#4fa83d]' href="#">Try for free</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mt-[60px] lg:mt-[90px] pt-[60px] lg:pt-[90px] bg-[url('../assets/IPCameraRestreaming/IpCameraBlogBg.png')] bg-[#ffffff05] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='flex items-center flex-col lg:flex-row'>
                        <div className='w-full lg:w-[70%] h-auto lg:h-[400px]'>
                            <div className='p-5 lg:p-[10px] lg:mr-[30px]'>
                                <h4 className='primary-text text-2xl font-bold capitalize leading-[1.4em] mb-5 lg:mb-10'>From The Blog:</h4>
                                <h5 className='text-white text-2xl font-bold capitalize leading-[1.4em] mb-5'>IP Camera Restreaming Or Multistreaming</h5>
                                <p className='text-[#cfcfcf] text-base leading-[1.5] pb-7'>Let’s define the term ‘restreaming‘, means publishing or multistreaming or pushing your IP cam feeds to YouTube or Facebook or custom RTMP servers. Most IP cam does not support RTMP ingest or push option, though IP cams have the option to get RTSP.</p>
                                <div className='py-5'>
                                    <a className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent" href="#">Read Full BlogNow</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[30%] h-auto lg:h-[400px] flex items-end'>
                            <div className='flex items-end justify-center w-full'>
                                <Image src={IPCameraBlogImg} alt='IP Camera Blog Img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TryForFreeForm 
            heading={'Ready To Reach Unlimited Audience?'} />
        </>
    )
}

export default page; 