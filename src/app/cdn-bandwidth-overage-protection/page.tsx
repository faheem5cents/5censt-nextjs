import React from 'react';
import Image from 'next/image';
import HaveAGrip from "/public/assets/GlobalImages/HaveAGrip.svg";
import AttackProtection from "/public/assets/GlobalImages/AttackProtection.svg";
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import Brands from '@/components/desktop/Brands';

const CDNBandwidthOverageProtection = () => {
    return (
        <>
            <div className={`px-[30px] py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[34px] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%] flex items-center gap-2">Bandwidth Overage Protection</h2>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-7 mx-auto lg:mx-[15%]"><span className='primary-text'>Bandwidth Overage</span> Protection at <span className='primary-text'>5centsCDN</span> enables overage protection which intern caps your bandwidth to a particular limit set by you where your service will be cut off when that mark has been attained. If you want to have <span className='primary-text'>uninterrupted streaming</span> and do not mind the extra charge, you are welcome to try the latter too.
                        </h4>
                        <div className='mb-5'>
                            <div className='mx-[15%] bg-[#18191B] p-5 rounded-lg'>
                                <p className='text-[#cfcfcf] text-sm leading-[1.5] italic'><span className='primary-text'>NOTE:</span> Users can enjoy up to 120% or more of BW for uninterrupted streaming. Please note that the exact information about the amount of extra bandwidth might not be available in real-time. The user will pay accordingly by the end of each month. 5centsCDN is not responsible for any illegal re-streaming or hotlinking of streams or CDN assets.</p>
                            </div>
                        </div>
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
            <div className='px-[10px] md:px-[30px] lg:px-0'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px] lg:py-[10px] lg:px-[90px]'>
                        <h2 className="mb-[60px] text-white text-center text-[34px] md:text-[40px] font-semibold md:font-bold py-4 leading-[1.2em] "><span className='primary-text'>Most functional and</span> cost effective features</h2>
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
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'} />
            <Brands />
        </>
    )
}

export default CDNBandwidthOverageProtection;