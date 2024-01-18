import React from 'react';
import Image from 'next/image';
import BrandARYDigital from "@/assets/BrandsLogo/BrandARYDigital.svg";
import BrandCWS from "@/assets/BrandsLogo/BrandCWS.svg";
import BrandIBCLive from "@/assets/BrandsLogo/BrandIBCLive.svg";
import BrandIQBroadcast from "@/assets/BrandsLogo/BrandIQBroadcast.svg";
import BrandInterlinkMultiMedia from "@/assets/BrandsLogo/BrandInterlinkMultiMedia.svg";
import BrandLondonReal from "@/assets/BrandsLogo/BrandLondonReal.svg";
import BrandMSLive from "@/assets/BrandsLogo/BrandMSLive.svg";
import BrandMediaOne from "@/assets/BrandsLogo/BrandMediaOne.svg";
import BrandMuusicTyme from "@/assets/BrandsLogo/BrandMuusicTyme.svg";
import BrandSLMedia from "@/assets/BrandsLogo/BrandSLMedia.svg";
import BrandTeletica from "@/assets/BrandsLogo/BrandTeletica.svg";
import BrandVerve from "@/assets/BrandsLogo/BrandVerve.svg";
import BrandVivre from "@/assets/BrandsLogo/BrandVivre.svg";
import BrandWhiteAnthymTV from "@/assets/BrandsLogo/BrandWhiteAnthymTV.svg";
import LeftRectangle from "@/assets/BrandsLogo/LeftRectangle.png";
import RightRectangle from "@/assets/BrandsLogo/RightRectangle.png";

 
const Brands = () => {
    return (
        <>
            <div className='w-full bg-[#101113]'>
                <div className='flex flex-col items-center content-center relative md:p-0 p-[15px]'>
                    <Image className='absolute left-0 top-0 w-[58px]' width={20} src={LeftRectangle} alt='' />
                    <div className='p-[10px] w-full'>
                        <div className='max-w-[1140px] flex items-center mx-auto flex-wrap md:flex-nowrap md:pt-0 pt-[30px]'>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-3/5' width={20} src={BrandVerve} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-4/5' width={20} src={BrandIBCLive} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-1/2 md:w-4/5' width={20} src={BrandCWS} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-4/5' width={20} src={BrandIQBroadcast} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-4/5' width={20} src={BrandLondonReal} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-4/5 md:w-3/4' width={20} src={BrandWhiteAnthymTV} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-4/5' width={20} src={BrandMuusicTyme} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center md:hidden'>
                                <Image className='w-1/2 md:w-3/5' width={20} src={BrandMediaOne} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='p-[10px] w-full'>
                        <div className='max-w-[1140px] flex items-center mx-auto flex-wrap md:flex-nowrap md:pb-0 pb-[30px]'>
                            <div className='md:w-full w-1/2 p-[10px] justify-center items-center hidden md:flex'>
                                <Image className='w-3/5 md:w-3/5' width={20} src={BrandMediaOne} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-3/5 md:w-3/5' width={20} src={BrandInterlinkMultiMedia} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-2/5 md:w-2/5' width={20} src={BrandARYDigital} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-[70%] md:w-[70%]' width={20} src={BrandSLMedia} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-1/2 md:w-[70%]' width={20} src={BrandVivre} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-1/2 md:w-3/5' width={20} src={BrandMSLive} alt='' />
                            </div>
                            <div className='md:w-full w-1/2 p-[10px] flex justify-center items-center'>
                                <Image className='w-2/5 md:w-[42%]' width={20} src={BrandTeletica} alt='' />
                            </div>
                        </div>
                    </div>
                    <Image className='absolute right-0 bottom-0 w-[58px]' width={20} src={RightRectangle} alt='' />

                </div>
            </div>
        </>
    )
}

export default Brands;