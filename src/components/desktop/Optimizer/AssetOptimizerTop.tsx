import React from 'react';
import AssetOptimizerTopImg from "@/assets/Optimizer/AssetOptimizerTopImg.png";
import Link from 'next/link';
import Image from 'next/image';

const AssetOptimizerTop = () => {
    return (
        <>
            <div className={`pt-[50px] bg-[url('../assets/Optimizer/ImageOptimizerTopBg.svg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className="text-white text-center text-[32px] md:text-[50px] font-semibold md:font-bold mb-[10px] leading-[1.2em] mx-0 lg:mx-[5%]">
                            Asset<span className="text-[#4fa83d]"> Optimizer</span>
                        </h2>
                        <h3 className="text-white text-center text-base md:text-[32px] font-semibold md:font-bold mt-[5px] mb-[15px] leading-[1.2em] mx-0 lg:mx-[5%]">
                            Seamless Web Experience For Your End-Users
                        </h3>
                        <p className="text-white text-center text-[14px] md:text-base mb-[5px] leading-[1.2em] lg:leading-[1.2em] mx-0 lg:mx-[5%]">
                            {` Easily and swiftly reduces the size of your website's code files like JS, HTML, and JSS, helping your website load faster than ever. Strengthen your site's conversion rate, user retention, and SEO by offering your visitors a richer experience altogether.`}
                        </p>
                        <div className='mb-[5px] pt-5 flex justify-center'>
                            <Link className='text-white text-lg font-medium leading-none px-[30px] py-4 border border-[#4fa83d] bg-[#4fa83d] rounded-[10px] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">TRY NOW</Link>
                        </div>
                        <div className='py-[50px]'>
                            <Image className='w-full' src={AssetOptimizerTopImg} alt='Image Optimizer Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetOptimizerTop;