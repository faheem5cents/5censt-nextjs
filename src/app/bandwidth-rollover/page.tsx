import React from 'react'
import Image from 'next/image';
import CDNTopBanner from '@/components/desktop/TopBanner';
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import HaveAGrip from "/public/assets/GlobalImages/HaveAGrip.svg";
import AttackProtection from "/public/assets/GlobalImages/AttackProtection.svg";
import BandwidthRolloverImg from "/public/assets/GlobalImages/BandwidthRolloverImg.png";
import bg from "/public/assets/GlobalImages/BandwidthRolloverBg.png"

const page = () => {
    return (
        <>
            <CDNTopBanner
                heading={'<span class="primary-text">Bandwidth Rollover</span>'}
                subheading={'Never lose your bandwidth again'}
                description={'How would you like to have your unused data rollover from one month to the next? At 5centsCDN, your Add-on bandwidth rolls over stays in your account for one whole year.'} />
            <div className='max-w-[1140px] mx-auto p-10'>
                <div className='p-[10px]'>
                    <h2 className='mb-7 text-white text-[40px] text-center leading-[1.4em] capitalize'>Bandwidth rollover is <span className='primary-text'>beneficial if you</span></h2>
                    <div className='mt-[30px] flex flex-col md:flex-row justify-between items-center gap-3'>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 text-white text-[30px] text-center font-medium leading-[45px]'>Couldn’t consume all your bandwith</h3>
                        </div>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 text-white text-[30px] text-center font-medium leading-[45px]'>Need to buy more bandwidth for the last few days</h3>
                        </div>
                    </div>
                    <div className='mt-[70px]'>
                        <div className='py-[10px] max-w-[1140px] mx-auto'>
                            <div className="w-full border-t-[0.5px] border-[#ffffff20]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-[60px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[2.5rem] md:text-[41px] font-medium md:font-bold leading-[1.2em]">Get Your Add-On Bandwidth</h2>
                        <h3 className='text-white text-[41px] mb-5 leading-[1.4] font-medium'>rolled over on monthly or annual plan</h3>
                        <h4 className="text-[#cfcfcf] text-center text-[24px] mb-7 px-auto lg:px-10">
                            We ensure unmatched quality and advanced solution combined with everything you need for a smooth and seamless content delivery
                        </h4>
                        <div className='w-full lg:w-[800px] mx-auto mt-5'>
                            <Image className='w-full' src={BandwidthRolloverImg} alt='Bandwidth Rollover' />
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
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Have A Grip On Your Wallet</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>Clients can now have control over their bandwidth by setting the limit from 90 (to prevent any overages) to 120% (if overage charges are acceptable) hence you can enjoy continuous streaming with us!!</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={HaveAGrip} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[url('../assets/TrafficDirector/TrafficDirectorbg.png')] mt-5 rounded-[10px] bg-cover bg-no-repeat bg-center`}>
                            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
                                <div className='w-full md:w-[69.911%]'>
                                    <div className='p-[30px] md:p-10 lg:p-10 lg:pl-[200px]'>
                                        <h6 className='mb-5 primary-text text-2xl capitalize font-semibold'>Attack Protection</h6>
                                        <p className='text-base text-[#cfcfcf] leading-[1.8em]'>Stop worrying about huge traffic bursts to your CDN with the bandwidth limit setter. Once the limit has been attained, our algorithm stops returning your files to whoever messing with your network.</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <div className='p-10'>
                                        <Image className='w-full' src={AttackProtection} alt='Anycast Network' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='py-[10px] px-[90px]'>
                        <div className={`my-5 p-10 rounded-[10px] bg-[url('../assets/GlobalImages/BandwidthRolloverBg.png')] bg-cover bg-no-repeat bg-center`}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;