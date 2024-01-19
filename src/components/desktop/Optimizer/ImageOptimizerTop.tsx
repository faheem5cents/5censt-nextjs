import React from 'react';
import ImageOptimizerTopImg from "/public/assets/Optimizer/ImageOptimizerTopImg.png";
import Link from 'next/link';
import Image from 'next/image';
 
const ImageOptimizerTop = () => { 
    return (
        <>
            <div className={`pt-[50px] bg-[url('../assets/Optimizer/ImageOptimizerTopBg.svg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className="text-white text-center text-[32px] md:text-[50px] font-semibold md:font-bold mb-[10px] leading-[1.2em] mx-0 lg:mx-[5%]">
                            Image<span className="text-[#4fa83d]"> Optimizer</span>
                        </h2>
                        <h3 className="text-white text-center text-base md:text-[32px] font-semibold md:font-bold mt-[5px] mb-[15px] leading-[1.2em] mx-0 lg:mx-[5%]">
                            Real-Time Image optimization
                        </h3>
                        <p className="text-white text-center text-[14px] md:text-base mb-[5px] leading-[1.2em] lg:leading-[1.2em] mx-0 lg:mx-[5%]">
                            Reduce and compress your image size upto 70-90% or more, depending on the level of compression applied. Speed up your website load time and provide your users with an excellent web experience, leading to better conversion rates, and SEO ranking.
                        </p>
                        <div className='mb-[5px] pt-5 flex justify-center'>
                            <Link className='text-white text-lg font-medium leading-none px-[30px] py-4 border border-[#4fa83d] bg-[#4fa83d] rounded-[10px] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]' href="#">TRY NOW</Link>
                        </div>
                        <div className='py-[50px]'>
                            <Image className='w-full' src={ImageOptimizerTopImg} alt='Image Optimizer Image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`pt-[100px] bg-[url('../assets/Optimizer/ImageOptimizerTopBg.svg')] bg-cover bg-no-repeat bg-center`}>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className="text-white text-center text-[32px] md:text-[50px] font-semibold md:font-bold mb-[10px] leading-[1.2em] mx-0 lg:mx-[5%]">
                            Optimize Your Web<span className="text-[#4fa83d]"> Images On The Fly</span>
                        </h2>
                        <p className="text-white text-center text-[14px] md:text-base mb-[5px] leading-[1.2em] lg:leading-[1.2em] mx-0 lg:mx-[5%]">
                            Revolutionary transformation API that lets you simplify your image management processes in real time. Make instantaneous
                            adjustments to the picture resolution, size, etc. by attaching new query strings to the source CDN URLs.
                        </p> 
                        <div className='py-[50px]'>
                            <Image className='w-full' src={ImageOptimizerTopImg} alt='Image Optimizer Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageOptimizerTop;