import React from 'react';
import Image from 'next/image';
import RokectOutlineIcon from "@/assets/Optimizer/RocketOutline.svg";

const AdaptativeImageCompression = () => {
    return (
        <>
            <div className='p-5 lg:pt-[150px] lg:pb-[50px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-[45%] relative'>
                            <div className='w-full sticky top-0'>
                                <h2 className='mb-5 text-white text-[32px] md:text-[50px] font-bold leading-none'>
                                    Adaptative <span className="text-[#4fa83d]" >Image Compression</span>
                                </h2>
                                <h3 className='text-white text-base md:text-[20px] leading-[1.2]'>
                                    {`Optimizes the size and quality of your images based on the viewer's viewing device and screen resolution. Provide photos in the appropriate size and quality, minimizing file size without compromising image quality.`}
                                </h3>
                            </div>
                        </div>
                        <div className='w-full lg:w-[55%]'>
                            <div className='pt-10 lg:pt-0 lg:pl-[50px]'>
                                <div className='mb-5 border-b-2 border-[#4fa83d]'>
                                    <h2 className='text-white text-[15px] font-bold leading-[1.7]'>Key Feature</h2>
                                </div>
                                <div>
                                    <ul>
                                        <li className='p-[30px] flex justify-start items-center gap-3'>
                                            <Image className='w-10' src={RokectOutlineIcon} alt='Rokect Outline' />
                                            <span className='text-white text-[15px] leading-[1.4em]'>Compress Image Formats like JPEG, AVIF and PNG.</span>
                                        </li>
                                        <li className='p-[30px] flex justify-start items-center gap-3 mt-[15px] bg-[#191b1c] rounded-[10px]'>
                                            <Image className='w-10' src={RokectOutlineIcon} alt='Rokect Outline' />
                                            <span className='text-white text-[15px] leading-[1.4em]'>Automatic conversion of images to WebP format for improved performance on supported browsers</span>
                                        </li>
                                        <li className='p-[30px] flex justify-start items-center gap-3 mt-[15px]'>
                                            <Image className='w-10' src={RokectOutlineIcon} alt='Rokect Outline' />
                                            <span className='text-white text-[15px] leading-[1.4em]'>Customizable compression settings for optimal balance between image quality and file size</span>
                                        </li>
                                        <li className='p-[30px] flex justify-start items-center gap-3 mt-[15px] bg-[#191b1c] rounded-[10px]'>
                                            <Image className='w-10' src={RokectOutlineIcon} alt='Rokect Outline' />
                                            <span className='text-white text-[15px] leading-[1.4em]'>Automatic resizing of images for optimal display on different devices</span>
                                        </li>
                                        <li className='p-[30px] flex justify-start items-center gap-3 mt-[15px]'>
                                            <Image className='w-10' src={RokectOutlineIcon} alt='Rokect Outline' />
                                            <span className='text-white text-[15px] leading-[1.4em]'>Lossless and lossy compression of website images for smaller file sizes and faster load times</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdaptativeImageCompression