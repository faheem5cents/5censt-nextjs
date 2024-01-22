import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LongRightArrow from "/public/assets/GlobalImages/LongRightArrow.svg";

const offer = () => {
    return (
        <>
            <div className={`py-[100px] bg-[url('../assets/Offer/OfferBg.jpg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto p-[10px]'>
                    <h1 className='mb-5 text-white text-center text-[86px] font-semibold leading-none'>
                        New <span className='primary-text'>Offers</span><br /> Coming In Soon...
                    </h1>
                    <h2 className='mb-5 mx-[15%] text-white text-[25px] text-center font-light leading-[1.3em]'>Till then explore our pricing offer. They are affordable enough to help you make a choice 😀</h2>
                    <div className='pt-5 flex justify-center items-center'>
                        <Link href="#" className='text-[25px] text-center primary-text leading-none border border-white rounded-[60px] px-10 py-4 transition duration-300 hover:text-white flex items-center gap-3'>Explore Now <Image className='w-[87px]' src={LongRightArrow} alt='Long Right Arrow' /> </Link>
                    </div>
                </div>
            </div>
            <div className='p-5 pb-[50px] md:pb-[100px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className={`py-[30px] px-[30px] md:px-[70px] rounded-[46px] bg-[url('../assets/Offer/BeFirstOneBg.svg')] bg-cover bg-no-repeat bg-center`}>
                        <h2 className='mb-[10px] text-white text-2xl md:text-[45px] font-extrabold leading-none'>Be First One To Know...</h2>
                        <p className='text-white text-sm md:text-base leading-none'>We’ll ping you as soon as an offer lands here so that you can be first one to know.</p>
                        <div className='pt-5 py-[10px] w-full'>
                            <div className='w-full bg-[#1D251F] p-[10px] rounded-[14px] flex flex-col md:flex-row justify-between'>
                                <input
                                    type="email"
                                    placeholder="Enter your email to sign-in"
                                    className="bg-transparent md:w-[70%] min-h-[59px] px-3 outline-0 text-white"
                                />
                                <button className="bg-[#4fa83d] text-white text text-base font-semibold min-h-[59px] md:w-[30%] py-5 px-10 rounded-[10px] transition duration-300 ease-in-out hover:bg-white hover:text-[#4fa83d]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default offer;