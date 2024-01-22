import { ScheduleAMeetingNowArray } from '@/constants/ScheduleAMeetingNowArray';
import Link from 'next/link';
import React from 'react';

const ScheduleAMeetingNow = () => {
    return (
        <>
            <div className={`pt-[80px] lg:pt-[100px] pb-[80px] lg:pb-[120px] bg-[url('/assets/GlobalImages/ScheduleAMeetingNow.svg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto px-5'>
                    <h2 className='text-white text-center text-2xl lg:text-[45px] leading-[1.2em] font-bold'>
                        Welcome to our <span className='primary-text'>scheduling ScheduleAMeetingNow!</span> 👋🏻 Select the meeting type that suits your needs and schedule a call with one of our team members. We re eager to connect with you!  &#129321;
                    </h2>
                </div>
            </div>
            <div className='py-5 pb-[120px] relative overflow-x-hidden ScheduleMeetingBgTop'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px] flex flex-wrap justify-center items-center'>
                        {ScheduleAMeetingNowArray.map((item, index) => (
                            <div key={index} className={`'w-full md:w-1/2 p-[10px] flex justify-center items-center `}>
                                <div className={`w-full lg:h-[305px] px-[15px] py-5 md:px-[25px] md:py-[54px] rounded-[10px] bg-none md:bg-[url('/assets/GlobalImages/ScheduleAMeetingInnerBg.png')] lg:bg-cover bg-no-repeat bg-center border border-[#4FA83D] lg:border-none`}>
                                    <h2 className='mb-5 text-white  text-[22px] lg:text-[28px] font-semibold leading-none'>{item.title}</h2>
                                    <p className="mb-7 text-sm lg:text-[18px] text-[#cfcfcf] leading-[1.3em]">{item.description}</p>
                                    <div className='lg:pt-[1.5rem]'>
                                        <Link className='text-[18px] primary-text uppercase px-5 py-[10px] border border-[#4FA83D] rounded-[6.5px] transition duration-300 hover:bg-[#4FA83D] hover:text-white' href={item.link}>Schedule Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleAMeetingNow;