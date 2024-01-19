import React from 'react';
import Image from 'next/image';
import HowDNSWorksImage from "/public/assets/DNS/HowDNSWorks.png";
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";

const HowDNSWorks = () => {
    return (
        <>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5'>
                            <h2 className='text-white text-[40px] text-center font-semibold leading-[1.4em] capitalize'>How <span className='primary-text'> DNS Works</span></h2>
                        </div>
                        <div className='mb-5'>
                            <p className='text-base text-[#cfcfcf] text-center leading-[1.5]'>DNS is a phone book that maps computer names to IP addresses known to be the DNS records.</p>
                            <p className='text-base text-[#cfcfcf] text-center leading-[1.5]'>Your computer asks the DNS server on a local router to perform a DNS lookup.</p>
                        </div>
                        <div className='pt-10 mb-5 flex justify-center'>
                            <Image className='w-auto md:w-auto md:max-w-[auto] lg:max-w-[800px]' src={HowDNSWorksImage} alt='How DNS Works Image' />
                        </div>
                        <div className='pt-10'>
                            <div className="py-[40px] mt-[40px] w-full border-t-[0.5px] border-[#ffffff20]"></div>
                        </div>
                        <div className='px-[3%] py-[5%]'>
                            <div className='p-[10px] flex flex-col md:flex-row items-center gap-10 md:gap-0'>
                                <div className='w-full md:w-[1/2]  md:border-r-[0.5px] border-[#ffffff20]'>
                                    <div className='md:pr-10'>
                                        <div className='mb-5 flex justify-center'>
                                            <Image src={CheckRoundedFilled} alt='DNS' />
                                        </div>
                                        <h4 className='mb-5 text-[22px] primary-text text-center font-semibold'>Recursive DNS Query Type</h4>
                                        <p className='text-base text-[#cfcfcf] text-center leading-[1.5]'>DNS client reaches out to a server, upstream requests are made and the result is returned. time-to-live (TTL) value determines the duration of the results to be cached.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[1/2]'>
                                    <div className='md:pl-10'>
                                        <div className='mb-5 flex justify-center'>
                                            <Image src={CheckRoundedFilled} alt='DNS' />
                                        </div>
                                        <h4 className='mb-5 text-[22px] primary-text text-center font-semibold'>Iterative DNS Query Type</h4>
                                        <p className='text-base text-[#cfcfcf] text-center leading-[1.5]'>Without any upstream travel, the DNS server finds the answer itself. If not, a different DNS server is recommended. The process continues till the answer is found.</p>
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

export default HowDNSWorks;