import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CDNTopBanner from '@/components/desktop/TopBanner';
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import BandwidthRolloverImg from "/public/assets/GlobalImages/BandwidthRolloverImg.png";
import BandwidthAddOnHistory from "/public/assets/GlobalImages/BandwidthAddOnHistory.svg";
import BaseBandwidth from "/public/assets/GlobalImages/BaseBandwidth.svg";
import FrequentlyAskedQuestion from '@/components/desktop/FAQ/FrequentlyAskedQuestion';
import { BandwidthRolloverFAQArray } from '@/constants/FrequentlyAskedQuestionArray';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';


const BandwidthRollover = () => {
    return (
        <>
            <CDNTopBanner
                heading={'<span class="primary-text">Bandwidth Rollover</span>'}
                subheading={'Never lose your bandwidth again'}
                description={'How would you like to have your unused data rollover from one month to the next? At 5centsCDN, your Add-on bandwidth rolls over stays in your account for one whole year.'} />
            <div className='max-w-[1140px] mx-auto p-[15px] md:p-10'>
                <div className='p-[10px]'>
                    <h2 className='mb-7 text-white text-[34px] md:text-[40px] text-center leading-[1.4em] capitalize'>Bandwidth rollover is <span className='primary-text'>beneficial if you</span></h2>
                    <div className='mt-[30px] flex flex-col md:flex-row justify-between items-center gap-3'>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 text-white text-[20px] md:text-[30px] text-center font-medium leading-[45px]'>Couldn’t consume all your bandwith</h3>
                        </div>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 text-white text-[20px] md:text-[30px] text-center font-medium leading-[45px]'>Need to buy more bandwidth for the last few days</h3>
                        </div>
                    </div>
                    <div className='mt-[70px]'>
                        <div className='py-[10px] max-w-[1140px] mx-auto'>
                            <div className="w-full border-t-[0.5px] border-[#ffffff20]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`px-[10px] pb-[60px] md:py-[60px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[34px] md:text-[41px] font-semibold md:font-bold leading-[1.2em]">Get Your Add-On Bandwidth</h2>
                        <h3 className='text-white text-[35px] md:text-[41px] text-center mb-5 leading-[1.4] font-medium'>rolled over on monthly or annual plan</h3>
                        <h4 className="text-[#cfcfcf] text-center text-[24px] mb-7 px-auto lg:px-10">
                            We ensure unmatched quality and advanced solution combined with everything you need for a smooth and seamless content delivery
                        </h4>
                        <div className='w-full lg:w-[800px] mx-auto mt-5'>
                            <Image className='w-full' src={BandwidthRolloverImg} alt='Bandwidth Rollover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='py-[10px] px-[10px] md:px-[90px]'>
                        <div className={`my-5 p-10 rounded-[10px] bg-[url('../assets/GlobalImages/BandwidthRolloverBg.png')] bg-cover bg-no-repeat bg-center`}>
                            <h6 className='mb-5 text-white text-[25px] text-center font-bold leading-[1.4em]'>
                                Not sure how much bandwidth you need?
                            </h6>
                            <p className='text-white text-base text-center'>
                                See how much BW would be sufficient for your business and check out the details about customized bitrate
                            </p>
                            <div className='flex justify-center items-center pt-5'>
                                <Link className='text-white text-center text-base font-semibold leading-none border border-[#4fa83d] bg-[#4fa83d] px-7 py-[15px] rounded-[10px] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">Explore Bandwidth Calculator</Link>
                            </div>
                        </div>
                        <div className='md:mx-[20%]'>
                            <p className='text-base text-[#cfcfcf] text-center leading-[1.5]'>*The results are based on your streaming bit rate, the number of viewers you expect to have, and how long people will watch your streams, and what quality*</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[10px] md:px-[30px] lg:px-0'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px] lg:py-[10px] lg:px-[90px]'>
                        <div className={`bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pr-[200px]'>
                                        <h6 className='mb-5 primary-text text-center md:text-left text-2xl capitalize font-semibold'>Base Bandwidth</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>Base BW is the minimum bandwidth that is purchased per month and it starts from 1TB. Anything you buy above that counts as an add-on.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={BaseBandwidth} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] mt-5 rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pl-[200px]'>
                                        <h6 className='mb-5 primary-text text-center md:text-left text-2xl capitalize font-semibold'>
                                            Bandwidth Add-On History</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>The user-friendly interface of control panel lets you stay updated about your bandwidth add-on history in the console. Check registration or expiration date and total, used, & remaining bandwidth.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={BandwidthAddOnHistory} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FrequentlyAskedQuestion heading={`<span class="primary-text">FAQ's</span>`} FrequentlyAskedQuestionArray={BandwidthRolloverFAQArray} />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="primary-text">See What They are Saying</span>'} />
            <TryForFreeForm 
            heading={'Give Your Customers The Best Viewing Experience.'} />
        </>
    )
}

export default BandwidthRollover;