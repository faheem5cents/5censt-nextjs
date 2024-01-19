import React from 'react';
import Image from 'next/image';
import CheckRoundedIcon from "/public/assets/GlobalImages/checkRounded.svg";
import FeatherAsLightImg from "/public/assets/Optimizer/FeatherAsLightImg.png";

export const FeatherAsLightArray = [
    {
        description: "Through minification of JavaScript and CSS files to reduce the file size",
    },
    {
        description: "Gzip compression of website assets to improve load times",
    },
    {
        description: "Caching of website assets for faster access and reduced server load",
    },
    {
        description: "Customizable settings for optimal performance and user experience",
    },
    {
        description: "Adaptive optimization that reduces the size of files based on the user’s internet condition and device.",
    },
]

const FeatherAsLight = () => {
    return (
        <div className='p-5 lg:py-[150px] bg-[#121415]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-start'>
                    <div className='w-full lg:w-[45%] p-[10px]'>
                        <h2 className='mb-5 text-[40px] lg:text-[50px] text-white font-bold leading-none'>Turn Your Website <span className='text-[#4FA83D]'> as Light as Feather </span></h2>
                        <h3 className='mb-5 text-white text-base md:text-[20px] leading-none'>
                            {`Deliver your website with a richer experience without impacting its overall structure`}
                        </h3>
                        <ul>
                            {FeatherAsLightArray.map((item, index) => (
                                <li key={index} className='flex items-center gap-3 py-[15px] border-b-1 border-[#ffffff2b]'>
                                    <Image className='w-[30px]' src={CheckRoundedIcon} alt='Check Rounded' />
                                    <span className='text-white text-[20px] leaidng-[1.4em]'>{item.description}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className='w-full lg:w-[55%] flex justify-center items-center'>
                        <Image className='w-[80%]' src={FeatherAsLightImg} alt='Feather As Light' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatherAsLight;