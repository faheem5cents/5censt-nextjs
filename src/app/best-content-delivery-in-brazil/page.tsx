import React from 'react';
import Image from 'next/image';
import BrazilFlag from "/public/assets/Flags/BrazilFlag.png";
import CheckRoundedFilled from "/public/assets/GlobalImages/CheckRoundedFilled.png";
import Sales from "/public/assets/GlobalImages/Sales.svg";
import TechnicalSupport from "/public/assets/GlobalImages/TechnicalSupport.svg";
import Billing from "/public/assets/GlobalImages/Billing.svg";
import Link from 'next/link';
import TryForFreeForm from '@/components/desktop/TryForFreeForm';
import BrandLondonReal from "/public/assets/BrandsLogo/BrandLondonReal.svg";
import BrandMuusicTyme from "/public/assets/BrandsLogo/BrandMuusicTyme.svg";
import BrandWhiteAnthymTV from "/public/assets/BrandsLogo/BrandWhiteAnthymTV.svg";
import BrandSLMedia from "/public/assets/BrandsLogo/BrandSLMedia.svg";
import BrandVivre from "/public/assets/BrandsLogo/BrandVivre.svg";

const page = () => {
    return (
        <>
            <div className={`px-[30px] py-[90px] flex items-center justify-center md:mt-auto`}>
                <div className="max-w-[1140px]">
                    <div className='w-full flex flex-col flex-wrap items-center'>
                        <h2 className="primary-text text-center text-[34px] md:text-[48px] font-semibold md:font-bold py-4 leading-[1.2em] mx-0 lg:mx-[5%] flex items-center gap-2">Best Content Delivery In Brazil <span><Image className='w-[55px]' src={BrazilFlag} alt='Brazil Flag' /></span> </h2>
                        <h3 className='text-white text-[30px] md:text-[32px] text-center mb-5 leading-[1.4] font-medium'>Our content delivery platform goes beyond borders</h3>
                        <h4 className="text-[#cfcfcf] text-center text-base mb-4 mx-auto lg:mx-[17%]">
                            The content delivery network industry in Brazil has grown from $88.25 million to $192.4 million in the past few years. The rapid growth of Internet-enabled devices including smartphones, personal computers, and laptops are our inspiration behind multiple pops in the country.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='max-w-[1140px] mx-auto'>
                <div className={`p-10 rounded-[10px] bg-[url('../assets/GlobalImages/CurlyBg.png')] bg-cover bg-no-repeat bg-center`}>
                    <h2 className='mb-5 text-white text-[40px] text-center font-semibold leading-[1.4em] capitalize'>Save Big With Transparent Pricing</h2>
                    <p className='text-[#cfcfcf] text-base  text-center leading-[1.5] mb-4'><a className='primary-text' href="#">Brazil </a> is an expensive place to be opting in for a reliable content delivery platform. 5centsCDN offers advanced and market-competitive services at jaw-dropping rates. With multiple local internet exchanges, we optimize our costs without compromising on the quality of our services.</p>
                </div>
            </div>
            <div className='py-[90px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='md:mx-[90px] p-[10px]'>
                        <h2 className='mb-5 primary-text text-[40px] text-center font-semibold leading-[1.4em] capitalize'>What Sets Us Apart</h2>
                        <div className='mt-[30px] flex flex-col md:flex-row justify-between items-center gap-3'>
                            <div className='w-full p-[60px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                                <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                                <h3 className='mb-[10px] mt-2 primary-text text-[22px] text-center font-medium leading-[1.2]'>Superior Content Delivery Network</h3>
                                <p className='text-[#cfcfcf] text-base text-center lg:h-[96px]'>70+ Points of Presence (PoPs) worldwide, with coverage extending to South America, drive a next-generation, superior content delivery platform.</p>
                            </div>
                            <div className='w-full p-[60px] flex flex-col justify-center items-center bg-[#FFFFFF05] rounded-[10px]'>
                                <Image className='mb-5 w-7' src={CheckRoundedFilled} alt='cdn' />
                                <h3 className='mb-[10px] mt-2 primary-text text-[22px] text-center font-medium leading-[1.2]'>Matchless CDN Expertise</h3>
                                <p className='text-[#cfcfcf] text-base text-center lg:h-[96px]'>The team at 5centsCDN is highly dedicated and fully equipped to offer you a world-class streaming experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[90px] bg-[#18191B]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className='w-full p-[10px] flex items-center justify-center'>
                            <div className='w-1/3 flex flex-col justify-center items-center p-[10px]'>
                                <Image className='mb-5 w-[70%] md:w-[100px]' src={Sales} alt='Sales' />
                                <h3 className='text-[20px] text-white text-center leading-[1.3em]'>Sales</h3>
                            </div>
                            <div className='w-1/3 flex flex-col justify-center items-center p-[10px]'>
                                <Image className='mb-5 w-[70%] md:w-[100px]' src={TechnicalSupport} alt='Technical Support' />
                                <h3 className='text-[20px] text-white text-center leading-[1.3em]'>Technical Support</h3>
                            </div>
                            <div className='w-1/3 flex flex-col justify-center items-center p-[10px]'>
                                <Image className='mb-5 w-[70%] md:w-[100px]' src={Billing} alt='Billing' />
                                <h3 className='text-[20px] text-white text-center leading-[1.3em]'>Billing</h3>
                            </div>
                        </div>
                        <div className='w-full p-[10px] flex items-center justify-start'>
                            <div className='md:pl-[90px] p-[10px] flex flex-col justify-centter items-start'>
                                <h2 className='mb-5 text-white text-[40px] text-left font-semibold leadinmg-[1.4em] capitalize'>Contact Us</h2>
                                <p className='mb-7 text-[#cfcfcf] text-base'>Join thousands of satisfied customers and experience the next-level content delivery platform</p>
                                <h6 className='mb-5 text-2xl font-semibold primary-text leading-[1.4em]'>Sign Up For Demo Account</h6>
                                <p className='mb-7 text-[#cfcfcf] text-base'>No setup fee | No commitment</p>
                                <Link className='pt-5 primary-text text-base border border-[#4fa83d] rounded-[10px] px-10 py-5 leading-none transition duration-300 hover:bg-[#4fa83d] hover:text-white' href="#">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TryForFreeForm heading={'Give Your Customers The Best Viewing Experience.'} />
            <div className='mb-[90px]'>
                <div className='max-w-[1140px] mx-auto py-[10px] flex flex-row items-center justify-between'>
                    <div className='w-1/2 lg:w-1/5 p-[10px] flex justify-center items-center '>
                        <Image className='w-[90%] md:w-full' src={BrandLondonReal} alt='Londonreal' />
                    </div>
                    <div className='w-1/2 lg:w-1/5 p-[10px] flex justify-center items-center '>
                        <Image className='w-[90%] md:w-[152px]' src={BrandMuusicTyme} alt='Londonreal' />
                    </div>
                    <div className='w-1/2 lg:w-1/5 p-[10px] flex justify-center items-center '>
                        <Image className='w-[90%] md:w-[179px]' src={BrandWhiteAnthymTV} alt='Londonreal' />
                    </div>
                    <div className='w-1/2 lg:w-1/5 p-[10px] flex justify-center items-center '>
                        <Image className='w-[90%] md:w-[152px]' src={BrandSLMedia} alt='Londonreal' />
                    </div>
                    <div className='w-1/2 lg:w-1/5 p-[10px] flex justify-center items-center '>
                        <Image className='w-[90%] md:w-[100px]' src={BrandVivre} alt='Londonreal' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;