import React from 'react';
import Link from 'next/link';

const StraightForwardPricing = () => {
    return (
        <>
            <div className='pt-[100px]'>
                <div className='max-w-[1140px] mx-auto p-[10px]'>
                    <h2 className='mb-5 text-white text-[30px] md:text-[34px] lg:text-[46px] text-center font-semibold leading-[1.4em]'> <span className='primary-text'>Straightforward </span> Pricing</h2>
                    <div className='mb-[5px] flex items-center flex-col md:flex-row justify-between'>
                        <div className='w-full md:w-1/3'>
                            <div className='bg-[#1B1C1F] m-[6px]  py-5 md:pl-[60px] rounded-[14px]'>
                                <h3 className='text-white text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>Domains</h3>
                                <h4 className='primary-text text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>$1.00/month per domain</h4>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 '>
                            <div className='bg-[#1B1C1F] m-[6px] py-4 md:pl-[30px] rounded-[14px]'>
                                <h3 className='text-white text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>Queries</h3>
                                <h4 className='primary-text text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>Unlimited queries/month</h4>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3 '>
                            <div className='bg-[#1B1C1F] m-[6px] py-4 md:pl-[30px] rounded-[14px]'>
                                <h3 className='text-white text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>Queries</h3>
                                <h4 className='primary-text text-[20px] md:text-left text-center lg:text-2xl font-semibold leading-[1.4em]'>Unlimited queries/month</h4>
                            </div>
                        </div>
                    </div>
                    <div className='my-[6px] p-[17px] primary-bg rounded-[14px]'>
                        <h2 className='text-white text-center md:text-[22px] lg:text-[26px]'>First <strong> 1K records are FREE</strong> and each additional 1K costs $2.50/month</h2>
                    </div>
                    <div className='pt-16 flex justify-center'>
                        <Link className='primary-text text-[22px] font-medium leading-none border primary-border rounded-[14px] py-[25px] px-[50px] transition duration-300 hover:bg-[#4fa83d] hover:text-white' href="#">Estimate Monthly Price</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StraightForwardPricing;