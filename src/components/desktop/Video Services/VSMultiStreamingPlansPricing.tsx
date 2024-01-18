import React from 'react';
import Image from 'next/image';
import LongTick from "@/assets/VideoService/LongTick.svg";
import Charges from "@/assets/VideoService/Charges.svg";
import Link from 'next/link';

const VSMultiStreamingPlansPricing = () => {
    return (
        <>
            <div className='pt-[60px] pb-[150px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='px-6 lg:p-[10px]'>
                        <div className='mb-5 pb-10'>
                            <h2 className='text-[#4FA83D] text-[32px] md:text-[48px] text-center font-bold leading-[1.2em]'>Plans & Pricing</h2>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='px-5 py-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                <h2 className='text-white text-[26px] md:text-[28px] text-center font-bold leading-[1.4em] md:leading-[1.3em]'>Multistreaming destination cost <span className='text-[#4FA83D]'> $1</span> per month</h2>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='px-5 py-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                <h2 className='text-white text-[26px] md:text-[28px] text-center font-bold leading-[1.4em] md:leading-[1.3em]'>Each scheduler will cost <span className='text-[#4FA83D]'> $2</span> per month per name of the stream</h2>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 w-100'>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Video Recording</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>$10/mo. for 50K minutes</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[26px]' src={LongTick} alt='Tick' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>nDVR</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>Additional Charges</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[46px]' src={Charges} alt='Charges' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 w-100'>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Domain Locking</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>Included</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[26px]' src={LongTick} alt='Tick' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Video Encoding</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>$10/mo for 1K output minutes</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[46px]' src={Charges} alt='Charges' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10 w-100'>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Video Encoding</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>Additional Charges</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[26px]' src={LongTick} alt='Tick' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Token Security</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>Included</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[46px]' src={Charges} alt='Charges' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-row items-center w-100'>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Geo Blocking</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>Included</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[26px]' src={LongTick} alt='Tick' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-row items-center w-100'>
                                <div className='w-full'>
                                    <div className='p-[30px] flex justify-between items-center rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <div>
                                            <h2 className='text-white text-2xl text-left font-bold leading-[1.6em]'>Live Transcoding</h2>
                                            <h3 className='text-[#ffffffb3] text-xl text-left font-medium'>SD: $12.5 /profile /m    HD: $25 /profile /m   UHD: $50 /profile /m</h3>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image className='w-[26px]' src={LongTick} alt='Tick' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-5 pt-[60px] pb-[30px]'>
                            <h2 className='text-[#4FA83D] text-[32px] md:text-[48px] text-center font-bold leading-[1.2em]'>Global CDN Delivery</h2>
                        </div>
                        <div className='my-5 md:my-10'>
                            <div className='flex flex-col md:flex-row items-center w-100 gap-[30px]'>
                                <div className='w-full md:w-[31%]'>
                                    <div className='p-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <h2 className='mb-[10px] text-white text-2xl text-left font-bold leading-[1.4em]'>Standard</h2>
                                        <div className='flex items-center gap-3'><Image className='w-5' src={LongTick} alt='$2.5 per TB' /><span className='text-white text-[20px] leading-[1.3em] font-medium'>$2.5 per TB</span></div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[31%]'>
                                    <div className='p-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <h2 className='mb-[10px] text-white text-2xl text-left font-bold leading-[1.4em]'>Standard</h2>
                                        <div className='flex items-center gap-3'><Image className='w-5' src={LongTick} alt='$2.5 per TB' /><span className='text-white text-[20px] leading-[1.3em] font-medium'>$2.5 per TB</span></div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[31%]'>
                                    <div className='p-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <h2 className='mb-[10px] text-white text-2xl text-left font-bold leading-[1.4em]'>Standard</h2>
                                        <div className='flex items-center gap-3'><Image className='w-5' src={LongTick} alt='$2.5 per TB' /><span className='text-white text-[20px] leading-[1.3em] font-medium'>$2.5 per TB</span></div>
                                    </div>
                                </div>
                                <div className='w-full md:w-[31%]'>
                                    <div className='p-[30px] rounded-xl border border-[#4FA83D] bg-gradient-to-r from-[#181818] to-[#00000028]'>
                                        <h2 className='mb-[10px] text-white text-2xl text-left font-bold leading-[1.4em]'>Standard</h2>
                                        <div className='flex items-center gap-3'><Image className='w-5' src={LongTick} alt='$2.5 per TB' /><span className='text-white text-[20px] leading-[1.3em] font-medium'>$2.5 per TB</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[60px] pb-5'>
                            <Link className='flex w-full justify-center text-2xl md:text-[28px] text-white leading-[1.4em] rounded-lg font-semibold border border-[#4FA83D] py-3 bg-[#4FA83D] transition duration-300 hover:text-[#4FA83D] hover:bg-transparent' href="#">Start Streaming Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VSMultiStreamingPlansPricing;