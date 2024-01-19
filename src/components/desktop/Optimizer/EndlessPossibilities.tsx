import React from 'react';
import FasterWebsiteIcon from "/public/assets/Optimizer/FasterWebsiteIcon.svg";
import ReducedServerIcon from "/public/assets/Optimizer/ReducedServerIcon.svg";
import ImprovedSEOIcon from "/public/assets/Optimizer/ImprovedSEOIcon.svg";
import CustomizablesettingsIcon from "/public/assets/Optimizer/CustomizablesettingsIcon.svg";
import Image from 'next/image';

export const EndlessPossibilitiesArray = [
    {
        img: FasterWebsiteIcon,
        desciption: "Faster website load times for improved user experience",
    },
    {
        img: ReducedServerIcon,
        desciption: "Reduced server load for improved website stability and uptime",
    },
    {
        img: ImprovedSEOIcon,
        desciption: "Improved SEO rankings with faster load times and better user experience",
    },
    {
        img: CustomizablesettingsIcon,
        desciption: "Customizable settings to fit your specific needs and preferences",
    },
]

const EndlessPossibilities = (
    { heading, description }: { heading: string, description: string }) => {
    return (
        <>
            <div className='py-[80px]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='p-[10px]'>
                        <h2 className='mb-2 text-white text-center text-[32px] md:text-[50px] font-semibold leading-none' dangerouslySetInnerHTML={{ __html: heading }}>
                        </h2>
                        <h3 className='text-base text-white text-center leading-[1.2em]'>{description}</h3>
                        <div className='flex items-center flex-col md:flex-row mt-5'>
                            {EndlessPossibilitiesArray.map((item, index) => (
                                <div key={index} className='w-full lg:w-1/4 p-[30px] flex flex-col justify-center items-center gap-3 m-[10px] bg-transparent border border-[#ffffff21] rounded-[20px] md:h-[250px] hover:border-[#4FA83D]'>
                                    <Image className='w-1/4 md:w-1/2' src={item.img} alt='Faster Website Icon' />
                                    <p className='text-white text-[15px] text-center leading-[1.5]'>{item.desciption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndlessPossibilities;