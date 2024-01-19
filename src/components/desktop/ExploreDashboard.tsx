import React from 'react';
import Image from 'next/image';
import VerticalLine from "/public/assets/GlobalImages/VerticalLine.svg";
import ExploreDashboardImg from "/public/assets/GlobalImages/ExploreDashboardImg.png";

const ExploreDashboard = () => {
    return (
        <>
            <div className='pt-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <div className='mb-5 md:mx-[10%]'>
                            <h2 className='text-white text-center text-[30px] md:text-[40px] font-bold leading-[1.4em]'>
                                <span className='text-[#4fa83d]'>Complete control over security</span> and customization of your workflow
                            </h2>
                        </div>
                        <div className='mb-5 mx-[15%]'>
                            <p className='text-[#cfcfcf] text-base text-center leading-[1.5]'>Take things into your own hand with full control of your content delivery without having to compromise on the quality of features.</p>
                        </div>
                        <div className="mb-5 flex justify-center items-center">
                            <a href="#" className="text-white text-base font-semibold leading-none capitalize bg-[#4fa83d] border border-[#4fa83d] rounded-[10px] px-[40px] py-5 transition duration-300 hover:bg-transparent">Explore Dashboard</a>
                        </div>
                        <div className='mb-5 mt-[30px]'>
                            <div className='flex justify-center items-center'>
                                <Image className='w-[3px]' src={VerticalLine} alt='' />
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center'>
                            <Image className='lg:max-w-[800px]' src={ExploreDashboardImg} alt='Explore Dashboard' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreDashboard;