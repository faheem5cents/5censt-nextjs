import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DNSImage from "/public/assets/HighlightProducts/DNS.png";

const Dns = () => {
    return (
        <>
            <div className='max-w-[1140px] m-auto flex flex-col lg:flex-row justify-center items-center pb-[90px] lg:py-[90px]'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-start p-[15px] lg:p-[10px] lg:mr-5'>
                        <div className='w-full'>
                            <Image src={DNSImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center items-start p-[15px] lg:p-[10px] lg:ml-5'>
                        <div className='flex flex-col w-full'>
                            <h3 className='text-[#4fa83d] text-[22px] font-semibold mb-5 leading-none'>DNS</h3>
                            <h3 className='text-white text-[32px] font-semibold leading-[1.4em] mb-5'>Fast and secure DNS hosting
                            </h3>
                            <p className='text-[#CFCFCF] text-base mb-5 mr-[90px]'>Enable yourself with complete control of your content delivery based on your business logic and ensure up to the mark service for your customers.</p>
                            <Link className='text-base font-semibold text-white border border-[#4fa83d] rounded-[10px] bg-[#4fa83d] py-5 px-10 w-fit leading-none transition duration-300 hover:bg-transparent' href="">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dns;