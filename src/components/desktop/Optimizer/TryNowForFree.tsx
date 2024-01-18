import Link from 'next/link';
import React from 'react';

const TryNowForFree = () => {
    return (
        <div className='pb-[100px]'>
            <div className='max-w-[1140px] mx-auto p-[10px] md:p-0'>
                <div className={`p-5 md:p-[100px] rounded-[20px] bg-[url('../assets/Optimizer/TryNowForFreeBg.png')] bg-cover bg-no-repeat bg-center`}>
                    <div className='flex items-start flex-col md:flex-row'>
                        <div className='w-full md:w-[30%] lg:w-[33%]'>
                            <div className='p-[10px]'>
                                <h2 className='text-[40px] lg:text-[65px] text-white font-bold leading-none'>Try Now <span className='text-[#4FA83D]'> For Free</span></h2>
                            </div>
                        </div>
                        <div className='w-full md:w-[70%] lg:w-[67%]'>
                            <div className='p-[10px]'>
                                <h3 className='mb-5 text-white text-[20px] leading-[1.4em]'>
                                    Image optimizer is a paid service of 5centsCDN, with the first 1,000,000 requests included for free with any CDN + Plan. All you have to do to get started is activate a plan from CDN+ or get in touch with us to receive a personalized quote.
                                </h3>
                                <div className='pt-3'>
                                    <Link className='text-white text-lg font-medium bg-[#4FA83D] border border-[#4FA83D] px-5 py-[10px] rounded-lg transition duration-300 hover:bg-transparent hover:text-[#4FA83D]' href="#">Get Started Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TryNowForFree;