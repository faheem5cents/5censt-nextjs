import React from 'react';
import Image from 'next/image';
import BrazilFlag from "/public/assets/Flags/BrazilFlag.png";
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import PerformanceMiddleEast from "/public/assets/GlobalImages/PerformanceMiddleEast.png";
import SupportYou from '@/components/desktop/SupportYou';
import ClientAndExperience from '@/components/desktop/ClientAndExperience/ClientAndExperience';
import Link from 'next/link';


const page = () => {
    return (
        <>
            <div className={`px-[30px] py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[34px] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%] flex items-center gap-2">5centsCDN Performance Middle East <Image className='w-[55px]' src={BrazilFlag} alt='Brazil Flag' /> </h2>
                        <h3 className='text-white text-[30px] md:text-[32px] text-center mb-5 leading-[1.4] font-medium'>Huge network, impeccable performance, and foolproof security</h3>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-4 mx-auto lg:mx-[17%]">
                            We are available with our company 5centsCDN Performance Middle East is very good. With its sturdy framework, 5centsCDN offers reduced web latency, reliable security, increased user traffic, and surging CDN adoption with technological and infrastructural developments.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <div className='p-[10px]'>
                    <h2 className='mb-5 primary-text text-[40px] text-center font-semibold leading-[1.4em] capitalize'>What Sets Us Apart</h2>
                    <div className='mt-[30px] flex flex-col md:flex-row justify-between items-center gap-3'>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-11' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 primary-text text-[26px] text-center font-semibold leading-[1.2]'>Superior Content Delivery Network</h3>
                            <p className='text-[#cfcfcf] text-[18px] text-center lg:h-[96px]'>70+ Points of Presence (PoPs) worldwide, with coverage extending to South America, drive a next-generation, superior content delivery platform.</p>
                        </div>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-11' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 primary-text text-[26px] text-center font-semibold leading-[1.2]'>Matchless CDN Expertise</h3>
                            <p className='text-[#cfcfcf] text-[18px] text-center lg:h-[96px]'>The team at 5centsCDN is highly dedicated and fully equipped to offer you a world-class streaming experience.</p>
                        </div>
                        <div className='w-full p-[30px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                            <Image className='mb-5 w-11' src={CheckRoundedFilled} alt='cdn' />
                            <h3 className='mb-[10px] mt-2 primary-text text-[26px] text-center font-semibold leading-[1.2]'>Custom Plan</h3>
                            <p className='text-[#cfcfcf] text-[18px] text-center lg:h-[96px]'>Can’t find the right package that fulfills all your content delivery needs? We can help you with a customized plan that suits your business.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1140px] mx-auto'>
                <div className='p-[10px]'>
                    <h2 className="mb-5 text-white text-center text-[34px] md:text-[40px] font-semibold md:font-bold py-4 leading-[1.2em]">Performance in the <span className='primary-text'> Middle East</span></h2>
                </div>
                <div className='mb-5 flex justify-center items-center px-5'>
                    <ul className='flex justify-center items-center gap-7'>
                        <li className='text-white text-[14px] flex items-center'>
                            <span className='flex w-[13px] h-[3px] bg-[#d51721] rounded-lg mr-4'></span>
                            StackPath CDN 22.74 ms</li>
                        <li className='text-white text-[14px] flex items-center'>
                            <span className='flex w-[13px] h-[3px] bg-[#20788c] rounded-lg mr-4'></span>
                            BunnyCDN 20.97 mss</li>
                        <li className='text-white text-[14px] flex items-center'>
                            <span className='flex w-[13px] h-[3px] bg-[#faad2f] rounded-lg mr-4'></span>
                            AWS cloudfront CDN 19.30</li>
                        <li className='text-white text-[14px] flex items-center'>
                            <span className='flex w-[13px] h-[3px] bg-[#4fa83d] rounded-lg mr-4'></span>
                            5centsCDN 19.2 ms</li>
                        <li className='text-white text-[14px] flex items-center'>
                            <span className='flex w-[13px] h-[3px] bg-[#ff7f7f] rounded-lg mr-4'></span>
                            CDN77 19.00 ms</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-full lg:w-[800px] mx-0'>
                        <Image src={PerformanceMiddleEast} alt='Performance Middle East' />
                    </div>
                </div>
            </div>
            <SupportYou />
            <ClientAndExperience description={'Join The Hundreds Of Thousands Of Happy Subscribers. <span class="text-[#4FA83D]">See What They are Saying</span>'} />
            <div className='max-w-[1140px] mx-auto p-[30px] lg:p-0'>
                <div className='flex items-center flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 primary-bg md:bg-transparent rounded-t-[20px] md:rounded-t-none' style={{ "backgroundImage": "linear-gradient(115deg, #00000000 10%, #4fa83d 10%)" }}>
                        <div className='p-5 lg:pl-[90px] flex items-center justify-center lg:justify-start'>
                            <p className='text-white text-[32px] font-semibold text-center lg:text-left leading-[1.4em] lg:pr-[60px]'>Start using 5centsCDN for your content delivery</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 primary-bg md:bg-transparent rounded-b-[20px] md:rounded-b-none' style={{ "backgroundImage": "linear-gradient(115deg, #4FA83D 90%, #00000000 90%)" }}>
                        <div className='p-5 lg:py-9 lg:pr-[90px] flex items-center justify-center gap-5'>
                            <Link className='text-base text-white font-semibold border border-white leading-none px-10 py-5 rounded-[10px] transition duration-300 hover:bg-white hover:text-[#4fa83d]' href="#">Visit Pricing</Link>
                            <Link className='text-base text-white font-semibold border border-white leading-none px-10 py-5 rounded-[10px] transition duration-300 hover:bg-white hover:text-[#4fa83d]' href="#">Try for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;