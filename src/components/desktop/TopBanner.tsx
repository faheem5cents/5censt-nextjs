import React from 'react';

const CDNTopBanner = ({
    heading,
    subheading,
    description,
}: {
    heading: string;
    subheading: string;
    description: string;
}) => { 
    return (
        <>
            <div className={` py-[30px] md:py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="text-white text-center text-[2.5rem] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%]" dangerouslySetInnerHTML={{ __html: heading }}>
                        </h2>
                        <h3 className='text-white text-[32px] mb-5 leading-[1.4] font-semibold' dangerouslySetInnerHTML={{ __html: subheading }}></h3>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-4 mx-auto lg:mx-[17%]">
                            {description}
                        </h4>
                        <div className='w-full lg:w-auto flex justify-center mt-[1%] mx-auto lg:mx-[20%]'>
                            <div className='border border-[#4fa83d] rounded-[10px] p-[5px] w-[90%] lg:w-[658px] flex flex-col md:flex-row justify-between'>
                                <input type="email" placeholder='Enter your email to sign-in' className='bg-transparent md:w-[70%] min-h-[59px] px-3 outline-0 text-white' />
                                <button className='bg-[#4fa83d] text-white text text-base font-medium min-h-[59px] md:w-[30%] py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]'>Get Started</button>
                            </div>
                        </div>
                        <p className='text-[#e8e8e8] text-xs mt-[20px]'>Unlock a 15-day Trial with our 24/7 customer support to help you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDNTopBanner