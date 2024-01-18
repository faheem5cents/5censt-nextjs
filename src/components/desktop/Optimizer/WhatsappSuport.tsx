import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsappIcon from "@/assets/GlobalImages/whatsappChat.svg";
import WhatsappSupportImage from "@/assets/Optimizer/WhatsappSupportImage.svg";

const WhatsappSuport = () => {
    return (
        <>
            <div className={` pt-[50px] px-5 lg:px-0 lg:pt-20 lg:py-20 bg-[url('../assets/Optimizer/WhatsappSuportBg.svg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='flex items-center flex-col lg:flex-row'>
                        <div className='w-full lg:w-[55%] p-[10px]'>
                            <h2 className='mb-5 text-white text-left text-[32px] md:text-[50px] font-semibold leading-none'>
                                Your Satisfaction is <span className='text-[#4FA83D]'> our Top Priority</span>
                            </h2>
                            <p className="mb-5 text-white text-left text-base md:text-base leading-[1.2em] lg:leading-[1.2em]">We believe in only one mantra that is your satisfaction is all that matters, we achieve this by providing our clients with expert support, available to help them at any moment
                            </p>
                            <p className="text-white text-left text-base md:text-base mb-[5px] leading-[1.2em] lg:leading-[1.2em]">{`Yes! Any moment of the day, month, or year! 5centsCDN offers the industry's most accessible and comprehensive support service, available 24 hours a day, 7 days a week, and 365 days a year.`}
                            </p>
                            <div className='pt-5 flex items-center flex-col md:flex-row gap-4 md:gap-10'>
                                <Link className='flex items-center justify-center w-full gap-3 text-[#4FA83D] text-lg font-medium leading-[1em] border border-[#4FA83D] p-4 rounded-[10px]' href="#">
                                    <Image className='w-[30px]' src={WhatsappIcon} alt='' />
                                    Chat on Whastapp</Link>
                                <Link className='flex items-center justify-center w-full gap-3 text-white bg-[#4FA83D] text-lg font-medium leading-[1em] border border-[#4FA83D] p-5 rounded-[10px] transition duration-300 hover:bg-transparent hover:text-[#4FA83D]' href="#">
                                    Schedule a Meeting</Link>
                            </div>
                        </div>
                        <div className='w-full lg:w-[45%] p-[10px] flex justify-center items-center'>
                            <Image className='w-4/5' src={WhatsappSupportImage} alt='Whatsapp Support Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsappSuport;